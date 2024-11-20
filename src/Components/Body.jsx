import React, { useState, useEffect } from "react";
import CollegeName from "./CollegeName"
import Loading from "./Loading"; // Import the loader
import Faq from "./Faq";
import About from "./About";
import CountdownTimer from "./CountDown";
import Footer from "./Footer";
import Highlight from "./Highlight";
import TeamCarousel from "./TeamCarousel";
import InfoSections from "./InfoSections";
import HomeEventDetails from "./HomeEventDetails";
import EventHome from "./EventHome";

const Body = () => {
  const [loading, setLoading] = useState(true);  // State to control loader visibility

  useEffect(() => {
    // Set loader timeout to 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);  // Hide loader after 2 seconds
    }, 2500);
    
    // Cleanup timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Display loader while loading is true
  }

  return (
    <div>
      <CollegeName/>
      <CountdownTimer />
      <About />
      <EventHome />
      <HomeEventDetails />
      <InfoSections />
      <TeamCarousel />
      <Faq />
      <Footer />
    </div>
  );
};

export default Body;
