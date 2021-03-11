import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

const Home = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="image">
                <img src={img1} alt="stylus" />
                <h3>Stylus</h3>
                <h3>£5.00</h3>
                <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={img2} alt="smartphone" />
                <h3>Smartphone</h3>
                <h3>£750.00</h3>
                <a onClick={props.addBasket} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={img3} alt="iPad" />
                <h3>iPad</h3>
                <h3>£1000.00</h3>
                <a onClick={props.addBasket} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={img4} alt="wireless mouse" />
                <h3>Wireless Mouse</h3>
                <h3>£35.00</h3>
                <a onClick={props.addBasket} className="addToCart cart4" href="#">Add to Cart</a>
            </div>
        </div>
    )
}

export default connect(null, { addBasket })(Home);