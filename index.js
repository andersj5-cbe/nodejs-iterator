
/**
 * Iterates over a list with a function asynchronously
 * @param {Array} list - the list of Items to be iterated over
 * @param {Function} iterateFunction - the function to be performed on each element of the list
 * @param {callbackFunction} callback - call back after finished.
 */
function iterate(list, iterateFunction,callback){
    var completed = 0;

    function done(){
        completed++;
        if(completed == list.length){
            callback();
        }
    }

    for(var i = 0;i< list.length;i++){
        iterateFunction(list[i],done);
    }
}

module.exports = iterate;