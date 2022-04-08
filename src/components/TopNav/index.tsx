import React from "react";
import { useQuery, gql } from "@apollo/client";
import { BsCart } from "react-icons/bs";
import {
  TopHeading,
  Item,
  Logo,
  Menu,
  SingleIcon,
  DropDownContent,
  DropItem,
} from "../../styles/topNav";
import { client } from "../../App";
import { connect } from "react-redux";
import { setCategoryTitle, setCurrencyType } from "../../redux/actions/actions";
import { TopNavTypes } from "../../types";

class TopNav extends React.Component<
  { setCategoryTitle: any; setCurrencyType: any },
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
    this.props.setCategoryTitle(title);
  }

  selectedCurrencyType(currency: string) {
    this.setState({ currency: currency });
    this.props.setCurrencyType(currency);
    console.log(currency);
  }

  componentDidMount() {
    let category = this.state.category;
    let currency = this.state.currency;
    client
      .query({
        query: gql`
          query categories {
            categories {
              name
            }
          }
        `,
      })
      .then((result) => this.setState({ categories: result.data.categories }));
    client
      .query({
        query: gql`
          query currencies {
            currencies {
              label
              symbol
            }
          }
        `,
      })
      .then((result) => this.setState({ currencies: result.data.currencies }));
    this.props.setCategoryTitle(category);
    this.props.setCurrencyType(currency.toString());
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
            <SingleIcon data-badge="2">
              <BsCart />
            </SingleIcon>

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
    setCategoryTitle: (category: string) =>
      dispatch(setCategoryTitle(category)),
    setCurrencyType: (currency: string) =>
      dispatch(setCurrencyType(currency.toString())),
  };
}

export default connect(null, mapDispatchToProps)(TopNav);
