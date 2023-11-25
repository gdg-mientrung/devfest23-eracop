"use client";
import FittingRoom from "@/components/vfr-modal`";
import { data } from "@/data`";
import { Button, Modal } from "antd";
import { Input } from "antd";
import React, { useEffect, useState, lazy, Suspense  } from "react";
import { useToggle } from "usehooks-ts";
const LazyComponent = lazy(() => import("@/components/products`"));

const getClothes = async () => {
  let response = await fetch("/api/get", {
    method: "GET",
  });

  // You need to await or use .then() here
  let data = await response.json();
  console.log(data);
  return data;
};
export default function Home() {
  const [clothes, setClothes] = useState(data);
  const [showLazy,setShowLazy] = useState(true)
  const [isSuggest,setIsSuggest] = useState(false)
  const [isFittingRoomVisible, toggleIsFittingRoomVisible] = useToggle(false);
  // Use a function declaration instead of arrow function
  const fetchData = () => {
    setClothes(data);
    setShowLazy(false)
    getClothes()
      .then((data) => {
        setClothes(data);
        setShowLazy(true)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const fetchDataSuggest = () =>{
    setShowLazy(false)
    setIsSuggest(false)
    //api
    setShowLazy(true)
    setIsSuggest(true)

  }

  return (
    <main className="flex min-h-screen bg-slate-50 flex-col items-center justify-between p-24">
      <div className=" w-full flex gap-3 items-center">
        <div className="flex flex-col w-1/6 text-black gap-3 text-base">
          <p>Link</p>
          <p>Describe your situation</p>
        </div>
        <div className="flex flex-col w-4/6 text-black gap-3">
          <div className="flex gap-2">
            : <Input className="flex-1" placeholder="Insert shop link" />
          </div>
          <div className="flex gap-2">
            : <Input className="flex-1" placeholder="" />
          </div>
        </div>
        <div className="flex flex-col w-1/6 text-black gap-3">
          <Button onClick={fetchData} type="primary" className="bg-red-200">
            Get product
          </Button>
          <Button onClick={fetchDataSuggest} type="primary" className="bg-red-200">
            Suggest
          </Button>
        </div>
      </div>
      <Modal title="Virtual Fitting Room" open={isFittingRoomVisible} onOk={toggleIsFittingRoomVisible} onCancel={toggleIsFittingRoomVisible}>
        <FittingRoom/>
      </Modal>
      <Suspense fallback={<div className="text-black">Loading...</div>}>
        {showLazy && (<LazyComponent data={data} isSuggest={isSuggest}/>)}
      </Suspense>
    </main>
  );
}
