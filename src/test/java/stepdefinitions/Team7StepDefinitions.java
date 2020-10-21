package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.Team7Page;
import utilities.ConfigReader;
import utilities.Driver;
public class Team7StepDefinitions {
    Team7Page team7Page= new Team7Page();
    @Given("user on the homepage")
    public void user_on_the_homepage() {
        Driver.getDriver().get(ConfigReader.getProperty("url"));
    }
    @Given("user clicks join in button")
    public void user_clicks_join_in_button() {
        team7Page.joinNow.click();
    }
    @When("user enters email {string}")
    public void user_enters_email(String email) {
        team7Page.email.sendKeys(email);
    }
    @When("user enters name {string}")
    public void user_enters_name(String name) {
        team7Page.name.sendKeys(name);
    }
    @When("user enters mobile {string}")
    public void user_enters_mobile(String mobile) {
        team7Page.mobile.sendKeys(mobile);
    }
    @When("user enters password {string}")
    public void user_enters_password(String password) {
        team7Page.password.sendKeys(password);
    }
    @When("user enters re_password {string}")
    public void user_enters_re_password(String re_password) {
        team7Page.re_password.sendKeys(re_password);
    }
    @When("user clicks Signup button")
    public void user_clicks_Signup_button() {
        team7Page.signUp.click();
    }
    @Then("user get verify message")
    public void user_get_verify_message() throws InterruptedException {
        Thread.sleep(20000);
        Assert.assertTrue(team7Page.alert.getText().contains("Success"));
    }
}