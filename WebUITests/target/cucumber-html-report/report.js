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
  "duration": 5091340650,
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
  "name": "a visitor to OTI homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "a vistior uses desktop browser",
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
  "duration": 199061015,
  "status": "passed"
});
formatter.match({
  "location": "OTIhomepage.a_vistior_uses_desktop_browser()"
});
formatter.result({
  "duration": 1965184388,
  "status": "passed"
});
formatter.match({
  "location": "OTIhomepage.the_SignIn_button_is_visible()"
});
formatter.result({
  "duration": 1365555,
  "status": "passed"
});
formatter.after({
  "duration": 309370019,
  "status": "passed"
});
});