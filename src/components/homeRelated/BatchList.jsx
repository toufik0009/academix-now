// BatchList.jsx
import React from 'react';
import BatchCard from './BatchCard';

const dummyBatches = [
  {
    id: 'cc-jul25',
    courseId: 'clat-crash',
    title: 'CLAT Crash Course - July 2025 Batch',
    shortTitle: 'July 2025 Crash',
    description: '60-day intensive preparation for CLAT 2025',
    videoUrl: 'https://www.youtube.com/embed/5MgBikgcWnY',
    features: [
      '100+ Live Classes',
      '25 Full-length Mock Tests',
      'Daily Doubt Sessions',
      'Current Affairs Updates'
    ],
    duration: '60 days',
    startDate: '2025-07-15',
    endDate: '2025-09-13',
    schedule: 'Mon-Sat, 2 hours daily',
    faculty: 'Prof. Rohan Sharma',
    price: 5999,
    oldPrice: 9999,
    discount: '40% OFF',
    rating: 4.7,
    seats: 150,
    enrolled: 112,
    category: 'crash-course',
    image: 'https://img.freepik.com/free-vector/online-certification-illustration_23-2148575637.jpg'
  },
  {
    id: 'lam-aug25',
    courseId: 'legal-aptitude-mastery',
    title: 'Legal Aptitude Mastery - August 2025 Batch',
    shortTitle: 'Aug 2025 Legal',
    description: 'Master legal reasoning for CLAT 2025',
    videoUrl: 'https://www.youtube.com/embed/LK_nfiP0d4A',
    features: [
      '75+ Concept Videos',
      '500+ Practice Questions',
      'Case Law Analysis',
      'Sectional Tests'
    ],
    duration: '8 weeks',
    startDate: '2025-08-01',
    endDate: '2025-09-26',
    schedule: 'Mon, Wed, Fri - 1.5 hours',
    faculty: 'Adv. Priya Singh',
    price: 3499,
    oldPrice: 4999,
    discount: '30% OFF',
    rating: 4.8,
    seats: 100,
    enrolled: 78,
    category: 'sectional',
    image: 'https://img.freepik.com/free-vector/teacher-concept-illustration_114360-1635.jpg'
  },
  {
    id: 'ac-sep25',
    courseId: 'ailet-crash',
    title: 'AILET Crash Course - September 2025 Batch',
    shortTitle: 'Sep 2025 AILET',
    description: 'Focused preparation for AILET 2025',
    videoUrl: 'https://www.youtube.com/embed/9Y7Xz7lZ6f4',
    features: [
      'AILET Pattern Classes',
      '10 AILET Mocks',
      'Legal Vocabulary',
      'Interview Prep'
    ],
    duration: '45 days',
    startDate: '2025-09-10',
    endDate: '2025-10-25',
    schedule: 'Daily 2.5 hours',
    faculty: 'Prof. Arjun Mehta',
    price: 6999,
    oldPrice: 8999,
    discount: '22% OFF',
    rating: 4.6,
    seats: 120,
    enrolled: 95,
    category: 'crash-course',
    image: 'https://img.freepik.com/free-vector/online-tutorials-concept_23-2148527728.jpg'
  },
  {
    id: 'cc-oct25',
    courseId: 'clat-crash',
    title: 'CLAT Crash Course - October 2025 Batch',
    shortTitle: 'Oct 2025 Crash',
    description: 'Last-minute intensive for CLAT 2025',
    videoUrl: 'https://www.youtube.com/embed/5MgBikgcWnY',
    features: [
      '80+ Live Classes',
      '20 Full-length Mocks',
      'Rapid Revision',
      'Current Affairs Capsule'
    ],
    duration: '45 days',
    startDate: '2025-10-01',
    endDate: '2025-11-15',
    schedule: 'Daily 3 hours',
    faculty: 'Prof. Nandini Gupta',
    price: 6499,
    oldPrice: 8999,
    discount: '28% OFF',
    rating: 4.5,
    seats: 200,
    enrolled: 145,
    category: 'crash-course',
    image: 'https://img.freepik.com/free-vector/online-certification-illustration_23-2148575637.jpg'
  },
  {
    id: 'cp-nov25',
    courseId: 'clat-comprehensive',
    title: 'CLAT Comprehensive - November 2025 Batch',
    shortTitle: 'Nov 2025 Comp',
    description: 'Year-long preparation for CLAT 2026',
    videoUrl: 'https://www.youtube.com/embed/8XaJhPTT0oM',
    features: [
      '300+ Live Classes',
      '50 Mock Tests',
      'Interview Prep',
      'One-on-One Mentoring'
    ],
    duration: '12 months',
    startDate: '2025-11-01',
    endDate: '2026-10-31',
    schedule: 'Weekends + 3 Weekdays',
    faculty: 'Prof. Rohan Sharma',
    price: 19999,
    oldPrice: 29999,
    discount: '33% OFF',
    rating: 4.9,
    seats: 300,
    enrolled: 210,
    category: 'comprehensive',
    image: 'https://img.freepik.com/free-vector/education-horizontal-typography-banner-college-university_107791-4017.jpg'
  }
];

const BatchList = ({ filters }) => {
  const filterBatches = (batches) => {
    return batches.filter(batch => {
      return (
        (filters.type === "All" || batch.type === filters.type) &&
        (filters.category === "All" || batch.category === filters.category) &&
        (filters.month === "All" || batch.startMonth === filters.month) &&
        (filters.price === "All" || batch.priceRange === filters.price) &&
        (filters.duration === "All" || batch.durationCategory === filters.duration)
      );
    });
  };

  const filteredBatches = filterBatches(dummyBatches);

  return (
    <section className="max-w-7xl mx-auto px-4 mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {Object.values(filters).every(val => val === "All") 
          ? "Available Batches" 
          : "Filtered Batches"}
      </h2>

      {filteredBatches.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">
            No batches match your current filters
          </h3>
          <p className="text-gray-500 mt-2">
            Try adjusting your filter criteria
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {filteredBatches.map((batch) => (
            <BatchCard key={batch.id} batch={batch} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BatchList;