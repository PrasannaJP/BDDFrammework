package com.webuitests.cuketests;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.ArrayList;

import com.webuitests.base.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class OTIhomepage extends TestBase

{
	///FirefoxDriver driver;
	URL url;
	BufferedReader in ;
	boolean containsAbut = false;
	String inputLine;
	
	@Given("^a visitor to OTI homepage$")
	public void a_visitor_to_OTI_homepage() throws Throwable 
	{
		url = new URL("https://www.opentraining.edu.au/");
	}
	
	
	@When("^a vistior uses desktop browser$")
	public void a_vistior_uses_desktop_browser() throws Exception
	{
		in = new BufferedReader(
		        new InputStreamReader(url.openStream()));
		 int line = 0;
	        while ((inputLine = in.readLine()) != null)
	        {
	           
	              if(inputLine.contains("Sign in"))
	              {
	                     containsAbut = true;
	                     break;
	              }     
	              
	        }
	}

	@Then("^the SignIn button is visible$")
	public void the_SignIn_button_is_visible() throws Throwable 
	{
        Assert.assertEquals(true, containsAbut);
        in.close();

	}

}
