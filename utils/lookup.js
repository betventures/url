module.exports = function (array, prop, value) {
  if (!Array.isArray(array)) return
  var lookup = {}
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i][prop] !== 'undefined') {
      lookup[array[i][prop]] = array[i]
    }
  }
  if (lookup[value]) return lookup[value]
  return
};
