export type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 200, suffix: "+", label: "businesses handled" },
  { value: 2, prefix: "₹", suffix: "Cr+", label: "ad spend managed" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "average client rating" },
  { value: 93, suffix: "%", label: "clients renew every year" },
];
