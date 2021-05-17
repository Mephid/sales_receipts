//Display total amount of purchases

import { usePurchase } from "../../context/Purchase";

function Total() {
  const { tot_purchase } = usePurchase().state.purchase_specs;
  return (
    <div
      id="price_total"
      className="text-2xl font-semibold text-gray-900 py-4 border-t border-gray-200 flex justify-between"
    >
      Total: <div> {tot_purchase} €</div>
    </div>
  );
}

export default Total;
