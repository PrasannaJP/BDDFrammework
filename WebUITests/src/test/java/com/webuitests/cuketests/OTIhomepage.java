package com.webuitests.cuketests;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.*;

@SuppressWarnings("deprecation")
public class OTIhomepage

{
	
	URL url;
	BufferedReader in ;
	boolean containsAbut = false;
	String inputLine;
	URLConnection hc;
	//For Desktop 
	@Given("^a visitor to OTI homepage$")
	public void a_visitor_to_OTI_homepage() throws Throwable 
	{
		url = new URL("https://www.opentraining.edu.au/");
		
	}
	
	@When("^a vistior uses desktop browser$")
	public void a_vistior_uses_desktop_browser() throws Exception
	{
	    hc = url.openConnection();
        hc.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36");
       // System.out.println(headers);
        in = new BufferedReader(new InputStreamReader(hc.getInputStream()));
        System.out.println(in);
        
        int line = 0;
        while ((inputLine = in.readLine()) != null)
        {
        	  System.out.println(inputLine);  
              if(inputLine.contains("Sign in"))
              {
                     containsAbut = true;
                     break;
              }     
          
        }
		
//       
	}

	@Then("^the SignIn button is visible$")
	public void the_SignIn_button_is_visible() throws Throwable 
	{
		
        Assert.assertEquals(true, containsAbut);
        in.close();

	}
	
	@When("^a vistor uses mobile browser$")
	public void a_vistor_uses_mobile_browser() throws Throwable 
	{
		    hc = url.openConnection();
	        hc.setRequestProperty("User-Agent", "Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16");
	        in = new BufferedReader(new InputStreamReader(hc.getInputStream()));
	        System.out.println(in);
	        
	        int line = 0;
	        while ((inputLine = in.readLine()) != null)
	        {
	        	  System.out.println(inputLine);  
	              if(inputLine.contains("Sign in"))
	              {
	                     containsAbut = true;
	                     break;
	              }     
	          
	        }
	}

	@Then("^the signin button is not visible$")
	public void the_signin_button_is_not_visible() throws Throwable
	{
		
		Assert.assertFalse(containsAbut);
		in.close();
	}
	
	
	

}
