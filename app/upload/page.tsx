'use client';
import { motion } from 'framer-motion';

import { useState } from 'react';


export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      console.log('File to upload:', file);
      // Add blockchain upload logic here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.h1 className="text-3xl font-bold mb-6">Upload Your File</motion.h1>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4"
      />
      <motion.button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-6 py-2 rounded"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Upload to Blockchain
      </motion.button>
    </div>
  );
}
