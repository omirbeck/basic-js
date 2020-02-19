module.exports = function countCats(backyard) {
    let number = 0;
    backyard.forEach(i => {
      if (i == "^^") number++;
    });
    
    return number;
};
