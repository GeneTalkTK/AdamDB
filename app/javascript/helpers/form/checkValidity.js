/*
rules:
required
minLength
maxLength
isEmail
isNumeric

minValue
maxValue

*/
const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
        return true;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '';
    }

    if (rules.minLength) {
        isValid = isValid && value.length >= rules.minLength
    }

    if (rules.maxLength) {
        isValid = isValid && value.length <= rules.maxLength
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = isValid && pattern.test(value)
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = isValid && pattern.test(value)
    }

    return isValid;
}

export default checkValidity;