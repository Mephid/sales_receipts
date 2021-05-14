import InputCustomer from "./InputCustomer";
import ItemTable from "./ItemTable";
import Controls from "./Controls";
import Total from "./Total";

function ReceiptPanel() {
  return (
    <div id="receipt_panel">
      <InputCustomer />
      <ItemTable />
      <Controls />
      <Total />
    </div>
  );
}

export default ReceiptPanel;
