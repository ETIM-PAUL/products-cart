import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { BsCart } from "react-icons/bs";
import {
  FirstContainer,
  Heading,
  SecondContainer,
  ThirdContainer,
} from "../../styles/productsListing";
import {
  TopHeading,
  Item,
  Logo,
  Menu,
  SingleIcon,
  DropDownContent,
  DropItem,
} from "../../styles/topNav";
import { Categories } from "../../queries/queries";

class TopNav extends React.Component<
  {},
  {
    showWomen: boolean;
    products: [];
    showMen: boolean;
    showChildren: boolean;
    numbers: number[];
    categories: [];
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      showWomen: true,
      showMen: false,
      showChildren: false,
      numbers: [1, 2, 3, 4, 5, 6, 7],
      categories: [],
    };
  }
  componentDidMount() {
    const client = new ApolloClient({
      uri: "http://localhost:4000/",
      cache: new InMemoryCache(),
    });

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
  }

  // openWomenCategory = () => {
  //   this.setState({ showMen: false });
  //   this.setState({ showWomen: true });
  //   this.setState({ showChildren: false });
  //   console.log(this.state.categories);
  // };
  // openMenCategory = () => {
  //   this.setState({ showMen: true });
  //   this.setState({ showWomen: false });
  //   this.setState({ showChildren: false });
  // };
  // openKidsCategory = () => {
  //   this.setState({ showMen: false });
  //   this.setState({ showWomen: false });
  //   this.setState({ showChildren: true });
  // };
  render() {
    return (
      <>
        <TopHeading>
          <Menu>
            {this.state.categories.length > 0 &&
              this.state.categories?.map((category: any) => (
                <Item
                  id={category.name}
                  onClick={(e: any) => console.log(e.target.id)}
                >
                  {category.name}
                </Item>
              ))}
          </Menu>

          <Logo>Logo</Logo>

          <div>
            <SingleIcon data-badge="2">
              <BsCart />
            </SingleIcon>

            <SingleIcon>
              <DropDownContent>
                <DropItem> $ USD </DropItem>
                <DropItem>&#8364; EUR </DropItem>
                <DropItem>&#165; JPY</DropItem>
              </DropDownContent>
            </SingleIcon>
          </div>
        </TopHeading>
      </>
    );
  }
}

export default TopNav;
