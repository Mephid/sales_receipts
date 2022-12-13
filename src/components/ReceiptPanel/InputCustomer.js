import { useState } from "react";

function InputCustomer({ onCustomerNameSubmit }) {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCustomerNameSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        id="input_customer"
        className="focus:outline-none bg-blue-50 flex-1 px-3 py-2 text-gray-700"
        value={value}
        placeholder="Customer"
        onChange={handleOnChange}
      />
      <button
        type="submit"
        className="px-4 bg-blue-500 text-white font-medium tracking-wide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      </button>
    </form>
  );
}

export default InputCustomer;
