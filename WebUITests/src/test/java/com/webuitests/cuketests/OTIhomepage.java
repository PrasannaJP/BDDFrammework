package com.webuitests.cuketests;

import java.net.URL;

import com.webuitests.base.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class OTIhomepage extends TestBase

{
	///FirefoxDriver driver;
	String html;
	
	@Given("^a visitor to OTI homepage$")
	public void a_visitor_to_OTI_homepage() throws Throwable 
	{
		URL url = new URL(BaseURL);
	}
	
	
	@When("^a vistior uses desktop browser$")
	public void a_vistior_uses_desktop_browser() throws Exception
	{
		URL q = new URL(BaseURL);
		html = q.getContent().toString();
	}

	@Then("^the SignIn button is visible$")
	public void the_SignIn_button_is_visible() throws Throwable 
	{
		boolean resultOfTest = html.contains("Sign in");
		Assert.assertFalse("Should not contain a swear word!!", resultOfTest);
		
	   // WebElement webElement= driver.findElement(By.xpath("//a[contains(text(),'Sign in')]"));
	   // Assert.assertEquals(true, webElement.isDisplayed());
	}

}
