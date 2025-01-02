"use client";

import FeaturesSection from "@/components/home/FeaturesSection";
import Hero from "@/components/home/hero";
import Footer from "@/components/main/footer";
import Header from "@/components/main/header";

export default function Home() {
  return (
    <div className="bg-white">
      <div>
        <Header />
        <Hero />
        <FeaturesSection />
        <Footer />
      </div>
    </div>
  );
}
