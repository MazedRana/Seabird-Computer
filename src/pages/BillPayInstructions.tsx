import { CreditCard, Smartphone, Copy, CheckCircle2, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { useState } from "react";

const BillPayInstructions = () => {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    toast({
      title: "Copied!",
      description: `${fieldName} copied to clipboard`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Fast & Secure Payment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Bill Payment <span className="gradient-text">Made Easy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pay your Seabird internet bill instantly through bKash or Nagad with our streamlined process
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* bKash Merchant */}
            <div className="glass-card rounded-xl p-8 animate-fade-in border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/30 to-pink-600/30 flex items-center justify-center backdrop-blur-sm">
                  <Smartphone className="w-8 h-8 text-pink-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">bKash Merchant</h2>
                  <p className="text-muted-foreground">Fast & secure payment method</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* QR Code Section */}
                <div className="glass-card bg-gradient-to-br from-pink-500/5 to-transparent rounded-lg p-6 border border-pink-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold">Scan QR Code to Pay</h3>
                    <span className="px-2 py-1 rounded-md bg-pink-500/20 text-pink-500 text-xs font-semibold">INSTANT</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 p-6 bg-background/80 rounded-lg border border-pink-500/10">
                    <div className="w-48 h-48 bg-white rounded-lg p-4 flex items-center justify-center border-2 border-pink-500/20">
                      {/* Placeholder for QR Code - Replace with actual QR code image */}
                      <div className="text-center">
                        <div className="text-center">
                          <div className="w-40 h-40 rounded-lg overflow-hidden mb-2">
                           <img
                             src="/bKash-qr.png"
                              alt="bKash QR Code"
                              className="w-full h-full object-contain"
                              />
                               </div>
                                
                          </div>
                        <p className="text-xs text-pink-500 font-semibold">bKash QR Code</p>
                      </div>
                      {/* To add your QR code image, replace the above div with:
                      <img src="/bKash-qr.png" alt="bKash QR Code" className="w-full h-full object-contain" />
                      */}
                    </div>
                  </div>
                </div>

                {/* Merchant Number Section */}
                <div className="glass-card bg-gradient-to-br from-pink-500/5 to-transparent rounded-lg p-6 border border-pink-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold">Or Pay Using Merchant Number</h3>
                    <span className="px-2 py-1 rounded-md bg-pink-500/20 text-pink-500 text-xs font-semibold">VERIFIED</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 p-4 bg-background/80 rounded-lg border border-pink-500/10">
                    <span className="text-2xl font-mono font-bold text-pink-500">01915-451763</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard("01915451763", "Merchant Number")}
                      className="flex items-center gap-2 border-pink-500/30 hover:bg-pink-500/10"
                    >
                      {copiedField === "Merchant Number" ? (
                        <CheckCircle2 className="w-4 h-4 text-pink-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      {copiedField === "Merchant Number" ? "Copied" : "Copy"}
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center text-xs text-pink-500">→</span>
                    Manual Payment Steps
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Open your bKash app and select 'Payment'",
                      "Enter merchant number: 01915-451763 (or scan QR code above)",
                      "Enter your bill amount",
                      { text: "Add your Username in the reference field", icon: User },
                      "Enter your bKash PIN to confirm",
                      "Save the transaction ID and send it to us via WhatsApp"
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-pink-500/5 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center flex-shrink-0 border border-pink-500/20">
                          <span className="text-sm font-bold text-pink-500">{index + 1}</span>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-muted-foreground">
                            {typeof step === 'string' ? step : step.text}
                            {typeof step === 'object' && step.icon && (
                              <span className="inline-flex items-center gap-1 ml-2 text-pink-500">
                                <User className="w-4 h-4" />
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Nagad Personal */}
            <div className="glass-card rounded-xl p-8 animate-fade-in border-orange-500/20 hover:border-orange-500/40 transition-all duration-300" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-600/30 flex items-center justify-center backdrop-blur-sm">
                  <CreditCard className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Nagad Personal</h2>
                  <p className="text-muted-foreground">Instant money transfer</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card bg-gradient-to-br from-orange-500/5 to-transparent rounded-lg p-6 border border-orange-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold">Nagad Number</h3>
                    <span className="px-2 py-1 rounded-md bg-orange-500/20 text-orange-500 text-xs font-semibold">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 p-4 bg-background/80 rounded-lg border border-orange-500/10">
                    <span className="text-2xl font-mono font-bold text-orange-500">01721-373777</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard("01721373777", "Nagad Number")}
                      className="flex items-center gap-2 border-orange-500/30 hover:bg-orange-500/10"
                    >
                      {copiedField === "Nagad Number" ? (
                        <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      {copiedField === "Nagad Number" ? "Copied" : "Copy"}
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-xs text-orange-500">→</span>
                    Payment Steps
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Open your Nagad app and select 'Send Money'",
                      "Enter recipient number: 01721-373777",
                      "Enter your bill amount",
                      { text: "Add your Username in the reference field", icon: User },
                      "Enter your Nagad PIN to confirm",
                      "Save the transaction ID and send it to us via WhatsApp"
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-500/5 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center flex-shrink-0 border border-orange-500/20">
                          <span className="text-sm font-bold text-orange-500">{index + 1}</span>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-muted-foreground">
                            {typeof step === 'string' ? step : step.text}
                            {typeof step === 'object' && step.icon && (
                              <span className="inline-flex items-center gap-1 ml-2 text-orange-500">
                                <User className="w-4 h-4" />
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="glass-card rounded-xl p-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent border-primary/30 animate-fade-in relative overflow-hidden" style={{ animationDelay: "0.2s" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">Important Information</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary text-sm font-bold">✓</span>
                    <span><strong className="text-foreground">Username Required:</strong> Always include your Username in the reference field</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary text-sm font-bold">✓</span>
                    <span><strong className="text-foreground">Send Transaction ID:</strong> Share your transaction ID via WhatsApp: 01915-451763</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary text-sm font-bold">⚡</span>
                    <span><strong className="text-foreground">Quick Activation:</strong> Your connection will be activated within 10-15 minutes after payment confirmation</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary text-sm font-bold">!</span>
                    <span><strong className="text-foreground">Payment Issues?</strong> Contact our support team immediately for assistance</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary text-sm font-bold">📅</span>
                    <span><strong className="text-foreground">Pay On Time:</strong> Pay before the due date to avoid service interruption</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Support */}
            <div className="text-center glass-card rounded-xl p-8 animate-fade-in bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20" style={{ animationDelay: "0.3s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                <Smartphone className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Need Assistance?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Our support team is available to help you. Home support visits: 10:00 AM–8:00 PM. For immediate help, use WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg shadow-green-500/20"
                  onClick={() => window.open("https://wa.me/8801915451763", "_blank")}
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  WhatsApp Support
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500/30 hover:bg-green-500/10"
                  onClick={() => window.location.href = "tel:01915451763"}
                >
                  Call: 01915-451763
                </Button>
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

export default BillPayInstructions;
