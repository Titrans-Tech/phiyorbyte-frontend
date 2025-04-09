import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { FaTruck, FaBox, FaExchangeAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function DeliveryDetails() {
  return (
    <CustomLayout>
      <div className="min-h-screen bg-white py-16">
        <CustomWrapper>
          <h1 className="text-4xl font-bold text-[#002400] mb-8">Delivery Details</h1>
          
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F0E0ED] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <FaTruck className="text-2xl mr-4 text-[#002400]" />
                  <h2 className="text-2xl font-semibold text-[#002400]">Standard Delivery</h2>
                </div>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Delivery within 3-5 business days</li>
                  <li>Free delivery on orders over $150</li>
                  <li>Standard delivery fee: $5.99</li>
                  <li>Tracking number provided</li>
                </ul>
              </div>

              <div className="bg-[#F0E0ED] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <FaBox className="text-2xl mr-4 text-[#002400]" />
                  <h2 className="text-2xl font-semibold text-[#002400]">Express Delivery</h2>
                </div>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Delivery within 1-2 business days</li>
                  <li>Express delivery fee: $12.99</li>
                  <li>Priority processing</li>
                  <li>Real-time tracking</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#002400] mb-6">Shipping Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">Shipping Areas</h3>
                </div>
                <p className="text-gray-600">
                  We ship to all 50 states in the USA. International shipping available to select countries.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaExchangeAlt className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">Order Processing</h3>
                </div>
                <p className="text-gray-600">
                  Orders are processed within 24-48 hours. You will receive a confirmation email with tracking information.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaBox className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">Package Protection</h3>
                </div>
                <p className="text-gray-600">
                  All packages are carefully packed and insured against damage during transit.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#002400] mb-6">Delivery FAQs</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">How can I track my order?</h3>
                <p className="text-gray-600">
                  Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">What if I'm not home when delivery is attempted?</h3>
                <p className="text-gray-600">
                  The carrier will leave a notice and attempt delivery again the next business day. You can also arrange for pickup at a local carrier facility.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">Do you offer international shipping?</h3>
                <p className="text-gray-600">
                  Yes, we ship to select international destinations. Shipping fees and delivery times vary by country. Please check our international shipping page for details.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002400] mb-6">Need Help?</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about delivery or need assistance with your order, please contact our customer service team at support@phiyorbyte.com or call us at (555) 123-4567.
            </p>
          </section>
        </CustomWrapper>
      </div>
    </CustomLayout>
  );
} 