import { clearDB } from "../lib/db";

function DBControls({ setDSVisible }) {
  return (
    <div id="db_controls" className="mt-4 card">
      <form className="flex ">
        <button
          type="button"
          className="flex-1 text-sm focus:outline-none uppercase text-blue-500 font-semibold tracking-wide py-2 mr-4 hover:bg-blue-50 rounded-lg border-2 border-blue-500"
          onClick={() => setDSVisible((v) => !v)}
        >
          Daily Sales
        </button>
        <button
          type="button"
          className="flex-1 text-sm focus:outline-none uppercase text-red-500 font-semibold  tracking-wide py-2 hover:bg-red-50 rounded-lg border-2 border-red-500"
          onClick={() => clearDB()}
        >
          Clear All
        </button>
      </form>
    </div>
  );
}

export default DBControls;