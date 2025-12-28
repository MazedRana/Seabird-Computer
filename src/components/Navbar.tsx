import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/SeabirdLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  type NavLink = {
    name: string;
    path: string;
    isRoute: boolean;
    isExternal?: boolean;
  };

  const navLinks: NavLink[] = [
    { name: "Home", path: "/", isRoute: true },
    { name: "Packages", path: "#packages", isRoute: false },
    { name: "Bill Pay", path: "/bill-pay", isRoute: true },
    { name: "Media", path: "/ftp-servers", isRoute: true, isExternal: false },
    { name: "About", path: "#about", isRoute: false },
    { name: "Contact", path: "#contact", isRoute: false },
    { name: "Get Connection", path: "/request-connection", isRoute: true },
  ];

  const scrollToSection = (path: string) => {
    setIsOpen(false);
    if (path === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Seabird Computer" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.filter(link => link.name !== "Get Connection").map((link) => (
              link.isRoute ? (
                link.isExternal ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-all duration-300 relative group text-foreground hover:text-primary"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full" />
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm font-medium transition-all duration-300 relative group text-foreground hover:text-primary"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full" />
                  </Link>
                )
              ) : (
                <Link
                  key={link.path}
                  to={`/${link.path}`}
                  className="text-sm font-medium transition-all duration-300 relative group text-foreground hover:text-primary"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full" />
                </Link>
              )
            ))}
            <Link to="/request-connection">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get Connection
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-primary/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.filter(link => link.name !== "Get Connection").map((link) => (
              link.isRoute ? (
                link.isExternal ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-medium transition-colors text-foreground hover:text-primary"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-medium transition-colors text-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )
              ) : (
                <Link
                  key={link.path}
                  to={`/${link.path}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium transition-colors text-foreground hover:text-primary"
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/request-connection" onClick={() => setIsOpen(false)} className="block">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Get Connection
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
