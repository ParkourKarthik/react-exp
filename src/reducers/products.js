import prData from '../prod-data.json'

const prList = (state = prData.ProductList, action) => {
  console.log("action",state);
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        action.product
      ]
    default:
      return state
  }
}

export default prList