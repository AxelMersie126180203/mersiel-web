import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/ui/social-links";

export function SiteFooter() {
  return (
    <footer className="site-footer fade-up fade-delay-4">
      <Logo className="footer-logo" />
      <SocialLinks />
      <span>Mersiel Studio. Software de calidad para empresas que quieren escalar con criterio.</span>
    </footer>
  );
}