$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OUASignIn.feature");
formatter.feature({
  "line": 2,
  "name": "OTI Homepage",
  "description": "",
  "id": "oti-homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OTI_Homepage_Validation"
    }
  ]
});
formatter.before({
<<<<<<< HEAD
  "duration": 2259858451,
=======
  "duration": 5015904609,
>>>>>>> 79f7133e59261c461287777add7dd85bc3989789
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
<<<<<<< HEAD
  "duration": 105969992,
=======
  "duration": 254250380,
>>>>>>> 79f7133e59261c461287777add7dd85bc3989789
  "status": "passed"
});
formatter.match({
  "location": "OTIhomepage.a_vistior_uses_desktop_browser()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1603761818,
=======
  "duration": 1947774469,
>>>>>>> 79f7133e59261c461287777add7dd85bc3989789
  "status": "passed"
});
formatter.match({
  "location": "OTIhomepage.the_SignIn_button_is_visible()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 2098149,
  "status": "passed"
});
formatter.after({
  "duration": 321605810,
=======
  "duration": 1800215,
  "status": "passed"
});
formatter.after({
  "duration": 273897286,
>>>>>>> 79f7133e59261c461287777add7dd85bc3989789
  "status": "passed"
});
});