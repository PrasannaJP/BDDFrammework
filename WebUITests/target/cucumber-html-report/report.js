$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/OUASignIn.feature");
formatter.feature({
  "line": 2,
  "name": "OTI Homepage",
  "description": "",
  "id": "oti-homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.before({
  "duration": 5023295931,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify the SignIn button on OTI homepage",
  "description": "",
  "id": "oti-homepage;verify-the-signin-button-on-oti-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Verify_SignInButton"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a vistior uses desktop browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "a visitor to OTI homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the SignIn button is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "OTIhomepage.a_visitor_to_OTI_homepage()"
});
formatter.result({
  "duration": 5301738124,
  "status": "passed"
});
formatter.match({
  "location": "OTIhomepage.a_vistior_uses_desktop_browser()"
});
formatter.result({
  "duration": 17864171360,
  "status": "passed"
});
formatter.match({
  "location": "OTIhomepage.the_SignIn_button_is_visible()"
});
formatter.result({
  "duration": 457936291,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:174)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:181)\r\n\tat com.webuitests.cuketests.OTIhomepage.the_SignIn_button_is_visible(OTIhomepage.java:40)\r\n\tat ✽.Then the SignIn button is visible(src/test/resources/features/OUASignIn.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 416506914,
  "status": "passed"
});
});