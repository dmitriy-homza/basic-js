module.exports = function getSeason(date) {
  try {
      if (date === getMonth){
      throw('Not implemented');
    };
    let monthNumber = date.getMonth();
    console.log(monthNumber);
      if (monthNumber < 2 || monthNumber > 10) {
      return('winter')
    }
    else if (monthNumber > 1 & monthNumber < 5 ) {
      return('spring')
    }
    else if (monthNumber > 4 & monthNumber < 8) {
      return('summer')
    }
    else if (monthNumber > 7 & monthNumber < 11) {
      return('autumn')
    }
  }

  catch (error) {
    throw 'Not implemented';
  }
  // remove line with error and write your code here
};
