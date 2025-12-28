import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";

const Packages = () => {
  const packages = [
    { speed: "20 Mbps", price: "৳600", bdixSpeed: "50 Mbps" },
    { speed: "25 Mbps", price: "৳700", bdixSpeed: "60 Mbps" },
    { speed: "30 Mbps", price: "৳800", bdixSpeed: "70 Mbps" },
    { speed: "40 Mbps", price: "৳1000", bdixSpeed: "80 Mbps" },
    { speed: "50 Mbps", price: "৳1200", bdixSpeed: "90 Mbps" },
    { speed: "60 Mbps", price: "৳1500", bdixSpeed: "100 Mbps" },
    { speed: "70 Mbps", price: "৳2000", bdixSpeed: "100 Mbps" },
    { speed: "80 Mbps", price: "৳2500", bdixSpeed: "100 Mbps" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your Perfect
              <br />
              <span className="gradient-text">Internet Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible and affordable packages designed for every need - from casual browsing to heavy streaming
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <PackageCard {...pkg} />
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-16 max-w-4xl mx-auto glass-card rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">What's Included?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Unlimited data usage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>No hidden charges</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Free installation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Free router on yearly plans</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>99.9% uptime guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Flexible payment options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>No contract lock-in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
