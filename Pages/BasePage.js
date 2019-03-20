var BasePage = function() {

	this.navigatetourl = function(url) {

		browser.get(url);

	};

	this.getpagetitle = function() {

		
		return browser.getTitle();
		
	};

};

module.exports = new BasePage();