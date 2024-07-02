import React from 'react';

interface ImageDisplayProps {
  originalImages: string[];
  processedImages: string[];
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ originalImages, processedImages }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl text-black font-bold mb-2">Images</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg text-black font-bold mb-2">Original Images</h3>
          {originalImages.length > 0 ? (
            originalImages.map((image, index) => (
              <img key={index} src={image} alt={`Original ${index}`} className="border rounded mb-2" />
            ))
          ) : (
            <p>No original images uploaded</p>
          )}
        </div>
        <div>
          <h3 className="text-lg text-black font-bold mb-2">Processed Images</h3>
          {processedImages.length > 0 ? (
            processedImages.map((image, index) => (
              <img key={index} src={image} alt={`Processed ${index}`} className="border rounded mb-2" />
            ))
          ) : (
            <p>No processed images available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
