import SalesTable from "./SalesTable";

function DailySales({ dailySales, onClickOverlay, isLoading }) {
  return (
    <div id="daily_sales_container">
      <div className="absolute inset-0 my-12 mx-auto bg-white rounded shadow-md z-50 min-w-2xl max-w-3xl">
        <div className="overflow-auto h-full ">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <SalesTable dailySales={dailySales} />
          )}
        </div>
      </div>
      <div
        className="absolute inset-0 bg-black opacity-70"
        onClick={onClickOverlay}
      ></div>
    </div>
  );
}

export default DailySales;
