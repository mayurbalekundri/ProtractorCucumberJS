var configure = function () {
    this.setDefaultTimeout(60 * 1000);
};

const util = require('util');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var EC = protractor.ExpectedConditions;
var config;
chai.use(chaiAsPromised);
chai.use(require("chai-sorted"));
<<<<<<< Updated upstream
chai.use(require('chai-datetime'));
/*var assertArrays = require('chai-arrays');
chai.use(assertArrays);*/

=======
>>>>>>> Stashed changes
global.expect = chai.expect;
global.util = util;
global.EC = EC;
global.config = config;

module.exports = configure;

