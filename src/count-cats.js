module.exports = function countCats(matrix){
    let number = 0;
    for (i=0; i<matrix.length; i++) {
        for (z=0; z<matrix[i].length; z++) {
          console.log('Элемент: '+matrix[i][z]);
if (matrix[i][z]==='^^') {
              number = number+1;
          }
        }};
  return number;
}
