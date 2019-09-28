const { body } = require("express-validator")
const Product = require("../../../Models/Product")

const CreateProductRules = [
    body("name", "field name cant't be null").exists(),
    body("name", "field name maximal 110 character").isLength({max: 110}),
    body("name", "Product already exists").custom(value => {
        const product = Product.query().findOne({
            name: value
        })

        return (product instanceof Product == false ? true : false)
    }),
    body("description", "field description can't be null").exists(),
    body("description", "field description maximal 1000 character").isLength({max: 1000}),
    body("category_id", "field category can't be null").exists(),
    body("price", "field price can't be null").exists(),
    body("price", "field price maximal 16 digits").isLength({max:16}),
    body("price", "field price minimum 1 ").isLength({min:1}),
    body("qty", "field qty can't be null").exists(),
    body("qty", "quantity can't be zero").isLength({min: 0})
]

module.exports = CreateProductRules;
