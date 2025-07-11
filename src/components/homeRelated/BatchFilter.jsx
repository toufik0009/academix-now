// BatchFilter.jsx
import React, { useState } from 'react';
import { FiFilter, FiX } from 'react-icons/fi';

const BatchFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    type: 'All',
    category: 'All',
    month: 'All',
    price: 'All',
    duration: 'All'
  });

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: value
    };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleResetFilters = () => {
    const resetFilters = {
      type: 'All',
      category: 'All',
      month: 'All',
      price: 'All',
      duration: 'All'
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
  };

  return (
    <div className="bg-white py-6 px-4 shadow-sm rounded-lg max-w-7xl mx-auto mt-10">
      {/* Desktop Filter */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Filter Batches</h2>
          <button
            onClick={handleResetFilters}
            className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
          >
            <FiX className="mr-1" /> Reset Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Batch Type</label>
            <select
              name="type"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.type}
              onChange={handleFilterChange}
            >
              <option value="All">All Types</option>
              <option value="Crash Course">Crash Course</option>
              <option value="Foundation">Foundation</option>
              <option value="Comprehensive">Comprehensive</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.category}
              onChange={handleFilterChange}
            >
              <option value="All">All Categories</option>
              <option value="Target Batch">Target Batch</option>
              <option value="Regular Batch">Regular Batch</option>
              <option value="Premium Batch">Premium Batch</option>
            </select>
          </div>

          {/* Start Month Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Month</label>
            <select
              name="month"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.month}
              onChange={handleFilterChange}
            >
              <option value="All">Any Month</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
            </select>
          </div>

          {/* Price Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
            <select
              name="price"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.price}
              onChange={handleFilterChange}
            >
              <option value="All">All Prices</option>
              <option value="Under 1000">Under ₹1000</option>
              <option value="1000-5000">₹1000 - ₹5000</option>
              <option value="5000+">₹5000+</option>
            </select>
          </div>

          {/* Duration Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <select
              name="duration"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.duration}
              onChange={handleFilterChange}
            >
              <option value="All">Any Duration</option>
              <option value="1-4 weeks">1-4 weeks</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6+ months">6+ months</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mobile Filter */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileFiltersOpen(true)}
          className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100"
        >
          <FiFilter className="mr-2" />
          Filter Batches
        </button>

        {/* Mobile Filter Overlay */}
        {isMobileFiltersOpen && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-end">
            <div className="bg-white w-4/5 h-full overflow-y-auto p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button onClick={() => setIsMobileFiltersOpen(false)}>
                  <FiX size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Batch Type</label>
                  <select
                    name="type"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    value={filters.type}
                    onChange={handleFilterChange}
                  >
                    <option value="All">All Types</option>
                    <option value="Crash Course">Crash Course</option>
                    <option value="Foundation">Foundation</option>
                    <option value="Comprehensive">Comprehensive</option>
                  </select>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    name="category"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    value={filters.category}
                    onChange={handleFilterChange}
                  >
                    <option value="All">All Categories</option>
                    <option value="Target Batch">Target Batch</option>
                    <option value="Regular Batch">Regular Batch</option>
                    <option value="Premium Batch">Premium Batch</option>
                  </select>
                </div>

                {/* Start Month Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Month</label>
                  <select
                    name="month"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    value={filters.month}
                    onChange={handleFilterChange}
                  >
                    <option value="All">Any Month</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                  </select>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                  <select
                    name="price"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    value={filters.price}
                    onChange={handleFilterChange}
                  >
                    <option value="All">All Prices</option>
                    <option value="Under 1000">Under ₹1000</option>
                    <option value="1000-5000">₹1000 - ₹5000</option>
                    <option value="5000+">₹5000+</option>
                  </select>
                </div>

                {/* Duration Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <select
                    name="duration"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    value={filters.duration}
                    onChange={handleFilterChange}
                  >
                    <option value="All">Any Duration</option>
                    <option value="1-4 weeks">1-4 weeks</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between mt-8 space-x-4">
                <button
                  onClick={handleResetFilters}
                  className="flex-1 py-2 border border-gray-300 rounded-lg font-medium"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="flex-1 py-2 bg-indigo-600 text-white rounded-lg font-medium"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BatchFilter;