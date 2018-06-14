const randomInclusive = require('random-inclusive');

module.exports = function(count, data){

  if (count > data.length) count = data.length;
  const floor = 0;
  const celing = data.length - count;
  const start = randomInclusive( floor, celing );
  const selected = data.slice( start, start + count );
  return selected;
};
