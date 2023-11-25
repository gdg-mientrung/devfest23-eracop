import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import Link from "next/link";
import NavHeader from "./NavHeader";
import { Popover } from "antd";

export default function Header() {
  // Khi chúng ta chuyển trang thì Header chỉ bị re-render
  // Chứ không bị unmount - mounting again
  // (Tất nhiên là trừ trường hợp logout rồi nhảy sang RegisterLayout rồi nhảy vào lại)
  // Nên các query này sẽ không bị inactive => Không bị gọi lại => không cần thiết phải set stale: Infinity

  return (
    <div className="bg-slate-400 text-white">
      <div className="container">
        <NavHeader />
      </div>
    </div>
  );
}
