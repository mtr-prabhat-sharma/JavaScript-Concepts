let str = 'datbcdaefdcsa';
let arr = str.split('');
let res = arr.filter((e) => {
    return arr.indexOf(e) === arr.lastIndexOf(e);
});
console.log(res); //[ 't', 'b', 'e', 'f', 's' ]

//2nd Method

let str1 = 'datbcdaefdcsa';
let arr1 = str.split('');
let count = {};
for(let i=0;i<arr.length;i++){
    if(count[arr[i]] === undefined) {
        count[arr[i]] = 0;
    } else {
        count[arr[i]] = 1;
    }
}
let res1 = Object.keys(count).filter((e) => count[e] === 0);
console.log(res); ////[ 't', 'b', 'e', 'f', 's' ]