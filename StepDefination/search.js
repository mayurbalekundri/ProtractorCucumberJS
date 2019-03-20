var SearchPage = require('../Pages/searchPage');
var searchText = function () {
   this.World = require('../support/helper/world.js').World;
    "use strict";
    var search = new SearchPage();
    browser.ignoreSynchronization=true;
    this.Given(/^I am on google page$/,function (callback)
        {
        browser.driver.get("https://google.com");
        browser.sleep(2000);
        callback();
         });
    this.When(/^I type "([^"]*)"$/, function (arg1,callback)
        {
       search.searchTextBox.sendKeys(arg1);
       callback();
        });
    this.Then(/^I click search button$/, function ()
       {
        return   search.searchButton.click();
        });
    this.Then(/^I clear search textbox$/, function (done)
       {
          search.searchTextBox.clear();
          this.expect(search.searchTextBox.getText()).to.eventually.equal("").and.notify(done);
          done();
        });
};

module.exports = searchText;
