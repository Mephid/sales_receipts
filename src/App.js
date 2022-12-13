import "./App.css";
import { PurchaseProvider } from "./context/Purchase";

import MainView from "./views/Main";

function App() {
  return (
    <div id="app_container" className="bg-gray-100 h-screen w-screen p-6">
      <PurchaseProvider>
        <MainView />
      </PurchaseProvider>
    </div>
  );
}

export default App;
