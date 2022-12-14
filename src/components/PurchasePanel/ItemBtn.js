import { useDispatch } from "react-redux";
import { addItem } from "../../reducers/purchaseSlice";

function ItemBtn({ item }) {
  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-col card justify-between w-36 h-36 tracking-wide cursor-pointer m-2 text-lg text-gray-800 font-medium hover:bg-blue-100 border-b-4 border-blue-500"
      onClick={() => dispatch(addItem(item))}
    >
      <div>
        <div className="text-base">{item.desc}</div>
        <div className="font-normal text-sm text-gray-600">{item.id}</div>
      </div>
      <div className="justify-self-start leading-4">{item.unit_price} €</div>
    </div>
  );
}

export default ItemBtn;
