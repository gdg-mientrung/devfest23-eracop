'use client'
import { Button, Typography, Upload } from 'antd';
import React, { useState, useEffect } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
export default function FittingRoom({selectedProduct}) {
  const { Title } = Typography;
  console.log({selectedProduct});
  const [userImage, setUserImage] = useState(null);
  const [responseImage, setResponseImage] = useState(null);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      // *TO DO move this in to if response ok
      setResponseImage("https://res.cloudinary.com/dk6yblsoj/image/upload/v1700929663/final_oynyox.jpg");

      // *TO DO move this in to if response ok
      setLoading(false);

        setTimeout(() => {
          const responseImageElement = document.getElementById('responseImage');
          if (responseImageElement) {

          console.log('responseImageElement:', responseImageElement);
          responseImageElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
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
    }  finally {
      setLoading(false);
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
      <div className="w-1/2 p-4 text-center flex flex-col justify-center items-center">
        <Title level={2} className="mb-2">User image:</Title>
        {userImage && <img src={userImage} alt="Preview" className="w-[480px] h-[480px] aspect-w-1 aspect-h-1 object-fit border border-gray-300" />}
        <div className="mt-2 w-[480px] items-center justify-center flex flex-col">
          <h2>Upload your image:</h2>
          <Upload type="file"  showUploadList={false} name= 'file' accept="image/*" beforeUpload={handleImageUpload}>
              <Button className="border-1 border-zinc-900 border-solid" icon={<UploadOutlined />}>Click to Upload</Button>
             
            </Upload>
        </div>
      </div>

      {/* Selected product image section */}
      <div className="w-1/2 p-4 text-center flex flex-col items-center">
      <Title level={2} className="mb-2">Product image:</Title>
        {selectedProduct && <img src={selectedProduct.url} alt="Preview"   className="w-[480px] h-[480px] aspect-w-1 aspect-h-1 object-fit border border-gray-300" />}
      </div>
    </div>
    <div className="w-[full items-center justify-center flex">
    <Button onClick={handleVirtualTryOn} className="mainButton">
    {loading ? <LoadingOutlined /> : 'Try on'}
    </Button>
    </div>
   
    <div className="mt-4 pt-32 w-full flex items-center justify-center" >
    {loading ? (
  <div className="w-[480px] h-[480px] aspect-w-1 aspect-h-1 flex items-center justify-center">
    <LoadingOutlined />
  </div>
) : (
  responseImage && (
    <img
      id="responseImage"
      src={responseImage}
      alt="Preview"
      className="w-[480px] h-[480px] aspect-w-1 aspect-h-1 object-scale-down border border-gray-300"
    />
  )
)}
  </div>


    
    </div>
  );
};

