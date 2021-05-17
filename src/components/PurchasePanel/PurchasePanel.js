// Main purchase panel component

import ItemBtn from "./ItemBtn";
import inventory from "./inventory";

function PurchasePanel() {
  return (
    <div
      id="purchase_panel"
      className="flex content-start flex-wrap h-full overflow-x-auto -mt-2"
    >
      {inventory.map((item, i) => (
        <ItemBtn item={item} key={`itemBtn-${i}`} />
      ))}
    </div>
  );
}

export default PurchasePanel;
