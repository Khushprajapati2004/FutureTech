import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is AI?",
    answer:
      "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
  },
  {
    question: "How can I listen to your podcasts?",
    answer: "You can listen on our website or through platforms like Spotify, Apple Podcasts, and Google Podcasts.",
  },
  {
    question: "Are your podcasts free to listen to?",
    answer: "Yes, all our podcasts are completely free to listen to.",
  },
  {
    question: "Can I download episodes to listen offline?",
    answer: "Yes, you can download episodes on most podcast platforms for offline listening.",
  },
  {
    question: "How often do you release new episodes?",
    answer: "We release new episodes every week.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" md:py-16 py-4 lg:pr-20 md:pr-4 pr-0 rounded-lg space-y-5">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-[#262626] rounded-md overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between cursor-pointer items-center px-4 py-4 text-left bg-[#1a1a1a] transition"
          >
            <span className="font-medium ">{faq.question}</span>
            {openIndex === index ? (
              <FiMinus className="text-yellow-400" />
            ) : (
              <FiPlus className="text-yellow-400" />
            )}
          </button>

          {openIndex === index && (
            <div className="px-6 py-4 text-[#98989A] text-sm bg-[#1a1a1a] border-t border-[#262626]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
