import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import RecentNews from "../components/RecentNews";
import BottomImage from "../components/BottomImage";
import Footer from "../components/Footer";
import MissionVision from "../components/MissionVision";
import NelsonMandela from "../components/NelsonMandela";

const Home = () => {
  return (
    <div className="container-xxl">
      <Navbar />
      <Header />
      <About />
      <MissionVision />
      <RecentNews />
      <NelsonMandela />
      <BottomImage />
      <Footer />
    </div>
  );
};

export default Home;
