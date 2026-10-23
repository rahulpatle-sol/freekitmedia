"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { useSound } from "@/components/providers/SoundProvider";
import { cn, whatsappLink } from "@/lib/utils";
import { site } from "@/data/site";

type Variant = "primary" | "ink" | "outline" | "outlineLight" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand text-ink hover:bg-brand-bright shadow-[0_1px_2px_rgba(29,23,0,0.12)]",
  ink: "bg-ink text-white hover:bg-[#33290b]",
  outline: "border border-ink/20 bg-white text-ink hover:border-ink/50",
  outlineLight:
    "border border-white/25 bg-transparent text-white hover:border-white/60 hover:bg-white/5",
  ghost: "text-ink hover:bg-ink/5",
  white: "bg-white/40 text-ink hover:bg-white/60",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-12 px-7 text-base",
};

export type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
}: ButtonProps) {
  const { play } = useSound();
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-px active:translate-y-0 active:transition-none",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
  const handleMouseEnter = () => play("hover");
  const handleClick: MouseEventHandler<HTMLElement> = (event) => {
    play("click");
    onClick?.(event);
  };

  if (!href) {
    return (
      <button
        type="button"
        className={classes}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }

  const anchorProps = {
    className: classes,
    onMouseEnter: handleMouseEnter,
    onClick: handleClick,
  };

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...anchorProps}>
        {children}
      </a>
    );
  }
  if (href.startsWith("#")) {
    return <a href={href} {...anchorProps}>{children}</a>;
  }
  return <Link href={href} {...anchorProps}>{children}</Link>;
}

export function WhatsAppButton({
  text,
  ...props
}: Omit<ButtonProps, "href"> & { text: string }) {
  return <Button href={whatsappLink(site.whatsapp.number, text)} {...props} />;
}
