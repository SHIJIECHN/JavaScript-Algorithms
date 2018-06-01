/*将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体 */
function convert(str) {
    var regObj = {
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        '"':"&quot;",
        "'":"&apos;"
      };
    let re = /[&<>"']/g;
    let arr = str.match(re);
    if(arr){
        for(let i=0; i<arr.length;i++){
            str = str.replace(arr[i],regObj[arr[i]]);
        }  
    }
    console.log(str);
    return str;
  }
  
  convert("<>");// &lt;&gt;
  convert("Dolce & Gabbana");// Dolce &​amp; Gabbana
  convert("Shindler's List");// Shindler&​apos;s List
  