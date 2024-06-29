import React from 'react';

interface ImageDisplayProps {
  originalImage: string | null;
  processedImage: string | null;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ originalImage, processedImage }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Images</h2>
      <div className="grid grid-cols-2 gap-4">
        {originalImage && (
          <div>
            <h3 className="text-lg font-bold mb-2">Original Image</h3>
            <img src={originalImage} alt="Original" className="border rounded" />
          </div>
        )}
        {processedImage && (
          <div>
            <h3 className="text-lg font-bold mb-2">Processed Image</h3>
            <img src={processedImage} alt="Processed" className="border rounded" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageDisplay;
