/*凯撒密码Caesar cipher，又叫移位密码。
  移位密码也就是密码中的字母会按照指定的数量来做移位
  一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。
  写一个ROT13函数，实现输入加密字符串，输出解密字符串。
  所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们。
 */
function rot13(str) {
    var loc = 0; // 初始化在ASCII码中的位置
  var word=''; // 用于存放转换后新的字符串
  // 找出字符对应的ASCII码位置
  for(var i = 0;i<str.length;i++){  
    loc =str.charCodeAt(i);
    // 大写字母范围是65-90,不是大写字母的则直接转换成原字符
    if(loc<65 || loc>93){
      letter = String.fromCharCode(loc);
    }
    // 是大写字母的的，当位置加13后大于90的则循环从65开始
    else{
      loc += 13;
      if(loc > 90){
        loc = loc -90 +64;
      }
      letter = String.fromCharCode(loc);
    }
    // 新的字符串
    word += letter;
  }
  return word;
}

rot13("SERR PBQR PNZC");// "FREE CODE CAMP"
rot13("SERR CVMMN!");// "FREE PIZZA!"
rot13("SERR YBIR?");// "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");// "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
