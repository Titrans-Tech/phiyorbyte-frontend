import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { FaRocket, FaShieldAlt, FaMobileAlt, FaUserFriends } from "react-icons/fa";

export default function About() {
  return (
    <CustomLayout>
      <div className="min-h-screen bg-white">
        <section className="py-16 bg-[#F0E0ED]">
          <CustomWrapper>
            <h1 className="text-4xl md:text-5xl font-bold text-center text-[#002400]">
              About Phiyorbyte
            </h1>
            <p className="text-center mt-4 text-gray-600 max-w-3xl mx-auto">
              Revolutionizing E-commerce Through Innovation and Customer-Centric Solutions
            </p>
          </CustomWrapper>
        </section>

        <CustomWrapper>
          <section className="py-16 px-5">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#002400] mb-6">Our Vision</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2024, Phiyorbyte emerged as a pioneer in modern e-commerce,
                  transforming the way people shop online. We&apos;re not just another fashion
                  retailer – we&apos;re a technology-driven platform that&apos;s redefining the
                  online shopping experience.
                </p>
                <p className="text-gray-600">
                  Our mission is to combine cutting-edge technology with exceptional customer
                  service to create a seamless, personalized shopping journey that sets new
                  standards in the e-commerce industry.
                </p>
              </div>
              {/* <div className="relative h-[400px]">
                <Image
                  src="/assets/about-story.jpg"
                  alt="Our Story"
                  fill
                  className="object-cover rounded-lg"
                />
              </div> */}
            </div>
          </section>

          <section className="py-16 px-5">
            <h2 className="text-3xl font-bold text-[#002400] mb-12 text-center">Our Innovation</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-[#F0E0ED] rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaRocket className="text-3xl text-[#002400]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Advanced Technology</h3>
                <p className="text-gray-600">
                  Leveraging AI and machine learning to provide personalized recommendations and a
                  smarter shopping experience.
                </p>
              </div>
              <div className="text-center p-6 bg-[#F0E0ED] rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaShieldAlt className="text-3xl text-[#002400]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Secure Shopping</h3>
                <p className="text-gray-600">
                  State-of-the-art security measures and fraud prevention to ensure safe
                  transactions and data protection.
                </p>
              </div>
              <div className="text-center p-6 bg-[#F0E0ED] rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaMobileAlt className="text-3xl text-[#002400]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mobile-First Experience</h3>
                <p className="text-gray-600">
                  Optimized mobile shopping with AR try-on features and seamless checkout process.
                </p>
              </div>
              <div className="text-center p-6 bg-[#F0E0ED] rounded-lg">
                <div className="flex justify-center mb-4">
                  <FaUserFriends className="text-3xl text-[#002400]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Focus</h3>
                <p className="text-gray-600">
                  Building a vibrant community through social shopping features and customer
                  engagement.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 px-5">
            <h2 className="text-3xl font-bold text-[#002400] mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Smart Recommendations</h3>
                <p className="text-gray-600">
                  Our AI-powered recommendation engine analyzes your preferences and browsing
                  history to suggest products you&apos;ll love.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Virtual Try-On</h3>
                <p className="text-gray-600">
                  Experience our revolutionary AR technology that lets you try on clothes virtually
                  before making a purchase.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">One-Click Checkout</h3>
                <p className="text-gray-600">
                  Streamlined checkout process with saved payment methods and address information
                  for instant purchases.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Real-Time Inventory</h3>
                <p className="text-gray-600">
                  Accurate stock tracking and instant updates to ensure you never miss out on your
                  favorite items.
                </p>
              </div>
            </div>
          </section>
        </CustomWrapper>
      </div>
      <Footer />
    </CustomLayout>
  );
}
