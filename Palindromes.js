/*如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)  */

// 方法一
function palindrome(str) {
    // 匹配规则，\W是查找非单词字符，但是为了最后一个特例，所以把"_"下划线也加进去
    var re = /[\W_]/g; 
    // 将字符转换成小写
    var str1 = str.toLowerCase(); 
    //得到的原来字符串替换后的字符串
    var oldStr = str1.replace(re, ''); 
    // 把字符串进行翻转后，得到新的字符串
    var newStr = oldStr.split('').reverse().join(''); 
    //判断翻转后的字符串和原字符串是否相等
    return oldStr == newStr; 
  }

  palindrome("My age is 0, 0 si ega ym."); // 测试 true
  palindrome("not a palindrome"); // 测试 false.


// 方法二
function palindrome(str){
    // 把字符串中大写字母变成小写，并移除非单词字符
    var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var count = 0;
    // 字符串是否为空
    if(cstr===""){
        alert("Nothing found!")
        return false;
    }
    // 检测字符串长度是偶数还是奇数
    if((cstr.length) % 2 === 0){
        ccount = (cstr.length) / 2;
    }else{
        // 如果长度是奇数，且长度为1，则是回文
        if(cstr.length === 1){
            alert("Entry is a palindrome.")
            return turn;
        }else{
        // 如果是奇数则忽略中间一个字符    
            ccount = (cstr.length-1) / 2;
        }
    }
    // 循环检测第一个字符和最后一个字符是否一样，直到结束
    for(var x = 0; x < ccount; x++){
        if(cstr[x] != cstr.slice(-1-x)[0]){
            alert("Entry is not a palindrome.");
            return false;
        }
    }
    alert("The entry is a palindrome.");
    return true;
}

palindrome("0_0 (: /-\ :) 0-0"); // 测试 true