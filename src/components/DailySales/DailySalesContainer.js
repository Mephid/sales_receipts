import { useEffect, useState } from "react";
import DailySales from "./DailySales";
import * as db from "../../lib/db";
import { useDispatch, useSelector } from "react-redux";
import { hideDs } from "../../reducers/purchaseSlice";

function DailySalesContainer() {
  const dispatch = useDispatch();
  const showDS = useSelector((state) => state.purchase.showDS);

  const [isLoading, setIsLoading] = useState(false);
  const [dailySales, setDailySales] = useState([]);

  const handleShowDailySales = () => {
    dispatch(hideDs());
  };

  useEffect(() => {
    const fetchSales = async () => {
      setIsLoading(true);
      const data = await db.getDailySales();
      setDailySales(data);
      setIsLoading(false);
    };

    fetchSales();
  }, [showDS]);

  return (
    <DailySales
      dailySales={dailySales}
      onClickOverlay={handleShowDailySales}
      isLoading={isLoading}
    />
  );
}

export default DailySalesContainer;
