/*遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）
的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么此对象
的每一个属性-值对都必须存在于 collection 的对象中。

例如，如果第一个参数是 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
 { first: "Tybalt", last: "Capulet" }]，第二个参数是 { last: "Capulet" }，
 那么你必须从数组（第一个参数）返回其中的第三个对象，因为它包含了作为第二个参数传递的属性-值对。 */

 // 方法一： 使用for循环
function where(collection, source) {
    var arr=[];
    var source_key = Object.keys(source); 
    for(var j = 0; j< collection.length;j++){
      var O = collection[j];
      for(var i=0; i< source_key.length;i++){
        var source_val = source[source_key[i]];
        var oVal = O[source_key[i]];
        if(O.hasOwnProperty(source_key[i]) && (oVal == source_val) && (i == source_key.length-1)){
          arr.push(O);
          /*if(oVal == source_val){
            if(i == source_key.length-1){
              arr.push(O);
            }  
          }*/  
        }
      }  
    }
    return arr;
  }
  
  where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });//[{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]

  // 方法二： fliter()和for循环
  function where(collection, source) {
    var source_key = Object.keys(source);
    return collection.filter(function(val){
      for(var i = 0;i<source_key.length;i++){
        var source_val = source[source_key[i]];
        if(val.hasOwnProperty(source_key[i])){
          var oVal = val[source_key[i]];
          if(oVal == source_val){
            if( i == source_key.length -1){
                return val;
            }
          }
        } 
      } 
    });
  }
  where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });// [{ first: "Tybalt", last: "Capulet" }]
  