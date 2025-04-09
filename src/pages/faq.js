import { CustomLayout } from "@/components/layout";
import { CustomWrapper } from "@/components/layout/customWrapper";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-[#002400]">{question}</h3>
        {isOpen ? (
          <FaChevronUp className="text-[#002400]" />
        ) : (
          <FaChevronDown className="text-[#002400]" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      category: "Ordering & Payment",
      questions: [
        {
          question: "How do I place an order?",
          answer:
            "To place an order, simply browse our products, select the items you want, add them to your cart, and proceed to checkout. You'll need to create an account or sign in, enter your shipping information, and complete the payment process.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through our encrypted payment gateway.",
        },
        {
          question: "Can I modify or cancel my order?",
          answer:
            "You can modify or cancel your order within 30 minutes of placing it. After that, the order enters processing and cannot be changed. Please contact our customer service for assistance.",
        },
      ],
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "How long does shipping take?",
          answer:
            "Standard shipping typically takes 3-5 business days. Express shipping is available for delivery within 1-2 business days. International shipping times vary by destination.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, we ship to select international destinations. Shipping fees and delivery times vary by country. Please check our delivery details page for more information.",
        },
        {
          question: "How can I track my order?",
          answer:
            "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in their original packaging with tags attached. Please see our Returns Policy for detailed information.",
        },
        {
          question: "How do I initiate a return?",
          answer:
            "To initiate a return, log into your account, go to your order history, and select the items you wish to return. Follow the prompts to generate a return label and instructions.",
        },
        {
          question: "How long does it take to process a refund?",
          answer:
            "Once we receive your returned items, refunds are typically processed within 5-7 business days. The time it takes for the refund to appear in your account depends on your payment method.",
        },
      ],
    },
    {
      category: "Product Information",
      questions: [
        {
          question: "How do I know what size to order?",
          answer:
            "We provide detailed size charts for each product category. You can find these charts on the product pages. We recommend measuring yourself and comparing your measurements to our size chart.",
        },
        {
          question: "Are your products ethically sourced?",
          answer:
            "Yes, we are committed to ethical sourcing and sustainable practices. We work with suppliers who meet our strict standards for fair labor practices and environmental responsibility.",
        },
        {
          question: "Do you offer gift wrapping?",
          answer:
            "Yes, we offer gift wrapping services for an additional fee. You can select this option during checkout.",
        },
      ],
    },
  ];

  return (
    <CustomLayout>
      <div className="min-h-screen bg-white py-16">
        <CustomWrapper>
          <h1 className="text-4xl font-bold text-[#002400] mb-8">Frequently Asked Questions</h1>

          <div className="max-w-3xl mx-auto">
            {faqs.map((category, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-semibold text-[#002400] mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <FAQItem key={faqIndex} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Can&apos;t find what you&apos;re looking for?</p>
            <Link href="/customer-support" className="text-[#002400] font-semibold hover:underline">
              Contact our customer support team
            </Link>
          </div>
        </CustomWrapper>
      </div>
      <Footer />
    </CustomLayout>
  );
}
