'use strict';

// const ValidationContract = require('../validators/validators');
// let contract = new ValidationContract();
// contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres');
// contract.hasMinLen(req.body.slug, 3, 'O título deve conter pelo menos 3 caracteres');
// contract.hasMinLen(req.body.description, 3, 'O título deve conter pelo menos 3 caracteres');
// // Se os dados forem inválidos
// if (!contract.isValid()) {
//     res.status(400).send(contract.errors()).end();
//     return;
// }


let errors = [];

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
        errors.push({ message: message });
}

ValidationContract.prototype.isFixedLen = (value, len, message) => {
    if (value.length != len)
        errors.push({ message: message });
}

ValidationContract.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

ValidationContract.prototype.errors = () => {
    return errors;
}

ValidationContract.prototype.clear = () => {
    errors = [];
}

ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = ValidationContract;
