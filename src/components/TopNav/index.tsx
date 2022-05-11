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
  constructor(props: any) {
    super(props);
    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      products: [],
      categories: [],
      category: "",
      currencies: [],
      currency: "",
      currencySymbol: "",
      currencySwitchDisplay: false,
    };
  }
  handleClickOutside(event) {
    if (this.ref.current && !this.ref.current.contains(event.target)) {
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
        currency: result.data.currencies[0].symbol,
      });
      this.props.setCurrency(this.state.currency);
    });
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount(): void {
    document.removeEventListener("click", this.handleClickOutside, true);
  }
  render() {
    return (
      <>
        <TopHeading>
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
              <CurrencySwitcher
                onClick={() => this.setState({ currencySwitchDisplay: true })}
              >
                {this.props.currency}
                <Arrow src={arrow} alt="" />
              </CurrencySwitcher>
              {this.state.currencySwitchDisplay && (
                <CurrencyContainer ref={this.ref}>
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
    currency: state.selection.selectedCurrency,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
