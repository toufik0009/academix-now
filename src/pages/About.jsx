import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaBookOpen, FaUserGraduate } from 'react-icons/fa';
import { GiBrain, GiTeacher } from 'react-icons/gi';
import { MdOutlineScience, MdComputer } from 'react-icons/md';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
            About <span className="text-indigo-600">AcademixNow</span>
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-600">
            Revolutionizing education through innovative technology and personalized learning experiences.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2 lg:pr-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At AcademixNow, we believe education should be accessible, engaging, and tailored to each learner's needs. 
                  Our platform bridges the gap between traditional education and modern technological advancements.
                </p>
                <p className="text-lg text-gray-600">
                  We're committed to empowering students, educators, and institutions with tools that make learning more effective and enjoyable.
                </p>
              </div>
              <div className="mt-10 lg:mt-0 lg:w-1/2">
                <div className="bg-indigo-100 rounded-xl p-8 h-full flex items-center justify-center">
                  <FaGraduationCap className="h-32 w-32 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose AcademixNow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <GiBrain className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Learning</h3>
                <p className="text-gray-600">
                  AI-powered recommendations adapt to each student's learning style and pace for optimal results.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <FaChalkboardTeacher className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Educators</h3>
                <p className="text-gray-600">
                  Learn from top instructors and industry professionals passionate about sharing their knowledge.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <FaBookOpen className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Resources</h3>
                <p className="text-gray-600">
                  Access to extensive libraries of courses, study materials, and practice exercises.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <MdOutlineScience className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">STEM Focus</h3>
                <p className="text-gray-600">
                  Special emphasis on Science, Technology, Engineering, and Mathematics education.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <MdComputer className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Platform</h3>
                <p className="text-gray-600">
                  Engaging multimedia content, quizzes, and collaborative learning tools.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <FaUserGraduate className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Career Pathways</h3>
                <p className="text-gray-600">
                  Programs designed to prepare students for college and career success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 sm:p-10 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <GiTeacher className="h-16 w-16 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dr. Sarah Johnson</h3>
              <p className="text-indigo-600 font-medium">Founder & CEO</p>
              <p className="text-gray-600 mt-2">Education Technology Specialist</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <MdComputer className="h-16 w-16 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Michael Chen</h3>
              <p className="text-indigo-600 font-medium">CTO</p>
              <p className="text-gray-600 mt-2">Software Architect</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <FaBookOpen className="h-16 w-16 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Emily Rodriguez</h3>
              <p className="text-indigo-600 font-medium">Curriculum Director</p>
              <p className="text-gray-600 mt-2">Educational Content Expert</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <FaGraduationCap className="h-16 w-16 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">David Kim</h3>
              <p className="text-indigo-600 font-medium">Student Success</p>
              <p className="text-gray-600 mt-2">Learning Experience Designer</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-indigo-600 rounded-2xl shadow-xl overflow-hidden p-8 sm:p-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">10,000+</p>
              <p className="text-indigo-100">Active Students</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-indigo-100">Courses Available</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-indigo-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}