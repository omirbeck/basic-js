module.exports = function createDreamTeam(members) {
  if (typeof(members) !== 'object' || members == null || members == { }) {
    return false 
  } else { 
  const result = members.filter(index => typeof(index) == 'string')
  const dream = result.map(index => {
    let dreams = String(index.trim());
    return dreams[0].toUpperCase();
  })
    return dream.sort().join('');
  }
 
  //throw 'Not implemented';
  // remove line with error and write your code here
};