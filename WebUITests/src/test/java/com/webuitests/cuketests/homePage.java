package com.webuitests.cuketests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.webuiframework.oua.uitests.utils.WebDriverWrapper;
import com.webuitests.base.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class homePage extends TestBase 
{
	@Given("^a visitor to OTI hompage using desktop browser$")
	public void a_visitor_to_OTI_hompage_using_desktop_browser() throws Throwable
	{ 
		WebDriverWrapper.open(BaseURL);
	}

	@Then("^the 'Home' nevbar menuitem is visible$")
	public void the_Home_nevbar_is_visible() throws Throwable
	{
		WebElement homeNavBar = driver.findElement(By.xpath("//a[contains(text(),'Home')]"));
		Assert.assertEquals(true, homeNavBar.isDisplayed());
	}

	@Then("^the 'View courses' nevbar menuitem is visible$")
	public void the_View_courses_nevbar_menuitem_is_visible() throws Throwable 
	{
		WebElement View_courses = driver.findElement(By.xpath("//a[contains(text(),'View courses')]"));
		Assert.assertEquals(true, View_courses.isDisplayed());
	}

	@Then("^the 'Study online' nevbar menuitem is visible$")
	public void the_Study_online_nevbar_menuitem_is_visible() throws Throwable 
	{
		WebElement Study_online = driver.findElement(By.xpath("//a[contains(text(),'Studyx online')]"));
		Assert.assertEquals(true, Study_online.isDisplayed());
	}

	@Then("^the 'How we support you' nevbar menuitem is visible$")
	public void the_How_we_support_you_nevbar_menuitem_is_visible() throws Throwable 
	{
		WebElement How_we_support_you = driver.findElement(By.xpath("//a[contains(text(),'How we support you')]"));
		Assert.assertEquals(true, How_we_support_you.isDisplayed());
	}

	@Then("^the 'Pricing' nevbar menuitem is visible$")
	public void the_Pricing_nevbar_menuitem_is_visible() throws Throwable 
	{
		WebElement Pricing = driver.findElement(By.xpath("//a[contains(text(),'Pricing')]"));
		Assert.assertEquals(true, Pricing.isDisplayed());
	}


	@Then("^the 'Why us\\?' nevbar menuitem is visible$")
	public void the_Why_us_nevbar_menuitem_is_visible() throws Throwable {
		WebElement Why_us = driver.findElement(By.xpath("//a[contains(text(),'Why us?')]"));
		Assert.assertEquals(true, Why_us.isDisplayed());
	}
}
