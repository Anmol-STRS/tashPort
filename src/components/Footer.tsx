import { Container } from "./Container";

const footerLinks = [
  { href: "#moodboard", label: "Moodboard" },
  { href: "#stories", label: "Stories" },
  { href: "#ambition", label: "Ambition" },
  { href: "#overthinking", label: "Overthinking" },
  { href: "#laugh-file", label: "Laugh File" },
  { href: "#little-joys", label: "Little Joys" }
];

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cocoa/10 bg-cream/90 py-10">
      <Container className="flex flex-col gap-6 text-sm text-charcoal/70 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a className="focus-ring rounded-full px-3 py-2 hover:bg-mint/70" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p>© {year} Tashneet. Crafted with warmth and chocolate.</p>
      </Container>
    </footer>
  );
};
