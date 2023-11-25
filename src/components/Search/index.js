import { Input, Button } from "antd";
export default function Search() {

  return (
    <div className=" w-full flex gap-3 items-center">
      <div className="flex flex-col w-1/6 text-black gap-3">
        <p>Link</p>
        <p>Describe your situation</p>
      </div>
      <div className="flex flex-col w-4/6 text-black gap-3">
        <div className="flex gap-2">
            <Input className="flex-1" placeholder="Insert link heer" />;
        </div>
        <div className="flex gap-2">
            <Input className="flex-1" placeholder="" />;
        </div>
      </div>
      <div className="flex flex-col w-1/6 text-black gap-3">
            <Button onClick={getProduct} type="primary" className="bg-red-200">
                Suggest
            </Button>
            <Button type="primary" className="bg-red-200">
                Suggest
            </Button>
        </div>

    </div>
  );
}
