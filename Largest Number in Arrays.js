/*数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组*/
// 方法一
function largestOfFour(arr) {
    // 新建一个数组用来存放最大值
    var maxArr=[];
    // 遍历数组
    for(var i = 0; i < arr.length; i++){
      // 初始化最大值是数组的第一项  
      var maxNumber = arr[i][0];
      // 遍历数组每一项
      for(var j=1; j<arr[i].length; j++){
        // 寻找最大值  
        if(arr[i][j] > maxNumber){
          maxNumber = arr[i][j];
        }
      }
      // 把最大值保存到maxArr中
      maxArr.push(maxNumber);
    }
    return maxArr;
  }

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [27,5,39,1001]


// 方法二
function largestOfFour(arr) {
    return arr.map(function(subArr){ //sunArr是arr中的每一项
        return subArr.reduce(function(pre, curr){ // pre curr是subArr中的前一项和当前项
            return (curr > pre) ? curr : pre; // 返回最大值
        }, 0); // 0是初始化值
    });
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [27,5,39,1001]