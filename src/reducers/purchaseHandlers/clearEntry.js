function clearEntry(state, initialState) {
  return {
    ...state,
    purchase_specs:
      state.history[state.history.length - 1] || initialState.purchase_specs,
    history: state.history.slice(0, -1),
  };
}

export default clearEntry;
