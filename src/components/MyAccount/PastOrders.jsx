import React, { Component } from 'react'

export default class PastOrders extends Component {
    render() {
        return (
            <div>
                <h2>Past Orders</h2>
                <h3>Order Date: {this.props.pastOrders.createdAt}</h3>
                <h3>Items in Order:</h3> 
                <table>
                {this.props.pastOrders.map((order) => {
                    console.log("my order", order.itemsInOrder)
                    return ( order.itemsInOrder.map((item) => {
                        

                        
                        console.log("indvidiual item", item.item_name)
                        return (
                            <div>{item.item_name}</div>
                            
                        )
                    }))
                })}
                </table>
            </div>
        )
    }
}



