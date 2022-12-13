import "./App.css";
import { PurchaseProvider } from "./context/Purchase";
import MainLayout from "./layouts/Main";

function App() {
  return (
    <PurchaseProvider>
      <MainLayout />
    </PurchaseProvider>
  );
}

export default App;
