import React, { Component } from 'react'

class CartContainer extends Component {
    render() {
        return (
            <div>
            {this.props.cart.map((item) => {
                return (
                    <p>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                    </p>
                    
                )
            })}
            </div>
        )
    }
}


export default CartContainer