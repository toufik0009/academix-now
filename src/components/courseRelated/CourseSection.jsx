import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaCalendarAlt, FaChalkboardTeacher, FaClock, FaSearch, FaStar } from "react-icons/fa";

const coursesData = {
  "clat-crash": {
    id: "clat-crash",
    title: "CLAT Crash Course - Target Batch",
    shortTitle: "CLAT Crash",
    description:
      "A 60-day intense course covering legal aptitude, reasoning, GK, and mock tests with expert mentorship.",
    longDescription:
      "This intensive program is designed for students who need comprehensive preparation in a short time frame. Daily live classes, weekly mock tests, and personalized feedback sessions will help you maximize your CLAT score.",
    videoUrl: "https://www.youtube.com/embed/5MgBikgcWnY",
    features: [
      "100+ Live Classes",
      "Comprehensive PDF Notes",
      "25 Full-length Mock Tests",
      "Daily Doubt Sessions",
      "Legal Reasoning Masterclass",
      "Current Affairs Compendium",
      "Personalized Mentorship",
    ],
    duration: "60 days",
    startDate: "2023-10-15",
    schedule: "Mon-Sat, 2 hours daily",
    faculty: "Prof. Rohan Sharma & Team",
    price: 5999,
    oldPrice: 9999,
    discount: "40% OFF",
    rating: 4.8,
    students: 1250,
    category: "crash-course",
  },
  "clat-comprehensive": {
    id: "clat-comprehensive",
    title: "CLAT Comprehensive Program - Year Long",
    shortTitle: "CLAT Comprehensive",
    description:
      "Complete year-long preparation covering all sections with foundation building and advanced concepts.",
    longDescription:
      "Our flagship program provides end-to-end CLAT preparation with 300+ hours of instruction, monthly progress tests, and interview preparation. Ideal for students starting early.",
    videoUrl: "https://www.youtube.com/embed/8XaJhPTT0oM",
    features: [
      "300+ Live Classes",
      "Module-wise Study Material",
      "50 Mock Tests with Analysis",
      "Weekly Doubt Sessions",
      "Legal Current Affairs Updates",
      "Logical Reasoning Bootcamp",
      "Interview Preparation Module",
      "One-on-One Mentoring",
    ],
    duration: "12 months",
    startDate: "2023-11-01",
    schedule: "Weekends + 3 Weekdays",
    faculty: "Prof. Nandini Gupta & Team",
    price: 19999,
    oldPrice: 29999,
    discount: "33% OFF",
    rating: 4.9,
    students: 850,
    category: "comprehensive",
  },
  "legal-aptitude-mastery": {
    id: "legal-aptitude-mastery",
    title: "Legal Aptitude Mastery Program",
    shortTitle: "Legal Aptitude",
    description:
      "Specialized course focusing exclusively on legal reasoning and aptitude section of CLAT.",
    longDescription:
      "Master the most challenging section of CLAT with our intensive legal aptitude program. Covers all aspects of legal reasoning, principles, and case laws through practical applications.",
    videoUrl: "https://www.youtube.com/embed/LK_nfiP0d4A",
    features: [
      "75+ Legal Concept Videos",
      "500+ Practice Questions",
      "Case Law Analysis",
      "Legal Maxims & Terms",
      "Sectional Mock Tests",
      "Answer Writing Practice",
      "Dedicated Mentor Support",
    ],
    duration: "8 weeks",
    startDate: "2023-10-20",
    schedule: "Mon, Wed, Fri - 1.5 hours",
    faculty: "Adv. Priya Singh",
    price: 3499,
    oldPrice: 4999,
    discount: "30% OFF",
    rating: 4.7,
    students: 620,
    category: "sectional",
  },
  "clat-mock-series": {
    id: "clat-mock-series",
    title: "CLAT Ultimate Mock Test Series",
    shortTitle: "Mock Test Series",
    description:
      "30 full-length mock tests with detailed analysis and All India Ranking.",
    longDescription:
      "Our scientifically designed test series simulates actual CLAT conditions with varying difficulty levels. Includes detailed solution videos, performance analytics, and personalized improvement plans.",
    videoUrl: "https://www.youtube.com/embed/vLxX3yZmw5Q",
    features: [
      "30 Full-length Mock Tests",
      "Detailed Solution Videos",
      "Performance Analytics",
      "All India Ranking",
      "Difficulty Level Tracking",
      "Time Management Analysis",
      "Weakness Identification",
    ],
    duration: "Flexible",
    startDate: "Anytime",
    schedule: "Self-paced",
    faculty: "Test Prep Experts",
    price: 2499,
    oldPrice: 3999,
    discount: "38% OFF",
    rating: 4.8,
    students: 2100,
    category: "test-series",
  },
  "ailet-crash": {
    id: "ailet-crash",
    title: "AILET Special Crash Course",
    shortTitle: "AILET Crash",
    description:
      "Focused preparation for AILET with emphasis on legal aptitude and English excellence.",
    longDescription:
      "This specialized program targets AILET-specific preparation with emphasis on its unique pattern. Includes previous year paper analysis, expected questions, and interview guidance for NLU Delhi.",
    videoUrl: "https://www.youtube.com/embed/9Y7Xz7lZ6f4",
    features: [
      "AILET Pattern Classes",
      "Previous Year Analysis",
      "Legal Vocabulary Builder",
      "English Excellence Module",
      "10 AILET-specific Mocks",
      "Interview Preparation",
      "Special NLU Delhi Guidance",
    ],
    duration: "45 days",
    startDate: "2023-11-10",
    schedule: "Daily 2.5 hours",
    faculty: "Prof. Arjun Mehta",
    price: 6999,
    oldPrice: 8999,
    discount: "22% OFF",
    rating: 4.6,
    students: 480,
    category: "crash-course",
  },
  "clat-foundation": {
    id: "clat-foundation",
    title: "CLAT Foundation Course (Class 11)",
    shortTitle: "CLAT Foundation",
    description:
      "Early starter program for Class 11 students to build strong fundamentals.",
    longDescription:
      "Begin your CLAT journey early with our foundation program designed specifically for Class 11 students. Build conceptual clarity, develop reading habits, and gain early exposure to legal concepts.",
    videoUrl: "https://www.youtube.com/embed/3zM5C4JQp8E",
    features: [
      "Concept Building Classes",
      "Reading Comprehension",
      "Basic Legal Concepts",
      "Current Affairs Basics",
      "Logical Reasoning Foundation",
      "Monthly Progress Tests",
      "Parent-Teacher Meetings",
    ],
    duration: "18 months",
    startDate: "2023-11-05",
    schedule: "Weekends",
    faculty: "Prof. Anjali Kapoor",
    price: 14999,
    oldPrice: 19999,
    discount: "25% OFF",
    rating: 4.5,
    students: 320,
    category: "foundation",
  },
};

