import Image from "next/image";
import { Input } from "antd";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="mt-4 grid grid-cols-12 items-ends gap-4 px-5">
          <p className="text-lg font-medium">Link</p>
          <form className="col-span-12">
            <div className="flex rounded-sm bg-white p-1">
              <input
                type="text"
                className="flex-grow border-none bg-transparent px-3 py-2 text-black outline-none"
                placeholder="Free Ship Đơn Từ 0Đ"
              />
            </div>
            <button>abc</button>
          </form>
        </div>
      </div>
    </main>
  );
}
