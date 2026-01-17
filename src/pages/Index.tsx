import { useState } from "react";
import { Zap, Shield, Headphones, Wifi, Target, Eye, Award, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import FeatureCard from "@/components/FeatureCard";
import PackageCard from "@/components/PackageCard";
import { sendEmail } from "@/lib/sendEmail";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });


  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience ultra-fast fiber optic internet with speeds up to 80 Mbps",
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "99.9% uptime guarantee with stable and consistent connectivity",
    },
    {
      icon: Headphones,
          title: "Support",
          description: "Customer Support — Home visits available from 10:00 AM to 8:00 PM",
    },
    {
      icon: Wifi,
      title: "Fiber Connectivity",
      description: "Latest fiber optic technology for seamless streaming and gaming",
    },
  ];

  const allPackages = [
    { speed: "20 Mbps", price: "৳600", highlight: false },
    { speed: "25 Mbps", price: "৳700", highlight: false },
    { speed: "30 Mbps", price: "৳800", highlight: false },
    { speed: "40 Mbps", price: "৳1000", highlight: true },
    { speed: "50 Mbps", price: "৳1200", highlight: false },
    { speed: "60 Mbps", price: "৳1500", highlight: false },
    { speed: "70 Mbps", price: "৳2000", highlight: false },
    { speed: "80 Mbps", price: "৳2500", highlight: false },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const success = await sendEmail({
        formType: 'contact',
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
      });

      if (!success) throw new Error('Failed to send');

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try calling us directly.",
        variant: "destructive",
      });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/8801915451763", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Advanced Tech Background */}
        <div className="absolute inset-0">
          {/* Hexagonal grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                  <polygon points="24.8,22 37.3,14.4 37.3,0.8 24.8,0 12.3,0.8 12.3,14.4" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>

          {/* Circuit board lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              <line x1="0%" y1="20%" x2="100%" y2="20%" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
              </line>
              <line x1="0%" y1="40%" x2="100%" y2="40%" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.5s" repeatCount="indefinite" />
              </line>
              <line x1="0%" y1="60%" x2="100%" y2="60%" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="0%" y1="80%" x2="100%" y2="80%" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.2s" repeatCount="indefinite" />
              </line>
            </svg>
          </div>

          {/* Holographic gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/30 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>

          {/* Digital grid with perspective */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,123,255,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(0,123,255,0.05)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_90%_60%_at_50%_50%,black_20%,transparent_80%)] [transform:perspective(800px)_rotateX(60deg)]" style={{ transformOrigin: "center center" }}></div>
        </div>

        {/* Advanced Network Visualization */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Central Neural Network Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg width="600" height="400" viewBox="0 0 600 400" className="opacity-60">
              <defs>
                <radialGradient id="nodeGlow">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection lines forming neural network */}
              {[
                [50, 200, 200, 100], [50, 200, 200, 300], [200, 100, 300, 200],
                [200, 300, 300, 200], [300, 200, 400, 100], [300, 200, 400, 300],
                [400, 100, 550, 200], [400, 300, 550, 200], [200, 100, 300, 50],
                [200, 300, 300, 350], [400, 100, 500, 50], [400, 300, 500, 350]
              ].map((coords, i) => (
                <g key={i}>
                  <line
                    x1={coords[0]} y1={coords[1]} x2={coords[2]} y2={coords[3]}
                    stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.4"
                    filter="url(#glow)"
                  >
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
                  </line>
                  {/* Data packets traveling along connections */}
                  <circle r="4" fill="hsl(var(--primary))">
                    <animateMotion dur={`${3 + i * 0.3}s`} repeatCount="indefinite">
                      <mpath href={`#path${i}`} />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
                  </circle>
                  <path id={`path${i}`} d={`M ${coords[0]} ${coords[1]} L ${coords[2]} ${coords[3]}`} fill="none" />
                </g>
              ))}

              {/* Network nodes with pulsing effect */}
              {[
                [50, 200], [200, 100], [200, 300], [300, 200], [400, 100],
                [400, 300], [550, 200], [300, 50], [300, 350], [500, 50], [500, 350]
              ].map((pos, i) => (
                <g key={i}>
                  {/* Outer pulse ring */}
                  <circle cx={pos[0]} cy={pos[1]} r="15" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3">
                    <animate attributeName="r" values="8;20;8" dur="3s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                  </circle>
                  {/* Core node */}
                  <circle cx={pos[0]} cy={pos[1]} r="8" fill="url(#nodeGlow)" stroke="hsl(var(--primary))" strokeWidth="2" filter="url(#glow)">
                    <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                  </circle>
                  {/* Inner glow */}
                  <circle cx={pos[0]} cy={pos[1]} r="4" fill="hsl(var(--primary))" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
                  </circle>
                </g>
              ))}
            </svg>
          </div>

          {/* Digital Code Rain Effect */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-primary font-mono text-xs"
                style={{
                  left: `${i * 5}%`,
                  animation: `fall ${5 + Math.random() * 5}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                {['01', '10', '11', '00'][Math.floor(Math.random() * 4)]}
              </div>
            ))}
          </div>

          {/* Floating Tech Elements */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              {i % 3 === 0 ? (
                <div className="w-2 h-2 border border-primary/40 rotate-45"></div>
              ) : i % 3 === 1 ? (
                <div className="w-1.5 h-1.5 bg-primary/30 rounded-full blur-sm"></div>
              ) : (
                <div className="w-3 h-0.5 bg-primary/20"></div>
              )}
            </div>
          ))}

          {/* Scanning beam effect */}
          <div className="absolute inset-0 overflow-hidden opacity-15">
            <div className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-scan-line blur-xl"></div>
          </div>

          {/* Corner Tech Brackets */}
          {[
            { top: "10%", left: "5%", rotate: "0" },
            { top: "10%", right: "5%", rotate: "90deg" },
            { bottom: "10%", left: "5%", rotate: "-90deg" },
            { bottom: "10%", right: "5%", rotate: "180deg" }
          ].map((pos, i) => (
            <div key={i} className="absolute" style={pos}>
              <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-40">
                <path d="M 0 10 L 0 0 L 10 0" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
                <path d="M 0 20 L 0 15 L 5 15" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.5" />
                <circle cx="15" cy="5" r="2" fill="hsl(var(--primary))">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
                </circle>
              </svg>
            </div>
          ))}

          {/* Holographic Display Panels */}
          <div className="absolute top-1/4 left-10 opacity-60">
            <div className="relative w-48 h-32 border border-primary/40 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm rounded-lg p-3">
              <div className="text-xs text-primary/60 font-mono space-y-1">
                <div className="flex justify-between">
                  <span>BANDWIDTH</span>
                  <span className="text-primary">99.8%</span>
                </div>
                <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary/60 animate-pulse" style={{ width: "85%" }}></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span>LATENCY</span>
                  <span className="text-primary">2ms</span>
                </div>
                <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary/60 animate-pulse" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-1/4 right-10 opacity-60">
            <div className="relative w-48 h-32 border border-primary/40 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm rounded-lg p-3">
              <div className="text-xs text-primary/60 font-mono space-y-1">
                <div className="flex justify-between">
                  <span>UPTIME</span>
                  <span className="text-primary">99.9%</span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-8 w-2 bg-primary/20 rounded-sm overflow-hidden">
                      <div
                        className="bg-primary/60 w-full transition-all duration-300"
                        style={{
                          height: `${50 + Math.random() * 50}%`,
                          animation: `pulse ${1 + Math.random()}s ease-in-out infinite`
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              High-Speed Internet
              <br />
              <span className="gradient-text">Solution Provider</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of connectivity with Seabird Computer's fiber optic internet in Mirpur, Dhaka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#packages">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  View Packages
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Contact Support
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Seabird?</h2>
            <p className="text-muted-foreground">Premium features for the ultimate internet experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Packages Section */}
      <section id="packages" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your Perfect
              <br />
              <span className="gradient-text">Internet Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible and affordable packages designed for every need - from casual browsing to heavy streaming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {allPackages.map((pkg, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <PackageCard {...pkg} highlight={pkg.highlight} />
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Seabird Computer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connecting Mirpur with the speed of the future
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass-card rounded-xl p-8 md:p-12 animate-fade-in">
              <h3 className="text-3xl font-bold mb-6 text-primary">Our Story</h3>
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
                  is your connectivity partner.
                </p>
              </div>
            </div>
          </div>

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

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-semibold">Quality</h4>
                <p className="text-sm text-muted-foreground">
                  We never compromise on the quality of our service and infrastructure
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Reliability</h4>
                <p className="text-sm text-muted-foreground">
                  99.9% uptime and consistent speeds you can depend on
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="text-xl font-semibold">Support</h4>
                <p className="text-sm text-muted-foreground">
                  24/7 customer service ready to help whenever you need us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real feedback from satisfied customers across the city
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {[
                {
                  name: "Rakib Hassan",
                  role: "Gamer & Streamer",
                  feedback: "Best ISP in the area! Low latency, consistent speeds, and amazing support. Perfect for gaming and streaming.",
                  rating: 5
                },
                {
                  name: "Nishat Tabassum",
                  role: "Online Business Owner",
                  feedback: "Seabird has been a game changer for my business. Reliable connection with minimal downtime. Highly recommended!",
                  rating: 5
                },
                {
                  name: "Mehedi Khan",
                  role: "Software Engineer",
                  feedback: "Great speed and stability for remote work. Their customer service is top-notch, always quick to respond.",
                  rating: 5
                },
                {
                  name: "Farhana Akter",
                  role: "Content Creator",
                  feedback: "Upload speeds are fantastic! I can upload my videos in minutes. Very happy with the service.",
                  rating: 5
                },
                {
                  name: "Tanvir Ahmed",
                  role: "Student",
                  feedback: "Affordable packages with great speed. Perfect for online classes and entertainment. No buffering!",
                  rating: 5
                },
                {
                  name: "Sabrina Islam",
                  role: "Freelancer",
                  feedback: "Switched from another ISP and never looked back. Consistent speed 24/7 which is crucial for my work.",
                  rating: 5
                },
                {
                  name: "Jahid Rahman",
                  role: "IT Professional",
                  feedback: "Excellent BDIX speed and customer support. Installation was quick and professional. Very satisfied!",
                  rating: 5
                },
                {
                  name: "Nusrat Jahan",
                  role: "Homemaker",
                  feedback: "My kids love it for their online studies and I enjoy seamless streaming. Great value for money!",
                  rating: 5
                },
                {
                  name: "Imran Hossain",
                  role: "Business Analyst",
                  feedback: "Rock-solid connection for video calls and cloud work. Installation team was professional and helpful.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card-hover rounded-xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.feedback}"</p>
                    <div className="flex items-center mt-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                        <span className="text-xl font-bold text-primary">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our services
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column - First 5 Questions */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="glass-card rounded-xl px-6 border-0">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    How do I get a new internet connection?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Getting connected is easy! Simply click on the "Get Connection" button or call us at <strong>09639-100200</strong>. Fill out the connection form with your details, and our team will contact you within 2 hours to schedule installation. The entire process typically takes 24 hours from request to activation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="glass-card rounded-xl px-6 border-0">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    What are the installation charges?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    There is a one-time optical fiber connection charge of <strong>৳1000</strong> which covers professional installation, equipment setup, and fiber optic cable connection. This is a standard fee for all new connections and ensures you receive top-quality installation service with proper equipment placement.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="glass-card rounded-xl px-6 border-0">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We accept payments through <strong>bKash Merchant</strong> (01915-451763) and <strong>Nagad Personal</strong> (01721-373777). Always include your Username or Customer ID in the reference field when making payment. Your connection will be activated within 10-15 minutes after payment confirmation. For detailed payment instructions, visit our Bill Pay page.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="glass-card rounded-xl px-6 border-0">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    When is my billing date and what if I miss payment?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Your billing date will be one of the following: <strong>4th, 7th, 10th, or 15th</strong> of each month (you choose during signup). <strong>Important:</strong> Payment must be received by your billing date to avoid service interruption. If payment is not received on time, your Radius account will expire and internet service will be suspended until payment is made. We recommend setting reminders or setting up automatic payments to avoid any disruption.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="glass-card rounded-xl px-6 border-0">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Do you offer static IP addresses?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! We offer static IP addresses for customers who need a consistent, fixed IP for remote access, CCTV systems, web servers, VPN setups, or business applications. Static IPs are particularly useful for gamers, security camera systems, and hosting services. Additional monthly charges apply. Contact our support team at <strong>09639-100200</strong> to request a static IP.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Right Column - Last 5 Questions */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-6" className="glass-card rounded-xl px-6 border-0">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Can I upgrade or downgrade my package?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, absolutely! You can upgrade or downgrade your package at any time. Simply contact our support team and we'll handle the change smoothly. No contract lock-in means you have complete flexibility. Upgrades are usually processed within 24 hours, and you'll only pay the difference on a pro-rated basis.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="glass-card rounded-xl px-6 border-0">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    What if my internet stops working?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    First, try these quick troubleshooting steps: <strong>1)</strong> Restart your router by unplugging it for 30 seconds, <strong>2)</strong> Check all cable connections, <strong>3)</strong> Try connecting via ethernet cable to rule out Wi-Fi issues. If the problem persists, contact our 24/7 support team at <strong>09639-100200</strong> or WhatsApp <strong>01915-451763</strong> for immediate assistance. Home support visits are available 10:00 AM–8:00 PM.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="glass-card rounded-xl px-6 border-0">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    How do I change my Wi-Fi name or password?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Access your router's settings by entering <strong>192.168.0.1</strong> or <strong>192.168.1.1</strong> in your browser. Use the default login credentials (usually admin/admin or check router label). Navigate to Wi-Fi Settings to change your network name (SSID) and password. Save the changes when done. Need assistance? Our support team can guide you through the process or do it remotely.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="glass-card rounded-xl px-6 border-0">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    What internet speeds do you guarantee?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We guarantee the <strong>exact speed</strong> you subscribe to - what you see is what you get! For example, our 40 Mbps package delivers a consistent 40 Mbps. Additionally, you get enhanced BDIX speeds for local content (YouTube, Facebook, etc.) ranging from 50-100 Mbps depending on your package. Our fiber optic technology ensures stable, consistent speeds 24/7.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="glass-card rounded-xl px-6 border-0">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Is there any contract or commitment period?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No contract lock-in! You're free to cancel or change your service anytime without penalties. We believe in providing flexible internet service that fits your needs. The only commitment is a one-time connection charge of ৳1000, which covers professional installation and setup. After that, you pay month-to-month with complete freedom.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to us anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card rounded-xl p-6 space-y-6">
                <h3 className="text-2xl font-bold">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a
                        href="mailto:seabirdisp@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        seabirdisp@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a
                        href="tel:09639100200"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        09639-100200
                      </a>
                      <a
                        href="tel:01915451763"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        01915-451763
                      </a>

                      <a
                        href="tel:01721373777"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        01721-373777
                      </a>

                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Address</p>
                      <p className="text-muted-foreground">
                        House-1/2, Avenue-1 Block-Cha, Section-2,
                        <br />
                        Mirpur, Dhaka 1216.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact via WhatsApp
                </Button>
              </div>

              <div className="glass-card rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2006.141509465882!2d90.35487395480617!3d23.803917334148846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e75121ece3%3A0x7e0595f58e67028c!2sSeaBird%20Computer!5e0!3m2!1sen!2sbd!4v1761042439662!5m2!1sen!2sbd"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Seabird Computer Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
