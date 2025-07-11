import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaRegClock, FaCalendarAlt, FaChalkboardTeacher } from 'react-icons/fa';

const coursesData = {
  'clat-crash': {
    id: 'clat-crash',
    title: 'CLAT Crash Course - Target Batch',
    shortTitle: 'CLAT Crash',
    description: 'A 60-day intense course covering legal aptitude, reasoning, GK, and mock tests with expert mentorship.',
    longDescription: 'This intensive program is designed for students who need comprehensive preparation in a short time frame. Daily live classes, weekly mock tests, and personalized feedback sessions will help you maximize your CLAT score.',
    videoUrl: 'https://www.youtube.com/embed/5MgBikgcWnY',
    features: [
      '100+ Live Classes',
      'Comprehensive PDF Notes',
      '25 Full-length Mock Tests',
      'Daily Doubt Sessions',
      'Legal Reasoning Masterclass',
      'Current Affairs Compendium',
      'Personalized Mentorship'
    ],
    duration: '60 days',
    startDate: '2023-10-15',
    schedule: 'Mon-Sat, 2 hours daily',
    faculty: 'Prof. Rohan Sharma & Team',
    price: 5999,
    oldPrice: 9999,
    discount: '40% OFF',
    rating: 4.8,
    students: 1250,
    category: 'crash-course'
  },
  'clat-comprehensive': {
    id: 'clat-comprehensive',
    title: 'CLAT Comprehensive Program - Year Long',
    shortTitle: 'CLAT Comprehensive',
    description: 'Complete year-long preparation covering all sections with foundation building and advanced concepts.',
    longDescription: 'Our flagship program provides end-to-end CLAT preparation with 300+ hours of instruction, monthly progress tests, and interview preparation. Ideal for students starting early.',
    videoUrl: 'https://www.youtube.com/embed/8XaJhPTT0oM',
    features: [
      '300+ Live Classes',
      'Module-wise Study Material',
      '50 Mock Tests with Analysis',
      'Weekly Doubt Sessions',
      'Legal Current Affairs Updates',
      'Logical Reasoning Bootcamp',
      'Interview Preparation Module',
      'One-on-One Mentoring'
    ],
    duration: '12 months',
    startDate: '2023-11-01',
    schedule: 'Weekends + 3 Weekdays',
    faculty: 'Prof. Nandini Gupta & Team',
    price: 19999,
    oldPrice: 29999,
    discount: '33% OFF',
    rating: 4.9,
    students: 850,
    category: 'comprehensive'
  },
  'legal-aptitude-mastery': {
    id: 'legal-aptitude-mastery',
    title: 'Legal Aptitude Mastery Program',
    shortTitle: 'Legal Aptitude',
    description: 'Specialized course focusing exclusively on legal reasoning and aptitude section of CLAT.',
    longDescription: 'Master the most challenging section of CLAT with our intensive legal aptitude program. Covers all aspects of legal reasoning, principles, and case laws through practical applications.',
    videoUrl: 'https://www.youtube.com/embed/LK_nfiP0d4A',
    features: [
      '75+ Legal Concept Videos',
      '500+ Practice Questions',
      'Case Law Analysis',
      'Legal Maxims & Terms',
      'Sectional Mock Tests',
      'Answer Writing Practice',
      'Dedicated Mentor Support'
    ],
    duration: '8 weeks',
    startDate: '2023-10-20',
    schedule: 'Mon, Wed, Fri - 1.5 hours',
    faculty: 'Adv. Priya Singh',
    price: 3499,
    oldPrice: 4999,
    discount: '30% OFF',
    rating: 4.7,
    students: 620,
    category: 'sectional'
  },
  'clat-mock-series': {
    id: 'clat-mock-series',
    title: 'CLAT Ultimate Mock Test Series',
    shortTitle: 'Mock Test Series',
    description: '30 full-length mock tests with detailed analysis and All India Ranking.',
    longDescription: 'Our scientifically designed test series simulates actual CLAT conditions with varying difficulty levels. Includes detailed solution videos, performance analytics, and personalized improvement plans.',
    videoUrl: 'https://www.youtube.com/embed/vLxX3yZmw5Q',
    features: [
      '30 Full-length Mock Tests',
      'Detailed Solution Videos',
      'Performance Analytics',
      'All India Ranking',
      'Difficulty Level Tracking',
      'Time Management Analysis',
      'Weakness Identification'
    ],
    duration: 'Flexible',
    startDate: 'Anytime',
    schedule: 'Self-paced',
    faculty: 'Test Prep Experts',
    price: 2499,
    oldPrice: 3999,
    discount: '38% OFF',
    rating: 4.8,
    students: 2100,
    category: 'test-series'
  },
  'ailet-crash': {
    id: 'ailet-crash',
    title: 'AILET Special Crash Course',
    shortTitle: 'AILET Crash',
    description: 'Focused preparation for AILET with emphasis on legal aptitude and English excellence.',
    longDescription: 'This specialized program targets AILET-specific preparation with emphasis on its unique pattern. Includes previous year paper analysis, expected questions, and interview guidance for NLU Delhi.',
    videoUrl: 'https://www.youtube.com/embed/9Y7Xz7lZ6f4',
    features: [
      'AILET Pattern Classes',
      'Previous Year Analysis',
      'Legal Vocabulary Builder',
      'English Excellence Module',
      '10 AILET-specific Mocks',
      'Interview Preparation',
      'Special NLU Delhi Guidance'
    ],
    duration: '45 days',
    startDate: '2023-11-10',
    schedule: 'Daily 2.5 hours',
    faculty: 'Prof. Arjun Mehta',
    price: 6999,
    oldPrice: 8999,
    discount: '22% OFF',
    rating: 4.6,
    students: 480,
    category: 'crash-course'
  },
  'clat-foundation': {
    id: 'clat-foundation',
    title: 'CLAT Foundation Course (Class 11)',
    shortTitle: 'CLAT Foundation',
    description: 'Early starter program for Class 11 students to build strong fundamentals.',
    longDescription: 'Begin your CLAT journey early with our foundation program designed specifically for Class 11 students. Build conceptual clarity, develop reading habits, and gain early exposure to legal concepts.',
    videoUrl: 'https://www.youtube.com/embed/3zM5C4JQp8E',
    features: [
      'Concept Building Classes',
      'Reading Comprehension',
      'Basic Legal Concepts',
      'Current Affairs Basics',
      'Logical Reasoning Foundation',
      'Monthly Progress Tests',
      'Parent-Teacher Meetings'
    ],
    duration: '18 months',
    startDate: '2023-11-05',
    schedule: 'Weekends',
    faculty: 'Prof. Anjali Kapoor',
    price: 14999,
    oldPrice: 19999,
    discount: '25% OFF',
    rating: 4.5,
    students: 320,
    category: 'foundation'
  }
};


