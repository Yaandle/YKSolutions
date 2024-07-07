"use client";
import React from "react";
import { Tabs } from "@/components/ui/tabs";
import { DatasetContent } from "@/components/DatasetContent";
import { ModelsContent } from "@/components/ModelsContent";

export function AnimatedTabs() {
  const tabs = [
    {
      title: "Dataset",
      value: "dataset",
      content: <DatasetContent />,
    },
    {
      title: "Models",
      value: "models",
      content: <ModelsContent />,
    },
  ];

  return (
    <div className="min-h-[60vh] h-full md:h-full [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20"> {/* Adjusted the margin */}
      <Tabs
        tabs={tabs}
        containerClassName="bg-black"
        activeTabClassName="text-black"
        tabClassName="text-white"
        contentClassName="bg-black"
      />
    </div>
  );
}
