package com.webuitests.cuketests;


import java.net.MalformedURLException;
import java.util.Properties;

import org.junit.Assert.*;
import org.junit.Test;

import com.webuiframework.oua.uitests.utils.TestBaseWebDriver;
import com.webuiframework.oua.uitests.utils.WebDriverWrapper;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class GoogleSearch extends TestBaseWebDriver {
	
	public static Properties testproperties;
	//public static String URL = testproperties.getProperty("webuitests.URL");
	public static String URL = "http://google.co.in";
	
	//public GoogleSearch() {
	//	super();
	//}
	@Before
	public void setUp(Scenario scenario) throws MalformedURLException{
		//System.setProperty("webdriver.chrome.driver", "c:\\Selenium\\Drivers\\chromedriver.exe");
		//System.setProperty("webdriver.ie.driver", testproperties.getProperty("webuitests.iedriver"));
		System.out.print("Invoking Browser");
		//setBrowserType(testproperties.getProperty("webuitests.browser"));
		setBrowserType("firefox");
		initWebDriver();
	}
	
	@After
	public void closeDriver(){
		WebDriverWrapper.quit();
	}
	
	
	@Given("^Open default website$")
	public void open_default_website() throws Throwable {
		System.out.print("Invoking URL");
        WebDriverWrapper.open(URL);
	}

	@Then("^I see default page$")
	public void i_see_default_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}
}
