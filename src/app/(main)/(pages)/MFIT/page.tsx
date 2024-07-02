"use client";

import React, { useState } from 'react';
import ModelSelector from '@/components/global/ModelSelector';
import ImageUpload from '@/components/global/ImageUploader';
import ImageDisplay from '@/components/global/ImageDisplay';
import { Button } from "@/components/ui/button";
import processImage from '@/lib/processimage';
import Navbar from '@/components/global/navbar';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';

const App = () => {
  const [selectedModel, setSelectedModel] = useState('Strawberry');
  const [selectedTask, setSelectedTask] = useState('Detection');
  const [originalImages, setOriginalImages] = useState<string[]>([]);
  const [processedImages, setProcessedImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState<boolean>(false);

  const handleImageUpload = (files: File[]) => {
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setOriginalImages(imageUrls);
    setImageFiles(files);
    setProcessedImages([]);
  };

  const handleProcessImages = async () => {
    if (imageFiles.length > 0) {
      try {
        setProcessing(true);
        const processedImageUrls = await Promise.all(
          imageFiles.map(file => processImage(file, selectedModel, selectedTask))
        );
        setProcessedImages(processedImageUrls);
        console.log('Images processed successfully');
      } catch (error) {
        console.error('Error processing images:', error);
      } finally {
        setProcessing(false);
      }
    } else {
      console.error('No image files selected');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <HeroHighlight>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            <Highlight>Image Processing App</Highlight>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Upload images and process them using our advanced AI models
          </p>
        </div>
      </HeroHighlight>
      <main className="container mx-auto p-4 -mt-20 relative z-30">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="w-full md:w-1/3">
              <ModelSelector
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                selectedTask={selectedTask}
                setSelectedTask={setSelectedTask}
              />
              <ImageUpload onImageUpload={handleImageUpload} />
              <Button 
                onClick={handleProcessImages} 
                disabled={processing || imageFiles.length === 0} 
                className="w-full text-black mt-4"
              >
                {processing ? 'Processing...' : 'Process Images'}
              </Button>
            </div>
            <div className="w-full md:w-2/3 mt-8 md:mt-0">
              <ImageDisplay originalImages={originalImages} processedImages={processedImages} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
