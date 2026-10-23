import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={cn("size-7", className)} aria-hidden="true">
      <path
        d="M3 14a11 11 0 0 1 22 0Z"
        fill="#FFC400"
      />
      <path
        d="M3.01 14a3.66 3.66 0 0 0 7.33 0a3.67 3.67 0 0 0 7.33 0a3.67 3.67 0 0 0 7.33 0"
        fill="none"
        stroke="#FFC400"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14 14.4v5.1a2.6 2.6 0 0 1-5.2 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark className={variant === "light" ? "text-white" : "text-ink"} />
      <span
        className={cn(
          "font-display text-lg font-bold tracking-tight leading-none",
          variant === "light" ? "text-white" : "text-ink",
        )}
      >
        FreeKit
        <span
          className={cn(
            "ml-1.5 font-medium",
            variant === "light" ? "text-white/60" : "text-ink/50",
          )}
        >
          Media
        </span>
      </span>
    </span>
  );
}
