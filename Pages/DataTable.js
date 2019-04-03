this.FirstOfficeAge;

var DataTable = function () {
    "use strict";
   
	this.OfficeSort = element(by.xpath("//th[contains(@class,'sorting')][.='Office']"));
	this.officeValue=element.all(by.xpath("//table[@id='example']/tbody/tr/td[3]"));
	this.AgeValue1;
    this.name = "Hello World";
   
	
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
		
		var AgeValue1 = element.all(by.xpath("//table[@id='example']/tbody/tr/td[.='"+distname[0]+"']/following :: td[1]"));
	    AgeValue1.getText().then(function(ages1){
			
			console.log(ages1);
		    global.first=ages1;
			
	    })		
			
	
	   var AgeValue2 = element.all(by.xpath("//table[@id='example']/tbody/tr/td[.='"+distname[1]+"']/following :: td[1]"));
           AgeValue2.getText().then(function(ages2){
				
		 console.log(ages2);
		 global.second=ages2;
			
		 })	 
			
	 }); 
	
	return this;
	
	};

};
module.exports =DataTable;


