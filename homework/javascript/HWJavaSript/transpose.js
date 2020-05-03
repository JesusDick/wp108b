var transpose = function(A) {
    const rows = A.length;
    const cols = A[0].length;
    const result = new Array(cols).fill(new Array(rows).fill());
    for(let i=0;i<cols;i++){  
      result[i] = [];
      for(let j=0;j<rows;j++){
        result[i][j] = A[j][i];
      }
    }
    return result;
  }
  console.log(transpose([[1,2,3],[3,2,1]]));