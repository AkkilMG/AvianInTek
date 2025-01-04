"use client";


// import FeaturesSection from "@/components/home/FeaturesSection";
import Hero from "@/components/home/hero";
import Insights from "@/components/home/insights";
import Products from "@/components/home/Products";
import Footer from "@/components/main/footer";
import Header from "@/components/main/header";

export default function Home() {
  return (
    <div className="bg-white">
      <div>
        <Header />
        <Hero />
        <Insights />
        {/* <FeaturesSection /> */}
        <Products />
        <Footer />
      </div>
    </div>
  );
}
