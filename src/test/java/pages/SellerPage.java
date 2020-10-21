package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class SellerPage {
    public SellerPage (){
        PageFactory.initElements(Driver.getDriver(), this);
    }


    @FindBy(xpath = "//i[@class='fa fa-user']" )
    public WebElement joinSeller;
    @FindBy(xpath = "//input[@type='radio']")
    public WebElement agentSeller;
    @FindBy(xpath = "//input[@id='vender_name']")
    public WebElement name;
    @FindBy(xpath = "//input[@id='email']")
    public WebElement email;
    @FindBy(xpath = "//input[@id='sub_domain']")
    public WebElement subdomain;
    @FindBy(xpath = "//input[@id='vender_mobile']")
    public WebElement mobilNumber;
    @FindBy(xpath = "//select[@name='country']")
    public WebElement country;
    @FindBy(xpath = "//input[@name='select_state']")
    public WebElement state;
    @FindBy(xpath = "//input[@name='select_city']")
    public WebElement city;
    @FindBy(xpath = "//textarea[@name='vender_address']")
    public WebElement address;
    @FindBy(xpath = "//input[@name='vender_zip_code']")
    public WebElement postalCode;
    @FindBy(xpath = "//select[@name='category']")
    public WebElement categories;
    @FindBy(xpath = "//input[@name='password']")
    public WebElement password;
    @FindBy(xpath = "//button[@value='Login']")
    public WebElement registration;
    }










