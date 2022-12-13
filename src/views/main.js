import ReceiptPanel from "../components/ReceiptPanel";
import PurchasePanel from "../components/PurchasePanel";
import DBControls from "../components/DBControls";
import DailySales from "../components/DailySales";
import { usePurchase } from "../context/Purchase";

function MainView() {
  const { state: globalState } = usePurchase();

  return (
    <div id="app_container" className="bg-gray-100 h-screen w-screen p-6">
      <div className="flex h-full">
        <div className="h-full mr-2 flex flex-col">
          <ReceiptPanel />
          <DBControls />
        </div>
        <PurchasePanel />
      </div>
      {globalState.showDS && <DailySales />}
    </div>
  );
}

export default MainView;
