import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type CardProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export function Card<T extends ElementType = "div">({
  as,
  className,
  ...props
}: CardProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return <Tag className={cn("ui-card", className)} {...props} />;
}