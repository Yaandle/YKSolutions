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
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}