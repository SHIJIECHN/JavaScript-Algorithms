/*写一个 function，它遍历数组 arr，并返回数组中第一个满足 func 返回值的元素。
举个例子，如果 arr 为 [1, 2, 3]，func 为 function(num) {return num === 2; }，
那么 find 的返回值应为 2 */
function find(arr, func) {
    var num = arr.filter(val=>{
        console.log(val);
        return func(val);
    });
    return num[0]; 
  }
  find([1, 3, 5, 9], function(num){ return num % 2 === 0; }); // undefined
  find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) ; // 8

  