const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const SalesSchema = new Schema(
  {
    _id: { type: String, required: true },
    subTotal: { type: Number, required: true },
    taxes: { type: Number, required: true },
    arrayProducts: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

const Sales = mongoose.model("Sales", SalesSchema);

module.exports = Sales;
