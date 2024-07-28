"use client"

import React from "react";
import { AnimatedTabs } from "@/components/ui/AnimatedTabs";
import Navbar from '@/components/global/navbar';

const DatasetPage = () => {
  return (
    <div>
      <Navbar />
      <AnimatedTabs />
    </div>
  );
};

export default DatasetPage;