// 1. Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
// This is using push
function pushFront(arr, val){
    arr.push(val);
    var temp = arr[arr.length -1];
    for(var i = arr.length -1; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = temp;
    return arr 
}
console.log(pushFront([8,3,2,1],7))

// Not using push
function pushFrontagain(arr,val){
    for(var i = arr.length; i >= 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = val;

    return arr
}
console.log(pushFrontagain([8,3,2,1],7))

// 2. Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
// using pop

function popFront(arr){
    var temp = arr[0]
    for(var i = 1; i < arr.length + 1; i++){
        arr[i-1] = arr[i]
    }
    arr.pop()
    console.log("this is the array:"+ arr)
    return temp 
}

console.log(popFront([8,3,2,5]))


// not using pop

function popFrontagain(arr){
    var temp = arr[0]
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1]
}
    arr.length = arr.length - 1
    console.log('this is the array: ' + arr)
    return temp
}
console.log(popFrontagain([8,3,2,5]))

// 3. Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!
function insertAt(arr,index, val){
    for(var i = arr.length; i >= index; i --){
        arr[i] = arr[i-1]    
    }
    arr[index] = val
    return arr
}
console.log(insertAt([1,4,5,6],2,41))


// Need to work on bonus