module.exports = class DepthCalculator {
    calculateDepth(arr) {
        /*
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
    */
   let count = 0;
   let haveArray = 1;

  for (let i of arr) {
   if (Array.isArray(i))  {
       haveArray=this.calculateDepth(i);
       if (haveArray>count){
       count = haveArray;
       }
console.log(i);
           console.log(count);
   }
  }

  return ++count;
   }
};