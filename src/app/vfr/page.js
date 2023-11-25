'use client'
import { Button, Typography, Upload } from 'antd';
import React, { useState, useEffect } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
export default function FittingRoom() {
  const { Title } = Typography;
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
    console.log("Input event:", event);  // Log information about the input element
    const uploadedImage = event;
    const reader = new FileReader();
  
    reader.onload = () => {
      // This will be executed when the file is successfully loaded
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

      // *TO DO move this in to if response ok
      setResponseImage(userImage);
      const responseImageElement = document.getElementById('responseImage');
      if (responseImageElement) {
        responseImageElement.scrollIntoView({ behavior: 'smooth' });
      }
      //
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
    <div className="px-10 py-10">
      {/* Display user's image */}
      <div className="flex">
      {/* User image section */}
      <div className="w-1/2 p-4 text-center">
        <Title level={2} className="mb-2">User image:</Title>
        {userImage && <img src={userImage} alt="Preview" className="w-full h-[480px] aspect-w-1 aspect-h-1 object-fit border border-gray-300" />}
        <div className="mt-2 w-full items-center justify-center flex flex-col">
          <h2>Upload your image:</h2>
          <Upload type="file"  showUploadList={false} name= 'file' accept="image/*" beforeUpload={handleImageUpload}>
              <Button className="border-1 border-zinc-900 border-solid" icon={<UploadOutlined />}>Click to Upload</Button>
             
            </Upload>
        </div>
      </div>

      {/* Selected product image section */}
      <div className="w-1/2 py-1 px-4 text-center">
      <Title level={2} className="mb-2">Product image:</Title>
        {selectedProduct && <img src={selectedProduct.url} alt="Preview"   className="w-full h-[480px] aspect-w-1 aspect-h-1 object-fit border border-gray-300" />}
      </div>
    </div>
    <div className="w-full items-center justify-center flex">
    <Button onClick={handleVirtualTryOn} className="mainButton">
    Try on
    </Button>
    </div>
   
    <div className="mt-4 p-32" id="responseImage">
    {responseImage && (
      <img
        src={responseImage}
        alt="Preview"
        className="w-full h-[480px] aspect-w-1 aspect-h-1 object-cover border border-gray-300"
      />
    )}
  </div>


    
    </div>
  );
};

