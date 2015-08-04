package com.webuitests.base;

import java.io.IOException;
import java.util.Properties;

import com.webuiframework.oua.uitests.utils.TestBaseWebDriver;

public class TestBase extends TestBaseWebDriver {
	public static Properties testproperties;
	
	//public static String URL ;
	public static String URL = "http://google.com";
	
	public TestBase(){
		
	}
	
	public static void Initalise(){
		System.out.print("Invoking Test Base");
		testproperties = new Properties();
        try {
            testproperties.load(ClassLoader.getSystemResourceAsStream("test.properties"));
        } catch (IOException ignored) {
        }

        //URL = testproperties.getProperty("webuitests.URL");
		//System.out.print("Invoking Test Base");
		//System.setProperty("webdriver.chrome.driver", testproperties.getProperty("webuitets.chromedriver"));
		//System.setProperty("webdriver.ie.driver", testproperties.getProperty("webuitests.iedriver"));
		//System.out.println(testproperties.getProperty("webuitests.URL"));
		//System.out.println(testproperties.getProperty("webuitests.browser"));
		setBrowserType("firefox");
		
	}

}