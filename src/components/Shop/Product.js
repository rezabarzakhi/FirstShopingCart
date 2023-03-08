import React, { Component } from 'react'

export default class Product extends Component {
    
    render() {
        return (
          <div
            className="shop-item"
            key={this.props.id}>
            <span className="shop-item-title">{this.props.title}</span>
            <img
              className="shop-item-image"
              src={this.props.img}
            />
            <div className="shop-item-details">
              <span className="shop-item-price">${this.props.price}</span>
              <button
                className="btn btn-primary shop-item-button"
                type="button"
                onClick={ () => this.props.addToCartHandler( )}
                >
                ADD TO CART
              </button>
            </div>
          </div>
        );
    }
}
