/* eslint-disable no-console */
/* eslint-disable no-loop-func */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  getRandomInt,
};
