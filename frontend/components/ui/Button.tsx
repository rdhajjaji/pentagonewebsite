import Link from "next/link";
import { classNames } from "@/lib/utils";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const buttonStyles = {
  primary:
    "border border-slate-950/10 bg-slate-950 text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:bg-slate-900",
  secondary:
    "border border-white/20 bg-white/90 text-slate-900 shadow-[0_12px_28px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 hover:bg-white",
  ghost: "border border-transparent text-slate-700 hover:bg-slate-100/90"
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick
}: ButtonProps) {
  const classes = classNames(
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold tracking-[0.01em] transition duration-200",
    buttonStyles[variant],
    disabled && "cursor-not-allowed opacity-60",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden="true" className="text-base leading-none">→</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
