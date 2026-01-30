export function scrollToAnchor(id: string, options?: { offset?: number; focus?: string }) {
  const element = document.getElementById(id.replace("#", ""));
  if (element) {
    const offset = options?.offset ?? 88;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    if (options?.focus) {
      // Small timeout to allow scroll to start/finish
      setTimeout(() => {
        const focusElement = document.querySelector(options.focus!) as HTMLElement;
        if (focusElement) {
          focusElement.focus();
        }
      }, 500);
    }
  }
}