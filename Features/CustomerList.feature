Feature: Validating XYZ Bank 
    As a user
    I should be able to navigate to different page
    and check all buttons are working as expected

 @SmokeTest
Scenario: Validating Add Customer,Open Account,Search customer navigation
       
      Given Open "https://datatables.net/" XYZ Bank Website
 #      When Login as a Bank Manager
 #     Then Navigate to Search customer
 #      Then Get Validate FName and Postal Code
 #      Then Validate Customer
 #       When Navigate to Search customer
       Then Get dates in Array
       Then Validate Date
 
     
#    Scenario: Validating Login Page
#         Given I search for location "navi"
#        When I select first result "Navi Mumbai" from suggestions
#        And I navigate to nearby "Parking" places
#        Then I should see many place markers on map
#        When I navigate to get Directions
#        Then I should see 1 location marker on map
#        When I enter from location "goregaon"
#        And I select first result "Goregaon East" from suggestions
#        Then I should see 2 location marker on map
#        And I select first route from route results
#        And I save the route and close route details
    
    
  