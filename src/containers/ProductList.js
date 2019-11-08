import { connect } from "react-redux";
import ProductList from "../components/ProductList";


const mapStateToProps = state => {
  console.log(state);
  return {
    ...state
  }
}


export default connect(
  mapStateToProps,
  null
) (ProductList)