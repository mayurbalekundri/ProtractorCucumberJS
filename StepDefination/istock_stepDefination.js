var istockpage = require('../Pages/iStockPage.js');
//var data = require('../DataFiles/json/TestData.js');
module.exports = function() {
   this.World = require('../support/helper/world.js').World;
   var page = new istockpage();
   //launch
     this.Given(/^I am on "([^"]*)" and signed out$/, function (site) {
         browser.get(site);
         //browser.sleep(2000);
         browser.ignoreSynchronization=false;
         return this.expect((page.SignIN).isPresent()).to.eventually.be.true;
         
       });

    //login
       this.When(/^I login using username as "([^"]*)" and password as "([^"]*)"$/, function(arg1, arg2) {
         page.SignIN.click();
         page.username.sendKeys(arg1);
         page.password.sendKeys(arg2);
         
         return page.signin.click();
       });
      this.Then(/^I should be able to login and navigate to the profile page\.$/, function () {
         return this.expect((page.menu).isPresent()).to.eventually.be.true;
       });

     //signout

       this.Then(/^I signed out from the application.$/,function(){
         page.menu.click();
         return page.signout.click();
       });

      //invlaid sigin verification

       this.Then(/^I will get authentication error "([^"]*)".$/, function(arg1) {
         var result = page.alertbox.getText();
         return this.expect(result).to.eventually.equal(arg1);
        });

        // main page dropdown verification
       this.When(/^I click on search dropdown$/, function () {
         return element(by.css('.dropdown-arrow')).click();
       });
       this.Then(/^I should be able to see four elements in the dropdown$/, function () {
         return this.expect(element(by.className('media-types')).all(by.className('option')).count()).to.eventually.equal(4);
       });
       this.When(/^I select "([^"]*)"\.$/, function (arg1) {
       var EC = protractor.ExpectedConditions;
       var value = element(by.css("li[data-value="+arg1+"]"));
       browser.wait(EC.visibilityOf(value), 5000);
       return value.click();
       });
      this.Then(/^I should see the changed placeholder in search bar "([^"]*)"\+"([^"]*)"$/, function (arg1,arg2) {
      return this.expect(element(by.name('phrase')).getAttribute('placeholder')).to.eventually.equal(arg1+arg2);
      });


      //board verification
      this.When(/^I click on your boards\.$/, function () {
  //  	 return  browser.actions().mouseMove(istockpage.yourboard).click().perform();
  //	 return  browser.sleep(1000)
         return page.yourboard.click();
      });
      this.Then(/^I should be able to see the created board with "([^"]*)" title\.$/, function (arg1) {
        var test = browser.getTitle();
        console.log("Page titile"+test);
       return this.expect(browser.getTitle()).to.eventually.equal(arg1+"Board");
      });
      this.When(/^I create a board with "([^"]*)" title and description "([^"]*)"\.$/, function (arg1,arg2) {
        page.boardname.sendKeys(arg1);
        page.boarddes.sendKeys(arg2);
        return page.create.click();
       });
       this.When(/^I click on dropdown\.$/, function () {
         return element(by.model("picker.boardIdGetterSetter")).click();
       });
       this.When(/^I click on new board\.$/, function () {
         return page.createaboard.click();
       });
       this.When(/^I select view all boards\.$/, function () {
         return page.viewboards.click();
       });
       this.Then(/^I should see the list of created created board\.$/, function () {
         return this.expect(element.all(by.css('.board-item-container-ref')).count()).to.eventually.equal(3);

        });
};
