package com.webuitests.cuketests;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;

import com.webuiframework.oua.uitests.utils.WebDriverWrapper;
import com.webuitests.base.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class OTIMenuITems_Validation_DeskTP extends TestBase 
{
	//Desktop Browser 
	@Given("^a visitor to OTI hompage using desktop browser$")
	public void a_visitor_to_OTI_hompage_using_desktop_browser() throws Throwable
	{ 
		WebDriverWrapper.open(BaseURL);
	}
	

	@Then("^the 'Home' nevbar menuitem is visible$")
	public void the_Home_nevbar_is_visible() throws Throwable
	{
		System.out.println("Validing 'homeNavBar' is visible");
		WebElement homeNavBar = driver.findElement(By.xpath("//a[contains(text(),'Home')]"));
		Assert.assertEquals(true, homeNavBar.isDisplayed());
	}

	@Then("^the 'View courses' nevbar menuitem is visible$")
	public void the_View_courses_nevbar_menuitem_is_visible() throws Throwable 
	{
		System.out.println("Validing 'View_courses' is visible");
		WebElement View_courses = driver.findElement(By.xpath("//a[contains(text(),'View courses')]"));
		Assert.assertEquals(true, View_courses.isDisplayed());
	}

	@Then("^the 'Study online' nevbar menuitem is visible$")
	public void the_Study_online_nevbar_menuitem_is_visible() throws Throwable 
	{
		System.out.println("Validing 'Study_online' is visible");	
		WebElement Study_online = driver.findElement(By.xpath("//a[contains(text(),'Study online')]"));
		Assert.assertEquals(true, Study_online.isDisplayed());
	}

	@Then("^the 'How we support you' nevbar menuitem is visible$")
	public void the_How_we_support_you_nevbar_menuitem_is_visible() throws Throwable 
	{
		System.out.println("Validing 'How_we_support_you' is visible");
		WebElement How_we_support_you = driver.findElement(By.xpath("//a[contains(text(),'How we support you')]"));
		Assert.assertEquals(true, How_we_support_you.isDisplayed());
	}

	@Then("^the 'Pricing' nevbar menuitem is visible$")
	public void the_Pricing_nevbar_menuitem_is_visible() throws Throwable 
	{
		System.out.println("Validing 'Pricing' is visible");
		WebElement Pricing = driver.findElement(By.xpath("//a[contains(text(),'Pricing')]"));
		Assert.assertEquals(true, Pricing.isDisplayed());
	}


	@Then("^the 'Why us\\?' nevbar menuitem is visible$")
	public void the_Why_us_nevbar_menuitem_is_visible() throws Throwable
	{
		System.out.println("Validing 'Why us\\?' is visible");
		WebElement Why_us = driver.findElement(By.xpath("//a[contains(text(),'Why us?')]"));
		Assert.assertEquals(true, Why_us.isDisplayed());
	}
	/**********************************************************************************/
	
	//MObile Browser
	@Given("^a visitor to OTI hompage using mobile browser$")
	public void a_visitor_to_OTI_hompage_using_mobile_browser() throws Throwable {
		WebDriverWrapper.open(BaseURL);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		Dimension d= new Dimension(320,568);
		driver.manage().window().setSize(d);
	}

	@When("^a vistor tap on the 'menu' nevbar$")
	public void a_vistor_tap_on_the_menu_nevbar() throws Throwable
	{
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//button[@type='button']")).click();
		Thread.sleep(5000);
	}
}
