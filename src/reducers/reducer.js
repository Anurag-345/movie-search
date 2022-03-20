const reducer = (state, action) => {
  if (state === undefined) {
    return {
      apiData: [],
      inputVal: "Matrix",
    };
  }

  switch (action.type) {
    case "getApi":
      state.apiData = action.payload;
      // console.log(action.payload);
      // console.log(state.apiData);
      break;
    case "input":
      state.inputVal = action.payload;
      break;

    default:
      break;
  }

  return { ...state };
};

export default reducer;
