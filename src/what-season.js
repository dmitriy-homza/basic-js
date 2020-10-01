const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  try {
    if (date.hasOwnProperty("getMonth")) {
      throw new Error();
    } else if (arguments.length != 0) {
      let monthNumber = date.getMonth();
      if (monthNumber < 2 || monthNumber > 10) {
        return "winter";
      } else if ((monthNumber > 1) & (monthNumber < 5)) {
        return "spring";
      } else if ((monthNumber > 4) & (monthNumber < 8)) {
        return "summer";
      } else if ((monthNumber > 7) & (monthNumber < 11)) {
        return "autumn";
      }
    }
  } catch (error) {
    if (arguments.length == 0) {
      return "Unable to determine the time of year!";
    } else {
      throw new Error();
    }
  }
};
