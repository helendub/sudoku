module.exports = function solveSudoku(matrix) {

  // your solution
  arr1 = matrix;

  // function for checking row of current element 
  function check_row(ptrn, r) {
    for (let j=0 ; j<arr1[r].length; j++) {
      if (typeof(arr1[r][j])=='number') {
        if (ptrn.indexOf(arr1[r][j]) !== -1) {
          ptrn.splice(ptrn.indexOf(arr1[r][j]),1); 
        } 
      } else {
          ptrn.filter(function comparing() {
            for (let n=0; n<ptrn.length; n++) {
              if (arr1[r][j].indexOf(ptrn[n]) === -1) return ptrn[n];
            }
          });
        }
    }
  }
  
  // function for checking column of current element
  function check_column(ptrn, c) {
    for (let i=0 ; i<arr1.length; i++) {
      if (typeof(arr1[i][c])=='number') {
        if (ptrn.indexOf(arr1[i][c]) !== -1) {
          ptrn.splice(ptrn.indexOf(arr1[i][c]),1); 
       } 
      } else {
        ptrn.filter(function comparing() {
          for (let n=0; n<ptrn.length; n++) {
            if (arr1[i][c].indexOf(ptrn[n]) === -1) return ptrn[n];
          }
        });
      } 
    }
  }

  // function for checking section 3x3 of current element
  function check_section(ptrn, r, c) {
    for (let i = r-3; i<r; i++) {
      for (let j = c-3; j<c; j++) {
        if (typeof(arr1[i][j])=='number') {
          if (ptrn.indexOf(arr1[i][j]) !== -1) {
            ptrn.splice(ptrn.indexOf(arr1[i][j]),1); 
            } 
          } else {
            ptrn.filter(function comparing() {
              for (let n=0; n<ptrn.length; n++) {
                if (arr1[i][j].indexOf(ptrn[n]) === -1) return ptrn[n];
              }
            });
          }  
      }
    }
  }
  
  let pattern = [1,2,3,4,5,6,7,8,9]; // possible values for unknown element

  // instead of zero elements set massiv of possible elements
  for (let i=0 ; i<matrix.length; i++) {
    for (let j=0 ; j<matrix[i].length ; j++) {
      if (matrix[i][j]===0) {
        arr1[i][j] = pattern.slice();
      }
    }
  }
  
  // check every element of massive
  for (let i=0 ; i<arr1.length; i++) {
    for (let j=0 ; j<arr1[i].length ; j++) {
      if (arr1[i][j].length > 1) {   
        // check the row
        check_row(arr1[i][j], i);

        // check the column
        check_column(arr1[i][j], j);
        
        // check the section 3x3
        let r = (i<3) ? 3 : (i<6) ? 6 : 9;
        let c = (j<3) ? 3 : (j<6) ? 6 : 9; 
        check_section(arr1[i][j], r, c);
       
        if (arr1[i][j].length == 1) {
          matrix[i][j]=parseInt(arr1[i][j]); 
        }
      }
    }
  }
  return matrix;
}