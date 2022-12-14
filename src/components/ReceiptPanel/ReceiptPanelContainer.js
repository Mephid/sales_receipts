import ReceiptPanel from "./ReceiptPanel";
import { addReceiptToDB } from "../../lib/db";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomer,
  cancelAll,
  clearEntry,
} from "../../reducers/purchaseSlice";

function ReceiptPanelContainer() {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.purchase.customer);
  const purchaseSpecs = useSelector((state) => state.purchase.specs);

  const onCustomerNameSubmit = (inputCustomerName) => {
    dispatch(addCustomer(inputCustomerName));
  };

  const onCheckout = async () => {
    if (purchaseSpecs.items.length > 0) {
      await addReceiptToDB({
        customer: customer,
        totPurchase: purchaseSpecs.total,
        itemList: purchaseSpecs.items,
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
    customerName: customer,
    purchaseSpecs,
    totPurchase: purchaseSpecs.total,
    onCustomerNameSubmit,
    onCheckout,
    onClearEntry,
    onCancelAll,
  };

  return <ReceiptPanel {...receiptPanelProps} />;
}

export default ReceiptPanelContainer;
