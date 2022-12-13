function SalesTable({ dailySales }) {
  return (
    <>
      <table className="divide-y divide-gray-200 w-full ">
        <thead className="divide-y-3">
          <tr className="text-gray-600 text-left bg-gray-100">
            <th>Description</th>
            <th>ID</th>
            <th>Unit Price</th>
            <th>Total Amount</th>
            <th>Qty</th>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dailySales.map(
            (
              { customer, desc, id, quantity, total_purchase, unit_price },
              i
            ) => {
              return (
                <tr key={`dsales-${i}`}>
                  <td>{desc}</td>
                  <td>{id}</td>
                  <td>{unit_price}</td>
                  <td>{total_purchase}</td>
                  <td>{quantity}</td>
                  <td>{customer}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      {!dailySales.length && (
        <div className="flex items-center h-5/6 justify-center text-xl text-gray-400">
          Nothing to show
        </div>
      )}
    </>
  );
}

export default SalesTable;
