import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return <a className={cn("btn", `btn-${variant}`, className)} {...props} />;
}