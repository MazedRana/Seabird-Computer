import { Wifi, CreditCard, Cpu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PackageCardProps {
  speed: string;
  price: string;
  highlight?: boolean;
}

const PackageCard = ({ speed, price, highlight = false }: PackageCardProps) => {
  return (
    <div className={`glass-card-hover rounded-xl p-6 space-y-4 ${highlight ? 'border-2 border-primary shadow-lg shadow-primary/20' : ''}`}>
      {/* Speed Badge */}
      <div className="flex items-center justify-center">
        <div className="bg-primary/20 border border-primary/40 rounded-full px-6 py-2">
          <span className="text-3xl font-bold gradient-text">{speed}</span>
        </div>
      </div>

      {/* Price */}
      <div className="text-center">
        <p className="text-4xl font-bold text-primary">{price}</p>
        <p className="text-sm text-muted-foreground">per month</p>
      </div>

      {/* Features */}
      <div className="space-y-3 py-4">
        <div className="flex items-center space-x-2">
          <Wifi className="w-4 h-4 text-primary" />
          <span className="text-sm">Unlimited data usage</span>
        </div>
        <div className="flex items-center space-x-2">
          <CreditCard className="w-4 h-4 text-secondary" />
          <span className="text-sm">Connection charge only: ৳1000</span>
        </div>
        <div className="flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-accent" />
          <span className="text-sm">High-quality equipment</span>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm">99.9% uptime guarantee</span>
        </div>
      </div>

      {/* CTA Button */}
      <Link to={`/request-connection?package=${encodeURIComponent(`${speed} - ${price}/month`)}`} className="block w-full">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          Get Connected
        </Button>
      </Link>
    </div >
  );
};

export default PackageCard;
