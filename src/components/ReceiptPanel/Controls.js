import { usePurchase } from "../../context/Purchase";

function Controls() {
  const { state, dispatch } = usePurchase();
  return (
    <div id="controls">
      <button onClick={() => console.log(state)}>Checkout</button>
      <button onClick={() => dispatch({ type: "CLEAR_ENTRY" })}>
        Clear Entry
      </button>
      <button onClick={() => dispatch({ type: "CANCEL_ALL" })}>
        Cancel All
      </button>
    </div>
  );
}

export default Controls;
