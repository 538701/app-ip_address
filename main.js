/*
  Import the built-in path module.
  See https://nodejs.org/api/path.html
  The path module provides utilities for working with file and directory paths.
  IAP requires the path module to access local file modules.
  The path module exports an object.
  Assign the imported object to variable path.
*/
const path = require('path');

/**
 * Import helper function module located in the same directory
 * as this module. IAP requires the path object's join method
 * to unequivocally locate the file module.
 */
const { getIpv4MappedIpv6Address } = require(path.join(__dirname, 'ipv6.js'));

 function main() {
  }



