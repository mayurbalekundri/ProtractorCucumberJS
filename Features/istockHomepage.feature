Feature: HomePage tests for istockPhoto.com
As a user i want to test homepage functionalities.

@Homepage
Scenario:
    Given I am on "http://www.istockphoto.com/" and signed out

Scenario: Search dropdown should have 4 elements
    When I click on search dropdown
    Then I should be able to see four elements in the dropdown

Scenario Outline: Verifying Search bar placeholder change based on dropdown selection
    When I click on search dropdown
    And I select "<Options>".
    Then I should see the changed placeholder in search bar "Find the perfect "+"<value>"
    Examples:
    | Options | value |
    | images | stock photos, vectors and more… |
    | photos | stock photos…                   |
    | illustrations | vectors and illustrations… |
    | video | stock video clips… |
