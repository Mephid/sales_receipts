//Main receipt panel component

import InputCustomer from "./InputCustomer";
import ItemTable from "./ItemTable";
import Controls from "./Controls";
import Total from "./Total";

function ReceiptPanel() {
  return (
    <div
      id="receipt_panel"
      className="card flex-1 flex flex-col overflow-hidden max-w-full"
    >
      <InputCustomer />
      <ItemTable />
      <Total />
      <Controls />
    </div>
  );
}

export default ReceiptPanel;
