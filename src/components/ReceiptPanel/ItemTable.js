// Display purchased items

import { usePurchase } from "../../context/Purchase";

function ItemTable() {
  const { purchase_specs } = usePurchase().state;

  return (
    <div id="item_table">
      <table>
        <thead>
          <tr>
            <th>Item_ID</th>
            <th>Description</th>
            <th>Unit_price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {purchase_specs.item_list.map(({ item_specs, quantity }, i) => (
            <tr className="table_row" key={`row-${i}`}>
              <td>{item_specs.id}</td>
              <td>{item_specs.desc}</td>
              <td>{item_specs.unit_price}</td>
              <td>{quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemTable;
