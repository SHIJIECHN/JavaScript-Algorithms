/*删除数组中的所有假值。

在JavaScript中，假值有false、null、0、""、undefined 和 NaN */
function bouncer(arr) {
    // filter()方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
    return arr.filter(function(val){ 
      /*  Boolean对象是一个布尔值的对象包装器  如果第一个参数不是布尔值，
       则会将其转换为布尔值。如果省略该参数，或者其值为 0、-0、null、false、NaN、undefined、
       或者空字符串（""），则生成的 Boolean 对象的值为 false */
      return Boolean(val);
    });
  }
  
  bouncer([7, "ate", "", false, 9]); // [7, "ate", 9].
  bouncer(["a", "b", "c"]);// ["a", "b", "c"].
  bouncer([false, null, 0, NaN, undefined, ""]) ;// [].
  bouncer([1, null, NaN, 2, undefined]);// [1, 2]

