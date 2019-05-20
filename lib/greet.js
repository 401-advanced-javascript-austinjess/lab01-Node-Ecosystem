'use strict';

module.exports = function(str) {
  return typeof str === 'string' ? `Hello ${str}` : null;
};
