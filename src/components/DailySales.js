// Daily Sales table

import { useState, useEffect } from "react";

import { getDailySales } from "../lib/db";

//Components
const Loading = () => <div>Loading...</div>;
const NothingToShow = () => (
  <div className="flex items-center h-5/6 justify-center text-xl text-gray-400">
    Nothing to show
  </div>
);
const TableLogic = ({ children, isLoading, setVisibility }) => (
  <div id="daily_sales_container">
    <div className="absolute inset-0 my-12 mx-auto bg-white rounded shadow-md z-50 min-w-2xl max-w-3xl">
      <div className="overflow-auto h-full ">
        {isLoading ? <Loading /> : <>{children}</>}
      </div>
    </div>
    <div
      className="absolute inset-0 bg-black opacity-70"
      onClick={() => setVisibility((v) => !v)}
    ></div>
  </div>
);

function DailySales({ setVisibility }) {
  //State
  const [dailySales, setdailySales] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //Fetch data from DB onMount
  useEffect(() => {
    setLoading(true);
    const fetchSales = async () => {
      await getDailySales().then((data) => setdailySales(data));
    };
    fetchSales().then(() => setLoading(false));
  }, []);

  return (
    <TableLogic isLoading={isLoading} setVisibility={setVisibility}>
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
      {!dailySales.length && <NothingToShow />}
    </TableLogic>
  );
}

export default DailySales;
