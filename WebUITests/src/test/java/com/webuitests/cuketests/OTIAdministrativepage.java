package com.webuitests.cuketests;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;

import com.webuiframework.oua.uitests.utils.WebDriverWrapper;
import com.webuitests.base.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class OTIAdministrativepage extends TestBase
{
	@Given("^As a visitor viewing OTI hompage using mobile browser$")
	public void as_a_visitor_viewing_OTI_hompage_using_mobile_browser() throws Throwable {
		WebDriverWrapper.open(BaseURL);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		Dimension d= new Dimension(320,568);
		driver.manage().window().setSize(d);
	}

	@When("^vistor tap on the 'menu' nevbar$")
	public void vistor_tap_on_the_menu_nevbar() throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//button[@type='button']")).click();
		Thread.sleep(5000);
	}

}
