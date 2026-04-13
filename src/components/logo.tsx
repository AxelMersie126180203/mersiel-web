import Image from "next/image";

type LogoVariant = "color" | "white" | "black";

const LOGO_SOURCES: Record<LogoVariant, string> = {
  color: "/Logos/mersiel-logo-gradient.svg",
  white: "/Logos/mersiel-logo-white.svg",
  black: "/Logos/mersiel-logo-black.svg",
};

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "white",
  className,
  priority = false,
}: LogoProps) {
  return (
    <Image
      className={className}
      src={LOGO_SOURCES[variant]}
      alt="Mersiel"
      width={489}
      height={168}
      priority={priority}
    />
  );
}