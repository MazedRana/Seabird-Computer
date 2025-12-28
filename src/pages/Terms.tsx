import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="glass-card rounded-xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">1. Service Agreement</h2>
                <p className="text-muted-foreground mb-4">
                  By subscribing to Seabird Computer's internet services, you agree to comply with all terms and conditions outlined in this document. These terms govern your use of our internet services and equipment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">2. Installation & Connection</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>One-time installation charge of <strong>৳1000</strong> applies to all new connections</li>
                  <li>Installation typically takes 2-3 business days from request submission</li>
                  <li>Customer must provide accurate address and contact information</li>
                  <li>Equipment remains the property of Seabird Computer</li>
                  <li>Customer is responsible for equipment loss or damage due to negligence</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">3. Billing & Payment</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Billing cycle is monthly, with billing dates on <strong>4th, 7th, 10th, or 15th</strong> of each month</li>
                  <li>Payment must be received by the billing date to avoid service interruption</li>
                  <li>Accepted payment methods: bKash (01915-451763) and Nagad (01721-373777)</li>
                  <li>Failure to pay within 7 days of billing date results in service suspension</li>
                  <li>Service reconnection fee of ৳500 applies after suspension</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">4. Service Quality & Guarantees</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>We guarantee the subscribed internet speed (e.g., 40 Mbps package delivers consistent 40 Mbps)</li>
                  <li>Enhanced BDIX speeds provided for local content</li>
                  <li>99.9% network uptime commitment (excluding maintenance windows)</li>
                  <li>Maintenance notifications provided 24 hours in advance when possible</li>
                  <li>Speed tests available upon customer request</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">5. Customer Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Protect account credentials and passwords</li>
                  <li>Use service in accordance with local laws and regulations</li>
                  <li>Promptly report any service issues or disruptions</li>
                  <li>Provide safe access for maintenance and repairs</li>
                  <li>Notify of address changes 7 days in advance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">6. Prohibited Activities</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Illegal activities or content piracy</li>
                  <li>Spam, hacking, or network abuse</li>
                  <li>Reselling or sharing connection with unauthorized users</li>
                  <li>Malicious software distribution</li>
                  <li>Any activity that disrupts network integrity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">7. Service Modifications</h2>
                <p className="text-muted-foreground mb-4">
                  Packages may be upgraded or downgraded at any time with 24 hours processing time. Changes take effect from the next billing cycle. Additional charges for static IPs or premium services apply as specified.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">8. Cancellation & Disconnection</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>No contract lock-in period - cancel anytime</li>
                  <li>7 days advance notice required for disconnection</li>
                  <li>Outstanding balances must be cleared before disconnection</li>
                  <li>Equipment must be returned in working condition</li>
                  <li>Final billing applies until disconnection date</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">9. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  Seabird Computer is not liable for indirect damages, data loss, or business interruption beyond our control. Our liability is limited to the monthly service fee for any proven service deficiencies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">10. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms with 30 days prior notice. Continued use of service constitutes acceptance of new terms. Changes will be communicated via email or SMS.
                </p>
              </section>

              <section className="pt-8 border-t border-primary/20">
                <p className="text-sm text-muted-foreground">
                  For questions about these terms, contact us at <strong>09639-100200</strong> or <strong>seabirdisp@gmail.com</strong>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;


