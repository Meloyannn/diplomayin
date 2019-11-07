const Joi = require('@hapi/joi');

const validation = data => {
    const schema = {
        email: Joi.string().required().min(6).email(),
        password: Joi.string().required().min(6)
    };
    
    return Joi.validate(data, schema);
};

module.exports.validation = validation