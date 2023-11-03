const Order = require("../models/Order.js");
const User = require('../models/User.js');

const OrderController = {
  async create(req, res) {
    try {
      const order = await Order.create({
        ...req.body,
        status: "pending",
        deliveryDate: new Date().setDate(new Date().getDate()),
        userId: req.user._id, //guardamos como userId el _id del usuario que crea el pedido
      });
      await User.findByIdAndUpdate(req.user._id, { $push: { orderIds: order._id } })
      res.status(201).send(order);
    } catch (error) {
      console.error(error);
    }
  },
  async update(req, res) {
    try {
      const order = await Order.findByIdAndUpdate(
        req.params._id,
        { ...req.body, userId: req.user._id },
        {
          new: true,
        }
      );
      res.send({ message: "order successfully updated", order });
    } catch (error) {
      console.error(error);
    }
  },
  async like(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params._id,
        { $push: { likes: req.user._id } },
        { new: true }
      );
      res.send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem with your like" });
    }
  },

};

module.exports = OrderController;
