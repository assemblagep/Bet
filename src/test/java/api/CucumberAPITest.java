package api;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/API/features"}, format = {"pretty","html:target/site/cucumber-pretty"})
public class CucumberAPITest {

}
