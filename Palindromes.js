function palindrome(str) {
    var re = /[\W_]/g; // 匹配规则，\W是查找非单词字符，但是为了最后一个特例，所以把"_"下划线也加进去
    var str1 = str.toLowerCase(); // 将字符转换成小写
    var oldStr = str1.replace(re, ''); //得到的原来字符串替换后的字符串
    var newStr = oldStr.split('').reverse().join(''); // 把字符串进行翻转后，得到新的字符串
    return oldStr == newStr; //判断翻转后的字符串和原字符串是否相等
  }

  palindrome("My age is 0, 0 si ega ym."); // 测试 true
  palindrome("not a palindrome"); // 测试 false.
  