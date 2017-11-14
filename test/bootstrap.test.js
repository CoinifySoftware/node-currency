/*
 * Set up chai
 */
const chai = require('chai');

global.expect = chai.expect;
global._ = require('lodash');
global.currency = require('../src/index');
