package com.webuitests.cuketests;

import java.util.Properties;

import com.webuiframework.oua.uitests.utils.TestBaseWebDriver;

public class TestBase extends TestBaseWebDriver {

	public static Properties testproperties;
	//public static String URL = testproperties.getProperty("webuitests.URL");
	public static String URL = "http://google.com";
	
	public TestBase(){
		System.out.print("Invoking Test Base");
		System.setProperty("webdriver.chrome.driver", testproperties.getProperty("webuitets.chromedriver"));
		System.setProperty("webdriver.ie.driver", testproperties.getProperty("webuitests.iedriver"));
		setBrowserType(testproperties.getProperty("webuitests.browser"));
		initWebDriver();
	}
}
