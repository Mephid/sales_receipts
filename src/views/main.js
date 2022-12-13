import ReceiptPanel from "../components/ReceiptPanel";
import PurchasePanel from "../components/PurchasePanel";
import DBControls from "../components/DBControls";
import { PurchaseProvider } from "../context/Purchase";
import DailySales from "../components/DailySales";

function MainView() {
  return (
    <PurchaseProvider>
      <div className="flex h-full">
        <div className="h-full mr-2 flex flex-col">
          <ReceiptPanel />
          <DBControls />
        </div>
        <div className="">
          <PurchasePanel />
        </div>
      </div>
      <DailySales />
    </PurchaseProvider>
  );
}

export default MainView;
