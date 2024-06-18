const sumAll = function(rangeLow, rangeHigh) {
    if(typeof(rangeLow) != "number" || typeof(rangeHigh) != "number")
        return "ERROR"
    else if(rangeLow < 0 || rangeHigh < 0)
        return "ERROR"
    else if(rangeLow > rangeHigh) {
        let temp = rangeLow;
        rangeLow = rangeHigh;
        rangeHigh = temp;
        return ((rangeHigh * (rangeHigh + 1)) - (rangeLow * (rangeLow - 1))) / 2;
    }
    else
        return ((rangeHigh * (rangeHigh + 1)) - (rangeLow * (rangeLow - 1))) / 2;

};

// Do not edit below this line
module.exports = sumAll;
