import React, { useState } from 'react';
import { storage } from './firebase';

const FileFire = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleUpload = () => {
    if (file) {
      const uploadTask = storage.ref(`images/${file.name}`).put(file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress
        },
        (error) => {
          console.error('Error uploading file:', error);
        },
        () => {
          // Handle successful upload
          storage
            .ref('images')
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              // Here you can store the filename and URL in your database
              console.log('File uploaded:', { fileName, url });
              // Reset file state
              setFile(null);
              setFileName('');
            });
        }
      );
    } else {
      console.error('No file selected.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>Selected File: {fileName}</p>
    </div>
  );
};

export default FileFire;
