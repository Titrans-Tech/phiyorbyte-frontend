import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaClock, FaHeadset, FaQuestionCircle } from "react-icons/fa";

export default function CustomerSupport() {
  return (
    <CustomLayout>
      <div className="min-h-screen bg-white py-16">
        <CustomWrapper>
          <h1 className="text-2xl md:text-4xl font-bold text-[#002400] px-5 mb-8">
            Customer Support
          </h1>

          <section className="mb-12 px-5">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#F0E0ED] p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <FaPhone className="text-3xl text-[#002400]" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Phone Support</h2>
                <p className="text-gray-600 mb-2">+2349084123456</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>

              <div className="bg-[#F0E0ED] p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <FaEnvelope className="text-3xl text-[#002400]" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Email Support</h2>
                <p className="text-gray-600 mb-2">support@phiyorbyte.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>

              <div className="bg-[#F0E0ED] p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <FaHeadset className="text-3xl text-[#002400]" />
                </div>
                <h2 className="text-xl font-semibold mb-2">WhatsApp Support</h2>
                <p className="text-gray-600 mb-2">
                  <Link
                    href="https://wa.me/2349084123456"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2349084123456
                  </Link>
                </p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
            </div>
          </section>

          <section className="mb-12 px-5">
            <h2 className="text-2xl font-semibold text-[#002400] mb-6">Support Hours</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <FaClock className="text-2xl mr-4 text-[#002400]" />
                <div>
                  <h3 className="text-xl font-semibold">Customer Service Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 9:00 PM EST</p>
                  <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 px-5">
            <h2 className="text-2xl font-semibold text-[#002400] mb-6">Common Support Topics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaQuestionCircle className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">Order Status</h3>
                </div>
                <p className="text-gray-600">
                  Track your order, check delivery status, or inquire about shipping delays.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaQuestionCircle className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">Returns & Exchanges</h3>
                </div>
                <p className="text-gray-600">
                  Learn about our return policy, initiate a return, or exchange an item.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaQuestionCircle className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">Product Information</h3>
                </div>
                <p className="text-gray-600">
                  Get details about product features, sizing, or care instructions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FaQuestionCircle className="text-2xl mr-4 text-[#002400]" />
                  <h3 className="text-xl font-semibold">Account Support</h3>
                </div>
                <p className="text-gray-600">
                  Help with account access, password reset, or profile updates.
                </p>
              </div>
            </div>
          </section>

          <section className="px-5">
            <h2 className="text-2xl font-semibold text-[#002400] mb-6">Submit a Support Ticket</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#002400] text-white px-6 py-2 rounded hover:bg-[#002400]/90"
                >
                  Submit Ticket
                </button>
              </form>
            </div>
          </section>
        </CustomWrapper>
      </div>
      <Footer />
    </CustomLayout>
  );
}
