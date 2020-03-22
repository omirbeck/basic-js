module.exports = function transform(arr) {
    if (arr instanceof Array) {
        let array = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '--double-next') {
                if (i + 1 < arr.length) array.push(arr[i + 1]);
            } 
            else if (arr[i] == '--discard-next') i++;
            else if (arr[i] == '--discard-prev') array.pop();
            else if (arr[i] == '--double-prev') {
                if (i - 1 >= 0) array.push(arr[i - 1]);
            }
            else array.push(arr[i]);
        } return array;
    } else throw Error;    
};

//console.log(transform(arr))