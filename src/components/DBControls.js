import { clearDB } from "../lib/db";

function DBControls({setDSVisible}) {
  return (
    <form>
      <button type="button" onClick={() => setDSVisible(v => !v)}>Daily Sales</button>
      <button type="button" onClick={() => clearDB()}>Clear All</button>
    </form>
  );
}

export default DBControls;
