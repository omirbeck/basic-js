module.exports = function createDreamTeam(members) {
  if (members instanceof Array) {
    const result = members.filter(index => typeof(index) == 'string')
    const dream = result.map(index => {
    let dreams = String(index.trim());
    return dreams[0].toUpperCase();
  })
    return dream.sort().join('');
  }
  else { 
    return false; 
  }
};