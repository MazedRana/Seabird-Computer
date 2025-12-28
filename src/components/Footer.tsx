import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/SeabirdLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="glass-card border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="Seabird Computer" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground">
              High-Speed Internet Solution Provider delivering reliable fiber connectivity to Mirpur, Dhaka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#packages" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <a href="mailto:seabirdisp@gmail.com" className="hover:text-primary transition-colors">
                  seabirdisp@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <div>
                  <a href="tel:09639100200" className="hover:text-primary transition-colors block">
                    09639-100200
                  </a>
                  <a href="tel:01915451763" className="hover:text-primary transition-colors block">
                    01915-451763
                  </a>
                  <a href="tel:01721373777" className="hover:text-primary transition-colors block">
                    01721-373777
                  </a>
                  
                </div>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>House-1/2, Avenue-1 Block-Cha, Section-2, Mirpur, Dhaka 1216.</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Return & Refund
                </Link>
              </li>
              <li>
                <Link to="/tariff" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  BTRC Approved Tariff
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/p/SeaBird-Computer-ISP-100057611161645/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary transition-all"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary transition-all"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary/20 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © 2025 Seabird Computer. All rights reserved.
          </p>
             <p className="text-sm text-muted-foreground" style={{ display: 'none' }}>
              Developed by <span className="text-primary font-semibold">Mazed Rana</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
