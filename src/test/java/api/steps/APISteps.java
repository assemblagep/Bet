package api.steps;

import com.jayway.restassured.response.Response;
import com.jayway.restassured.response.ValidatableResponse;
import com.jayway.restassured.specification.RequestSpecification;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static com.jayway.restassured.RestAssured.given;
import static com.jayway.restassured.RestAssured.when;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;


public class APISteps {
    private String URI = "http://jsonplaceholder.typicode.com/posts/";

    private Response response;
    private ValidatableResponse json;
    private RequestSpecification request;


    @When("^I try to get user with id = \"([^\"]*)\"$")
    public void iTryToGetUserWithId(String id) throws Throwable {
        response = when().get(URI + id);
    }

    @Then("^the status code is \"([^\"]*)\"$")
    public void theStatusCodeIs(int code) throws Throwable {
        response = response.then().statusCode(code).extract().response();

    }

    @And("^response field \"([^\"]*)\" should be \"([^\"]*)\"$")
    public void responseFieldShouldBe(String fieldName, String fieldValue) throws Throwable {
        assertThat(response.getBody().jsonPath().get(fieldName).toString(), is(fieldValue));
    }
}

