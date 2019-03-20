var AngularPages = function () {
    "use strict";
    this.latestangular = element(by.xpath('//*[@id="navbar-notice"]/div/div/p[1]/a'));
    this.searchButton = $("button[name='btnG']");
};
module.exports = AngularPages;
