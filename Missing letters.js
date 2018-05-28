function fearNotLetter(str) {
    let min = str.charCodeAt(0); 
    let max = str.charCodeAt(str.length-1);
    let origArr = Array.from(str);
    let arr = origArr.map(function(val){
        return val.charCodeAt();
    });
    let newArr=[];
    for(let i=min; i<=max; i++){
        newArr.push(i);
    }
    if(newArr.length == arr.length){
        return;
    }else{
        let resStr = newArr.filter(function(ele){
            return arr.indexOf(ele) === -1;
        });
        console.log(String.fromCharCode(resStr));
        return String.fromCharCode(resStr);
    }
  }
  
  fearNotLetter("abce");