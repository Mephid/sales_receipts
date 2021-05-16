// Main purchase panel component

import ItemBtn from "./ItemBtn";
import inventory from "./inventory";

function PurchasePanel() {
  return (
    <div id="purchase_panel">
      {inventory.map((item, i) => (
        <ItemBtn item={item} key={`itemBtn-${i}`} />
      ))}
    </div>
  );
}

export default PurchasePanel;
