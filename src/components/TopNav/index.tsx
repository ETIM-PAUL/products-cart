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
import logo from "../../img/alogo.png";
import { NoStyleDiv } from "../../styles/cart";
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
      category: "",
      currencies: [],
      currency: "",
      currencySymbol: "",
    };
  }
  selectedCategoryTitle(title: string) {
    this.setState({ category: title });
    this.props.setCategory(title);
  }

  selectedCurrencyType(currency: string, symbol: string) {
    this.setState({ currency: currency });
    this.props.setCurrency(currency);
    this.props.setTotalPrice();
    console.log(symbol);
  }

  componentDidMount() {
    Get_Category().then((result) => {
      this.setState({
        categories: result.data.categories,
        category: result.data.categories[0].name,
      });
      this.props.setCategory(this.state.category);
    });

    Get_Currency().then((result) => {
      this.setState({
        currencies: result.data.currencies,
        currency: result.data.currencies[0].label,
      });
      this.props.setCurrency(this.state.currency);
    });
  }
  // style={
  //   item.selectedAttributes.find(
  //     (x: any) =>
  //       x.attr === attr.id &&
  //       x.itm.id === attribute.id
  //   ) && {
  //     backgroundColor: "black",
  //     color: "white",
  //   }
  // }

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
                  style={
                    localStorage.getItem("category") === cat.name
                      ? {
                          color: "green",
                          textDecoration: "underline",
                        }
                      : {}
                  }
                >
                  {cat.name}
                </Item>
              ))}
          </Menu>

          <Logo>
            <img src={logo} alt="logo" />
          </Logo>

          <NoStyleDiv>
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
                onChange={(e: any) =>
                  this.selectedCurrencyType(e.target.value, e.target.id)
                }
              >
                {this.state.currencies.length > 0 &&
                  this.state.currencies?.map((cur: any) => (
                    <DropItem
                      key={cur.symbol}
                      id={cur.symbol.toString()}
                      value={cur.label.toString()}
                    >
                      {cur.symbol} &nbsp; {cur.label}
                    </DropItem>
                  ))}
              </DropDownContent>
            </SingleIcon>
          </NoStyleDiv>
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
