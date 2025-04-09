import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Footer } from "@/components/ui/footer";

export default function TermsAndConditions() {
  return (
    <CustomLayout>
      <div className="min-h-screen bg-white py-16">
        <CustomWrapper>
          <h1 className="text-2xl md:text-4xl font-bold text-[#002400] px-5 mb-8">
            Terms and Conditions
          </h1>

          <div className="prose max-w-none px-5">
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#002400] mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 mb-4">
                Welcome to Phiyorbyte. By accessing and using our website, you accept and agree to
                be bound by the terms and conditions set forth in this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#002400] mb-4">
                2. Intellectual Property
              </h2>
              <p className="text-gray-600 mb-4">
                All content on this website, including but not limited to text, graphics, logos,
                images, and software, is the property of Phiyorbyte and is protected by copyright
                laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#002400] mb-4">
                3. User Accounts
              </h2>
              <p className="text-gray-600 mb-4">
                When you create an account with us, you must provide accurate and complete
                information. You are responsible for maintaining the confidentiality of your account
                and password.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#002400] mb-4">
                4. Product Information
              </h2>
              <p className="text-gray-600 mb-4">
                We strive to ensure that all product information is accurate. However, we do not
                warrant that product descriptions or other content is accurate, complete, reliable,
                current, or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#002400] mb-4">
                5. Pricing and Payment
              </h2>
              <p className="text-gray-600 mb-4">
                All prices are subject to change without notice. We reserve the right to modify or
                discontinue any product without notice at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#002400] mb-4">
                6. Returns and Refunds
              </h2>
              <p className="text-gray-600 mb-4">
                Please refer to our Returns Policy for detailed information about our return and
                refund procedures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#002400] mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-4">
                Phiyorbyte shall not be liable for any indirect, incidental, special, consequential,
                or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#002400] mb-4">
                8. Changes to Terms
              </h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any
                changes by posting the new terms on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#002400] mb-4">
                9. Contact Information
              </h2>
              <p className="text-gray-600">
                If you have any questions about these Terms and Conditions, please contact us at
                support@phiyorbyte.com
              </p>
            </section>
          </div>
        </CustomWrapper>
      </div>
      <Footer />
    </CustomLayout>
  );
}
