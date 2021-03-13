const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array, counter = 1, result = []) {
    result.push(counter);
    for (let i = 0; i < array.length; i++) {
      if (array[i] instanceof Array) {
        this.calculateDepth(array[i], counter + 1, result);
      }
    }
    result = result.sort((a, b) => b - a).pop();
    return result
  }
};
