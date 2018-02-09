Feature: Call web service and check CRUD

  As a user
  I want to check CRUD operations using REST API

  Scenario: Call web service to create a user
    Given testing endpoint and user with id ""
    And field name "" is ""
    When I try to post it
    Then the status code is "200"

  Scenario: Call web service to get a user

    When I try to get user with id = "1"
    Then the status code is "200"
    And response field "id" should be "1"
    And response field "title" should be "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    And response field "body" should be "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
