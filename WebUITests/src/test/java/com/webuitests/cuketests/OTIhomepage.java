package com.webuitests.cuketests;

import java.net.URL;

import org.openqa.selenium.firefox.FirefoxDriver;

import com.webuitests.base.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OTIhomepage extends TestBase

{
	FirefoxDriver driver;
	
	@Given("^a vistior uses desktop browser$")
	public void a_visitor_to_OTI_homepage() throws Throwable 
	{
		//Launching the firefox browser 
		//driver = new FirefoxDriver();
		URL url = new URL(BaseURL);
	}
	
	@When("^a visitor to OTI homepage$")
	public void a_vistior_uses_desktop_browser() 
	{
	   //Navigate to the OTI home page  
		//driver.get(BaseURL);
	}

	@Then("^the SignIn button is visible$")
	public void the_SignIn_button_is_visible() throws Throwable 
	{
	   // WebElement webElement= driver.findElement(By.xpath("//a[contains(text(),'Sign in')]"));
	   // Assert.assertEquals(true, webElement.isDisplayed());
	}

}
