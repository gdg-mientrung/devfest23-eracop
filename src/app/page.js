"use client";
import { Button } from "antd";
import { Input } from "antd";
import { useEffect, useState } from "react";
import Products from "@/components/products`";

export default async function Home() {
  const [clothes, setClothes] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setClothes(data); // Assuming the response is an array of clothing items
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  return (
    <main className="flex min-h-screen bg-slate-50 flex-col items-center justify-between p-24">
      <div className=" w-full flex gap-3 items-center">
        <div className="flex flex-col w-1/6 text-black gap-3 text-base">
          <p>Link</p>
          <p>Describe your situation</p>
        </div>
        <div className="flex flex-col w-4/6 text-black gap-3">
          <div className="flex gap-2">
            : <Input className="flex-1" placeholder="Insert link heer" />
          </div>
          <div className="flex gap-2">
            : <Input className="flex-1" placeholder="" />
          </div>
        </div>
        <div className="flex flex-col w-1/6 text-black gap-3">
          <Button onClick={fetchData} type="primary" className="bg-red-200">
            Get product
          </Button>
          <Button type="primary" className="bg-red-200">
            Suggest
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        { clothes.length && clothes.map((curr) => (
          <Products />
        ))}
      </div>
    </main>
  );
}
