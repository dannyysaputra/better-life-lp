import { NextRequest, NextResponse } from 'next/server';
import { leadSchema } from '@/lib/validators/leadSchema';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import crypto from 'crypto';

const rateLimitMap = new Map<string, { count: number; lastTime: number }>();

function getIpHash(ip: string) {
  return crypto.createHash('sha256').update(ip).digest('hex');
}

export async function POST(req: NextRequest) {
  try {
    // 1. Origin Check
    const origin = req.headers.get('origin');
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const isLocal = origin?.includes('localhost');
    const isAllowed = origin === siteUrl || isLocal;

    if (origin && !isAllowed) {
      return NextResponse.json(
        { ok: false, error: 'forbidden', message: 'Origin not allowed' },
        { status: 403 }
      );
    }

    const body = await req.json();

    // 2. Validation
    const result = leadSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'validation_error', 
          fields: result.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const { name, contact, interest, message, source, honeypot } = result.data;

    // 3. Honeypot (Quiet Drop)
    if (honeypot) {
      return NextResponse.json({ ok: true, message: 'Lead captured' });
    }

    // 4. Rate Limiting
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const ipHash = getIpHash(ip);
    const now = Date.now();
    const windowMs = 10 * 60 * 1000; // 10 minutes
    const maxReq = 5;

    const record = rateLimitMap.get(ipHash) || { count: 0, lastTime: now };
    
    if (now - record.lastTime > windowMs) {
      record.count = 1;
      record.lastTime = now;
    } else {
      record.count += 1;
    }
    
    rateLimitMap.set(ipHash, record);

    if (record.count > maxReq) {
      return NextResponse.json(
        { ok: false, error: 'rate_limited', message: 'Please wait a moment and try again.' },
        { status: 429 }
      );
    }

    // 5. Supabase Insert
    const supabase = createServerSupabaseClient();
    
    if (supabase) {
        const { error } = await supabase.from('leads').insert({
            name,
            contact,
            interest: interest || null,
            message: message || null,
            source: source || null,
            user_agent: req.headers.get('user-agent'),
            ip_hash: ipHash,
        });

        if (error) {
            console.error('Supabase Error:', error);
            throw new Error('Database insertion failed');
        }
    } else {
        console.warn('Supabase not configured. Skipping persistence.');
    }

    return NextResponse.json({ ok: true, message: 'Lead captured' });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { ok: false, error: 'server_error', message: 'Please try again in a moment.' },
      { status: 500 }
    );
  }
}