export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = coursesData[id];

  if (!course) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl text-gray-600">Course not found</p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button at Top */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
      >
        <FaArrowLeft className="mr-2" />
        Back to Courses
      </button>

      {/* Course Header */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="md:flex items-center">
          {/* Video Section */}
          <div className="md:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96 rounded-3xl"
                src={course.videoUrl}
                title="Course Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Course Info */}
          <div className="p-8 md:w-1/2">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl flex-nowrap md:text-3xl font-bold text-gray-800 mb-2">{course.title}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(course.rating) ? 'fill-current' : 'fill-current opacity-30'} />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">({course.students}+ students)</span>
                </div>
              </div>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {course.category}
              </span>
            </div>

            <p className="text-gray-700 mb-6">{course.longDescription}</p>

            {/* Course Meta */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <FaRegClock className="mr-2 text-indigo-500" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaCalendarAlt className="mr-2 text-indigo-500" />
                <span>Starts {course.startDate}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaChalkboardTeacher className="mr-2 text-indigo-500" />
                <span>{course.faculty}</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-indigo-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-indigo-700">₹{course.price.toLocaleString()}</p>
                  <p className="line-through text-gray-500">₹{course.oldPrice.toLocaleString()}</p>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                    {course.discount} OFF
                  </span>
                </div>
                <button
                  onClick={() => alert('Enrollment coming soon')}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Course Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
              </div>
              <p className="ml-3 text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Section */}
      {course.schedule && (
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Schedule</h2>
          <p className="text-gray-700">{course.schedule}</p>
        </div>
      )}
    </div>
  );
}