export default function CourseSection({
  searchTerm,
  dateFilter,
  durationFilter,
}) {
  const courses = Object.values(coursesData);

  // Filter logic (same as before)
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    const currentDate = new Date();
    const courseStartDate = new Date(course.startDate);

    const matchesDate =
      dateFilter === "all" ||
      (dateFilter === "upcoming" && courseStartDate > currentDate) ||
      (dateFilter === "ongoing" &&
        courseStartDate <= currentDate &&
        course.duration !== "Flexible") ||
      (dateFilter === "self-paced" && course.duration === "Flexible");

    let durationInDays = 0;
    if (course.duration.includes("day")) {
      durationInDays = parseInt(course.duration);
    } else if (course.duration.includes("week")) {
      durationInDays = parseInt(course.duration) * 7;
    } else if (course.duration.includes("month")) {
      durationInDays = parseInt(course.duration) * 30;
    } else if (course.duration === "Flexible") {
      durationInDays = 0;
    }

    let durationCategory = "all";
    if (durationInDays > 0) {
      if (durationInDays <= 90) durationCategory = "short";
      else if (durationInDays <= 180) durationCategory = "medium";
      else durationCategory = "long";
    }

    const matchesDuration =
      durationFilter === "all" ||
      (durationFilter === "short" && durationCategory === "short") ||
      (durationFilter === "medium" && durationCategory === "medium") ||
      (durationFilter === "long" && durationCategory === "long");

    return matchesSearch && matchesDate && matchesDuration;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Explore Our <span className="text-indigo-600">Courses</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Carefully crafted programs to help you achieve your legal career goals
        </p>
      </div>

      {filteredCourses.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <FaSearch className="text-indigo-600 text-3xl" />
          </div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            No courses found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
            >
              {/* Course Image/Video Placeholder */}
              <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaBookOpen className="text-white text-5xl opacity-20" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {course.category.replace("-", " ")}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-800">
                    {course.shortTitle}
                  </h2>
                  <div className="flex items-center bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-sm font-medium">
                    <FaStar className="mr-1" />
                    {course.rating}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div className="flex items-center text-gray-500">
                    <FaCalendarAlt className="mr-2 text-indigo-500" />
                    <span>{course.startDate}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <FaClock className="mr-2 text-indigo-500" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500 col-span-2">
                    <FaChalkboardTeacher className="mr-2 text-indigo-500" />
                    <span className="truncate">{course.faculty}</span>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-indigo-600">
                        ₹{course.price.toLocaleString()}
                      </span>
                      {course.oldPrice && (
                        <span className="ml-2 text-sm text-gray-400 line-through">
                          ₹{course.oldPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <Link
                      to={`/courses/${course.id}`}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-medium rounded-md transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}