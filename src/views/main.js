import ReceiptPanel from "../components/ReceiptPanel";
import PurchasePanel from "../components/PurchasePanel";
import DBControls from "../components/DBControls";
import DailySales from "../components/DailySales";
import { usePurchase } from "../context/Purchase";

function MainView() {
  const { state: globalState } = usePurchase();

  return (
    <>
      <div className="flex h-full">
        <div className="h-full mr-2 flex flex-col">
          <ReceiptPanel />
          <DBControls />
        </div>
        <PurchasePanel />
      </div>
      {globalState.showDS && <DailySales />}
    </>
  );
}

export default MainView;
