import React from "react";
import { FaStar, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const BatchCard = ({ batch }) => {
  const {
    courseId,
    title,
    image,
    rating,
    startDate,
    duration,
    price,
    oldPrice,
    features = [],
  } = batch;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

        <div className="flex items-center text-yellow-500 text-sm mt-1">
          {Array(5)
            .fill()
            .map((_, i) => (
              <FaStar
                key={i}
                className={i < rating ? "fill-current" : "text-gray-300"}
              />
            ))}
        </div>

        <p className="text-sm text-gray-500 mt-2">
          <strong>Start Date:</strong> {startDate} | <strong>Duration:</strong>{" "}
          {duration}
        </p>

        <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
          {features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-indigo-600 font-bold text-lg">₹{price}</p>
            {oldPrice && (
              <p className="line-through text-sm text-gray-400">₹{oldPrice}</p>
            )}
          </div>
          <div className="flex gap-2">
            <Link to={`/courses/${courseId}`}>
              <button className=" text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-4 py-2 rounded-md transition">
                Enroll Now
              </button>
            </Link>
            <button className="flex items-center gap-1 border px-3 py-2 rounded-md text-sm text-indigo-600 border-indigo-600 hover:bg-indigo-50 transition">
              <FaPlay className="text-xs" />
              Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchCard;
