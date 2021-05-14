import { useState } from "react";
import { usePurchase } from "../../context/Purchase";

function InputCustomer() {
  const { state, dispatch } = usePurchase();
  const [inputValue, setInputValue] = useState(state.customer);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "ADD_CUSTOMER",
          payload: inputValue || "Walk-in customer",
        });
      }}
    >
      <input
        id="input_customer"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input type="submit" value="Submit"></input>
    </form>
  );
}

export default InputCustomer;
