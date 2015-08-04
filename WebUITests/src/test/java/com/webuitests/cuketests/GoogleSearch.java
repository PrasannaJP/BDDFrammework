package com.webuitests.cuketests;


import java.net.MalformedURLException;
import java.util.Properties;

import org.junit.Assert;

import com.webuiframework.oua.uitests.utils.WebDriverWrapper;
import com.webuitests.base.TestBase;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GoogleSearch extends TestBase {
	
	//public static Properties testproperties;
	//public static String URL = testproperties.getProperty("webuitests.URL");
	//public static String URL = "http://google.co.in";
	
//	public GoogleSearch() {
//		super();
//		System.out.println("TEST");
//}
	
	@Before
	public void setUp(Scenario scenario) throws MalformedURLException{
		setBrowserType("firefox");
		initWebDriver();
	}
	
	@After
	public void closeDriver(){
		WebDriverWrapper.quit();
	}
	
	
	@Given("^Open default website$")
	public void open_default_website() throws Throwable {
        WebDriverWrapper.open(URL);
	}

	@Then("^I see default page$")
	public void Open_DefaultPage() throws Throwable {
		Assert.assertTrue(GoogleSearchPage.get().logo.isDisplayed());
	    //Assert.assertTrue("check search button is visible",GoogleSearchPage.get().searchBtn.isDisplayed());
	}
	
	@When("^I set text '([^\\\"]*)' at default page$")
    public void i_set_text_at_default_page(String value) {
		GoogleSearchPage.get().textField.setText(value);
    }
	
	@Then("^I did not see search button$")
    public void i_did_not_see_search_button() {
		Assert.assertFalse("check search button is not visible",GoogleSearchPage.get().searchBtn.isDisplayed());
    }
	
	@When("^I click '([^\\\"]*)' button$")
    public void i_click_search_button(String value) {
        switch (value) {
            case "Search":
            	GoogleSearchPage.get().searchBtn.click();
                break;
            case "Search2":
            	GoogleSearchPage.get().searchBtn2.click();
                break;
        }
    }
	
	@Then("^I see first link text '([^\\\"]*)' at results page$")
    public void i_see_first_link_text_at_results_page(String value) {
		org.junit.Assert.assertEquals(GoogleSearchPage.get().resultsLinks.getWebElement(0).getText(), value, "check first link text");
    }
	
	@When("^I click at '([^\\\"]*)' results link$")
    public void i_click_at_results_link(int number) {
		GoogleSearchPage.get().resultsLinks.getWebElement(number-1).click();
    }

    @Then("^I see first link title '([^\\\"]*)' at new tab$")
    public void i_see_first_link_title_at_new_tab(String value) {
        WebDriverWrapper.waitWindowsCount(2);
        WebDriverWrapper.switchWindow();
        org.junit.Assert.assertEquals(WebDriverWrapper.getDriver().getTitle(), value, "check first link title");
    }
}
