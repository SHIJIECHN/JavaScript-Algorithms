/* 实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值 */
// 方法一
function destroyer(arr) {
    // arr是传输进来的第一个参数,也就是数组
    // newArr用来存放待摧毁的值
    var newArr =[];
    // arguments中的待摧毁的值放到一个数组中
    for(var i=1;i<arguments.length;i++){
      newArr.push(arguments[i]);
    }
    // 用filter进行过滤
    var temp = arr.filter(function(item,index,array){
      return newArr.indexOf(item) < 0;
    });
    return temp;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1].
  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); //[1, 5, 1].
  destroyer([3, 5, 1, 2, 2], 2, 3, 5); // [1].
  destroyer([2, 3, 2, 3], 2, 3); // [].
  destroyer(["tree", "hamburger", 53], "tree", 53); // ["hamburger"]

  // 方法二
  function destroyer(arr) {
    // arr是传输进来的第一个数组
    var newArr =arguments;
    for(var i =1; i<newArr.length;i++){
        arr = arr.filter(function(val){
           return val!== newArr[i];
        });
      }
      return arr;
  }
  destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1].
  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); //[1, 5, 1].
  destroyer([3, 5, 1, 2, 2], 2, 3, 5); // [1].
  destroyer([2, 3, 2, 3], 2, 3); // [].
  destroyer(["tree", "hamburger", 53], "tree", 53); // ["hamburger"]

  