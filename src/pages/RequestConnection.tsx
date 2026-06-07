import { useState, useEffect } from "react";
import { User, Phone, Mail, Home, MessageSquare, CreditCard, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { sendEmail } from "@/lib/sendEmail";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

const RequestConnection = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    nid: "",
    address: "",
    package: "",
    billingDate: "",
    additionalInfo: "",
  });

  // Pre-select package from URL parameter
  useEffect(() => {
    const packageFromUrl = searchParams.get('package');
    if (packageFromUrl) {
      setFormData(prev => ({ ...prev, package: packageFromUrl }));
    }
  }, [searchParams]);

  const packages = [
    "20 Mbps - ৳600/month",
    "30 Mbps - ৳700/month",
    "40 Mbps - ৳800/month",
    "50 Mbps - ৳1000/month",
    "100 Mbps - ৳1200/month",
    "125 Mbps - ৳1500/month",
    "150 Mbps - ৳2000/month",
    "200 Mbps - ৳2500/month",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.email || !formData.nid || !formData.address || !formData.package || !formData.billingDate) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const success = await sendEmail({
        formType: 'connection',
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        nid: formData.nid,
        address: formData.address,
        package: formData.package,
        billingDate: formData.billingDate,
        additionalInfo: formData.additionalInfo,
      });

      if (!success) throw new Error('Failed to send');

      toast({
        title: "Request Submitted!",
        description: "We'll contact you within 2 hours to confirm your connection.",
      });

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        nid: "",
        address: "",
        package: "",
        billingDate: "",
        additionalInfo: "",
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Request a <span className="gradient-text">Connection</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get you connected to high-speed internet
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-xl p-8 md:p-12 animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="pl-10 bg-background/50"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="01XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-10 bg-background/50"
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">We'll contact you on this number</p>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 bg-background/50"
                      required
                    />
                  </div>
                </div>

                {/* National ID (NID) */}
                <div>
                  <label htmlFor="nid" className="block text-sm font-medium mb-2">
                    National ID (NID) <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="nid"
                      type="text"
                      placeholder="1234567890123"
                      value={formData.nid}
                      onChange={(e) => setFormData({ ...formData, nid: e.target.value })}
                      className="pl-10 bg-background/50"
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">For verification purposes</p>
                </div>

                {/* Full Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2">
                    Full Address <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Textarea
                      id="address"
                      placeholder="House/Flat number, Road, Block, Section..."
                      rows={3}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="pl-10 bg-background/50"
                      required
                    />
                  </div>
                </div>

                {/* Package Selection */}
                <div>
                  <label htmlFor="package" className="block text-sm font-medium mb-2">
                    Select Package <span className="text-destructive">*</span>
                  </label>
                  <Select
                    value={formData.package}
                    onValueChange={(value) => setFormData({ ...formData, package: value })}
                    required
                  >
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Choose your internet package" />
                    </SelectTrigger>
                    <SelectContent>
                      {packages.map((pkg) => (
                        <SelectItem key={pkg} value={pkg}>
                          {pkg}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Billing Date Selection */}
                <div>
                  <label htmlFor="billingDate" className="block text-sm font-medium mb-2">
                    Preferred Billing Date <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Select
                      value={formData.billingDate}
                      onValueChange={(value) => setFormData({ ...formData, billingDate: value })}
                      required
                    >
                      <SelectTrigger className="bg-background/50 pl-10">
                        <SelectValue placeholder="Select billing date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>4th of each month</span>
                            <span className="text-xs text-muted-foreground">(Early Month)</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="7">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>7th of each month</span>
                            <span className="text-xs text-muted-foreground">(First Week)</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="10">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>10th of each month</span>
                            <span className="text-xs text-muted-foreground">(Mid-Month)</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="15">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>15th of each month</span>
                            <span className="text-xs text-muted-foreground">(Mid-Month)</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 p-2 rounded-md border border-yellow-500/20">
                    ⚠️ <strong>Important:</strong> Please pay your bill by this date each month to avoid service interruption. Your Radius account will expire if payment is not received on time.
                  </p>
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
                    Additional Information <span className="text-muted-foreground">(Optional)</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Textarea
                      id="additionalInfo"
                      placeholder="Any special requirements or questions?"
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      className="pl-10 bg-background/50"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                >
                  Submit Connection Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by Seabird Computer regarding your connection request.
                </p>
              </form>
            </div>

            {/* What Happens Next */}
            <div className="mt-8 glass-card rounded-xl p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-bold mb-6 text-center">What Happens Next?</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Request Review",
                    desc: "Our team reviews your connection request within 2 hours"
                  },
                  {
                    step: "2",
                    title: "Verification Call",
                    desc: "We'll call you to verify details and schedule installation"
                  },
                  {
                    step: "3",
                    title: "Site Survey",
                    desc: "Our technician visits your location to assess installation requirements"
                  },
                  {
                    step: "4",
                    title: "Installation",
                    desc: "Professional installation at your convenient time"
                  },
                  {
                    step: "5",
                    title: "Activation",
                    desc: "Enjoy high-speed internet immediately after installation"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LiveChat />
    </div>
  );
};

export default RequestConnection;
