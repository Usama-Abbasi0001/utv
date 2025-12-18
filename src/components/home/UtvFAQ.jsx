import React, { useState } from "react";

const faqs = [
  {
    question: "What is UTV?",
    answer:
      "UTV is a digital streaming platform offering entertainment, creator content, and educational programming worldwide.",
  },
  {
    question: "How can I watch UTV?",
    answer:
      "You can watch ZTV by signing up on our official website and streaming content on any supported device.",
  },
  {
    question: "Is UTV free?",
    answer:
      "UTV provides both free and premium content. Some exclusive shows require a subscription.",
  },
  {
    question: "Can I collaborate with UTV?",
    answer:
      "Yes, creators and production teams can collaborate with UTV through our official collaboration program.",
  },
  {
    question: "Can I advertise on UTV?",
    answer:
      "Yes, brands can advertise on UTV. Contact our marketing team for customized advertising solutions.",
  },
];

function UtvFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#0A0612] to-black text-white py-20 px-4">
      <div className="max-w-[1000px] mx-auto lg:p-0 md:p-10 p-5">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          UTV FAQ
        </h2>

        {/* FAQ Section */}
        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-lg bg-white/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center 
                           p-4 md:p-5 text-left font-semibold"
              >
                <span>{faq.question}</span>
                <span
                  className={`transition-transform duration-300
                  ${activeIndex === index ? "rotate-180" : ""}`}
                >
                  ⌄
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300
                ${activeIndex === index ? "max-h-40 p-4 pt-0" : "max-h-0"}`}
              >
                <p className="text-gray-300 text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Questions Section */}
        <div className="border-t border-white/20 pt-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Do you have any questions?
          </h3>
          <p className="text-gray-400 mb-6 max-w-[600px]">
            Feel free to send us your questions or request a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-[500px]">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 rounded-md bg-transparent 
                         border border-white/30 text-white 
                         focus:outline-none focus:border-[#953BF5]"
            />

            <button
              className="px-6 py-3 rounded-md bg-[#953BF5] 
                         hover:bg-[#7d2fe0] transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UtvFAQ;
