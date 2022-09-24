
const Joi = require("joi");

let schema = Joi.object({
    name: Joi.string().required().min(3).max(10),
    email: Joi.string().email().required(),
    password: Joi.string().required().pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
    repassword: Joi.ref('password'),
    age: Joi.number().min(16).required().max(60)
})





if (!error) {

} else {
}


module.exports.uservalidation = (req, res, next) => {
    let errorArray = [];
    let { error } = schema.validate(req.body, { abortEarly: false });
    if (!error) {
        next();
    } else {
        error.details.map((mes) => {
            errorArray.push(mes.message)
        })
        res.json(errorArray);
    }

}