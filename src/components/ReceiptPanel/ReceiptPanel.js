//Main receipt panel component

import InputCustomer from "./InputCustomer";
import ItemTable from "./ItemTable";
import Controls from "./Controls";
import Total from "./Total";
import DisplayCustomer from "./DisplayCustomer";

function ReceiptPanel({
  customerName,
  onCustomerNameSubmit,
  purchaseSpecs,
  totPurchase,
  onCheckout,
  onClearEntry,
  onCancelAll,
}) {
  return (
    <div
      id="receipt_panel"
      className="card flex-1 flex flex-col overflow-hidden max-w-full"
    >
      <div id="customer_input" className="mb-4">
        <InputCustomer onCustomerNameSubmit={onCustomerNameSubmit} />
        <DisplayCustomer customerName={customerName} />
      </div>
      <ItemTable purchaseSpecs={purchaseSpecs} />
      <Total totPurchase={totPurchase} />
      <Controls
        onCheckout={onCheckout}
        onClearEntry={onClearEntry}
        onCancelAll={onCancelAll}
      />
    </div>
  );
}

export default ReceiptPanel;
