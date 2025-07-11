import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    rank: "AIR 4 - CLAT 2024",
    message:
      "The crash course helped me stay focused. The mock tests were game-changing! The faculty provided personalized attention that made all the difference in my preparation journey.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohan Mehta",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rank: "NLU Delhi Selected",
    message:
      "Live classes & regular doubt solving kept me on track. The study material was exceptionally well-curated and the mentorship program was invaluable. The interview prep sessions were particularly transformative.",
    rating: 5,
  },
  {
    id: 3,
    name: "Shruti Rao",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    rank: "AIR 12 - AILET",
    message:
      "Amazing faculty, concise notes, and a focused curriculum. The interview preparation sessions boosted my confidence tremendously. The legal reasoning workshops were exceptional!",
    rating: 4,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={`${
            i < rating ? "text-yellow-400" : "text-gray-300"
          } inline-block mx-0.5`}
          size={isMobile ? 14 : 16}
        />
      ));
  };

  const testimonialVariants = isMobile
    ? {
        enter: { y: 50, opacity: 0 },
        center: {
          y: 0,
          opacity: 1,
          transition: {
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          },
        },
        exit: { y: -50, opacity: 0 },
      }
    : {
        enter: (direction) => ({
          x: direction > 0 ? 100 : -100,
          opacity: 0,
        }),
        center: {
          x: 0,
          opacity: 1,
          transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          },
        },
        exit: (direction) => ({
          x: direction < 0 ? 100 : -100,
          opacity: 0,
        }),
      };

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden">
      {/* Mobile-optimized background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-4 md:left-20 w-32 h-32 md:w-64 md:h-64 rounded-full bg-indigo-200 mix-blend-multiply filter blur-lg md:blur-xl animate-blob"></div>
        <div className="absolute bottom-10 right-4 md:bottom-20 md:right-20 w-32 h-32 md:w-64 md:h-64 rounded-full bg-blue-200 mix-blend-multiply filter blur-lg md:blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
            <span className="relative inline-block">
              Voices of Success
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-200 opacity-50 -z-10"></span>
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our students who transformed their dreams into reality
          </p>
        </motion.div>

        <div className="relative h-[400px] md:h-[500px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 px-2"
            >
              <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl h-full flex flex-col md:flex-row items-center gap-4 md:gap-8 transition-all duration-300">
                <div className="md:w-1/3 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative mb-4 md:mb-6"
                  >
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-md md:shadow-xl"
                    />
                    <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 bg-indigo-600 text-white rounded-full p-2 md:p-3 shadow-md md:shadow-lg">
                      <FaQuoteLeft className="text-sm md:text-lg" />
                    </div>
                  </motion.div>

                  <div className="text-center">
                    <h3 className="text-lg md:text-2xl font-bold text-gray-800">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-sm md:text-base text-indigo-600 font-medium mb-1 md:mb-2">
                      {testimonials[currentIndex].rank}
                    </p>
                    <div className="flex justify-center">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 relative">
                  <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 text-4xl md:text-6xl text-indigo-100 opacity-80">
                    <FaQuoteLeft />
                  </div>
                  <p className="text-sm md:text-base lg:text-xl text-gray-700 leading-relaxed relative z-10">
                    {testimonials[currentIndex].message}
                  </p>
                  <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 text-4xl md:text-6xl text-indigo-100 opacity-80">
                    <FaQuoteLeft className="rotate-180" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-6 md:mt-10 space-x-2 md:space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 md:p-3 rounded-full bg-white shadow-md md:shadow-lg text-indigo-600 hover:bg-indigo-50 transition-colors group"
            aria-label="Previous testimonial"
          >
            <IoIosArrowDropleft className="text-xl md:text-2xl group-hover:-translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center space-x-1 md:space-x-2 mx-2 md:mx-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-indigo-600 w-4 md:w-6"
                    : "bg-indigo-200 hover:bg-indigo-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 md:p-3 rounded-full bg-white shadow-md md:shadow-lg text-indigo-600 hover:bg-indigo-50 transition-colors group"
            aria-label="Next testimonial"
          >
            <IoIosArrowDropright className="text-xl md:text-2xl group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-10px, 10px) scale(0.95);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;
