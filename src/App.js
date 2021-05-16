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

  return (
    <div id="app_container">
      <PurchaseProvider>
        <div className="flex">
          <div id="left-column" className="flex-1">
            <ReceiptPanel />
            <DBControls setDSVisible={setDSVisible} />
          </div>
          <div id="right-column" className="flex-1">
            <PurchasePanel />
          </div>
        </div>
      </PurchaseProvider>
      {isDSVisible && <DailySales />}
    </div>
  );
}

export default App;
