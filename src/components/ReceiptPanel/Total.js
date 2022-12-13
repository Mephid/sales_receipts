function Total({ totPurchase }) {
  return (
    <div
      id="price_total"
      className="text-2xl font-semibold text-gray-900 py-4 border-t border-gray-200 flex justify-between"
    >
      Total: <div> {totPurchase} €</div>
    </div>
  );
}

export default Total;
