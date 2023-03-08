import React, { Component } from 'react'

export default class CartProduct extends Component {

    render() {

        return (
          <div className="cart-row">
            <div className="cart-item cart-column">
              <img
                className="cart-item-image"
                src={this.props.img}
                width="100"
                height="100"
              />
              <span className="cart-item-title">{this.props.title}</span>
            </div>
            <span className="cart-price cart-column">${this.props.price}</span>
            <div className="cart-quantity cart-column">
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => this.props.removeProductFromCart(this.props.id)}>
                REMOVE
              </button>
            </div>
          </div>
        );
    }
}
