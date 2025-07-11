import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-indigo-50 to-white border-t border-indigo-100">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700"
      >
        {/* Brand Info */}
        <motion.div variants={itemVariants}>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-block"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AcademixNow
            </h2>
          </motion.div>
          <p className="mt-4 text-sm leading-relaxed">
            Empowering CLAT aspirants through smart learning and expert guidance to achieve their dream law school admissions.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "Courses", path: "/courses" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
              { name: "Testimonials", path: "/testimonials" }
            ].map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  to={link.path} 
                  className="text-sm flex items-center hover:text-indigo-600 transition-colors"
                >
                  <span className="w-2 h-2 bg-indigo-300 rounded-full mr-2"></span>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <motion.li 
              className="flex items-start"
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
              <span>support@academixnow.com</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              whileHover={{ x: 5 }}
            >
              <FaPhoneAlt className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
              <span>+91 98765 43210</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              whileHover={{ x: 5 }}
            >
              <FaMapMarkerAlt className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
              <span>123, Edu Street, Delhi, India - 110001</span>
            </motion.li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect With Us</h3>
          <p className="text-sm mb-4">
            Follow us on social media for updates, tips, and success stories.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <FaFacebookF />, color: "bg-blue-600" },
              { icon: <FaInstagram />, color: "bg-pink-600" },
              { icon: <FaTwitter />, color: "bg-sky-500" },
              { icon: <FaYoutube />, color: "bg-red-600" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className={`${social.color} text-white p-3 rounded-full hover:shadow-lg transition-shadow`}
                variants={socialIconVariants}
                whileHover="hover"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-6 border-t border-indigo-100"
      >
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AcademixNow. All rights reserved. | 
            <a href="#" className="hover:text-indigo-600 ml-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-indigo-600 ml-2">Terms of Service</a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;