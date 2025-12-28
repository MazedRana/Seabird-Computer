import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Return & Refund Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="glass-card rounded-xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">1. General Policy</h2>
                <p className="text-muted-foreground mb-4">
                  Seabird Computer operates on a month-to-month payment model with no long-term contracts. This policy outlines our procedures for service charges, refunds, and account adjustments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">2. Installation Charges (৳1000)</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>One-time installation charge is <strong>non-refundable</strong> after installation is completed</li>
                  <li>If installation cannot be completed due to technical issues on our part, full refund applies</li>
                  <li>If customer cancels before installation, 100% refund within 7 business days</li>
                  <li>If customer cancels during installation, 50% refund applies</li>
                  <li>Equipment setup and connection charges are included in the fee</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">3. Monthly Service Charges</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Monthly charges are paid in advance for the coming month</li>
                  <li><strong>No refunds</strong> for partial month usage after service cancellation</li>
                  <li>If service is discontinued mid-month, customer can use until month-end</li>
                  <li>Prorated refunds apply only if service cannot be provided due to our infrastructure issues</li>
                  <li>Billing period runs from your assigned billing date to the same date next month</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">4. Service Interruption Refunds</h2>
                <p className="text-muted-foreground mb-4">We provide compensation for extended service outages:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Service down for <strong>more than 24 hours:</strong> 1 day credit on next bill</li>
                  <li>Service down for <strong>more than 48 hours:</strong> 3 days credit on next bill</li>
                  <li>Service down for <strong>more than 72 hours:</strong> 7 days credit on next bill</li>
                  <li>Outages due to maintenance (with advance notice) are excluded</li>
                  <li>Customer-reported issues resolved within 24 hours are not eligible</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">5. Speed & Quality Guarantees</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>If advertised speed is not consistently met for 7 consecutive days, customer may request package downgrade with pro-rated difference refund</li>
                  <li>Speed issues must be verified through official speed tests</li>
                  <li>Technical team assessment required before any refund consideration</li>
                  <li>Equipment issues affecting speed are resolved through repair/replacement, not refund</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">6. Request Process</h2>
                <p className="text-muted-foreground mb-4">To request a refund or credit:</p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Contact customer support within 48 hours of the issue</li>
                  <li>Provide detailed explanation and documentation</li>
                  <li>Allow our technical team to investigate (up to 72 hours)</li>
                  <li>Receive written notification of decision</li>
                  <li>Approved refunds processed within 7 business days</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">7. Equipment Return</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>All equipment remains property of Seabird Computer</li>
                  <li>Equipment must be returned within 7 days of disconnection</li>
                  <li>Equipment in good working condition: no charges</li>
                  <li>Damaged or missing equipment: replacement cost applies</li>
                  <li>Customer responsible for safe return to our office</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">8. Package Changes</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Upgrades:</strong> Pro-rated difference charged from date of change</li>
                  <li><strong>Downgrades:</strong> Pro-rated difference credited on next bill</li>
                  <li>Changes take effect from next billing cycle</li>
                  <li>Processing time: 24-48 hours</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">9. Non-Refundable Items</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Monthly service charges for completed/active months</li>
                  <li>Installation charges after successful installation</li>
                  <li>Static IP setup fees</li>
                  <li>Late payment fines</li>
                  <li>Service reconnection fees</li>
                  <li>Adjustment fees for package changes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">10. Dispute Resolution</h2>
                <p className="text-muted-foreground mb-4">
                  If you disagree with a refund decision, you have 30 days to appeal:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Submit written appeal with supporting documentation</li>
                  <li>Management review within 14 business days</li>
                  <li>Final decision communicated within 5 days of review</li>
                  <li>For regulatory complaints, contact BTRC (Bangladesh Telecommunication Regulatory Commission)</li>
                </ul>
              </section>

              <section className="pt-8 border-t border-primary/20">
                <h2 className="text-2xl font-bold mb-4 text-primary">Contact for Refunds</h2>
                <p className="text-muted-foreground mb-2">
                  📞 <strong>Phone:</strong> 09639-100200 or 01915-451763<br />
                  📧 <strong>Email:</strong> seabirdisp@gmail.com<br />
                  📍 <strong>Office:</strong> House-1/2, Avenue-1 Block-Cha, Section-2, Mirpur, Dhaka 1216
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Refund requests are processed Monday to Friday, 9 AM to 6 PM
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

export default Refund;


