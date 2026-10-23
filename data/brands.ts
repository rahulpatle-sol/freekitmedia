export type BrandStyle = "wide" | "semibold" | "light" | "tight";

export type Brand = {
  name: string;
  category: string;
  style: BrandStyle;
};

export const brands: Brand[] = [
  { name: "Satva Skincare", category: "D2C skincare", style: "wide" },
  { name: "Neev Estates", category: "Real estate", style: "light" },
  { name: "ChaiThela", category: "QSR cafe", style: "tight" },
  { name: "LumaFit", category: "Fitness studio", style: "semibold" },
  { name: "Regari Foods", category: "Packaged foods", style: "light" },
  { name: "StudySprint", category: "Coaching", style: "wide" },
  { name: "WrenchWorks", category: "Auto service", style: "semibold" },
  { name: "Kaaya Yoga", category: "Wellness", style: "tight" },
];

export const brandStyleClasses: Record<BrandStyle, string> = {
  wide: "text-sm font-semibold uppercase tracking-[0.22em]",
  semibold: "text-lg font-bold tracking-tight",
  light: "text-lg font-light tracking-wide",
  tight: "text-lg font-bold lowercase tracking-[-0.03em]",
};
