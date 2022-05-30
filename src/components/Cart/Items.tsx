import React from "react";
import { ItemProps } from "../../props";
import {
  Attribute,
  AttributeButton,
  AttributesContainer,
  AttributesDiv,
  AttributesFlex,
  AttributeSwatch,
  CartItemIterator,
  CartRow,
  CartSplit,
  ChangeImages,
  ChangeItemQuantity,
  GalleryDiv,
  Heading2,
  NoStyleDiv,
  ProductBrand,
  ProductName,
  ProductPrice,
  RelativePosition,
} from "../../styles/cart";
import { CartTypes } from "../../types";
import greaterThan from "../../img/greaterThan.svg";
import lessThan from "../../img/lessThan.svg";
class Items extends React.Component<ItemProps, CartTypes> {
  decreaseCartItemQuantity(product: {}, attribute: any) {
    this.props.decreaseCart({ product, attribute });
    this.props.getTotals();
  }
  increaseCartItemQuantity(product: {}, attribute: any) {
    this.props.addToCart({ product, attribute });
    this.props.getTotals();
  }
  render() {
    return (
      <NoStyleDiv key={this.props.item.id}>
        <CartRow>
          <AttributesContainer>
            <ProductBrand>{this.props.item.brand}</ProductBrand>
            <ProductName>{this.props.item.name}</ProductName>
            {this.props.item.prices?.map(
              (p) =>
                p.currency.symbol === this.props.currency && (
                  <ProductPrice key={p.currency.label}>
                    {p.currency.symbol}
                    {p.amount}
                  </ProductPrice>
                )
            )}
            <AttributesFlex>
              {this.props.item.attributes.map((attr: any) => (
                <NoStyleDiv key={attr.id}>
                  <Attribute>{attr.name}:</Attribute>
                  <AttributesDiv>
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
                  </AttributesDiv>
                </NoStyleDiv>
              ))}
            </AttributesFlex>
          </AttributesContainer>
          <CartSplit>
            <CartItemIterator>
              <ChangeItemQuantity
                onClick={() =>
                  this.increaseCartItemQuantity(
                    this.props.item,
                    this.props.item.selectedAttributes
                  )
                }
              >
                <span>+</span>
              </ChangeItemQuantity>
              <Heading2>{this.props.item.cartQuantity}</Heading2>
              <ChangeItemQuantity
                onClick={() =>
                  this.decreaseCartItemQuantity(
                    this.props.item,
                    this.props.item.selectedAttributes
                  )
                }
              >
                <span>-</span>
              </ChangeItemQuantity>
            </CartItemIterator>
            <RelativePosition>
              <img
                src={this.props.item.gallery[this.props.item.imageIndex]}
                width={200}
                height={160}
                alt="itemImg"
              />
              {this.props.item.gallery?.length > 1 && (
                <GalleryDiv>
                  <ChangeImages
                    src={lessThan}
                    alt="changeImage"
                    onClick={() =>
                      this.props.changeImageDown(
                        this.props.item,
                        this.props.item.selectedAttributes
                      )
                    }
                  />
                  <ChangeImages
                    src={greaterThan}
                    alt="changeImage"
                    onClick={() =>
                      this.props.changeImageUp(
                        this.props.item,
                        this.props.item.selectedAttributes
                      )
                    }
                  />
                </GalleryDiv>
              )}
            </RelativePosition>
          </CartSplit>
        </CartRow>
        <hr />
      </NoStyleDiv>
    );
  }
}
export default Items;
