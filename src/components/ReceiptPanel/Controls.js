function Controls({ onCheckout, onClearEntry, onCancelAll }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout();
  };

  return (
    <form id="controls" className="flex" onSubmit={handleSubmit}>
      <div className="flex flex-col w-2/5 mr-2">
        <button
          type="button"
          className="bg-yellow-400 hover:bg-yellow-300 py-2  mb-2 rounded-sm"
          onClick={onClearEntry}
        >
          Clear Entry
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-400 py-2 rounded-sm"
          onClick={onCancelAll}
        >
          Cancel All
        </button>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-400 w-3/5 rounded-sm"
      >
        Checkout
      </button>
    </form>
  );
}

export default Controls;
