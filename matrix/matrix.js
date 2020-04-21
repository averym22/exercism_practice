//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
 this.matrix = matrix
  this.y = matrix.split(['\n']).map((val)=> val.split(' ')).map((val) => val.map(Number))
    
   
    
 }
     calcRows (a){
     
    
    return Object.keys(a[0]).map(function (c) {
        return a.map(function (r) {
            return r[c];
        });
    });
}
 

  get rows() {
   return this.y
    
    
   
     
  }

  get columns() {  
   return this.calcRows(this.y)
 }
  
}
