/* 重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串 */
function repeat(str, num) {
    var newStr = '';
    if(num < 0){
      return newStr;
    }else{
      for(var i =0; i< num; i++){
         newStr += str;
      }
       return newStr;
    } 
  }
  
  repeat("abc", 3); // abcabcabc
  repeat("abc", 4) ;// abcabcabcabc
  repeat("*", 8) ;// ********
  repeat("abc", -2);// 应该返回 
  