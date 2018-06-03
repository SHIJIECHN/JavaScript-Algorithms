/*丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止
第二个参数，func，是一个函数。用来测试数组的第一个元素，如果返回fasle，
就从数组中抛出该元素(注意：此时数组已被改变)，继续测试数组的第一个元素，
如果返回fasle，继续抛出，直到返回true。

最后返回数组的剩余部分，如果没有剩余，就返回一个空数组。 */

function drop(arr, func) {
    let len = arguments[0].length;
    for(let i =1; i<=len;i++){
        console.log(func(arr[0]));
        if(!func(arr[0])){
            arr.shift();
        }
    }
    console.log(arr);
    return arr;
  }
  
  drop([1, 2, 3, 4], function(n) {return n > 5;}); // []
  drop([1, 2, 3, 4], function(n) {return n >= 3;});// [3, 4]
  drop([0, 1, 0, 1], function(n) {return n === 1;}) ;// [1, 0, 1]
  drop([1, 2, 3], function(n) {return n > 0;});// [1, 2, 3]