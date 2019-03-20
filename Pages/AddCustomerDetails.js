
//var SelectWrapper = require('../util/select-wrapper.js');
global.elegettext;
this.DateArray;
var AddCustomerDetails = function (){
	
	this.addcustomer= element(by.buttonText("Add Customer"));
	this.openaccount= element(by.buttonText("Open Account"));
	this.customers= element(by.xpath("//button[@ng-click='showCust()']"));
	
	this.firstname= element(by.model("fName"));
	this.lastname=element(by.model("lName"));
	this.postalcode=element(by.model("postCd"));
	this.submitinfo=element(by.xpath("//button[@type='submit']"));
	
	this.openaccountprocess=element(by.buttonText("Process"));
	this.searchcustomer=element(by.model("searchCustomer"));
	this.deletecustomer=element(by.xpath("//button[.='Delete']"));
	
	this.customerlstbox=element(by.xpath("//select[@id='userSelect']"));
    this.currencylstbox=element(by.xpath("//select[@id='currency']"));
	this.processbtn=element(by.xpath("//button[@type='submit'][.='Process']"));
	this.btnnmaes=element.all(by.xpath("//div[@class='center']/button"));
	this.fnames=element.all(by.xpath("//table[contains(@class,'table-bordered table')]/tbody/tr/td[1]"));
	this.postalcodes=element.all(by.xpath("//table[contains(@class,'table-bordered table')]/tbody/tr/td[3]"));
	this.tablerow=element.all(by.xpath("//table[contains(@class,'table-bordered table')]/tbody/tr"));
  //  this.tdate=element.all(by.xpath("//table[@id='example']/tbody/tr/td[5]"))
    this.tdate=element.all(by.xpath("//table[@id='example']/tbody/tr/td[3]"))
	var FirstName=[];
	var PostalCode=[];
	this.CustLogin=element(by.xpath("//button[.='Customer Login']"))
	
	this.gotoAddCustomer= function(){
		
		
		this.addcustomer.click();
		
			
		return this;
	};
	
	
	
	this.gotoOpenAccount = function() {
		
		this.openaccount.click();
		
		return this;
		
	};
	
	this.gotoSearchCustomer = function() {
		
		this.customers.click();
		return this;
	};
	
	
	
	this.addCustomerInfo = function(FirstName,LastName,PostalCode){
		
		this.firstname.sendKeys(FirstName);
		this.lastname.sendKeys(LastName);
		this.postalcode.sendKeys(PostalCode);
		this.submitinfo.click();
		
		
		return this ;
		
	};
	
	this.OpenCustomerAccount= function(Cust,Currency){
		
		var mySelect = new SelectWrapper(by.id("userSelect"));
		mySelect.selectByText(Cust);
		browser.sleep(3000);
		var mySelect = new SelectWrapper(by.id("currency"));
		mySelect.selectByText(Currency);
		browser.sleep(3000);
		this.openaccountprocess.click();
		browser.sleep(3000);
		return this;
		
	};
	
	this.SearchCustomerRecord = function(Customer){
		
		this.searchcustomer.sendKeys(Customer);
		browser.sleep(3000);
		this.deletecustomer.click();
		browser.sleep(3000);
		return this;
		
	};
	
	this.getlabeladdcustomer= function(){
		
		var labels=element.all(by.xpath("//div[@class='form-group']/label"));
		
		return labels;
		
     };
     
     this.getbuttonlabels=function(){
    	 
    	 var buttons=element.all(by.xpath("//button[@class='btn btn-lg tab']"));
    	 return buttons;
     };
     
     this.SelectCustomerName=function(CustomerName){
    	 
    	 this.custname=element(by.xpath("//select[@id='userSelect']/option[@ng-repeat='cust in Customers'][.='"+CustomerName+"']"));
    	 this.custname.click();
     };
     
     this.ClickOnCustomerListBox=function(){
    	 
    	 this.customerlstbox.click();
    	 return this;
    	 
     };
     
   this.ClickOnCurrencyListBox=function(){
    	 
	    this.currencylstbox.click();
    	 return this;
    	 
     };
     
 this.SelectCurrencyName=function(CurrencyrName){
    	 
    	 this.currencyname=element(by.xpath("//select[@id='currency']/option[.='"+CurrencyrName+"']"));
    	 this.currencyname.click();
    	 return this;
     };
     
  this.ClickOnProcessButton=function(){
	  
	  this.processbtn.click();
	   return this;
  }; 
  
  this.SearchCustomerName=function(Customer){
	  
	  this.searchcustomer.sendKeys(Customer);
	  return this;
  };
  
 this.DeleteCustomer=function(){
	  
	 this.deletecustomer.click();
	  return this;
  };
  
  this.CloseAlert=function(){
	  
	  browser.switchTo().alert().accept();
	  
  };
  
  this.GetText=function(elementname){
	  
	  
		elementname.getText().then(function(names) {
			
		//	console.log('Button Names are..'+names);
			elegettext=names;
			
		})
	  
	  
  };
  
  this.GetFirstName=function(no){
	  
	  this.fname=element(by.xpath("(//tbody/tr/td[1])["+no+"]"));
	   return this.fname;
  }
  
 this.GetPostalCode=function(number){
	  
	  this.fname=element.all(by.xpath("//table[contains(@class,'table-bordered table')]/tbody/tr/td[1]"));
	  this.fname.getText().then(function(pcode){
		  
		  console.log(pcode);
		//  return pcode;
		//  PostalCode.push(pcode);
	  })
	  return this;
  }
 
 this.GetPostalCodeForGivenFName=function(name){
	 
	 this.PcodeForName=element(by.xpath("//tbody/tr/td[.='"+name+"']/following :: td[2]"));
	 return this.PcodeForName;
 }
 
this.NavigateToCustomerLogin=function(name){
	 
	element(by.xpath("//button[.='Customer Login']")).click();
	browser.sleep(500);
	element(by.xpath("//select[@name='userSelect']")).click();
	browser.sleep(500);
	element(by.xpath("//select[@id='userSelect']/option[.='Ron Weasly']")).click();
	browser.sleep(500);
	element(by.xpath("//button[.='Login']")).click();
	browser.sleep(500);
	
	element(by.xpath("//button[@ng-class='btnClass2']")).click();
	browser.sleep(500);
	element(by.xpath("//input[@ng-model='amount']")).sendKeys("10");
	browser.sleep(500);
	element(by.xpath("//button[.='Deposit']")).click();
	browser.sleep(500);
	
	element(by.xpath("//button[@ng-class='btnClass2']")).click();
	browser.sleep(500);
	element(by.xpath("//input[@ng-model='amount']")).sendKeys("15");
	browser.sleep(500);
	element(by.xpath("//button[.='Deposit']")).click();
	browser.sleep(500);
	
	element(by.xpath("//button[@ng-class='btnClass2']")).click();
	browser.sleep(500);
	element(by.xpath("//input[@ng-model='amount']")).sendKeys("20");
	browser.sleep(500);
	element(by.xpath("//button[.='Deposit']")).click();
	browser.sleep(2000);
	
	element(by.xpath("//button[@ng-click='transactions()']")).click();
	browser.sleep(1000);
 }

this.GetDateArray=function(){
	 
	this.Sort=element(by.xpath("//tr[@role='row']/th[5]"));
	this.Sort.click();
	this.Sort.click();
	
	browser.sleep(3000);
	  var fdate = [];
//	  fdate.push(dte[0]);
	
	 this.tdate.getText().then(function(dtext){
		  
		  DateArray=dtext;
	  
	  });
	 
}
     
};

module.exports= new AddCustomerDetails();