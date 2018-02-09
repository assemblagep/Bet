$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createUser.feature");
formatter.feature({
  "line": 1,
  "name": "Call web service to create new user",
  "description": "\r\nAs a user\r\nI want to create new element using REST API\r\nAnd check the response is 200",
  "id": "call-web-service-to-create-new-user",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Call web service to create new user",
  "description": "",
  "id": "call-web-service-to-create-new-user;call-web-service-to-create-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I try to get user with id \u003d \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the status code is \"200\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "APISteps.iTryToGetUserWithId(String)"
});
formatter.result({
  "duration": 1717800830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "APISteps.theStatusCodeIs(int)"
});
formatter.result({
  "duration": 34690043,
  "status": "passed"
});
formatter.uri("getUser.feature");
formatter.feature({
  "line": 1,
  "name": "Call web service to create new user",
  "description": "\r\nAs a user\r\nI want to create new element using REST API\r\nAnd check the response is 200",
  "id": "call-web-service-to-create-new-user",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Call web service to create new user",
  "description": "",
  "id": "call-web-service-to-create-new-user;call-web-service-to-create-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I try to get user with id \u003d \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the status code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "response field \"userId\" should be \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "response field \"id\" should be \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "response field \"title\" should be \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "response field \"body\" should be \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "APISteps.iTryToGetUserWithId(String)"
});
formatter.result({
  "duration": 76205440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "APISteps.theStatusCodeIs(int)"
});
formatter.result({
  "duration": 972291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userId",
      "offset": 16
    },
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "APISteps.responseFieldShouldBe(String,String)"
});
formatter.result({
  "duration": 450572704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 16
    },
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "APISteps.responseFieldShouldBe(String,String)"
});
formatter.result({
  "duration": 14196774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 16
    },
    {
      "val": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "offset": 34
    }
  ],
  "location": "APISteps.responseFieldShouldBe(String,String)"
});
formatter.result({
  "duration": 9736794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "body",
      "offset": 16
    },
    {
      "val": "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto",
      "offset": 33
    }
  ],
  "location": "APISteps.responseFieldShouldBe(String,String)"
});
formatter.result({
  "duration": 12215667,
  "error_message": "java.lang.AssertionError: \nExpected: is \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"\n     but: was \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\r\n\tat api.steps.APISteps.responseFieldShouldBe(APISteps.java:39)\r\n\tat ✽.And response field \"body\" should be \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"(getUser.feature:14)\r\n",
  "status": "failed"
});
});