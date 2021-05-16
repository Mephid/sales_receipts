//Buttons for checkout, clear entry, cancel all

import moment from "moment";

import { usePurchase } from "../../context/Purchase";
import { addReceiptToDB } from "../../lib/db";

/*
DB FIELDS
customer, totPurchase, itemList, date, time
*/

function Controls() {
  const { state, dispatch } = usePurchase();

  const date = () => moment().format("DD-MM-YYYY");
  const time = () => moment().format("hh:mm:ss");

  //Add receipt to DB then clean state
  const handleCheckout = async (e) => {
    e.preventDefault();
    //Proceed only if something in the list
    if (state.purchase_specs.item_list.length > 0) {
      await addReceiptToDB({
        customer: state.customer,
        totPurchase: state.purchase_specs.tot_purchase,
        itemList: state.purchase_specs.item_list,
        date: date(),
        time: time(),
      }).then(() => dispatch({ type: "CANCEL_ALL" }));
    } else {
      console.error("Empty list!");
    }
  };

  return (
    <form id="controls" onSubmit={(e) => handleCheckout(e)}>
      <button type="button" onClick={() => dispatch({ type: "CLEAR_ENTRY" })}>
        Clear Entry
      </button>
      <button type="button" onClick={() => dispatch({ type: "CANCEL_ALL" })}>
        Cancel All
      </button>
      <button type="submit">Checkout</button>
    </form>
  );
}

export default Controls;
