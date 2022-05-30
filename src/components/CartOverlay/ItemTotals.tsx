import React from "react";
import { Link } from "react-router-dom";
import { ItemTotal } from "../../props";
import { Bold } from "../../styles/cart";
import {
  TotalAndButton,
  TotalDiv,
  ButtonDiv,
  ViewBag,
  SecondButton,
} from "../../styles/cartOverlay";

class ItemTotals extends React.Component<ItemTotal> {
  render() {
    return (
      <>
        <TotalAndButton>
          <TotalDiv>
            <Bold>Total</Bold>
            <Bold>
              {this.props.currency}
              {this.props.totalAmount}
            </Bold>
          </TotalDiv>
          <ButtonDiv>
            <Link to={"/cart"}>
              <ViewBag onClick={this.props.display}>VIEW BAG</ViewBag>
            </Link>
            <SecondButton>CHECK OUT</SecondButton>
          </ButtonDiv>
        </TotalAndButton>
      </>
    );
  }
}

export default ItemTotals;
