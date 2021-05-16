// Daily Sales table

import { useState, useEffect } from "react";

import { getDailySales } from "../lib/db";

//Components
const Loading = () => <div>Loading...</div>;
const NothingToShow = () => <div>Nothing to show</div>;
const TableLogic = ({ children, isLoading }) => (
  <div id="daily_sales">{isLoading ? <Loading /> : <>{children}</>}</div>
);

function DailySales() {
  //State
  const [dailySales, setdailySales] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //Fetch data from DB
  useEffect(() => {
    setLoading(true);
    const fetchSales = async () => {
      await getDailySales().then((data) => setdailySales(data));
    };
    fetchSales().then(() => setLoading(false));
  }, []);

  return (
    <TableLogic isLoading={isLoading}>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Item_ID</th>
            <th>Unit_price</th>
            <th>Total_amount</th>
            <th>Quantity</th>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody>
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
