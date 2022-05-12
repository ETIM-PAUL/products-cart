import React from "react";
import { BsCart } from "react-icons/bs";
import {
  TopHeading,
  Item,
  Logo,
  Menu,
  SingleIcon,
  CartSpan,
  Overlay,
  MiniCart,
  CartDiv,
  CurrencySwitcher,
  CurrencyHolder,
  Currency,
  CurrencyContainer,
  Arrow,
  Heading,
} from "../../styles/topNav";
import { connect } from "react-redux";
import { setCategory, setCurrency } from "../../redux/selectSlice";
import { TopNavTypes } from "../../types";
import { Get_Category, Get_Currency } from "../../queries";
import { getTotals } from "../../redux/cartSlice";
import CartOverlay from "../Cart/CartOverlay";
import logo from "../../img/alogo.png";
import arrow from "../../img/arrowDown.png";
import { NoStyleDiv } from "../../styles/cart";
import { Link } from "react-router-dom";
import { TopNavProps } from "../../props";

class TopNav extends React.Component<TopNavProps, TopNavTypes> {
  ref: React.RefObject<HTMLDivElement>;
  ref2: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.ref = React.createRef();
    this.ref2 = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
    this.state = {
      products: [],
      categories: [],
      category: "",
      currencies: [],
      currency: "",
      currencySymbol: "",
      currencySwitchDisplay: false,
      cartOverlayDisplay: false,
    };
  }
  handleClickOutside(event) {
    if (this.ref.current && !this.ref.current.contains(event.target)) {
      this.setState({ currencySwitchDisplay: false });
    }
  }

  handleClickOut(event) {
    if (this.ref2.current && !this.ref2.current.contains(event.target)) {
      this.setState({ cartOverlayDisplay: false });
    }
  }

  showCart() {
    if (this.state.cartOverlayDisplay === false) {
      this.setState({ cartOverlayDisplay: true });
    } else if (this.state.cartOverlayDisplay === true) {
      this.setState({ cartOverlayDisplay: false });
    }
  }
  showCurrency() {
    if (this.state.currencySwitchDisplay === false) {
      this.setState({ currencySwitchDisplay: true });
    } else if (this.state.currencySwitchDisplay === true) {
      this.setState({ currencySwitchDisplay: false });
    }
  }

  selectedCategoryTitle(title: string) {
    this.setState({ category: title });
    this.props.setCategory(title);
  }

  selectedCurrencyType(symbol: any) {
    this.setState({ currency: symbol });
    this.props.setCurrency(symbol);
    this.props.setTotalPrice();
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
        currency: result.data.currencies[0].symbol,
      });
      this.props.setCurrency(this.state.currency);
    });
    document.addEventListener("click", this.handleClickOutside, true);
    document.addEventListener("click", this.handleClickOut, true);
    document.body.style.margin = "0";
  }

  componentWillUnmount(): void {
    document.removeEventListener("click", this.handleClickOutside, true);
    document.removeEventListener("click", this.handleClickOut, true);
    document.body.style.margin = "0";
  }
  render() {
    return (
      <TopHeading>
        <Heading>
          <Menu>
            {this.state.categories.length > 0 &&
              this.state.categories?.map((cat: any) => (
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <Item
                    id={cat.name}
                    onClick={(e: any) =>
                      this.selectedCategoryTitle(e.target.id)
                    }
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
                </Link>
              ))}
          </Menu>

          <Logo>
            <img src={logo} alt="logo" />
          </Logo>

          <NoStyleDiv>
            <CartDiv ref={this.ref2}>
              <NoStyleDiv onClick={() => this.showCart()}>
                <BsCart />
                {this.props.totalQuantity > 0 && (
                  <CartSpan>{this.props.totalQuantity}</CartSpan>
                )}
              </NoStyleDiv>
              {this.state.cartOverlayDisplay && (
                <Overlay>
                  <MiniCart>
                    <CartOverlay display={() => this.showCart()} />
                  </MiniCart>
                </Overlay>
              )}
            </CartDiv>

            <SingleIcon ref={this.ref}>
              <CurrencySwitcher onClick={() => this.showCurrency()}>
                {this.props.currency}
                <Arrow src={arrow} alt="" />
              </CurrencySwitcher>

              {this.state.currencySwitchDisplay && (
                <CurrencyContainer>
                  <CurrencyHolder>
                    {this.state.currencies?.map((cur: any) => (
                      <Currency
                        onClick={(e: any) => {
                          this.selectedCurrencyType(e.target.id);
                          this.setState({ currencySwitchDisplay: false });
                        }}
                        key={cur.symbol}
                        id={cur.symbol}
                      >
                        {cur.symbol} &nbsp; {cur.label}
                      </Currency>
                    ))}
                  </CurrencyHolder>
                </CurrencyContainer>
              )}
            </SingleIcon>
          </NoStyleDiv>
        </Heading>
      </TopHeading>
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
    currency: state.selection.selectedCurrency,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
