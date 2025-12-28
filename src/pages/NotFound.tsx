import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-[70vh] pt-32">
        <div className="text-center max-w-2xl px-4 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-muted-foreground">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 mb-8">
            <Search className="w-16 h-16 mx-auto mb-4 text-primary/60" />
            <p className="text-muted-foreground mb-6">
              You tried to access: <code className="text-primary font-mono bg-primary/10 px-2 py-1 rounded">{location.pathname}</code>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full">
                  <Home className="w-5 h-5 mr-2" />
                  Return to Home
                </Button>
              </Link>
              <Link to="/#packages">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View Packages
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <Link to="/" className="glass-card rounded-lg p-4 hover:border-primary transition-colors">
              <h3 className="font-semibold mb-2">🏠 Home</h3>
              <p className="text-xs text-muted-foreground">Back to homepage</p>
            </Link>
            <Link to="/bill-pay" className="glass-card rounded-lg p-4 hover:border-primary transition-colors">
              <h3 className="font-semibold mb-2">💳 Bill Pay</h3>
              <p className="text-xs text-muted-foreground">Payment instructions</p>
            </Link>
            <Link to="/request-connection" className="glass-card rounded-lg p-4 hover:border-primary transition-colors">
              <h3 className="font-semibold mb-2">🔌 Get Connection</h3>
              <p className="text-xs text-muted-foreground">Request internet</p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
