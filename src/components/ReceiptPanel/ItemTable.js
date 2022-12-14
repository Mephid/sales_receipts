function ItemTable({ purchaseSpecs }) {
  return (
    <div id="item_table" className="flex-1 overflow-auto">
      <div>
        <table className="max-w-full">
          <thead>
            <tr className="text-gray-600 bg-gray-50">
              <th>Description</th>
              <th>ID</th>
              <th>Price</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {purchaseSpecs.items.map(({ item_specs, quantity }, i) => (
              <tr className="table_row" key={`row-${i}`}>
                <td>{item_specs.desc}</td>
                <td>{item_specs.id}</td>
                <td>{item_specs.unit_price}</td>
                <td>{quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemTable;
