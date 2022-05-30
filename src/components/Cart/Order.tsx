import React from "react";
import { OrderProps } from "../../props";
import {
  Span,
  OrderButton,
  Bold,
  OrderText,
  Container,
  TotalSection,
} from "../../styles/cart";
class Order extends React.Component<OrderProps> {
  render() {
    return (
      <Container>
        <TotalSection>
          <Span>
            Tax 21%: <Bold>{this.props.currency}15.00</Bold>
          </Span>
          <Span>
            Quantity: <Bold>{this.props.totalQuantity}</Bold>
          </Span>
          <Span>
            Total:{" "}
            <Bold>
              {this.props.currency}
              {this.props.totalAmount}
            </Bold>
          </Span>
        </TotalSection>
        <OrderButton>
          <OrderText>ORDER</OrderText>
        </OrderButton>
      </Container>
    );
  }
}

export default Order;
