// src/app/(main)/(pages)/MFIT/page.tsx

"use client"; // Ensure this is a Client Component
// src/app/(main)/(pages)/MFIT/page.tsx

import React, { useState } from 'react';
import ModelSelector from '@/components/global/ModelSelector';
import ImageUpload from '@/components/global/ImageUploader';
import ImageDisplay from '@/components/global/ImageDisplay';
import { Button } from "@/components/ui/button";
import processImage from '@/lib/processimage'; // The function to call the Flask backend

const App = () => {
  const [selectedModel, setSelectedModel] = useState('Strawberry');
  const [selectedTask, setSelectedTask] = useState('Detection');
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null); // Store uploaded image file
  const [processing, setProcessing] = useState<boolean>(false); // State to indicate image processing

  const handleImageUpload = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setOriginalImage(imageUrl);
    setImageFile(file); // Store the file for processing later
    setProcessedImage(null); // Reset processed image when a new image is uploaded
  };

  const handleProcessImage = async () => {
    if (imageFile) {
      try {
        setProcessing(true); // Start processing indicator
        const processedImageUrl = await processImage(imageFile, selectedModel, selectedTask);
        setProcessedImage(processedImageUrl);
        console.log('Image processed successfully'); // Print message to confirm
      } catch (error) {
        console.error('Error processing image:', error);
      } finally {
        setProcessing(false); // Stop processing indicator
      }
    } else {
      console.error('No image file selected');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Image Processing App</h1>
      <ModelSelector
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
      />
      <div className="flex items-center space-x-4 mb-4">
        <ImageUpload onImageUpload={handleImageUpload} />
        <Button onClick={handleProcessImage} disabled={processing}>
          {processing ? 'Processing...' : 'Process Image'}
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ImageDisplay originalImage={originalImage} processedImage={processedImage} />
      </div>
    </div>
  );
};

export default App;
