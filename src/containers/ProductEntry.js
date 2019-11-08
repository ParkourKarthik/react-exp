import * as actions from "../actions";
import ProductEntry from '../components/ProductEntry'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  console.log(state);
  return {
    ...state
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onChange: event => {
      dispatch(actions.onProductChange(event.nativeEvent))
    },
    onProductAdd: product => {
      dispatch(actions.addProduct(product))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductEntry)