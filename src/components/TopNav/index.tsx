import React from "react";
import { BsCart } from "react-icons/bs";
import {
  TopHeading,
  Item,
  Logo,
  Menu,
  SingleIcon,
  DropDownContent,
  DropItem,
  CartSpan,
  Overlay,
  MiniCart,
  CartDiv,
} from "../../styles/topNav";
import { connect } from "react-redux";
import { setCategory, setCurrency } from "../../redux/selectSlice";
import { TopNavTypes } from "../../types";
import { Get_Category, Get_Currency } from "../../queries";
import { getTotals } from "../../redux/cartSlice";
import CartOverlay from "../Cart/CartOverlay";
class TopNav extends React.Component<
  {
    setCategory: any;
    setCurrency: any;
    totalQuantity: number;
    setTotalPrice: any;
  },
  TopNavTypes
> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      category: "all",
      currencies: [],
      currency: "USD",
    };
  }
  selectedCategoryTitle(title: string) {
    this.setState({ category: title });
    this.props.setCategory(title);
  }

  selectedCurrencyType(currency: string) {
    this.setState({ currency: currency });
    this.props.setCurrency(currency);
    this.props.setTotalPrice();
  }

  componentDidMount() {
    Get_Category().then((result) =>
      this.setState({
        categories: result.data.categories,
      })
    );

    Get_Currency().then((result) =>
      this.setState({
        currencies: result.data.currencies,
      })
    );
    let category = this.state.category;
    let currency = this.state.currency;
    this.props.setCategory(category);
    this.props.setCurrency(currency);
  }

  render() {
    return (
      <>
        <TopHeading>
          <Menu>
            {this.state.categories.length > 0 &&
              this.state.categories?.map((cat: any) => (
                <Item
                  key={cat.name}
                  id={cat.name}
                  onClick={(e: any) => this.selectedCategoryTitle(e.target.id)}
                >
                  {cat.name}
                </Item>
              ))}
          </Menu>

          <Logo>Logo</Logo>

          <div>
            <CartDiv>
              <BsCart />
              <CartSpan>{this.props.totalQuantity}</CartSpan>
              <Overlay>
                <MiniCart>
                  <CartOverlay />
                </MiniCart>
              </Overlay>
            </CartDiv>

            <SingleIcon>
              <DropDownContent
                onChange={(e: any) => this.selectedCurrencyType(e.target.value)}
              >
                {this.state.currencies.length > 0 &&
                  this.state.currencies?.map((cur: any) => (
                    <DropItem
                      key={cur.symbol}
                      id={cur.symbol}
                      value={cur.label.toString()}
                    >
                      {cur.symbol} {""} {cur.label}
                    </DropItem>
                  ))}
              </DropDownContent>
            </SingleIcon>
          </div>
        </TopHeading>
      </>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    setCategory: (category: string) => dispatch(setCategory(category)),
    setCurrency: (currency: string) => dispatch(setCurrency(currency)),
    setTotalPrice: () => dispatch(getTotals()),
  };
}

function mapStateToProps(state: any) {
  return {
    totalQuantity: state.cart.cartTotalQuantity,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
