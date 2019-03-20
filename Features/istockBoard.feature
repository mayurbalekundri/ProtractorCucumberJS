Feature: Board feature test to istockPhoto.com
As a user i am creating boards on the site without login.

Scenario:
    Given I am on "http://www.istockphoto.com/" and signed out

Scenario: User should be able to Create first board.
    When I click on your boards.
      And I create a board with "First" title and description "First Option".
    Then I should be able to see the created board with "First " title.

Scenario Outline: User should be able to create list of boards.
     When I click on dropdown.
       And I click on new board.
       And I create a board with "<Title>" title and description "<Description>".
       Examples:
         | Title | Description |
         | Second | Second Option |
         | Third | Third Option |

Scenario: User should able to verify nummber of boards created.
        When I click on dropdown.
        And I select view all boards.
        Then I should see the list of created created board.
