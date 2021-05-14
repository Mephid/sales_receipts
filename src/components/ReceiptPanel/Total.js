import { usePurchase } from "../../context/Purchase";

function Total() {
  const { tot_purchase } = usePurchase().state.purchase_specs;
  return <div id="price_total">Total: {tot_purchase} €</div>;
}

export default Total;
