package com.oti.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class MenuItems
{
	/*Class OTIMenuItems contains all the Webelements of menu list of OTI
	 * 
	 * */
	private static WebElement element = null;
	

	public static WebElement Menu_nevbar(WebDriver driver){

		element = driver.findElement(By.xpath("//button[@type='button']"));
        return element;
	}

	public static WebElement homeNavBar(WebDriver driver){

		element = driver.findElement(By.xpath("//a[contains(text(),'Home')]"));
        return element;
	}
	
	public static WebElement View_courses(WebDriver driver){

		element = driver.findElement(By.xpath("//a[contains(@href, '/courses')]"));
        return element;
	}
	
	public static WebElement Study_online(WebDriver driver){

		element = driver.findElement(By.xpath("//a[contains(text(),'Study online')]"));
        return element;
	}
	
	public static WebElement How_we_support_you(WebDriver driver){

		element = driver.findElement(By.xpath("//a[contains(text(),'How we support you')]"));
        return element;
	}
	
	
	public static WebElement Pricing(WebDriver driver){

		element = driver.findElement(By.xpath("//a[contains(text(),'Pricing')]"));
        return element;
	}
	
	public static WebElement Why_us(WebDriver driver){

		element = driver.findElement(By.xpath("//a[contains(text(),'Why us?')]"));
        return element;
	}
}
