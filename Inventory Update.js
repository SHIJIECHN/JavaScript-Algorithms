/*依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 如果货物已存在则更新数量 .
 如果没有对应货物则把其加入到数组中，更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列. */

function updateInventory(arr1, arr2) {
    let curName =[],
        curList = [],
        newName = [],
        newList = [],
        result =[];
    
    for(let i=0; i<arr1.length;i++){
        curName.push(arr1[i][1]);
        curList.push(arr1[i][0]);
    }
    for(let j=0;j<arr2.length;j++){
        newName.push(arr2[j][1]);
        newList.push(arr2[j][0]);
    }
    for(let k=0;k<newName.length;k++){
        if(curName.includes(newName[k])){
            let idx = curName.indexOf(newName[k]);
            curList[idx] += newList[k];
        }else{
            curName.push(newName[k]);
            curName.sort();
            index = curName.indexOf(newName[k]);
            curList.splice(index,0,newList[k]);
        }
    }
    for(let i = 0;i<curName.length;i++){
        result[i] = [curList[i],curName[i]];
    }
    return result;
}

// 仓库库存示例
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);