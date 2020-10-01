const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let answer = "";
  if (
    (members != undefined) &
      (members != null) &
      (typeof members === "object") ||
    typeof members === "string"
  ) {
    if (members[0]) {
      for (let name of members) {
        if (typeof name === "string") {
          let regExp = name.match(/[A-Z]/i);
          answer = answer + regExp[0];
        }
      }
      return answer.toUpperCase().split("").sort().join("");
    } else {
      return false;
    }
  } else {
    return false;
  }
};
