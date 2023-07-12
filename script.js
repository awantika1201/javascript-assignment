let arr=[1,2,3,4,5];

// map function

function getSquare(num){
    return num*num
}

function map(arr,getSquare){
    const newArr=[];
    for(let i=0; i<arr.length; i++){
        newArr.push(getSquare(arr[i]));
    }
    return newArr;
}


//filter function

function isOdd(num){
    if(num%2!=0){
        return true;
    }
    return false;
}

function filter(arr,isOdd){
    const newArr=[];
    for(let i=0; i<arr.length; i++){

        if(isOdd(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//reduce function

function getSum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

function reduce(arr,getSum){
    return getSum(arr);

}

//foreach function

function printSquare(num){
    console.log(num*num);
}

function forEach(arr,printSquare){
    for(let i=0; i<arr.length; i++){
        printSquare(arr[i]);
    }
}

console.log(arr);
console.log(map(arr,getSquare));
console.log(filter(arr,isOdd));
console.log(reduce(arr,getSum));
console.log(forEach(arr,printSquare));

