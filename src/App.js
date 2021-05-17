import { useState } from "react";

import "./App.css";

import ReceiptPanel from "./components/ReceiptPanel";
import PurchasePanel from "./components/PurchasePanel";
import DBControls from "./components/DBControls";
import DailySales from "./components/DailySales";
import { PurchaseProvider } from "./context/Purchase";

function App() {
  //Visibility state of Daily Sales
  const [isDSVisible, setDSVisible] = useState(false);

  //CHANGE COLUMN RATIO
  return (
    <div id="app_container" className="bg-gray-100 h-screen w-screen p-6">
      <PurchaseProvider>
        <div className="flex h-full">
          <div className="h-full mr-2 flex flex-col">
            <ReceiptPanel />
            <DBControls setDSVisible={setDSVisible} />
          </div>
          <div className="">
            <PurchasePanel />
          </div>
        </div>
      </PurchaseProvider>
      {isDSVisible && <DailySales setVisibility={setDSVisible} />}
    </div>
  );
}

export default App;
