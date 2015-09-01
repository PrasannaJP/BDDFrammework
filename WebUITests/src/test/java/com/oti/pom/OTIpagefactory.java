package com.oti.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class OTIpagefactory 
{
	WebDriver driver;

	@FindBy(how = How.XPATH, using = "//a[contains(text(),'Administration')]")
	public static WebElement administrator;
	
	@FindBy(how = How.XPATH, using = "(//a[contains(@href, '/courses/administration/cert-3-business-administration')])[2]")
	public static WebElement View_course1;
	
	@FindBy(how = How.XPATH, using = "//*[@id='intro-section-4-link']/div/div/div")
	public static WebElement Expand;
	
	@FindBy(how = How.XPATH, using = ".//*[@id='intro-section-4-body']/div/div/div")
	public static WebElement Details;

	
	public OTIpagefactory(WebDriver driver)
	{
		this.driver = driver;
		//This initElements method will create all WebElements
		PageFactory.initElements(driver, this);

	}

	
}
