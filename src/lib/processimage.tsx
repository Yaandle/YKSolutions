// lib/processImage.ts
import axios from 'axios';

const processImage = async (file: File, model: string, task: string): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('model_name', model);
  formData.append('mode', task);

  try {
    const response = await axios.post('http://192.168.0.83:5000/process_image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'blob',  // Expecting a binary response (image)
    });

    // Convert the response blob to an image URL
    const imageUrl = URL.createObjectURL(response.data);
    return imageUrl;
  } catch (error) {
    console.error('Error processing image:', error);
    throw error;
  }
};

export default processImage;
