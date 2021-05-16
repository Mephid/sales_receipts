import Dexie from "dexie";
import moment from "moment";

import decimalConverter from "../lib/utils/decimalConverter";

const logError = (err) =>
  console.error("An error as occurred: ", err.stack || err);

//Declare DB instance
const db = new Dexie("ReceiptsDB");
//Define DB schema
db.version(1).stores({
  receipts: "++receiptId, customer, date",
  itemLists: "++id",
});

//ADD receipts info and item lists to respective tables
const addReceiptToDB = async ({
  customer,
  date,
  time,
  totPurchase,
  itemList,
}) => {
  await db
    .transaction("rw", db.receipts, db.itemLists, async () => {
      await db.receipts.add({ customer, date, time, totPurchase });
      await db.itemLists.add({ itemList });
    })
    .catch((e) => logError(e));
};

//CLEAR db tables
const clearDB = async () => {
  await db
    .transaction("rw", db.receipts, db.itemLists, async () => {
      await db.receipts.clear();
      await db.itemLists.clear();
    })
    .catch((e) => logError(e));
};

//GET daily sales
const getDailySales = () => {
  return db
    .transaction("r", db.receipts, db.itemLists, async () => {
      const receipts = await db.receipts
        .where("date")
        .equals(moment().format("DD-MM-YYYY"))
        .reverse()
        .sortBy("time");
      const itemLists = await db.itemLists.toArray();

      //Reduce to list of single items
      const purchasedItems = receipts.reduce((dailySalesAcc, receipt) => {

        //Get receipt item list
        const relativeList = itemLists.find(
          ({ id }) => id === receipt.receiptId
        ).itemList;

        //Compose single item object structure
        const purchasedItemInfoList = relativeList.map(
          ({ quantity, item_specs }) => {
            return {
              ...item_specs,
              quantity,
              customer: receipt.customer,
              total_purchase: decimalConverter(
                quantity * item_specs.unit_price
              ),
            };
          }
        );

        return dailySalesAcc.concat(...purchasedItemInfoList);
      }, []);

      return purchasedItems;
    })
    .catch((e) => logError(e));
};

export { addReceiptToDB, clearDB, getDailySales, db };
