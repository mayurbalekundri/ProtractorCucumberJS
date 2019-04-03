var datatable = require('../pages/DataTable.js');
var HomePage = require('../Pages/HomePage.js');
var Excel = require('exceljs');
var wrkbook = new Excel.Workbook();
var ExlSheetPath='C:/Users/Mayur/CucumberTrainingWS/ProtractorCucumberJS/TestData/TestData.xlsx';


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
   
   this.Then(/^Validate Fields$/, function () {
		
	  /* var XLSX = require('xlsx');
	   
	    // read the excel file
	    var workbook = XLSX.readFile('C:/Users/Mayur/CucumberTrainingWS/ProtractorCucumberJS/TestData/TestData.xlsx');
	    
	    //get the sheet default name
	    var sheet_name = workbook.SheetNames[0];
	    var worksheet = workbook.Sheets[sheet_name];
	    var address_of_cell_1 = 'A2';
	    var address_of_cell_2 = 'A3';
	     Find desired cell 
	    var cell_object1 = worksheet[address_of_cell_1];
	    var cell_object2 = worksheet[address_of_cell_2];
	// 
	     Get the value 
	    var cell_value1 = cell_object1.v;
	    var cell_value2 = cell_object2.v;
	    console.log("***** Cell value *****:" + cell_value1);
	    console.log("***** Cell value *****:" + cell_value2);
	//    return cell_value;
	
	*/	
	       datatable.GetCellValue("A2","B2","C2","D2","E2");
		   return browser.sleep(1000);
		  });
   
      this.Then(/^Display Cell Value$/, function () {
		    console.log(cell_value1+" | "+cell_value2+" | "+cell_value3+" | "+cell_value4+" | "+cell_value6);
		    return browser.sleep(1000);
		  });
    
};