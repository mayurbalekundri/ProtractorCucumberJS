var istockPages = function () {
    "use strict";
    this.SignIN = element(by.linkText('Sign in'));
    this.username = element(by.css('input[type="text"]'));
    this.password = element(by.id('new_session_password'));
    this.signin = element(by.id('sign_in'));
    this.menu = element(by.css('.wide-header.right-off-canvas-toggle-menu'));
    this.signout = element(by.id('hypSignOut'));
    this.alertbox = element(by.className("alert_box"));
    //this.dropdown = element(by.css('.dropdown-arrow'));
 //   this.yourboard = element(by.css(".action-label"));
    this.yourboard=element(by.xpath("//ul[@class='nav-root']/li/a[@data-nav='nav=nav_Photos']"));
    this.first=element(by.xpath("//span[@class='board-title'][.='First']"));
    this.boardname = element(by.name('boardname'));
    this.boarddes = element(by.model('vm.newBoardDescription'));
    this.create = element(by.linkText('Create'));
    this.boarddown = element(by.model("picker.boardIdGetterSetter"));
    this.createaboard = element(by.cssContainingText('option', 'Create a Board'));
    this.viewboards = element(by.cssContainingText('option', 'View all Boards'));
    this.numofboards = element.all(by.css('.board-item-container-ref'));

 

};
module.exports = istockPages;
