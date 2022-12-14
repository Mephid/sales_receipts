function clearEntry(state, initialState) {
  return {
    ...state,
    specs: state.history[state.history.length - 1] || initialState.specs,
    history: state.history.slice(0, -1),
  };
}

export default clearEntry;
