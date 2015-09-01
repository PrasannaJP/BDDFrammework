package com.webuitests.cuketests;

import static org.junit.Assert.assertEquals;

import com.oti.pom.OTIMenuItems;
import com.webuiframework.oua.uitests.utils.WebDriverWrapper;
import com.webuitests.base.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class OTIMenuITems_Validation_DeskTP extends TestBase 
{

	//Desktop Browser 
	//Demo Scenario 

	@Given("^a visitor to OTI hompage using desktop browser$")
	public void a_visitor_to_OTI_hompage_using_desktop_browser() throws Throwable
	{ 
		WebDriverWrapper.open(BaseURL);
	}


	@Then("^the 'Home' nevbar menuitem is visible$")
	public void the_Home_nevbar_is_visible() throws Throwable
	{
		validation(OTIMenuItems.homeNavBar(driver).isDisplayed(),"homeNavBar");
	}

	@Then("^the 'View courses' nevbar menuitem is visible$")
	public void the_View_courses_nevbar_menuitem_is_visible() throws Throwable 
	{
		validation(OTIMenuItems.View_courses(driver).isDisplayed(),"View_courses");
	}

	@Then("^the 'Study online' nevbar menuitem is visible$")
	public void the_Study_online_nevbar_menuitem_is_visible() throws Throwable 
	{ 	
		validation(OTIMenuItems.Study_online(driver).isDisplayed(),"Study_online");
	}

	@Then("^the 'How we support you' nevbar menuitem is visible$")
	public void the_How_we_support_you_nevbar_menuitem_is_visible() throws Throwable 
	{
		validation(OTIMenuItems.How_we_support_you(driver).isDisplayed(),"How_we_support_you");
	}

	@Then("^the 'Pricing' nevbar menuitem is visible$")
	public void the_Pricing_nevbar_menuitem_is_visible() throws Throwable 
	{
		validation(OTIMenuItems.Pricing(driver).isDisplayed(),"Pricing");
	}


	@Then("^the 'Why us\\?' nevbar menuitem is visible$")
	public void the_Why_us_nevbar_menuitem_is_visible() throws Throwable
	{
		validation(OTIMenuItems.Why_us(driver).isDisplayed(),"Why us\\?");
	}



	public void validation(boolean bool,String menuitem_name)
	{
		//Validating element is displayed are not 
		assertEquals(true, bool);
		System.out.println("Validing '"+menuitem_name+"' is visible");
	}


}
