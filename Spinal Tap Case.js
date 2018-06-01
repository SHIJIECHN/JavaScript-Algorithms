/*将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词 */
function spinalCase(str) {
    str = str.replace(/_/g," ") //  把下划线替换成空格
            .replace(/([A-Z])/g," $1") // 对大写的单词进行分组 并在大写前面加空格
            .replace(/^\s/,"") // 去掉第一个大写字母前的空格 ^表示开始
            .replace(/\s+/g,"-") // 把空格替换成-
            .toLowerCase(); // 所有字母小写
    console.log(str);
  }
  
  //spinalCase("Teletubbies say Eh-oh");
  //spinalCase("The_Andy_Griffith_Show");
  spinalCase("thisIsSpinalTap");