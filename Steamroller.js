/*对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套 */
function steamroller(arr) {
    // I'm a steamroller, baby
    var result = [];    //定义结果数组
    function steam(ifArr) {   // 定义内部函数.  
      if(Array.isArray(ifArr)){ 
        return ifArr.forEach(function(val){   //我这里用了forEach 循环数组, 想知道它的详情, 下面有链接.
          return steam(val);          // 递归调用 steam函数. 
        });
      }
      else
          result.push(ifArr);
    }
    
    steam(arr);   //调用函数, 
    
    return result; // 返回结果数组
  }
  
  steamroller([1, [2], [3, [[[4]]]]]);// [1,2,3,4]
  steamroller([[["a"]], [["b"]]]);// ["a","b"]
  steamroller([1, {}, [3, [[4]]]]); // [1, {}, 3, 4]