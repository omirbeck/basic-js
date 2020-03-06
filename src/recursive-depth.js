module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let deep = 0;
        arr.forEach(element => {
            if (element instanceof Array) {
                deep = Math.max(this.calculateDepth(element), deep);
              }
            })
            deep++;
            return deep;
          }
};