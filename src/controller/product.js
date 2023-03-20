

import Product from "../model/product";
import Joi from "joi";

const validateForm = Joi.object({
    name: Joi.string().required(),
    price: Joi.string().required()
})

//them
export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = validateForm.validate(body);
        if (error) {
            const errors = error.details.map((errorItem) => errorItem.message)
            return res.json({
                message: errors
            })
        }
        //
        const data = await Product.create(body)
        if (!data) {
            return res.json({
                message: "Them that bai"
            })
        }
        //
        return res.status(201).json({
            message: "Them thanh cong",
            data
        })
    } catch (error) {
        return res.status(401).json({
            message: "Them that bai",
            error
        })
    }
}
// getAll
export const getAll = async (req, res) => {
    try {
        const data = await Product.find()
        return res.json(data)
    } catch (error) {
        return res.json({
            message: "khong thay san pham nao",
            error
        })
    }
}
//getone
export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findById(id)
        return res.json({
            message: "Thay 1 san pham",
            data
        })
    } catch (error) {
        return res.json({
            message: "K thay 1 san pham nao",
            error
        })
    }
}




// sua
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await Product.findByIdAndUpdate(id, body, { new: true })
        return res.json({
            message: "Sua thanh cong",
            data
        })
    } catch (error) {
        return res.json({
            message: "Sua that bai ",
            error
        })
    }
}

// remove
export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findByIdAndDelete(id);
        return res.json({
            message: "Xoa thanh cong",
            data
        })
    } catch (error) {
        return res.json({
            message: "Xoa that bai",
            data
        })
    }
}