import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Music from "./components/Music";
import Header from "./components/Header";
import FlashSale from "./components/FlashSale";
import BestSellingPoducts from "./components/BestSellingPoducts";
import NewArrivals from "./components/NewArrivals";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <FlashSale/>
      <Category/>
      <BestSellingPoducts/>
      <Music />
      <NewArrivals/>
      <Footer/>
    </div>
  );
}
