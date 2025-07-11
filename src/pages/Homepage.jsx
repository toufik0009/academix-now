// Homepage.jsx
import React, { useState } from "react";
import HomeBanner from "../components/homeRelated/HomeBanner";
import BatchFilter from "../components/homeRelated/BatchFilter";
import BatchList from "../components/homeRelated/BatchList";
import TestimonialSlider from "../components/homeRelated/TestimonialSlider";
import FAQSection from "../components/homeRelated/FAQSection";

export default function Homepage() {
  const [filters, setFilters] = useState({
    type: "All",
    category: "All",
    month: "All",
    price: "All",
    duration: "All"
  });

  return (
    <>
      <HomeBanner />
      <BatchFilter onFilter={setFilters} />
      <BatchList filters={filters} />
      <TestimonialSlider />
      <FAQSection />
    </>
  );
}