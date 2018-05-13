/*如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true
  ["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到
  ["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"。
  ["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到。
*/
function mutation(arr) {
    // 将大写字母转化成小写
    var newArr = arr.map(function(val){
      return val.toLowerCase();
    });
    // 对数组进行判断
    for(var i=0;i< newArr[1].length;i++){
      var a =newArr[0].indexOf(newArr[1][i]);
      if(a == -1){ // 只要找到不符合的就返回false
        return false;
      }
    }
    return true;
  }
  
  mutation(["hello", "hey"]); // false
  mutation(["hello", "Hello"]);// true.
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);// true.
  mutation(["Mary", "Army"]) ;// true.
  mutation(["Mary", "Aarmy"]) ;// true.
  