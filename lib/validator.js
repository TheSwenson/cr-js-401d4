'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};
 /**Is a number?
  *@param input
  *@returns {boolean}
  */
validator.isInt = (input) => {
  return Number.isInteger(input);
};
/**Is it an array?
  *@param input
  *@returns {boolean}
  */
 validator.isArr = (input) => {
  return Array.isArray(input);
};
/**
 * Is this an Object?
 * @param input
 * @returns {boolean}
 */
validator.isObj = (input) => {
  if (Array.isArray(input)){
    return false;
  }else if (typeof input === "object"){
    return true;
  } else{
    return false;
  }
};
/**Is it a boolean?
  *@param input
  *@returns {boolean}
  */
 validator.isBoo = (input) => {
  return typeof input === 'boolean';
};
/**Is it a function?
  *@param input
  *@returns {boolean}
  */
 validator.isFunc = (input) => {
  return typeof input === 'function';
};