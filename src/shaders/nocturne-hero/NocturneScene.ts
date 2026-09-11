export const NOCTURNE_VARIANTS = ["midnight"] as const;
export type NocturneVariant = (typeof NOCTURNE_VARIANTS)[number];
export const NOCTURNE_TITLES: Record<NocturneVariant, string> = { midnight: "" };
export function buildNocturneDocument(_variant: NocturneVariant): string {
  return "";
}
