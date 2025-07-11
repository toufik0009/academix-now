import React, { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is the duration of the crash course?',
    answer: 'Our intensive crash course lasts 60 days, covering all important topics through daily live classes, weekly mock tests, and personalized feedback sessions. The program is designed to maximize your preparation in minimal time.',
  },
  {
    question: 'Are demo classes available before enrollment?',
    answer: 'Yes! We offer free demo classes for all our courses. You can experience our teaching methodology, interact with faculty, and assess the course quality before making any commitment. Contact our support team to schedule a demo session.',
  },
  {
    question: 'What study materials are provided?',
    answer: 'Enrolled students receive comprehensive study material including: concept PDFs, previous year question banks, 50+ practice tests, legal reasoning workbooks, and current affairs compilations. All materials are regularly updated and available in digital format.',
  },
  {
    question: 'What is the refund policy?',
    answer: 'We offer a 100% refund if cancelled within 3 days of joining (before attending the second class). After that, a prorated refund is available until 7 days into the program. All refund requests must be submitted through your student portal.',
  },
  {
    question: 'How are doubt sessions conducted?',
    answer: 'We provide multiple doubt-solving channels: 1) Daily 30-minute Q&A after live classes, 2) Dedicated doubt sessions every Saturday, 3) 24/7 query support through our app, and 4) One-on-one mentor calls for complex issues.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12 relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-5xl text-indigo-100 opacity-80 z-0">
          <FaQuestionCircle />
        </div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 relative z-10"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Everything you need to know about our programs
        </motion.p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center p-5 md:p-6 text-left transition-colors ${activeIndex === index ? 'bg-indigo-50 text-indigo-700' : 'bg-white hover:bg-gray-50 text-gray-800'}`}
              whileHover={{ scale: 1.01 }}
            >
              <span className="font-medium text-lg md:text-base">{faq.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-indigo-500" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600">
                    {faq.answer}
                    {index === 2 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {['Concept PDFs', 'Mock Tests', 'Workbooks', 'Current Affairs'].map((item, i) => (
                          <span key={i} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600 mb-6">
          Still have questions? Contact our support team
        </p>
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all">
          Get in Touch
        </button>
      </motion.div>
    </section>
  );
}