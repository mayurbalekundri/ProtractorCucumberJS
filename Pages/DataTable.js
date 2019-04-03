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

this.GetCellValue = function(First,Second,Third,Fourth,Fifth){
		
	var XLSX = require('xlsx');
	   
    // read the excel file
    var workbook = XLSX.readFile('C:/Users/Mayur/CucumberTrainingWS/ProtractorCucumberJS/TestData/TestData.xlsx');
    
    //get the sheet default name
    var sheet_name = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[sheet_name];
    var address_of_cell_1 = First;
    var address_of_cell_2 = Second;
    var address_of_cell_3 = Third;
    var address_of_cell_4 = Fourth;
    var address_of_cell_5 = Fifth;
    
    /* Find desired cell */
    var cell_object1 = worksheet[address_of_cell_1];
    var cell_object2 = worksheet[address_of_cell_2];
    var cell_object3 = worksheet[address_of_cell_3];
    var cell_object4 = worksheet[address_of_cell_4];
    var cell_object5 = worksheet[address_of_cell_5];
// 
    /* Get the value */
    global.cell_value1 = cell_object1.v;
    global.cell_value2 = cell_object2.v;
    global.cell_value3 = cell_object3.v;
    global.cell_value4 = cell_object4.v;
    var cell_value5 = cell_object5.v;
  
   
   global.cell_value6= new Date((cell_value5 - (25567 + 1))*86400*1000);
   
    
/*    console.log("***** First value *****:" + cell_value1);
    console.log("***** Second value *****:" + cell_value2);*/
    return browser.sleep(1000);
		
	};
	
};
module.exports =new DataTable();


