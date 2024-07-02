import React, { useState } from 'react';

interface ImageUploadProps {
  onImageUpload: (files: File[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles(filesArray);
      onImageUpload(filesArray);
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl text-black font-bold mb-2">Upload images</h2>
      <input 
        type="file" 
        accept="image/*" 
        multiple 
        onChange={handleFileChange} 
        className="mb-2 p-2 text-black border rounded" 
      />
      {selectedFiles.length > 0 && (
        <div>
          <h3>Selected files:</h3>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
