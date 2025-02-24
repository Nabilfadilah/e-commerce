import React from "react";
import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
}

export default Home;
