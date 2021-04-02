//func 1
function filter_list(list) {
    return list.filter(x => typeof x === 'number');
}
console.log(filter_list([1,2,'a','b']));


//func 2
function find_FirstNotRepeatedChar(str) {
    var str = str.toLowerCase()
    var array1 = str.split('');
    var result = '';
    var ctr = 0;

    for (var x = 0; x < array1.length; x++) {
        ctr = 0;

        for (var y = 0; y < array1.length; y++)
        {
            if (array1[x] === array1[y]) {
                ctr+= 1;
            }
        }

        if (ctr < 2) {
            result = array1[x];
            break;
        }
    }
    return result;
}
console.log(find_FirstNotRepeatedChar('stress'));


//func 3
function digital_root(n) {
    if (n < 10) return n;
    return digital_root(
        n.toString().split('').reduce((acc, d) => {
            return acc + +d;
        },0));
}
console.log(digital_root(16));


//func 4
function PairsCount(array_1, n, sum)
{
    let count = 0; // Initialize result

    // Consider all possible pairs and check their sums
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (array_1[i] + array_1[j] == sum)
                count++;

    return count;
}

// Driver function to test the above function
let arr_1 = [1, 3, 6, 2, 2, 0, 4, 5];
let n = arr_1.length;
let sum = 5;
console.log(PairsCount(arr_1, n, sum));


//func 5
function meeting(s) {

    s = s.replace(/:/g, ", ").toUpperCase();

    const semicolon = ';'
    let testArr = s.split(semicolon)
    testArr.sort(function compare(a, b) {
        var splitA = a.split(",");
        var splitB = b.split(",");
        var firstA = splitA[0]
        var firstB = splitB[0]
        var lastA = splitA[splitA.length - 1];
        var lastB = splitB[splitB.length - 1];

        if (lastA < lastB) return -1;
        if (lastA > lastB) return 1;

        if (firstA < firstB) return -1; //sort first names alphabetically
        if (firstA > firstB) return 1;
        return 0; //if they are equal
    })
    let newArr = [];
    for (let i = 0; i < testArr.length; i++) {
        let variable = (testArr[i].replace(/([\w ]+), ([\w ]+)/g, "$2 $1"))
        variable = variable.replace(/ /g,", ")
        newArr.push(`(${variable})`)
    }
    let finalStr;
    finalStr = newArr.join('');
    return finalStr
}

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

console.log(meeting(s))

//extra func 1
function higher(num){
    var arr = num.toString().split('');
    for(var i=0;i<arr.length;i++){
        arr[i] = parseInt(arr[i],10);
    }
    arr = nextBigger(arr);
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        var tr = arr[i].join('');
        tr = parseInt(tr,10);
        if(tr>num){
            newArr.push(tr);
        }
    }
    if(newArr.length ==0){
        return -1;
    }else{
        return Math.min(...newArr);
    }
}
function nextBigger(array_1) {
    if (array_1.length > 1) {
        var beg = array_1[0];
        var arr1 = nextBigger(array_1.slice(1));
        var arr2 = [];
        var l =  arr1[0].length;
        for(var i=0; i < arr1.length; i++)
            for(var j=0; j <= l; j++)
                arr2.push(arr1[i].slice(0, j).concat(beg, arr1[i].slice(j)));
        return arr2;
    } else return [array_1];
}

console.log(higher(2017));

//extra func 2

function IPv4(num){
    num = (num>>>0).toString(2);
    if (num.length != 32){
        var k = 32-num.length;
        for(var i=0;i<k;i++){
            num = "0"+num;
        }
    }

    var res = [];
    for(var i =0;i<32;i = i+8){
        var st = num.slice(i,i+8);
        res.push(parseInt(st,2));
    }
    return res.join('.');
}
console.log(IPv4(0))