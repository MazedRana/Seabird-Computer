import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="glass-card rounded-xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect personal information to provide and improve our services. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Contact Information:</strong> Name, phone number, email address, physical address</li>
                  <li><strong>Identity Verification:</strong> National ID (NID) number for account verification</li>
                  <li><strong>Billing Information:</strong> Payment history, billing dates, package details</li>
                  <li><strong>Service Data:</strong> Usage statistics, IP addresses, connection logs</li>
                  <li><strong>Technical Information:</strong> Device information, MAC addresses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">2. How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>To provide and maintain internet services</li>
                  <li>To process payments and manage billing</li>
                  <li>To respond to customer service requests</li>
                  <li>To send service updates and notifications</li>
                  <li>To improve our network and services</li>
                  <li>To comply with legal obligations and regulatory requirements</li>
                  <li>To prevent fraud and abuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">3. Information Sharing & Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share information only with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Payment Processors:</strong> bKash and Nagad for transaction processing</li>
                  <li><strong>Service Providers:</strong> Network equipment vendors and maintenance contractors</li>
                  <li><strong>Regulatory Authorities:</strong> BTRC and law enforcement when legally required</li>
                  <li><strong>Business Partners:</strong> Only with explicit consent for service enhancement</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">4. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Encrypted data transmission (SSL/TLS)</li>
                  <li>Secure server infrastructure</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security audits and updates</li>
                  <li>Staff training on data protection</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">5. Data Retention</h2>
                <p className="text-muted-foreground mb-4">
                  We retain your information for as long as necessary to provide services and comply with legal obligations. Account data is retained for 3 years after service cancellation for regulatory compliance and dispute resolution.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Opt-out of promotional communications</li>
                  <li>Request deletion of non-essential data</li>
                  <li>File complaints regarding data handling</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">7. Cookies & Tracking</h2>
                <p className="text-muted-foreground">
                  We use cookies on our website to improve user experience and analyze website traffic. You can disable cookies through your browser settings, though this may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are intended for users 18 years and older. We do not knowingly collect information from children. If you believe we have collected information from a minor, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">9. Changes to Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this privacy policy periodically. Significant changes will be notified via email or SMS at least 30 days before implementation. Continued use of our services constitutes acceptance of updated policies.
                </p>
              </section>

              <section className="pt-8 border-t border-primary/20">
                <h2 className="text-2xl font-bold mb-4 text-primary">Contact Information</h2>
                <p className="text-muted-foreground mb-2">
                  For privacy-related inquiries or to exercise your rights:
                </p>
                <p className="text-muted-foreground">
                  📞 <strong>Phone:</strong> 09639-100200 or 01915-451763<br />
                  📧 <strong>Email:</strong> seabirdisp@gmail.com<br />
                  📍 <strong>Address:</strong> House-1/2, Avenue-1 Block-Cha, Section-2, Mirpur, Dhaka 1216
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

export default Privacy;


