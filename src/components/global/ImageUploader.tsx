import React, { useState } from 'react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      onImageUpload(event.target.files[0]);
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Upload an image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2 p-2 border rounded" />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};

export default ImageUpload;
