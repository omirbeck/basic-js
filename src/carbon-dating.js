const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity) return false;

  if (typeof(sampleActivity) == 'string') {
    let sample = parseFloat(sampleActivity);

    if ( 0 < sample && sample < 15) {
      let k = 0.693/HALF_LIFE_PERIOD;
      let ln = Math.log(MODERN_ACTIVITY/sample);

      return Math.ceil(ln/k);
    } else return false;

  } else return false;
};
