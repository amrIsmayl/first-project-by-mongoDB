
const Joi = require("joi");
let methods = ["body", "params"]

let schema = {
    body: Joi.object({
        name: Joi.string().required().min(3).max(10),
        email: Joi.string().email().required(),
        password: Joi.string().required().pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
        repassword: Joi.ref('password'),
        age: Joi.number().min(16).required().max(60)
    }),
    params: Joi.object({
        id: Joi.string().required().min(24).max(24)
    })
};



module.exports.uservalidation = (req, res, next) => {

    let errorArray = [];

    methods.map((key) => {
        let { error } = schema[key].validate(req[key], { abortEarly: false });

        if (error) {
            error.details.map((mes) => {
                errorArray.push(mes.message)
            })
        }
    })
    if (errorArray.length > 0) {
        res.json(errorArray);
    } else {
        next();
    }
}


