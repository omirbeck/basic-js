module.exports = function countCats(backyard) {
    let number = 0;
    backyard.forEach(i => {
      i.forEach(j => {
        if (j == "^^") number++;
      });
    });
    return number;
};
