import React, { Component } from "react";
import { myContext } from "../../shopContext";

class Product extends Component {
    static contextType = myContext;
    render(){
        return(
            <div>
                <div>
                    <img src={this.props.location.state.product.images[0].src} alt={this.props.location.state.product.name}/>
                </div>
                <div>
                    <h2>{this.props.location.state.product.name}</h2>
                    <div className="">{this.props.location.state.product.price}<span className="">$</span> </div>
                    <div className="productDescription">
                        {this.props.location.state.product.short_description.replace(/(<([^>]+)>)/ig,"")}
                    </div>
                </div>
                <button className="addToCart"
                    onClick={ () =>{}}>Añadir al carrito</button>
            </div>
        )
    }
}

export default Product;