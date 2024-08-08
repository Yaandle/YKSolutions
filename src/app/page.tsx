"use client";

import { useEffect, useState } from "react";
import { FlipWords } from "../components/ui/flip-words";
import { AnimatedTabs } from "@/components/ui/AnimatedTabs";
import Navbar from "@/components/global/navbar";

const Page = () => {
  const words = ["Software", "Agency", "Workflow", "Business", "Manufacturing"];
  const colors = ['text-purple-500', 'text-purple-500', 'text-purple-500', 'text-purple-500', 'text-purple-500'];

  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const cardPositions = document.querySelectorAll(".card");
      const visible: number[] = [];

      cardPositions.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > cardTop) {
          visible.push(index);
        }
      });
      setVisibleCards(visible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center px-4 pt-24 pb-48">
        <div className="text-center mb-48">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
            <span className="text-gray-400">Automate Your </span>
            <FlipWords words={words} colors={colors} duration={2000} className="text-purple-500" />
            <br />
            <span className="text-gray-400">with YK Solutions</span>
          </h1>
        </div>
        <div className="w-full max-w-6xl mb-32"> {/* Increased margin-bottom here */}
          <AnimatedTabs />
        </div>
      </div>
      
      <div className="relative h-full max-w-5xl mx-auto mt-64"> {/* Increased margin-top here */}
        {["Software", "Hardware", "Robotics"].map((service, index) => (
          <div
            key={index}
            className={`card transform transition-all duration-700 ${
              visibleCards.includes(index)
                ? index % 2 === 0
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-0 opacity-100"
                : index % 2 === 0
                ? "translate-x-full opacity-0"
                : "-translate-x-full opacity-0"
            } mb-16 p-8 bg-gray-900 rounded-lg`}
          >
            <h2 className="text-3xl font-semibold">{service}</h2>
            <p className="mt-4 text-lg">
              Learn more about our {service} services and how we can help you.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
  
};

export default Page;
