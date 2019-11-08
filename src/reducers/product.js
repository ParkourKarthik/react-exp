const product = (state = {}, action) => {
  console.log("old state",state);
  switch (action.type) {
    case 'ONCHANGE_PRODUCT':
      let prn = action.event.target.name;
      let prd = action.event.target.value;
      return { ...state, [prn]: prd }
    default:
      return state;
  }
} 


export default product