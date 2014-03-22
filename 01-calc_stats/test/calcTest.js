/**
 * Your task is to process a sequence of integer numbers
 to determine the following statistics:

 o) minimum value
 o) maximum value
 o) number of elements in the sequence
 o) average value

 For example: [6, 9, 15, -2, 92, 11]

 o) minimum value = -2
 o) maximum value = 92
 o) number of elements in the sequence = 6
 o) average value = 21.833333
 */

var expect = require('chai').expect,
    calc = require(__dirname + '/../src/calc.js');

describe('Numbers statistics', function () {
    var sampleValues = [6, 9, 15, -2, 92, 11];

    it('should calculate the minimum value', function () {
        var expectedValue = -2;

        expect(calc.min(sampleValues)).to.equal(expectedValue);
    });

    it('should calculate the maximum value', function () {
        var expectedValue = 92;

        expect(calc.max(sampleValues)).to.equal(expectedValue);
    });

    it('should calculate the number of elements in given array', function () {
        var expectedResult = 6;

        expect(calc.count(sampleValues)).to.equal(expectedResult);
    });

    it('should calculate the average value', function () {
        var expectedResult = 21.8333;

        expect(calc.avg(sampleValues)).to.be.closeTo(expectedResult, 0.001);
    });

    describe('Possible errors', function () {
        describe('Empty input', function () {
            it('should throw an exception for calulating min/max if input number array is empty', function () {
                var minFn = function () {
                    calc.min([]);
                };
                var maxFn = function () {
                    calc.max([]);
                };
                var expectedError = /Input array is empty/;

                expect(minFn).to.throw(Error, expectedError);
                expect(maxFn).to.throw(Error, expectedError);
            });

            it('should throw an exception for calculating average value if input numbers array is empty', function () {
                var avgFn = function () {
                    calc.avg([]);
                };

                expect(avgFn).to.throw(Error, /Input array is empty/);
            });
        });

        describe('Wrong input', function () {
            it(
                'should throw an exception for calculating average value if input numbers array is filled with zeros',
                function () {
                    var avgFn = function () {
                        var inputArray = [0, 0, 0, 0, 0, 0];
                        calc.avg(inputArray);
                    };

                    expect(avgFn).to.throw(Error, /Input array is filled with zeros/);
                }
            );

            it('should throw an exception if input array is filled with non-numeric values', function () {
                var wrongInput = ["a", 9, "77", "666", this, [1,2]];
                var minFn = function () {
                    calc.min(wrongInput);
                };
                var maxFn = function () {
                    calc.max(wrongInput);
                };
                var avgFn = function () {
                    calc.avg(wrongInput);
                };
                var expectedError = /Non numeric value found in array/;

                expect(minFn).to.throw(Error, expectedError);
                expect(maxFn).to.throw(Error, expectedError);
                expect(avgFn).to.throw(Error, expectedError);
            });

            it('should throw an exception if input is not an array', function () {
                var wrongInputs = [
                    "Ala ma kota",
                    {ala: "ma", kota: "hehehe"},
                    12
                    ],
                    currentIndex;
                var minFn = function () {
                    calc.min(wrongInputs[currentIndex]);
                };
                var maxFn = function () {
                    calc.max(wrongInputs[currentIndex]);
                };
                var avgFn = function () {
                    calc.avg(wrongInputs[currentIndex]);
                };
                var countFn = function () {
                    calc.count(wrongInputs[currentIndex]);
                };
                var expectedError = /Wrong input given/;

                for (var inputIndex = 0; inputIndex < wrongInputs.length; inputIndex++) {
                    currentIndex = inputIndex;
                    expect(minFn).to.throw(Error, expectedError);
                    expect(maxFn).to.throw(Error, expectedError);
                    expect(avgFn).to.throw(Error, expectedError);
                    expect(countFn).to.throw(Error, expectedError);
                }
            });
        });
    });
});
