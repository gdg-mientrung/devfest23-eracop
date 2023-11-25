'use client'
import { Button, Upload } from 'antd';
import React, { useState, useEffect } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { data } from '@/data`';
export default function FittingRoom() {
  const [selectedProduct, setSelectedProduct] = useState({
    "STT": "8",
    "Name": "Essential T-Shirt Shirt - Burgundy Cotton Jersey",
    "url": "https://www.batchmens.com/cdn/shop/products/Essential-LS-Shirt-Burgundy-Jersey_83848ab7-ff35-4ffe-a4d3-f3c9f529f5db_720x.jpg?v=1673644516",
    "Category": "casual"
});
  const [userImage, setUserImage] = useState(null);
  const [responseImage, setResponseImage] = useState(null);
  // Load user image from localStorage
  useEffect(() => {
    const storedUserImage = localStorage.getItem('userImage');
    if (storedUserImage) {
      setUserImage(storedUserImage);
    }
  }, []);

  const handleImageUpload = (event) => {
    console.log("Input event:", event.target.value);  // Log information about the input element
    const uploadedImage = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      // This will be executed when the file is successfully loaded
      console.log("userImage", reader.result);
      alert("Ok");
  
      setUserImage(reader.result);
      localStorage.setItem('userImage', reader.result);
    };
  
    reader.readAsDataURL(uploadedImage);
  };

  const handleVirtualTryOn = async () => {
    // if (!selectedProduct || !userImage) {
    //   console.error('Please select a product and upload your image.');
    //   return;
    // }

    try {
      setResponseImage(userImage);
      // Assuming there is a Virtual Try-On API endpoint
      const response = await fetch('your_virtual_try_on_api_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers as needed
        },
        body: JSON.stringify({
          product: selectedProduct,
          userImage: userImage,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        // Handle the result, which may include the image of the user wearing the selected product
        console.log('Virtual Try-On result:', result);
      } else {
        console.error('Error calling Virtual Try-On API:', response.statusText);
      }
    } catch (error) {
      console.error('Error calling Virtual Try-On API:', error.message);
    }
  };
  const uploadButton = (
    <div>
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div>
      {/* Display user's image */}
      <h2>Product image:</h2>
      {userImage && <img src={userImage} alt="Preview" style={{ maxWidth: '400px' }} />}
      
      {/* Image upload input */}
      <div>
        <h2>Upload your image:</h2>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
      
      <div>
      {selectedProduct && <img src={selectedProduct.url} alt="Preview" style={{ maxWidth: '400px' }} />}
      </div>
      <Button onClick={handleVirtualTryOn} className="MainButton">Try on</Button>

      {responseImage && <img src={responseImage } alt="Preview" style={{ maxWidth: '400px' }} />}
    
    </div>
  );
};

