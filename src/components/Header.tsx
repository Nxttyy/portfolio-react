import {
  Mail,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  Bird,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const socialLinks = [
    { name: "Email", icon: Mail, href: "mailto:nathnaelyirga@gmail.com" },
    { name: "GitHub", icon: Github, href: "https://github.com/Nxttyy" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/nathnael-yirga",
    },
    { name: "Telegram", icon: Send, href: "https://t.me/Nxtiey" },
    {
      name: "Discord",
      icon: MessageCircle,
      href: "https://discord.com/users/Natty777x",
    },
    { name: "X", icon: Bird, href: "https://x.com/NathnaelYirga" },
  ];

  return (
    <header className="mb-16 relative">
      {/* Theme Toggle */}
      <div className="absolute top-0 right-0">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center min-h-[600px]">
        {/* Left: Bio & Links */}
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Natty
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Backend Heavy Fullstack Developer
            </p>
            <p className="text-base text-muted-foreground max-w-lg">
              {/* Add your bio here - e.g., "Building scalable systems and crafting elegant solutions. Passionate about backend architecture, APIs, and full-stack development." */}
              Building scalable systems and crafting elegant solutions.
              Passionate about backend architecture, APIs, and full-stack
              development.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-border px-4 py-2 hover:bg-secondary transition-colors flex items-center gap-2"
              >
                <link.icon className="w-4 h-4" />
                <span className="text-sm">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: ASCII Art Image Placeholder */}
        <div className="flex items-center justify-center rounded-full">
          <img src="/me.png" alt="Me" className="rounded-full " />
        </div>
      </div>
    </header>
  );
};

export default Header;
