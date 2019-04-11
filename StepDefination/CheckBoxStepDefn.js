var datatable = require('../pages/DataTable.js');
var HomePage = require('../Pages/HomePage.js');
var Excel = require('exceljs');
var wrkbook = new Excel.Workbook();
var moment=require('moment');
var ExlSheetPath='C:/Users/Mayur/CucumberTrainingWS/ProtractorCucumberJS/TestData/TestData.xlsx';
var chai = require('chai');
chai.use(require('chai-smoothie'));
var expect = chai.expect;

module.exports = function() {
 

  
   
   this.Given(/^Open \"([^\"]*)\" Website$/, function (SiteUrl) {
	   browser.get(SiteUrl);
	   browser.sleep(1000);
	  
	   return browser.sleep(1000);
	  });

   this.Then(/^Get Office Name$/, function () {
	  
	   this.pchekbox=element(by.xpath("(//li[@ng-repeat='cat in division.categories'])[3]/h3/input"));
	   this.pchekbox.click();
	   this.pchekbox.click();
	   this.pchekbox.isSelected().then(function(sel){
		   console.log(sel);
	//	   expect(sel).to.be.true;
		   
	   })
	   this.childcheckbox=element.all(by.xpath("(//li[@ng-repeat='cat in division.categories'])[3]/ul/li/h4/input"));
	   this.childcheckbox.each(function(ChildChk){
		  
		   ChildChk.click();
		   ChildChk.isSelected().then(function(CheckBxSel){
			   console.log(CheckBxSel);
			   expect(CheckBxSel).to.be.true;
			   
		   })
		   browser.sleep(2000);
		
		   
	   })
	 
	//   expect(this.pchekbox.isSelected()).to.eventually.be(true);
	//   expect(this.pchekbox.isSelected()).to.be.true;
//	   expect(true).to.be.true
//	  expect(this.pchekbox).to.be.selected;
//	  expect(this.pchekbox).to.be.displayed
	  
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
    	   	var dte=moment(cell_value6).format("DD/MMM/YYYY");
		    console.log(cell_value1+" | "+cell_value2+" | "+cell_value3+" | "+cell_value4+" | "+dte);
		    return browser.sleep(1000);
		  });
    
};