/*把指定的字符串翻译成 pig latin
Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。

如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
*/
function translate(str) {
    var re = /[aeiou]/;
    var arr = str.split("");
    console.log(arr);
    var idx=[];
    for(var i =0;i<arr.length;i++){
        if(arr[i].match(re)){
            idx.push(arr.indexOf(arr[i]));    
        }
    }
    console.log(idx);
    if(idx[0]!==0){
        var newStr = str.substr(idx[0])+str.substr(0,idx[0])+"ay";
    }else{
        var newStr = str+"way";
    }
    
    console.log(newStr);
     return newStr;
  }
  
  translate("algorithm"); // "algorithmway"