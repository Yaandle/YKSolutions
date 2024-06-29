// src/app/(main)/(pages)/MFIT/page.tsx

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
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState<boolean>(false);

  const handleImageUpload = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setOriginalImage(imageUrl);
    setImageFile(file);
    setProcessedImage(null);
  };

  const handleProcessImage = async () => {
    if (imageFile) {
      try {
        setProcessing(true);
        const processedImageUrl = await processImage(imageFile, selectedModel, selectedTask);
        setProcessedImage(processedImageUrl);
        console.log('Image processed successfully');
      } catch (error) {
        console.error('Error processing image:', error);
      } finally {
        setProcessing(false);
      }
    } else {
      console.error('No image file selected');
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
            Upload an image and process it using our advanced AI models
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
                onClick={handleProcessImage} 
                disabled={processing || !imageFile} 
                className="w-full mt-4"
              >
                {processing ? 'Processing...' : 'Process Image'}
              </Button>
            </div>
            <div className="w-full md:w-2/3 mt-8 md:mt-0">
              <ImageDisplay originalImage={originalImage} processedImage={processedImage} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;