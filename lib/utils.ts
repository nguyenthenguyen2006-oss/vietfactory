export function cn(...inputs: (string | false | null | undefined)[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatArea(area: number): string {
  return `${area.toLocaleString("vi-VN")} m²`;
}