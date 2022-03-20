const getApi = (data) => {
  return {
    type: "getApi",
    payload: data,
  };
};

export { getApi };
