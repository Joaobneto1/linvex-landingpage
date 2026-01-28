import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Faz scroll suave até o formulário e foca no primeiro campo
 */
export function scrollToLeadForm() {
  const form = document.getElementById("formulario");
  if (form) {
    form.scrollIntoView({ behavior: "smooth", block: "start" });
    
    // Aguarda o scroll terminar antes de focar no campo
    setTimeout(() => {
      const firstInput = form.querySelector<HTMLInputElement>('input[type="text"], input[type="email"], input[type="tel"]');
      if (firstInput) {
        firstInput.focus();
      }
    }, 500);
  }
}
