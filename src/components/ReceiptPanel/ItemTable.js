// Shows purchased items

import { usePurchase } from "../../context/Purchase";

function ItemTable() {
  const { purchase_specs } = usePurchase().state;

  return (
    <div id="item_table">
      {purchase_specs.item_list.map(({ item_specs, quantity }, i) => (
        <div className="table_row" key={`row-${i}`}>
          <div>{item_specs.id}</div>
          <div>{item_specs.desc}</div>
          <div>{item_specs.unit_price}</div>
          <div>{quantity}</div>
        </div>
      ))}
    </div>
  );
}

export default ItemTable;
