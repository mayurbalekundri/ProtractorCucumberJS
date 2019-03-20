module.exports = function() {
  this.World = require('../support/helper/world.js').World;
  this.Given(/^I go to "([^"]*)"$/, function(site) {
    return browser.get(site);
  });

  this.When(/^I add "([^"]*)" in the task field$/, function(task) {
    return element(by.model('todoList.todoText')).sendKeys(task);
  });


       this.When(/^I click the add button$/, function (callback) {
         var el = element(by.css('[value="add"]'));
         el.click();
        // Write code here that turns the phrase above into concrete actions
        callback();
      });

  this.Then(/^I should see my new task in the list$/, function(done) {
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    this.expect(todoList.count()).to.eventually.equal(3);
    this.expect(todoList.get(2).getText()).to.eventually.equal('Be Awesome')
      .and.notify(done);
  });
};
