// 方法一
function palindrome(str) {
    var re = /[\W_]/g; // 匹配规则，\W是查找非单词字符，但是为了最后一个特例，所以把"_"下划线也加进去
    var str1 = str.toLowerCase(); // 将字符转换成小写
    var oldStr = str1.replace(re, ''); //得到的原来字符串替换后的字符串
    var newStr = oldStr.split('').reverse().join(''); // 把字符串进行翻转后，得到新的字符串
    return oldStr == newStr; //判断翻转后的字符串和原字符串是否相等
  }

  palindrome("My age is 0, 0 si ega ym."); // 测试 true
  palindrome("not a palindrome"); // 测试 false.


// 方法二
function palindrome(str){
    // 把字符串中大写字母变成小写，并移除非单词字符
    var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var count = 0;
    // 
    if(cstr===""){
        alert("Nothing found!")
        return false;
    }

    if((cstr.length) % 2 === 0){
        ccount = (cstr.length) / 2;
    }else{
        if(cstr.length === 1){
            alert("Entry is a palindrome.")
            return turn;
        }else{
            ccount = (cstr.length-1) / 2;
        }
    }
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