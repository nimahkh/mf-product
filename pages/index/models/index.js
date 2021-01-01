export default {
  namespace: "card",
  state: {
    products: {}
  },
  reducers: {
    add(state, { payload }) {
      let tempState = { ...state.products };
      tempState[Object.keys(state.products).length + 1] = payload;
      state.products = tempState;
    }
  }
};
