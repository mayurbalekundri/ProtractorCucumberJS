var datatable = require('../pages/DataTable.js');
var HomePage = require('../Pages/HomePage.js');


module.exports = function() {
 

  
   
   this.Given(/^Open \"([^\"]*)\" Website$/, function (SiteUrl) {
	   browser.get(SiteUrl);
	   browser.sleep(1000);
	   datatable.ClickOnOfficeSort();
	   browser.sleep(1000);
	  
	   return browser.sleep(1000);
	  });

   this.Then(/^Get Office Name$/, function () {
	 
	   datatable.officeValue.getText().then(function(offnme){
		   
			var distname = Array.from(new Set(offnme))
			console.log(distname);
			console.log(distname[0]);
			console.log(distname[1]);
		
		this.AgeValue1 = element.all(by.xpath("//table[@id='example']/tbody/tr/td[.='"+distname[0]+"']/following :: td[1]"));
		
		this.AgeValue1.getText().then(function(ages1){
			
			console.log("i values is 0 "+ages1);
			var FirstAge=ages1;
		//	expect(ages1).to.be.sorted({descending: true})
		//	expect(FirstAge).to.be.ascending
							
			 })
			 
		this.AgeValue2 = element.all(by.xpath("//table[@id='example']/tbody/tr/td[.='"+distname[1]+"']/following :: td[1]"));
		this.AgeValue2.getText().then(function(ages2){
			
			console.log("i values is 1 "+ages2);
			
			var SecondAge=ages2;
			expect(SecondAge).to.be.sorted({ascending: true})
		//	expect(SecondAge).to.be.ascending
							
			 })
			
		 });   
	   return browser.sleep(1000);
	  });
   
   this.Then(/^Validate Age$/, function () {
	//    console.log("First "+FirstOfficeAge);
	//   console.log("Second "+SecondOfficeAge);
	   return browser.sleep(1000);
	  });
    
};