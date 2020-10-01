const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(input) {
  if ((typeof input === "string") & (input > 0) & (input < 15)) {
    let age = Math.ceil(Math.log(15 / input) / (0.693 / 5730));
    return age;
  } else if ((typeof input === "string") & (input * 0 != 0)) {
    input =
      input.slice(0, input.indexOf(".", 3)) +
      input.slice(input.indexOf(".", 3) + 1, input.length);
    if ((typeof input === "string") & (input > 0) & (input < 15)) {
      let age = Math.ceil(Math.log(15 / input) / (0.693 / 5730));
      return age;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
