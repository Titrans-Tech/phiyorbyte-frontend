import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";
import { FaCreditCard, FaShieldAlt, FaExchangeAlt, FaLock, FaQuestionCircle } from "react-icons/fa";

export default function Payments() {
  return (
    <CustomLayout>
      <div className="min-h-screen bg-white">
        <section className="py-16 bg-[#F0E0ED]">
          <CustomWrapper>
            <h1 className="text-4xl md:text-5xl font-bold text-center text-[#002400]">
              Payment Information
            </h1>
            <p className="text-center mt-4 text-gray-600 max-w-3xl mx-auto">
              Secure and Convenient Payment Options for Your Shopping Experience
            </p>
          </CustomWrapper>
        </section>

        <CustomWrapper>
          <section className="py-16 px-5">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#002400] mb-6">Accepted Payment Methods</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaCreditCard className="text-2xl text-[#002400] mt-1 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Credit/Debit Cards</h3>
                      <p className="text-gray-600">
                        We accept all major credit and debit cards including Visa, MasterCard, and
                        American Express. All card payments are processed securely through Paystack.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaShieldAlt className="text-2xl text-[#002400] mt-1 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Bank Transfers</h3>
                      <p className="text-gray-600">
                        Direct bank transfers are available through our Paystack integration,
                        supporting all major Nigerian banks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaLock className="text-2xl text-[#002400] mt-1 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">USSD Payments</h3>
                      <p className="text-gray-600">
                        Quick and secure USSD payments available for mobile banking users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#F0E0ED] p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#002400] mb-4">Payment Security</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <FaShieldAlt className="text-[#002400] mt-1 mr-3" />
                    <span>
                      All payments are processed through Paystack&apos;s secure payment gateway
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaShieldAlt className="text-[#002400] mt-1 mr-3" />
                    <span>PCI DSS compliant for maximum security</span>
                  </li>
                  <li className="flex items-start">
                    <FaShieldAlt className="text-[#002400] mt-1 mr-3" />
                    <span>SSL encryption for all transactions</span>
                  </li>
                  <li className="flex items-start">
                    <FaShieldAlt className="text-[#002400] mt-1 mr-3" />
                    <span>3D Secure authentication for card payments</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-16 px-5">
            <h2 className="text-3xl font-bold text-[#002400] mb-12 text-center">Refund Policy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaExchangeAlt className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">Refund Process</h3>
                </div>
                <p className="text-gray-600">
                  Refunds are processed within 5-7 business days after approval. The refund will be
                  credited back to your original payment method.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaExchangeAlt className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">Eligibility</h3>
                </div>
                <p className="text-gray-600">
                  Items must be returned within 30 days of delivery, unworn and in original
                  packaging with tags attached.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaExchangeAlt className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">Processing Time</h3>
                </div>
                <p className="text-gray-600">
                  Once we receive your returned items, refunds are typically processed within 5-7
                  business days.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 px-5">
            <h2 className="text-3xl font-bold text-[#002400] mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaQuestionCircle className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">Is my payment information secure?</h3>
                </div>
                <p className="text-gray-600">
                  Yes, we use Paystack&apos;s secure payment gateway which is PCI DSS compliant and
                  uses SSL encryption for all transactions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaQuestionCircle className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">What happens if my payment fails?</h3>
                </div>
                <p className="text-gray-600">
                  If your payment fails, you&apos;ll receive an error message. Please check your
                  payment details and try again. If the problem persists, contact our support team.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaQuestionCircle className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">Can I pay in installments?</h3>
                </div>
                <p className="text-gray-600">
                  Yes, we offer installment payment options through Paystack. This allows you to
                  split your payment into multiple installments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaQuestionCircle className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">How do I get a refund?</h3>
                </div>
                <p className="text-gray-600">
                  To request a refund, log into your account, go to your order history, and select
                  the items you wish to return. Follow the prompts to initiate the refund process.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 px-5">
            <div className="bg-[#F0E0ED] p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-[#002400] mb-4">
                Need Help with Payments?
              </h2>
              <p className="text-gray-600 mb-6">
                Our customer support team is available 24/7 to assist you with any payment-related
                questions.
              </p>
              <Link
                href="/customer-support"
                className="bg-[#002400] text-white px-6 py-3 rounded-lg hover:bg-[#002400]/90"
              >
                Contact Support
              </Link>
            </div>
          </section>
        </CustomWrapper>
      </div>
      <Footer />
    </CustomLayout>
  );
}
