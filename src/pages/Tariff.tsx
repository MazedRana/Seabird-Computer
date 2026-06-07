import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Shield, Award, FileText } from "lucide-react";

const Tariff = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                BTRC Approved <span className="gradient-text">Tariff</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Official rates as approved by Bangladesh Telecommunication Regulatory Commission
              </p>
            </div>

            {/* Official Notice */}
            <div className="glass-card rounded-xl p-6 mb-8 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Official Tariff Document</h3>
                  <p className="text-muted-foreground">
                    All rates shown below are officially approved by Bangladesh Telecommunication Regulatory Commission (BTRC). 
                    Seabird Computer operates in full compliance with BTRC regulations and tariff guidelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Tariff Table */}
            <div className="glass-card rounded-xl overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Internet Speed</th>
                      <th className="px-6 py-4 text-center font-bold">Monthly Charge</th>
                      <th className="px-6 py-4 text-center font-bold">BDIX Speed</th>
                      <th className="px-6 py-4 text-center font-bold">Installation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10 bg-card/50">
                      <td className="px-6 py-4 font-semibold">20 Mbps</td>
                      <td className="px-6 py-4 text-center text-primary font-bold">৳600</td>
                      <td className="px-6 py-4 text-center">50 Mbps</td>
                      <td className="px-6 py-4 text-center">৳1000</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="px-6 py-4 font-semibold">30 Mbps</td>
                      <td className="px-6 py-4 text-center text-primary font-bold">৳700</td>
                      <td className="px-6 py-4 text-center">60 Mbps</td>
                      <td className="px-6 py-4 text-center">৳1000</td>
                    </tr>
                    <tr className="border-b border-primary/10 bg-card/50">
                      <td className="px-6 py-4 font-semibold">40 Mbps</td>
                      <td className="px-6 py-4 text-center text-primary font-bold">৳800</td>
                      <td className="px-6 py-4 text-center">70 Mbps</td>
                      <td className="px-6 py-4 text-center">৳1000</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="px-6 py-4 font-semibold">50 Mbps</td>
                      <td className="px-6 py-4 text-center text-primary font-bold">৳1000</td>
                      <td className="px-6 py-4 text-center">80 Mbps</td>
                      <td className="px-6 py-4 text-center">৳1000</td>
                    </tr>
                    <tr className="border-b border-primary/10 bg-card/50">
                      <td className="px-6 py-4 font-semibold">100 Mbps</td>
                      <td className="px-6 py-4 text-center text-primary font-bold">৳1200</td>
                      <td className="px-6 py-4 text-center">100 Mbps</td>
                      <td className="px-6 py-4 text-center">৳1000</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="px-6 py-4 font-semibold">125 Mbps</td>
                      <td className="px-6 py-4 text-center text-primary font-bold">৳1500</td>
                      <td className="px-6 py-4 text-center">100 Mbps</td>
                      <td className="px-6 py-4 text-center">৳1000</td>
                    </tr>
                    <tr className="border-b border-primary/10 bg-card/50">
                      <td className="px-6 py-4 font-semibold">150 Mbps</td>
                      <td className="px-6 py-4 text-center text-primary font-bold">৳2000</td>
                      <td className="px-6 py-4 text-center">100 Mbps</td>
                      <td className="px-6 py-4 text-center">৳1000</td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="px-6 py-4 font-semibold">200 Mbps</td>
                      <td className="px-6 py-4 text-center text-primary font-bold">৳2500</td>
                      <td className="px-6 py-4 text-center">100 Mbps</td>
                      <td className="px-6 py-4 text-center">৳1000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Important Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">What's Included</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Unlimited internet usage 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Guaranteed speed as advertised</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Enhanced BDIX speeds for local content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Free router and installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Technical support (home visits: 10:00 AM–8:00 PM)</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Licensed ISP operator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>BTRC approved tariff rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Compliance with data protection laws</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Transparent billing practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Customer privacy protection</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Charges */}
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Additional Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold mb-2">Static IP Address</h3>
                  <p className="text-sm text-muted-foreground">
                    Additional monthly charge applies for dedicated static IP. Contact support for pricing.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-bold mb-2">Premium Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Priority technical support available. Standard support is included with all packages.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold mb-2">Service Reconnection</h3>
                  <p className="text-sm text-muted-foreground">
                    ৳500 fee applies for service reconnection after suspension due to non-payment.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold mb-2">Equipment Replacement</h3>
                  <p className="text-sm text-muted-foreground">
                    Replacement fees apply only for damaged or lost equipment due to customer negligence.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact for Verification */}
            <div className="mt-8 glass-card rounded-xl p-6 bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
              <h3 className="text-xl font-bold mb-4">Tariff Verification</h3>
              <p className="text-muted-foreground mb-4">
                To verify our BTRC approval or get detailed tariff information, contact:
              </p>
              <p className="text-sm text-muted-foreground">
                📞 <strong>Seabird Computer:</strong> 09639-100200 | 01915-451763<br />
                📧 <strong>Email:</strong> seabirdisp@gmail.com<br />
                🌐 <strong>BTRC Website:</strong> <a href="https://www.btrc.gov.bd" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.btrc.gov.bd</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tariff;


