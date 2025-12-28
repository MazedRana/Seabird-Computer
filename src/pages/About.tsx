import { Target, Eye, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Seabird Computer</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connecting Mirpur with the speed of the future
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass-card rounded-xl p-8 md:p-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Seabird Computer has been at the forefront of internet connectivity in Mirpur, Dhaka, providing
                  high-speed fiber optic internet solutions to homes and businesses. Founded with a vision to bridge
                  the digital divide, we've grown from a small local provider to a trusted name in the community.
                </p>
                <p>
                  Our commitment to delivering reliable, fast, and affordable internet has made us the preferred choice
                  for thousands of customers. We understand that in today's digital age, a stable internet connection
                  is not just a luxury—it's a necessity.
                </p>
                <p>
                  With cutting-edge fiber optic technology and a dedicated team of professionals, we ensure that every
                  customer receives the best possible service. From installation to ongoing support, Seabird Computer
                  is your partner in connectivity.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            <div className="glass-card-hover rounded-xl p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver reliable, high-speed internet with next-gen fiber optic technology, ensuring seamless
                connectivity for every household and business in Mirpur.
              </p>
            </div>

            <div className="glass-card-hover rounded-xl p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the leading ISP in Dhaka by providing cutting-edge technology, exceptional customer service,
                and connecting communities with the speed of the future.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  We never compromise on the quality of our service and infrastructure
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Reliability</h3>
                <p className="text-sm text-muted-foreground">
                  99.9% uptime and consistent speeds you can depend on
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Support</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 customer service ready to help whenever you need us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
