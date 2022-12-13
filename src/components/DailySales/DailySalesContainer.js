import { useEffect, useState } from "react";
import { hideDS } from "../../context/actions";
import { usePurchase } from "../../context/Purchase";
import DailySales from "./DailySales";
import * as db from "../../lib/db";

function DailySalesContainer() {
  const { state: globalState, dispatch } = usePurchase();

  const [isLoading, setIsLoading] = useState(false);
  const [dailySales, setDailySales] = useState([]);

  const handleShowDailySales = () => {
    dispatch(hideDS());
  };

  useEffect(() => {
    const fetchSales = async () => {
      setIsLoading(true);
      const data = await db.getDailySales();
      setDailySales(data);
      setIsLoading(false);
    };

    fetchSales();
  }, [globalState.showDS]);

  return (
    <DailySales
      dailySales={dailySales}
      onClickOverlay={handleShowDailySales}
      isLoading={isLoading}
    />
  );
}

export default DailySalesContainer;
