Feature: Login to istockPhoto.com
As a user i want to login in the application when i enter valid credentials.

Background:
    Given I am on "http://www.istockphoto.com/" and signed out

Scenario: User should be able to login when enter valid username and password.
    When I login using username as "rathore.damayanti@gmail.com" and password as "password-1"
    Then I should be able to login and navigate to the profile page.
      And I signed out from the application.

@invalidlogin
Scenario Outline: User should not be able to login when invalid username and invalid password entered
    When I login using username as "<Username>" and password as "<Password>"
    Then I will get authentication error "Please verify that you've entered everything correctly.".
    Examples:
      | Username | Password |
      | request | request |
      | test |test|
