import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function sanitizeText(value: string) {
  return value.replace(/[<>]/g, "").trim().slice(0, 2000);
}

export function phoneToDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function formatBrazilianPhone(value: string) {
  const digits = phoneToDigits(value).slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function whatsappLink(phone: string, message: string) {
  return `https://wa.me/55${phoneToDigits(phone)}?text=${encodeURIComponent(message)}`;
}
