package com.webuitests.cuketests;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.oti.pom.OTIMenuItems;
import com.webuiframework.oua.uitests.utils.WebDriverWrapper;
import com.webuitests.base.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OTIAdministrativepage extends TestBase
{
	
	
	@Given("^OTI mobile user open the URL 'https://www\\.opentraining\\.edu\\.au',click on 'Menu',click on 'VIEW COURSES', navigate to 'Administration', click on 'View Course'$")
	public void oti_mobile_user_open_the_URL_https_www_opentraining_edu_au_click_on_VIEW_COURSES_navigate_to_Administration_click_on_View_Course() throws Throwable 
	{
		//Loading the OTI hompage on bobile browser 
		WebDriverWrapper.open(BaseURL);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		Dimension d= new Dimension(320,568);
		driver.manage().window().setSize(d);
		
		//Tap on the menu button 
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//button[@type='button']")).click();
		Thread.sleep(5000);
		
		//Tap on the 'View courses' menuitem
		ExplicitWait(OTIMenuItems.View_courses(driver),60);
		OTIMenuItems.View_courses(driver).click();
		
		//Tap on the 'Administration' menuitem
		WebElement administrator =driver.findElement(By.xpath("//a[contains(text(),'Administration')]"));
		ExplicitWait(OTIMenuItems.View_courses(driver),60);
		//wait = new WebDriverWait(driver,60);
		//wait.until(ExpectedConditions.visibilityOf(administrator));
		administrator.click();
		
		//Navigate to the Administration page 
		Thread.sleep(5000);
		driver.manage().timeouts().pageLoadTimeout(100, TimeUnit.SECONDS);
		assertEquals("Administration Courses Online - Open Training Institute",driver.getTitle());
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		
		//Tap on the view 'View Course' field
		WebElement View_course =driver.findElement(By.xpath("(//a[contains(@href, '/courses/administration/cert-3-business-administration')])[2]"));
		//wait = new WebDriverWait(driver,60);
		//wait.until(ExpectedConditions.visibilityOf(View_course));
		ExplicitWait(OTIMenuItems.View_courses(driver),60);
		View_course.click();
		
	}

	@When("^user expand 'Language, literacy and numeracy requirements' or 'Credit' field items$")
	public void user_expand_Language_literacy_and_numeracy_requirements_or_Credit_field_items() throws Throwable 
	{
		driver.manage().timeouts().pageLoadTimeout(100, TimeUnit.SECONDS);
		Thread.sleep(2000);
		WebElement expand =driver.findElement(By.xpath("//*[@id='intro-section-4-link']/div/div/div"));
		Actions act = new Actions(driver);
		act.click(expand).build().perform();
				
	}

	
	@Then("^user Expect field items should be expanded\\.$")
	public void user_Expect_field_items_should_be_expanded() throws Throwable
	{
		Thread.sleep(3000);
		WebElement details =driver.findElement(By.xpath(".//*[@id='intro-section-4-body']/div/div/div"));	
		System.out.println("Is expand"+details.isDisplayed());
		assertEquals(true, details.isDisplayed());
		
	}
	
	public void ExplicitWait(WebElement element,int seconds)
	{
		WebDriverWait wait = new WebDriverWait(driver,seconds);
		wait.until(ExpectedConditions.visibilityOf(element));
	}
	
	

}
