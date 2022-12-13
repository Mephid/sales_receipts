import "./App.css";
import { PurchaseProvider } from "./context/Purchase";

import MainView from "./views/Main";

function App() {
  return (
    <PurchaseProvider>
      <MainView />
    </PurchaseProvider>
  );
}

export default App;
