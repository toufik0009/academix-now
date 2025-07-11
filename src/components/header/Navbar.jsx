import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiUser,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../../providers/ContextApi";

export default function Navbar() {
  const { isAuthorized, user, logout } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCourses = () => setIsCoursesOpen(!isCoursesOpen);
  const toggleMobileCourses = () => setMobileCoursesOpen(!mobileCoursesOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Courses",
      path: "/courses",
      subLinks: [
        { name: "All Courses", path: "/courses" },
        { name: "Clat Crash", path: "/courses/clat-crash" },
        { name: "Legal Aptitude Mastery", path: "/courses/legal-aptitude-mastery" },
        { name: "Ailet Crash", path: "/courses/ailet-crash" },
        { name: "Clat Comprehensive", path: "/courses/clat-comprehensive" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-2" : "bg-white shadow-sm py-3"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-2 py-1 rounded mr-2 text-sm sm:text-base">
              AN
            </span>
            AcademixNow
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.subLinks ? (
                  <div className="group">
                    <button
                      onClick={toggleCourses}
                      onMouseEnter={() => setIsCoursesOpen(true)}
                      className={`flex items-center px-3 py-2 text-gray-700 transition duration-300 font-medium rounded-lg ${
                        isCoursesOpen ? "text-indigo-600 bg-indigo-50" : "hover:text-indigo-600"
                      } text-sm lg:text-base`}
                    >
                      {link.name}
                      {isCoursesOpen ? (
                        <FiChevronUp className="ml-1" />
                      ) : (
                        <FiChevronDown className="ml-1" />
                      )}
                    </button>

                    <div 
                      className="absolute left-0 mt-0 w-56"
                      onMouseLeave={() => setIsCoursesOpen(false)}
                    >
                      <AnimatePresence>
                        {isCoursesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-white rounded-md shadow-lg z-50 border border-gray-100"
                          >
                            <div className="py-1">
                              {link.subLinks.map((subLink) => (
                                <Link
                                  key={subLink.name}
                                  to={subLink.path}
                                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition duration-200 text-sm"
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition duration-300 font-medium rounded-lg hover:bg-indigo-50 text-sm lg:text-base"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Auth Buttons */}
            {!isAuthorized ? (
              <div className="ml-2 flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition duration-300 font-medium flex items-center text-sm lg:text-base"
                >
                  <FiUser className="mr-1" /> Login
                </Link>
                <Link
                  to="/signup"
                  className="px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium transition duration-300 text-sm lg:text-base"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="ml-2 flex items-center space-x-2">
          
                <button
                  onClick={logout}
                  className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition duration-300 text-sm lg:text-base"
                >
                  Logout
                </button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-indigo-600 hover:bg-indigo-50 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white overflow-hidden shadow-inner"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100 last:border-b-0">
                  {link.subLinks ? (
                    <>
                      <button
                        onClick={toggleMobileCourses}
                        className={`w-full flex justify-between items-center px-4 py-3 font-medium rounded-lg ${
                          mobileCoursesOpen ? "text-indigo-600 bg-indigo-50" : "text-gray-700"
                        } text-base`}
                      >
                        {link.name}
                        {mobileCoursesOpen ? <FiChevronUp /> : <FiChevronDown />}
                      </button>

                      <AnimatePresence>
                        {mobileCoursesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 bg-gray-50 rounded-lg mx-2"
                          >
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                to={subLink.path}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileCoursesOpen(false);
                                }}
                                className="block px-4 py-3 text-gray-600 font-medium rounded-lg hover:bg-indigo-100 border-b border-gray-100 last:border-b-0 text-sm"
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-indigo-50 text-base"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="px-2 pt-2">
                {!isAuthorized ? (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-4 py-3 text-center text-gray-700 font-medium rounded-lg hover:bg-indigo-50 mb-2 border border-gray-200 text-base"
                    >
                      <FiUser className="inline mr-2" />
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-4 py-3 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 text-base"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <>
                  
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="block w-full px-4 py-3 text-center bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 text-base"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}