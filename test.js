var iterate = require("./index.js");
var list = [7,5,4,101,40]
var largestNum = 0;

iterate(list,
function(element,done){
largestNum += element;
done();
},
printLargestNum
);

function printLargestNum(){
    console.log(largestNum);
    if(largestNum == 157){
        process.exit(0);
    } else {
        process.exit(1);
    }
}