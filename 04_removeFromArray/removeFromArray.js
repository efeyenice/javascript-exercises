const removeFromArray = function(arr, ...args) {
    for (let item of args) {
        let index = 0;
        while(index !== -1) {
            index = arr.indexOf(item);
            if (index !== -1) {
                arr.splice(index, 1); // Remove one element at the found index
            }
        }
    }

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
