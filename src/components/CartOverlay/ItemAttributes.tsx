import React from "react";
import {
  Attribute,
  AttributeButton,
  CartAttributes,
  AttributeSwatch,
  ItemsCart,
  AttributesBanner,
} from "../../styles/cartOverlay";
import { Bold, NoStyleDiv, Paragraph } from "../../styles/cart";
import { ItemAttributesProps } from "../../props";
import { ProductBrand, ProductName } from "../../styles/cart";
import "../Product-Details/details.css";

class ItemAttributes extends React.Component<ItemAttributesProps> {
  render() {
    return (
      <>
        <ItemsCart>
          <ProductBrand>{this.props.item.brand}</ProductBrand>
          <ProductName>{this.props.item.name}</ProductName>
          {this.props.item.prices?.map(
            (p) =>
              p.currency.symbol === this.props.currency && (
                <Paragraph key={p.currency.label}>
                  <Bold>
                    {p.currency.symbol}
                    {p.amount}
                  </Bold>
                </Paragraph>
              )
          )}

          <AttributesBanner>
            {this.props.item.attributes.map((attr: any) => (
              <NoStyleDiv key={attr.id}>
                <Attribute>{attr.name}:</Attribute>
                <CartAttributes>
                  {attr.type !== "swatch" &&
                    attr.items.map((attribute: any) => (
                      <AttributeButton
                        key={attribute.id}
                        className={
                          attribute.id ===
                          this.props.item.selectedAttributes[attr.name]
                            ? "selected"
                            : null
                        }
                      >
                        {attribute.value}
                      </AttributeButton>
                    ))}
                  {attr.type === "swatch" &&
                    attr.items.map((attribute: any) => (
                      <AttributeSwatch
                        color={`${attribute.id}`}
                        key={attribute.id}
                        className={
                          attribute.id ===
                          this.props.item.selectedAttributes[attr.name]
                            ? "swatchSelected"
                            : null
                        }
                      ></AttributeSwatch>
                    ))}
                </CartAttributes>
              </NoStyleDiv>
            ))}
          </AttributesBanner>
        </ItemsCart>
      </>
    );
  }
}

export default ItemAttributes;
