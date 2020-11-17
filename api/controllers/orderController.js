const { json } = require("body-parser");
const express = require("express");
const Order = require("../models/orderModel");
const orders = express.Router();

// ROUTES
// read - history
orders.get("/history", (req, res) => {
    Order.find({})
        .sort({ createdOn: 1 })
        .exec((error, foundOrders) => {
            if (error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(200).json(foundOrders);
            }
        });
});

// create
orders.post("/new", (req, res) => {
    Order.create(req.body, (error, createdOrder) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(200).json(createdOrder);
        }
    });
});

// delete
orders.delete("/:id", (req, res) => {
    Order.findByIdAndDelete(req.params.id, (error, deletedOrder) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(200).json(deletedOrder);
        }
    });
});