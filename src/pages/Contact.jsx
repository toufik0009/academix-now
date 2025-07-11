import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { IoMdSend } from 'react-icons/io';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="py-3 px-4 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-10 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                    <IoMdSend className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                    <FaEnvelope className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                    <FaPhone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                    <FaMapMarkerAlt className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Location</h3>
                    <p className="mt-1 text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h2>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-indigo-600">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="h-8 w-8" />
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600">
                  <span className="sr-only">GitHub</span>
                  <FaGithub className="h-8 w-8" />
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600">
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}