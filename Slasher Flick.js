/*返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始*/

// 方法一
function slasher(arr, num) {
    var newArr = [];
    while(!num){
      return arr;
    }
    arr.splice(0,num);
      return arr;
  }
  
  slasher([1, 2, 3], 0); //[1, 2, 3]
  slasher(["burgers", "fries", "shake"], 1); // ["fries", "shake"].
  slasher([1, 2, 3], 2); // [3]

  // 方法二
  function slasher(arr, num) {
    var newArr = [];
    if(arr.length<num){
      return newArr;
    }else{
      arr.splice(0,num);
      return arr;
    }
  }
  
  slasher([1, 2, 3], 0); // [1, 2, 3]
  slasher(["burgers", "fries", "shake"], 1); // ["fries", "shake"].
  slasher([1, 2, 3], 2); // [3]
  