import React from "react";
import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import NewArrivals from "../../components/products/NewArrivals";
import BestSellers from "../../components/products/BestSellers";
import NewsLetter from "../../components/newsletter/NewsLetter";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <NewArrivals />
      <BestSellers />
      <NewsLetter />
    </div>
  );
}

export default Home;
