module.exports = class DepthCalculator {
    calculateDepth(array) {
        console.log(array);
        let object = {
            arr: array,
        };
        array = JSON.stringify(object.arr);
        array = array.match(/[\[\]]+/g).join('').split('');
    let k = 0;  
    let z=1;  
    for (i=0; i<array.length; i++) {
         if (array[i]=='[') {
            this.calculateDepth;
            k=k+1;
             if(k>z) {
                 z=k;
             }
         }        
         else {
             k=k-1;
         }
     }    
     return z;
    }
};