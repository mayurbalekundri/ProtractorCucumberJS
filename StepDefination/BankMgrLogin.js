var custpage = require('../pages/AddCustomerDetails.js');
var HomePage = require('../Pages/HomePage.js');
//var data = require('../DataFiles/json/TestData.js');

var data=require('../TestData/AppUrl.json')
var fn;


module.exports = function() {
   this.World = require('../support/helper/world.js').World;
 //  var expect = chai.expect;
 //  var page = new HomePage();
   //launch
  /*   this.Given(/^Open "([^"]*)" XYZ Bank Website$/, function (site) {
         browser.get(site);
         //browser.sleep(2000);
         browser.ignoreSynchronization=false;
     //    return this.expect((page.SignIN).isPresent()).to.eventually.be.true;
         
       });*/
   
   var nme;
   var pcode;

   this.Given(/^Open \"([^\"]*)\" XYZ Bank Website$/, function (SiteUrl) {
	   browser.get(SiteUrl);
	   return browser.sleep(2000);
	  });
   
   this.When(/^valiadate site header name as \"([^\"]*)\"$/, function (fh) {
	   
	
	    HomePage.header.getText().then(function(txt){
	    	
	    	console.log("Header Name "+txt);
	    	console.log("Header from Feature "+fh)
	  //      expect(txt).to.eventually.equal(fh);
		
		//expect(foo).to.equal('bar');
		
		expect(txt).to.equal(fh);
	    	
	    });
	    expect(HomePage.header.getText()).to.eventually.equal(fh);
	      
		return browser.sleep(2000);
	  });
   
   /*
    this.Given('Open XYZ Bank Website', function () {
         browser.get(data.Dev.DevUrl);
         //browser.sleep(2000);
         browser.ignoreSynchronization=false;
     //    return this.expect((page.SignIN).isPresent()).to.eventually.be.true;
         
       });*/
    /* this.When(/^Login as a Bank Manager$/, function () {

    //	 HomePage.mgrlogin.click();
    	 HomePage.LoginAsBankManger();
	   return browser.sleep(1000);	
	 			 	
	       });*/
     
     this.When(/^Login as a Bank Manager$/, function () {
    	 HomePage.LoginAsBankManger();
    	 return browser.sleep(2000);
    	  });
     
     this.Then(/^Get Text$/, function () {

 		custpage.btnnmaes.getText().then(function(nms) {
				console.log('Button Names are as follows... '+nms);
			})
			return browser.sleep(1000);	
	 			 	
	       });
    /* 
     this.When(/^Navigate to Add Customer$/, function (){
			custpage.gotoAddCustomer();
			
			custpage.submitinfo.getText().then(function(sbt) {
			console.log('Submit Button Names is... '+sbt);	
			})
			custpage.GetText(custpage.submitinfo);
			console.log('Submit Button Names is... '+global.elegettext);	
			return browser.sleep(1000);	
		
		});*/
     
     this.When(/^Navigate to Add Customer$/, function () {
    	 custpage.gotoAddCustomer();
    	 return browser.sleep(2000);
    	  });
		
   /* this.When(/^Navigate to Open Account$/, function (){
			
			custpage.gotoOpenAccount();
			return browser.sleep(1000);
			
		});*/
    
    this.When(/^Navigate to Open Account$/, function () {
    	
    	custpage.gotoOpenAccount();
    	 return browser.sleep(2000);
      });
    
   /* this.Then(/^Navigate to Search customer$/, function (){
			
			custpage.gotoSearchCustomer();
			return browser.sleep(2000);
			
		});*/
    
    this.Then(/^Navigate to Search customer$/, function () {
    	custpage.gotoSearchCustomer();
    	 return browser.sleep(2000);
      });
    

	 this.When(/^Add First Customer data$/, function (table){
		  const data = table.rowsHash();
		 // createUser(data);
			custpage.addCustomerInfo(data.FirstName, data.LastName, data.PostalCode)
			custpage.CloseAlert();
			
			return browser.sleep(2000);
			
		});
	
	 this.When(/^Add Second Customer data$/, function (table){
		  const data = table.rowsHash();
		 // createUser(data);
			custpage.addCustomerInfo(data.FirstName, data.LastName, data.PostalCode)
			custpage.CloseAlert();
			return browser.sleep(2000);
			
		});
	 
	 this.When(/^Add Third Customer data$/, function (table){
		  const data = table.rowsHash();
		 // createUser(data);
			custpage.addCustomerInfo(data.FirstName, data.LastName, data.PostalCode)
			custpage.CloseAlert();
			return browser.sleep(2000);
			
		});
	 
	
	
	this.When(/^Select Customer Name$/, function (){
		              
		    custpage.ClickOnCustomerListBox();
			custpage.SelectCustomerName("John Smith");
			return browser.sleep(2000);
			
		});
	
	this.Then(/^Select Currency and process it$/, function (){
       
	    custpage.ClickOnCurrencyListBox();
		custpage.SelectCurrencyName("Rupee");
		custpage.ClickOnProcessButton();
		custpage.CloseAlert();
		return browser.sleep(2000);
		
	});
  this.When(/^Search Customer$/, function (){
       
	    custpage.SearchCustomerName("John");
	    return browser.sleep(2000);
	});
	
  this.Then(/^Delete Customer$/, function (){
      
	    custpage.DeleteCustomer();
	    return browser.sleep(2000);
	});
  
  this.Then(/^Get Validate FName and Postal Code$/, function (){
	
	 
	  custpage.fnames.getText().then(function(txt){
	   console.log(txt.length);
	   for(var i=0;i<txt.length;i++)
		   {
	
		  var Fname=["Hermoine","Harry","Ron","Albus","Neville"];
	      expect(custpage.fnames.get(i).getText()).to.eventually.equal(Fname[i]);
	  
	       }
	  
	  });
	  
	
	  return browser.sleep(2000);
	  
	  	  
	  
	});
	

  
  this.Then(/^Validate Customer$/, function (){
	  var Fname=["Hermoine","Harry","Ron","Albus","Neville"];
	  var PostalCode=["E859AB","E725JB","E55555","E55656","E89898"];
	  for(i=0;i<Fname.length;i++)
	    {
	 	    
	  var pcode=custpage.GetPostalCodeForGivenFName(Fname[i]);
	    /*  pcode.getText().then(function(txt){
		  console.log("Postal code for Name is "+txt);
		   });*/
	      expect(pcode.getText()).to.eventually.equal(PostalCode[i]);
	      
	
	  
		  }
	    return browser.sleep(2000);
	
  });
  
  this.Then(/^Get dates in Array$/, function (){
      
	  custpage.GetDateArray();
	  return browser.sleep(2000);
	  
	});
  
this.Then(/^Validate Date$/, function (){
      

			console.log("Dates in Array "+DateArray);
	/*var flag;
	for(var i=0;i<DateArray.length;i++)
	{


		//	  console.log(fdate[0]);

		var dt1=new Date(DateArray[i]);
		console.log("Date in i "+dt1)
		for(var j=i+1;j<=DateArray.length-1;j++)

		{

			var dt2=new Date(DateArray[j]);
			console.log("Date in J "+dt2)

			if(dt1<=dt2)
			{

				flag=false;

			}
			else
			{

				flag=true;
				i=DateArray.length;
				break;
			}

		}


	}

	if(flag===false)
	{
		console.log("Date is in asending order")
	}else if(flag===true)
	{
		console.log("Date is in desending order")

	}
	
//	expect(DateArray).to.be.sorted({descending: true})
//	expect(DateArray).to.be.descending
	
	expect(DateArray).to.include('New York')
	*/

	return browser.sleep(2000);
});

    
};