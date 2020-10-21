package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.ui.Select;
import pages.SellerPage;
import utilities.ConfigReader;
import utilities.Driver;

public class SellerStepDefinitions {
    SellerPage sellerPage=new SellerPage();

    @Given("user on the glbhomepage")
    public void userOnTheGlbhomepage() {
        Driver.getDriver().get(ConfigReader.getProperty("url"));
    }
    @When("user clicks seller join now button")
    public void user_clicks_seller_join_now_button() {
        sellerPage.joinSeller.click();
    }
    @When("user clicks agent seller button")
    public void user_clicks_agent_seller_button() {
        sellerPage.agentSeller.click();
    }
    @When("user enters name1 {string}")
    public void user_enters_name1(String name1) {
        sellerPage.name.sendKeys(name1);
    }
    @When("user enters email1 {string}")
    public void user_enters_email1(String email1) {
        sellerPage.email.sendKeys(email1);
    }
    @When("user enters sub domain {string}")
    public void user_enters_sub_domain(String sub_domain) {
        sellerPage.subdomain.sendKeys(sub_domain);
    }
    @When("user enters mobile1 {string}")
    public void user_enters_mobile1(String mobile1) {
        sellerPage.mobilNumber.sendKeys(mobile1);
    }
    @When("user enters country {string}")
    public void user_enters_country(String country) {
        Select select= new Select(sellerPage.country);
        select.selectByVisibleText(country);
    }
    @When("user enters  state {string}")
    public void user_enters_state(String state) {
        sellerPage.state.sendKeys(state);
    }
    @When("user enters city {string}")
    public void user_enters_city(String city) {
        sellerPage.city.sendKeys(city);
    }
    @When("user enters address {string}")
    public void user_enters_address(String address) {
        sellerPage.address.sendKeys(address);
    }
    @When("user enters postalcode {string}")
    public void user_enters_postalcode(String postalcode) {
        sellerPage.postalCode.sendKeys(postalcode);
    }
    @When("user enters furniture {string}")
    public void user_enters_furniture(String furniture) {
        Select select1=new Select(sellerPage.categories);
        select1.selectByVisibleText(furniture);
    }
    @When("user enters password1 {string}")
    public void user_enters_password1(String password1) {
        sellerPage.password.sendKeys(password1);
    }
    @Then("user clicks registiration")
    public void user_clicks_registiration() {
        sellerPage.registration.click();
    }
}
