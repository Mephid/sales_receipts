//Input fields for setting customer

import { useState } from "react";
import { usePurchase } from "../../context/Purchase";

function InputCustomer() {
  const { state, dispatch } = usePurchase();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CUSTOMER",
      payload: inputValue || "Walk-in Customer",
    })
    setInputValue("");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          id="input_customer"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div id="display_customer">{state.customer}</div>
    </>
  );
}

export default InputCustomer;
