package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;
public class Team7Page {
    public Team7Page() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(css = "input#name")
    public WebElement name;
    @FindBy(id = "email")
    public WebElement email;
    @FindBy(id = "mobile")
    public WebElement mobile;
    @FindBy(id = "password")
    public WebElement password;
    @FindBy(id = "re_password")
    public WebElement re_password;
    @FindBy(linkText = "Join Now")
    public WebElement joinNow;
    @FindBy(xpath = "//button[@class='btn btn-lg btn-warning btn-block']")
    public WebElement signUp;
    @FindBy(xpath = "//div[@class='alert alert-success']")
    public WebElement alert;
}
