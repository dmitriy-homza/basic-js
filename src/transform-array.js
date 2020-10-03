const CustomError = require("../extensions/custom-error");

module.exports = function transform(arrayInput) {
  array = arrayInput.concat();
  for (let z = 0; z < array.length; z++) {
    array.forEach(function (item, i) {
      if (array[i] === "--discard-next" && array[i + 2] === "--discard-prev") {
        array.splice(i, 3);
      }
      if (array[i] === "--discard-next" && array[i + 2] === "--double-prev") {
        array.splice(i, 3);
      }
      if (array[i] == "undefined") {
        array.splice(i, 1);
      }
      if (array.length != 1) {
        if (item === "--double-prev") {
          array[i] = array[i - 1];
        }
      }
    });
  }

  for (let z = 0; z < array.length; z++) {
    array.forEach(function (item, i) {
      if (array.length != 1) {
        if (item === "--double-next") {
          array[i] = array[i + 1];
        }
      }
    });
  }

  for (let z = 0; z < array.length; z++) {
    array.forEach(function (item, i) {
      if (array.length != 1) {
        if (item === "--discard-next") {
          array.splice(i, 2);
        }
      }
    });
  }

  for (let z = 0; z < array.length; z++) {
    array.forEach(function (item, i) {
      if ((array.length != 1) & (i != 0)) {
        if (item === "--discard-prev") {
          array.splice(i - 1, 2);
        }
      }
    });
  }

  array.forEach(function (item, i) {
    if (
      array[i] == undefined ||
      array[i] == "--discard-next" ||
      array[i] == "--discard-prev" ||
      array[i] == "--double-next" ||
      array[i] == "--double-prev"
    ) {
      array.splice(i, 1);
    }
  });
  return array;
};
