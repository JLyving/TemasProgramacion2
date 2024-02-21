

array1 = [[-5, 9],[-3, -2],[1,9],[2,-4], [3,5]];



function correctCuadrant(array) {
  let i = 0;
  let j = 0;
  let x = 0;
  let y = 0;
  let coordinate = x + ", " + y;
  
  while (i < array.length) {
    j = 0;
    while (j < array[i].length) {
      x = array[i][j];
      if (x < 0) {
        j++;
        y = array[i][j];
        if (y < 0){
          j++;
          console.log(x, y);
        } else {
          j++;
        }
      } else if (x > 0) {
        j++;
        y = array[i][j];
        if (y > 0){
          j++;
          console.log(x, y);
        } else {
          j++;
        }
      }
    }
    i++;
  }

}

correctCuadrant(array1);
