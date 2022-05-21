import { getTotals } from "../../redux/cartSlice";
import { setCategory, setCurrency } from "../../redux/selectSlice";

export function mapDispatchToProps(dispatch: any) {
  return {
    setCategory: (category: string) => dispatch(setCategory(category)),
    setCurrency: (currency: string) => dispatch(setCurrency(currency)),
    setTotalPrice: () => dispatch(getTotals()),
  };
}

export function mapStateToProps(state: any) {
  return {
    totalQuantity: state.cart.cartTotalQuantity,
    currency: state.selection.selectedCurrency,
    category: state.selection.selectedCategory,
  };
}
