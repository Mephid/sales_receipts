import "./App.css";

import ReceiptPanel from "./components/ReceiptPanel";
import PurchasePanel from "./components/PurchasePanel";

import { PurchaseProvider } from "./context/Purchase";

function App() {
  return (
    <div id="app_container">
      <PurchaseProvider>
        <ReceiptPanel />
        <PurchasePanel />
      </PurchaseProvider>
    </div>
  );
}

export default App;
