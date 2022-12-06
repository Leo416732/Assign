arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
let arrNum = arr[0];

function arraySorter(num) {
  for (i = 1; arr.length > i; i++) {
    if(arrNum < arrNum[i]){
      arrNum = arrNum[i];
    }
    console.log(arrNum)
  }
  return arraySorter;
}

