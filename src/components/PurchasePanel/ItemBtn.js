import { usePurchase } from "../../context/Purchase";

function ItemBtn({ item }) {
  const { dispatch } = usePurchase();
  return (
    <div
      className="item_button"
      onClick={() => dispatch({ type: "ADD", payload: item })}
    >
      <div>{item.desc}</div>
      <div>{item.unit_price}</div>
      <div>{item.id}</div>
    </div>
  );
}

export default ItemBtn;
