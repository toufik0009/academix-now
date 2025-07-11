import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaArrowRight,
  FaChartLine,
  FaCertificate,
  FaUserTie,
} from "react-icons/fa";

export default function HomeBanner() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-white to-yellow-50 py-14 px-4 md:px-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
              New Batch Starting Soon
            </span>
            <span className="text-sm text-gray-500">
              Limited seats available
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Crash Course{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Batch
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed">
            Master essential concepts with top industry mentors, practice with
            real-world scenarios, and boost your confidence with our proven
            learning framework.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/courses"
              className="px-8 py-4 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-2"
            >
              Join Crash Course <FaArrowRight className="text-sm" />
            </Link>

            <button className="group relative flex items-center gap-3 px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold text-lg rounded-xl transition-all duration-300 ease-in-out hover:bg-indigo-600 hover:text-white hover:shadow-2xl">
              <span className="relative flex items-center justify-center w-5 h-5">
                <FaPlay className="text-sm transform transition-transform duration-800 ease-in-out group-hover:scale-125 group-hover:rotate-12" />
                <span className="absolute -inset-1 bg-indigo-400 rounded-full blur-sm opacity-20 scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out" />
              </span>
              <span className="relative z-10">Watch Demo</span>
            </button>
          </div>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-full text-indigo-600">
                <FaUserTie className="text-lg" />
              </div>
              <span className="text-sm font-medium">Expert Mentors</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                <FaChartLine className="text-lg" />
              </div>
              <span className="text-sm font-medium">Performance Tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-full text-yellow-600">
                <FaCertificate className="text-lg" />
              </div>
              <span className="text-sm font-medium">Certification</span>
            </div>
          </div>
        </motion.div>

        {/* Right Image or Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl border-8 border-white transform rotate-1 hover:rotate-0 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Students learning together"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-white">
                <h3 className="font-bold text-xl">Batch Starts: June 15</h3>
                <p className="text-sm opacity-90 mt-1">
                  Last few seats remaining
                </p>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <motion.div
            className="absolute -bottom-6 -right-2 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-gray-100"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg text-green-600">
                <FaChartLine className="text-xl" />
              </div>
              <div>
                <p className="font-bold text-gray-900">92% Success Rate</p>
                <p className="text-xs text-gray-500">Last batch results</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
