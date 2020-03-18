module.exports = function repeater(str, options) {
    let addition = [];
    strAddition = `${options.addition}`;
    if (strAddition!=='undefined') {
        addition = [`${options.addition}`];
    }
    let subStr = str;
    let subAddition = addition.join('');
    str = [`${str}`];
    if (!options.separator) {
        options.separator = '+';
    }
    if (!options.additionSeparator) {
        options.additionSeparator = '|';
    }
    for (k=0; k<options.additionRepeatTimes-1; k++) {
        addition.push(options.additionSeparator+`${subAddition}`);
    }
    addition.join('');
    for (i=0; i<options.repeatTimes-1; i++) {
        str.push(addition.join('')+options.separator+`${subStr}`);
    }
    str.push(addition.join(''));
    return str.join('');
};