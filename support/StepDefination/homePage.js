/*jslint node: true*/
var SearchPage = require('../Pages/searchPage');
this.World = require("./world.js").World;
var homePage = function () {
    "use strict";
    var search = new SearchPage();
    
    this.Given(/^I am on google page$/, function () {
         
         browser.get("http://google.com");
        

    });
      this.Then('failed step', function(){
        throw new Error('failed');
    });
};

module.exports = homePage;