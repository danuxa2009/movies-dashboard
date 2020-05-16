

const reducer = (state , action) => {
  switch (action.type) {
    case 'UDE':
      return state + 1;
    default:
      return state;
  }
};

export default reducer;
