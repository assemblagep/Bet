package ui;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty"}, strict = false, features = {"src/test/java/UI/features"})
public class CucumberUITest {

}
