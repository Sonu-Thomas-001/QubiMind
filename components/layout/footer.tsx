import Link from "next/link";
import { BrainCircuit } from "lucide-react";

const FOOTER_LINKS = {
  Product: ["Features", "Agents", "Integrations", "Pricing", "Changelog"],
  Resources: ["Documentation", "API Reference", "Blog", "Community", "Guides"],
  Company: ["About", "Careers", "Contact", "Partners", "Legal"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <BrainCircuit className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg tracking-tight">Nexus AI</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              The enterprise-grade Multi-Agent AI platform. Automate workflows, empower teams, and scale intelligence across your organization.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.Product.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.Resources.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.Company.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexus AI Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            {FOOTER_LINKS.Legal.map((link) => (
              <Link key={link} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
