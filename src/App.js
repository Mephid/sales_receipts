import { Provider } from "react-redux";
import "./App.css";
import MainLayout from "./layouts/Main";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;
