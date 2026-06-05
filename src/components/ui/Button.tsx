import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-white text-brand-primary hover:bg-brand-cream active:scale-[0.98]",
  secondary:
    "border-2 border-brand-white/80 bg-transparent text-brand-white hover:bg-brand-white/10 active:scale-[0.98]",
  ghost:
    "bg-brand-primary text-brand-white hover:bg-brand-primary-dark active:scale-[0.98]",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white";

type SharedProps = {
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = SharedProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = SharedProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return <Link href={href} className={styles} {...linkProps} />;
  }

  const { ...buttonProps } = props as ButtonAsButton;
  return <button type="button" className={styles} {...buttonProps} />;
}
