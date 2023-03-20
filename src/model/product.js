

import mongoose from "mongoose";

const productModel = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
})

export default mongoose.model("Product", productModel)

