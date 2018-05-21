/*传递一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。最小的数字并非总在最前面*/

function sumAll(arr) {
    // 求出数组中的最大值
    var max = Math.max(...arr); // 也可以使用Math.max(null,arr)
    // 求出数组中的最小值
    var min = Math.min(...arr);
    // 生成一个数组在最大值和最小值之间
    var newArr=[];
    for(var i=min;i<=max;i++){
      newArr.push(i);
    }
    // 将数组中的值进行求和
    return newArr.reduce(function (a, b) {
      return a + b;
     }, 0); 
  }
  sumAll([1, 4]);

  /*总结：
  1、采用Math.max()、Math.min()求最大值和最小值
  2、利用reduce()进行求和
  */
  