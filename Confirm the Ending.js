/*判断一个字符串(str)是否以指定的字符串(target)结尾*/

function confirmEnding(str, target) {
    // 字符长度
    var tarLen = target.length;
    // substr(-n)截取字符
    var selectStr = str.substr(-tarLen);
    return selectStr === target;
  }
  
  confirmEnding("Bastian", "n");// true
  confirmEnding("He has to give me a new name", "name"); // true
  confirmEnding("Connor", "n");// true
  confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");// false