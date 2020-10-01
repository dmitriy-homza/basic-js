const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  for (let z = 0; z < array.length; z++) {
    array.forEach(function (item, i) {
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
/* function transform(array) {
    console.log('Входной массив: '+array);
  array.forEach(function(item, i) {
    if (array.length!=1) {
    if (array[0]==='--discard-prev' || array[0]==='--double-prev'){
      array.splice(i, 1);
    }
         if (i!=(array.length-1)) {
console.log('берем элемент '+ array[i]);
            if (item === '--double-next' & (array[i+1]))
                {array[i]=array[i+1]; i=i-1;}
            else if (item === '--double-next') {
                array.splice(i, 1); i=i-1;}
            else if (item === '--discard-prev' & (array[i-1]))
                {array.splice((i-1), 2); i=i-1;}
            else if (item === '--discard-prev')
                {array.splice((i), 1); i=i-1;}
            else if (item === '--discard-next')
                {array.splice(i, 2); i=i-1;}
            else if (item === '--double-prev' & (array[i-1]))
                {array[i]=array[i-1]; i=i-1;}
            else if (item === '--double-prev') {
                array.splice(i, 1); i=i-1;}}
        else { console.log('Последний элемент '+ array[i] + ' из массива ' + array);
            if (item === '--double-next') {
                array.splice(i, 1);}
            else if (item === '--discard-prev' & (array[i-1]))
                {array.splice((i-1), 2);}
            else if (item === '--discard-prev')
                {array.splice((i), 1);}
            else if (item === '--discard-next')
                {array.splice(i, 1);}
            else if (item === '--double-prev')
                {array[i]=array[i-1];}}
  }
  else if (typeof(array[0]!='string') || typeof(array[0]!='number') || array[0]=='--discard-prev' || array[0]=='--double-prev' || array[0]=='--discard-next' || array[0]=='--double-next'){array=[]};

}
);
if (array[0]=='--discard-prev' || array[0]=='--double-prev' || array[0]=='--discard-next' || array[0]=='--double-next'){array=[]};
      console.log('Выходной массив: '+array);
  return(array);
};*/
