/*传入二进制字符串，翻译成英语句子并返回。二进制字符串是以空格分隔的 */
function binaryAgent(str) {
    let arr = str.split(" ");

    let arrLetter = arr.map(val=>{
        let valInt = parseInt(val,2);
        return String.fromCharCode(valInt);
    });
    let newStr = arrLetter.join("");
    return newStr;
  }
  
  binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");//"Aren't bonfires fun!?"