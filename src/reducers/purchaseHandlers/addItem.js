import decimalConverter from "../../lib/utils/decimalConverter"

function addItem(state, payload) {
  const itemList = state.purchase_specs.item_list;
  const totPurchase = state.purchase_specs.tot_purchase;
  const history = state.history;

  //Add item to item_list if not present, else updates quantity
  function newItemList() {
    let newList;
    //Get item index in item_list
    const itemIndex = itemList.findIndex(
      ({ item_specs }) => item_specs.id === payload.id
    );
    if (itemIndex < 0) {
      //Add item to item_list
      newList = [...itemList, { item_specs: payload, quantity: 1 }];
    } else {
      // Update quantity of item in item_list
      newList = itemList.map((product) =>
        product.item_specs.id === payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    }
    return newList;
  }

  //Increase tot_purchase
  const newTotPurchase = () => {
    let newTot = +totPurchase + +payload.unit_price;
    return decimalConverter(newTot);
  };

  return {
    ...state,
    purchase_specs: {
      item_list: newItemList(),
      tot_purchase: newTotPurchase(),
    },
    history: [...history, state.purchase_specs],
  };
}

export default addItem;
