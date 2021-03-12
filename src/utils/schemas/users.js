const joi = require('joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const nameSchema = joi.string().max(80).regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/).message('That doesnt looks like a name, if you think its an error please contact with an administrator.');
const userNameSchema = joi.string().max(10).regex(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/).message('That doesnt look like a valid username, must use underscores and spaces as internal separators.')
const emailSchema = joi.string().max(80).regex(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).message('That doesnt looks like a valid email');
const passwordSchema = joi.string().min(8).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).message('Password must contain minimum eight characters, at least one letter and one number.');

const createUserSchema = {
    name: nameSchema.required(),
    userName: userNameSchema.required(),
    email: emailSchema.required(),
    password: passwordSchema.required()
};

const updateUserSchema = {
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema
}

module.exports = {
    userIdSchema, 
    createUserSchema,
    updateUserSchema,
};