import ReceiptPanel from "./ReceiptPanel";
import { usePurchase } from "../../context/Purchase";
import { addReceiptToDB } from "../../lib/db";
import moment from "moment";
import { addCustomer, cancelAll, clearEntry } from "../../context/actions";

function ReceiptPanelContainer() {
  const { state: globalState, dispatch } = usePurchase();

  const onCustomerNameSubmit = (inputCustomerName) => {
    dispatch(addCustomer(inputCustomerName));
  };

  const onCheckout = async () => {
    if (globalState.purchase_specs.item_list.length > 0) {
      await addReceiptToDB({
        customer: globalState.customer,
        totPurchase: globalState.purchase_specs.tot_purchase,
        itemList: globalState.purchase_specs.item_list,
        date: moment().format("DD-MM-YYYY"),
        time: moment().format("hh:mm:ss"),
      });
      dispatch(cancelAll());
    } else {
      console.error("Empty list!");
    }
  };

  const onClearEntry = () => dispatch(clearEntry());

  const onCancelAll = () => dispatch(cancelAll());

  const receiptPanelProps = {
    customerName: globalState.customer,
    purchaseSpecs: globalState.purchase_specs,
    totPurchase: globalState.purchase_specs.tot_purchase,
    onCustomerNameSubmit,
    onCheckout,
    onClearEntry,
    onCancelAll,
  };

  return <ReceiptPanel {...receiptPanelProps} />;
}

export default ReceiptPanelContainer;
