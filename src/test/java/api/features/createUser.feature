Feature: Call web service to create new user

  As a user
  I want to create new element using REST API
  And check the response is 200

  Scenario: Call web service to create new user

    When I try to get user with id = "1"
    Then the status code is "200"
