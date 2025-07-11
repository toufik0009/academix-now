import React, { useState } from "react";
import CourseSection from "../components/courseRelated/CourseSection";
import {
  FaSearch,
  FaBookOpen,
  FaChalkboardTeacher,
  FaAward,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Unlock Your <span className="text-indigo-600">Legal Career</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Premium courses designed by top educators to help you ace CLAT,
              AILET, and other law entrance exams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto relative flex justify-between items-center rounded-full bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent px-2 py-2 "
            >
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full outline-none pl-4"
                value={searchTerm}
                onChange={handleSearch}
              />
              <button className=" bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
                <FaSearch className="text-lg" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-8 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-indigo-50 p-6 rounded-xl text-center"
              >
                <div className="text-indigo-600 text-3xl mb-2 flex justify-center">
                  <FaBookOpen />
                </div>
                <h3 className="text-xl font-bold text-gray-800">50+ Courses</h3>
                <p className="text-gray-600">Comprehensive curriculum</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-indigo-50 p-6 rounded-xl text-center"
              >
                <div className="text-indigo-600 text-3xl mb-2 flex justify-center">
                  <FaChalkboardTeacher />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Expert Faculty
                </h3>
                <p className="text-gray-600">Top educators</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-indigo-50 p-6 rounded-xl text-center"
              >
                <div className="text-indigo-600 text-3xl mb-2 flex justify-center">
                  <FaAward />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  1000+ Selections
                </h3>
                <p className="text-gray-600">In top NLUs</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-indigo-50 p-6 rounded-xl text-center"
              >
                <div className="text-indigo-600 text-3xl mb-2 flex justify-center">
                  <FaAward />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  24/7 Support
                </h3>
                <p className="text-gray-600">Doubt resolution</p>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Date Filter */}
          <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
            <FaCalendarAlt className="text-indigo-500 mr-2" />
            <select
              className="bg-transparent outline-none text-gray-700"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            >
              <option value="all">All Start Dates</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="self-paced">Self-Paced</option>
            </select>
          </div>

          {/* Duration Filter */}
          <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
            <FaClock className="text-indigo-500 mr-2" />
            <select
              className="bg-transparent outline-none text-gray-700"
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value)}
            >
              <option value="all">All Durations</option>
              <option value="short">Short (1-3 months)</option>
              <option value="medium">Medium (3-6 months)</option>
              <option value="long">Long (6+ months)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Course Section with Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <CourseSection
          searchTerm={searchTerm}
          dateFilter={dateFilter}
          durationFilter={durationFilter}
        />
      </div>
    </div>
  );
}
