'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isInt(str)).toBeFalsy();
    expect(validator.isInt(num)).toBeTruthy();
    expect(validator.isInt(arr)).toBeFalsy();
    expect(validator.isInt(obj)).toBeFalsy();
    expect(validator.isInt(func)).toBeFalsy();
    expect(validator.isInt(bool)).toBeFalsy();
  });

  it('arrays', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isArr(str)).toBeFalsy();
    expect(validator.isArr(num)).toBeFalsy();
    expect(validator.isArr(arr)).toBeTruthy();
    expect(validator.isArr(obj)).toBeFalsy();
    expect(validator.isArr(func)).toBeFalsy();
    expect(validator.isArr(bool)).toBeFalsy();
  });

  it('objects', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isObj(str)).toBeFalsy();
    expect(validator.isObj(num)).toBeFalsy();
    expect(validator.isObj(arr)).toBeFalsy();
    expect(validator.isObj(obj)).toBeTruthy();
    expect(validator.isObj(func)).toBeFalsy();
    expect(validator.isObj(bool)).toBeFalsy();
  });

  it('booleans', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isBoo(str)).toBeFalsy();
    expect(validator.isBoo(num)).toBeFalsy();
    expect(validator.isBoo(arr)).toBeFalsy();
    expect(validator.isBoo(obj)).toBeFalsy();
    expect(validator.isBoo(func)).toBeFalsy();
    expect(validator.isBoo(bool)).toBeTruthy();
  });

  it('functions', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isFunc(str)).toBeFalsy();
    expect(validator.isFunc(num)).toBeFalsy();
    expect(validator.isFunc(arr)).toBeFalsy();
    expect(validator.isFunc(obj)).toBeFalsy();
    expect(validator.isFunc(func)).toBeTruthy();
    expect(validator.isFunc(bool)).toBeFalsy();
  });

});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(true).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(true).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});

