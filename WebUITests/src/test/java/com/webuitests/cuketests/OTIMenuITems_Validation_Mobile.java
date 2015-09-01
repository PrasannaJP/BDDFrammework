package com.webuitests.cuketests;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Dimension;

import com.oti.pom.OTIMenuItems;
import com.webuiframework.oua.uitests.utils.WebDriverWrapper;
import com.webuitests.base.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class OTIMenuITems_Validation_Mobile extends TestBase
{
	//Mobile Browser 
	
		@Given("^a visitor to OTI hompage using mobile browser$")
		public void a_visitor_to_OTI_hompage_using_mobile_browser() throws Throwable 
		{
			/*
			 * Launching the browser with OTI URL and set the browser 
			 * resolution to the mobile(iPhone 5s) browser resolution 
		     */
			WebDriverWrapper.open(BaseURL);
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			Dimension d= new Dimension(320,568);
			driver.manage().window().setSize(d);
		}

		@When("^a vistor tap on the 'menu' nevbar$")
		public void a_vistor_tap_on_the_menu_nevbar() throws Throwable 
		{
			//Implicitly waiting until elements get loaded and clicking on menu button
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			OTIMenuItems.Menu_nevbar(driver).click();
			Thread.sleep(5000);
		}
}
