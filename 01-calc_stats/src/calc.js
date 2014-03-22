exports.min = function (numArray) {
    var numberIndex,
        min;

    checkForInputErrors(numArray);

    for (numberIndex = 0; numberIndex < numArray.length; numberIndex++) {
        if (isNaN(numArray[numberIndex])) {
            throw new Error('Non numeric value found in array');
        }

        if (!min || numArray[numberIndex] < min) {
            min = numArray[numberIndex];
        }
    }

    return min;
};

exports.max = function (numArray) {
    var numberIndex,
        max;

    checkForInputErrors(numArray);

    for (numberIndex = 0; numberIndex < numArray.length; numberIndex++) {
        if (isNaN(numArray[numberIndex])) {
            throw new Error('Non numeric value found in array');
        }

        if (!max || numArray[numberIndex] > max) {
            max = numArray[numberIndex];
        }
    }

    return max;
};

exports.count = function (numArray) {
    if (!(numArray instanceof Array)) {
        throw new Error('Wrong input given!');
    }

    return numArray.length;
};

exports.avg = function (numArray) {
    var numberIndex,
        sum = 0;

    checkForInputErrors(numArray);

    for (numberIndex = 0; numberIndex < numArray.length; numberIndex++) {
        if (isNaN(numArray[numberIndex])) {
            throw new Error('Non numeric value found in array');
        }

        sum += numArray[numberIndex];
    }

    if (sum === 0) {
        throw new Error('Input array is filled with zeros!');
    }

    return sum / numArray.length;
};


function checkForInputErrors(inputArg) {
    if (!(inputArg instanceof Array)) {
        throw new Error('Wrong input given!');
    }

    if (!inputArg.length) {
        throw new Error('Input array is empty!');
    }
}