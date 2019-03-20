this.FirstOfficeAge;
var DataTable = function () {
    "use strict";
   
	this.OfficeSort = element(by.xpath("//th[contains(@class,'sorting')][.='Office']"));
	this.officeValue=element.all(by.xpath("//table[@id='example']/tbody/tr/td[3]"));

	
	this.ClickOnOfficeSort = function(){
		
		this.OfficeSort.click();
		return this;
		
	};
	
	this.GetAge=function(){
	this.officeValue.getText().then(function(offnme){
			   
		var distname = Array.from(new Set(offnme))
		console.log(distname);
		console.log(distname[0]);
		console.log(distname[1]);
	
	this.AgeValue1 = element.all(by.xpath("//table[@id='example']/tbody/tr/td[.='"+distname[0]+"']/following :: td[1]"));
	this.AgeValue1.getText().then(function(ages1){
		
		console.log(ages1);
			
		 })
		 
	this.AgeValue2 = element.all(by.xpath("//table[@id='example']/tbody/tr/td[.='"+distname[1]+"']/following :: td[1]"));
    this.AgeValue2.getText().then(function(ages2){
				
		 console.log(ages2);
			
		 })	 
			
	 }); 
	
	
	
	};

};
module.exports = new DataTable();


