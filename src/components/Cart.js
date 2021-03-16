import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../actions/productQuantity";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

function Cart({basketProps, productQuantity, clearProduct}) {
    console.log(basketProps);

    let productsInCart = [];

    Object.keys(basketProps.products).forEach( function(item) {
        console.log(item);
        console.log(basketProps.products[item].inCart)
        if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    })

    //const productImages = [img1, img2, img3, img4]
    const productImages = (product) => {
        if(product.tagName === "stylus") {
            return img1;
        } else if (product.tagName === "smartphone") {
            return img2
        } else if (product.tagName === "iPad") {
            return img3
        } else if (product.tagName === "wirelessMouse") {
            return img4
        }
    }

    productsInCart = productsInCart.map( (product, index) => {
        console.log("My product is ");
        console.log(product);
        return (
            <Fragment key={index}>
                <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon><img src={productImages(product)}/>
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">£{product.price}.00</div>
                <div className="quantity">
                    <ion-icon onClick={() => productQuantity("decrease", product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                        <span>{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity("increase", product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">£{product.numbers * product.price}.00</div>
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                { productsInCart }
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost}.00</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);
