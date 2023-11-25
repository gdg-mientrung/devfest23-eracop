import { Card } from "antd";
import Item from "./item";
const { Meta } = Card;
export default function Products({data,isSuggest}) {
  return (
    <>
        {isSuggest && <h1 className="text-xl font-semibold mt-5 text-black">This is suggestion product for you</h1>}
        <div className="grid grid-cols-5 gap-4 mt-10">
            {data.length && data.map((curr) => <Item clothes={curr} />)}
      </div>
    </>
  );
}
