
module.exports = function()
{
      this.World = require('../support/helper/world.js').World;
      this.When(/^I click the Get Started button$/, function ()
      {
      return element(by.css('body > header > div.hero.background-superhero-paper.is-large > a')).click();
      });
      this.When(/^I enter "([^"]*)"$/, function (arg1)
      {
      return element(by.css('body > nav.sidenav.l-pinned-left.l-layer-4.l-offset-nav > header > div > input')).sendKeys(arg1);
      });
      this.When(/^I search "([^"]*)" in serach docs$/, function (arg1)
      {
      return element(by.css('body > nav.sidenav.l-pinned-left.l-layer-4.l-offset-nav > header > div > input')).sendKeys(arg1);
      });
      this.Then(/^I should see the heading "([^"]*)"$/, function (arg1,done)
      {
      this.expect(element(by.className('hero-title')).getText()).to.eventually.equal(arg1).and.notify(done);
      });
}
