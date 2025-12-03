import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-border/10 ${
          isScrolled ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <span className="font-serif text-2xl font-bold tracking-tighter cursor-pointer">
              CREED<span className="text-muted-foreground">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors cursor-pointer ${
                    location === link.href ? "text-primary border-b border-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 rounded-full hover:bg-secondary"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l border-border">
                <nav className="flex flex-col gap-6 mt-12">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <span
                        className={`text-2xl font-serif font-bold cursor-pointer hover:text-primary transition-colors ${
                          location === link.href ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-16 border-t border-border">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">CREED ADVERTISEMENTS</h3>
            <p className="text-muted-foreground max-w-md mb-6">
              Elevating brands through strategic digital advertising. We specialize in Google and Meta Ads to drive growth and visibility.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <span className="font-serif font-bold">In</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <span className="font-serif font-bold">Fb</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <span className="font-serif font-bold">X</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-sm">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-sm">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>hello@creedads.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Business Ave, Suite 100<br />New York, NY 10001</li>
            </ul>
          </div>
        </div>
        <div className="container mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Creed Advertisements. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-primary">Privacy Policy</span>
            <span className="cursor-pointer hover:text-primary">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
