module.exports = function transform(arr) {
    if (arr instanceof Array) {
        let array = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '--double-next') {
                array.push(arr[i + 1])
                console.log(array)
            } else if (arr[i] == '--discard-next') {
                i++;
            } else {
                array.push(arr[i]);
            }
        } return array;
    } else throw Error;   
    //throw 'Not implemented';
    // remove line with error and write your code here
};
