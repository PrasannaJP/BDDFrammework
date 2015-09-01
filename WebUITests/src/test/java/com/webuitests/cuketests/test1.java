package com.webuitests.cuketests;

import cucumber.api.java.en.Given;
import cucumber.runtime.java.StepDefAnnotation;

public class test1 
{
	

	@Given("^load step \"([^\"]*)\"$")
	public void load_step(String arg1) throws Throwable {
	    System.out.println(arg1);
	}
	
	
}
