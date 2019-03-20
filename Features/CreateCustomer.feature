#features/search.feature
Feature: Validating XYZ Bank 
    As a user
    I should be able to Create new customer 
    and search the customer
    and Delete it
    
 
 
Scenario: Creating New Customer

        When Navigate to Add Customer
        And  Add First Customer data
           
   |FirstName|John|
   |LastName|Smith|
   |PostalCode|580008|
    
    And  Add Second Customer data
   
    |FirstName|William|
    |LastName|James|
    |PostalCode|512009|
    
    And  Add Third Customer data
   
    |FirstName|Jack|
    |LastName|Leo|
    |PostalCode|890009|
      #  Then Save the data
 
   
Scenario: Open New Account
      
      When Navigate to Open Account
      And Select Customer Name
      Then Select Currency and process it
       
       
    
Scenario: Search Customer and Delete it

       When Navigate to Search customer
      And Search Customer
     Then Delete Customer     

    
  