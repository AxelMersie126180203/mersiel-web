import {
  Smartphone,
  Globe,
  Workflow,
  Database,
  Search,
  PenTool,
  Code2,
  Rocket,
  Sparkles,
  Layers,
  Clock,
  MessageCircle,
  FileCode,
  BadgeCheck,
  BookOpen,
  ShieldCheck,
  Lock,
  LayoutDashboard,
  Boxes,
  Store,
  Cpu,
  BarChart3,
  Package,
  Repeat,
  QrCode,
  Calculator,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Globe,
  Workflow,
  Database,
  Search,
  PenTool,
  Code2,
  Rocket,
  Sparkles,
  Layers,
  Clock,
  MessageCircle,
  FileCode,
  BadgeCheck,
  BookOpen,
  ShieldCheck,
  Lock,
  LayoutDashboard,
  Boxes,
  Store,
  Cpu,
  BarChart3,
  Package,
  Repeat,
  QrCode,
  Calculator,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  HelpCircle,
};

type IconProps = {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export function Icon({ name, size = 22, strokeWidth = 1.6, className }: IconProps) {
  const C = iconMap[name] ?? HelpCircle;
  return <C size={size} strokeWidth={strokeWidth} className={className} aria-hidden />;
}
