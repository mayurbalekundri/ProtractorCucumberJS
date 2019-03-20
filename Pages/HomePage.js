var HomePage = function () {
    "use strict";
   
	this.custlogin = element(by.buttonText("Customer Login"));
	this.mgrlogin = element(by.buttonText("Bank Manager Login"));
	this.home=element(by.xpath("//button[@class='btn home'][.='Home']"));
    this.header=element(by.xpath("//div[@class='box mainhdr']/strong[@class='mainHeading']"));
	// Methods in the Home Page

	this.NavigateToHomePage = function(){
		
		this.home.click();
		return this;
		
	};
	
	this.LoginAsCustomer = function() {

		this.custlogin.click();
		return this;

	};

	this.LoginAsBankManger = function() {

		this.mgrlogin.click();

	//	return require('./AddCustomerDetails.js');
		return this;
	};
	
	

};
module.exports = new HomePage();


