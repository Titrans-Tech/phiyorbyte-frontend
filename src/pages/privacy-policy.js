import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Footer } from "@/components/ui/footer";

export default function PrivacyPolicy() {
  return (
    <CustomLayout>
      <div className="min-h-screen bg-white py-16">
        <CustomWrapper>
          <h1 className="text-4xl px-5 font-bold text-[#002400] mb-8">Privacy Policy</h1>

          <div className="prose max-w-none px-5">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002400] mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Name and contact information</li>
                <li>Payment information</li>
                <li>Shipping and billing addresses</li>
                <li>Account credentials</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002400] mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Process your orders and payments</li>
                <li>Communicate with you about your orders</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002400] mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Service providers who assist in our operations</li>
                <li>Payment processors</li>
                <li>Shipping partners</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002400] mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information.
                However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002400] mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002400] mb-4">
                6. Cookies and Tracking
              </h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar tracking technologies to improve your browsing experience
                and analyze website traffic. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002400] mb-4">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 mb-4">
                Our services are not intended for children under 13. We do not knowingly collect
                personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002400] mb-4">
                8. Changes to Privacy Policy
              </h2>
              <p className="text-gray-600 mb-4">
                We may update this privacy policy from time to time. We will notify you of any
                changes by posting the new policy on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#002400] mb-4">9. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at
                privacy@phiyorbyte.com
              </p>
            </section>
          </div>
        </CustomWrapper>
      </div>
      <Footer />
    </CustomLayout>
  );
}
