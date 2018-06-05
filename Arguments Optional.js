/*创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。

例如，add(2, 3) 应该返回 5，而 add(2) 应该返回一个 function。

调用这个有一个参数的返回的 function，返回求和的结果：

var sumTwoAnd = add(2);

sumTwoAnd(3) 返回 5。

如果两个参数都不是有效的数字，则返回 undefined。 */
function add() {
    if(typeof arguments[0]=="number" && typeof arguments[1]=="number"){
        return arguments[0]+arguments[1];
    }
    else if(arguments.length == 1 && typeof arguments[0]=="number"){
        var x =arguments[0];
        return function(y){
            if(typeof y == "number"){
                return x + y;
            }
        }
    }
  }
  add(2)(3); // 5
  add("http://bit.ly/IqT6zt");// undefined
  add(2, 3);// 5
  add(2, "3");// undefined
  add(2)([3]);// undefined