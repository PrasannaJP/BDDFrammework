package com.webuitests.cuketests;

import gherkin.formatter.model.Feature;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
 @CucumberOptions(features="src/test/resources/OUASignIn.feature",tags={"@demo"},format={"json:target/cucumber-jsonreport/report.json"})
public class RunTests {


}
