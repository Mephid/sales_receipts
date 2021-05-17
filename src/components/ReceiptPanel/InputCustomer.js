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
    });
    setInputValue("");
  };

  return (
    <div id="customer_input" className="mb-4">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex"
      >
        <input
          id="input_customer"
          className="focus:outline-none bg-blue-50 flex-1 px-3 py-2 text-gray-700"
          value={inputValue}
          placeholder="Customer"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 bg-blue-500 text-white font-medium tracking-wide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        </button>
      </form>
      <div id="display_customer" className="flex-1 font-semibold mt-4 flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-2 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        {state.customer}
      </div>
    </div>
  );
}

export default InputCustomer;
