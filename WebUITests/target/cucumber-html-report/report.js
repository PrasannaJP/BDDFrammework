$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OUAMobile.feature");
formatter.feature({
  "line": 2,
  "name": "OTI_Mobile_scenarios",
  "description": "",
  "id": "oti-mobile-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OTI_Mobile_scenarios"
    }
  ]
});
formatter.before({
  "duration": 2202112988,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Validation of Callapse and Expand",
  "description": "",
  "id": "oti-mobile-scenarios;validation-of-callapse-and-expand",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Verifying_expand_and_collapse"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "As a visitor viewing OTI hompage using mobile browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "vistor tap on the \u0027menu\u0027 nevbar",
  "keyword": "When "
});
formatter.match({
  "location": "OUAMobile.as_a_visitor_viewing_OTI_hompage_using_mobile_browser()"
});
formatter.result({
  "duration": 7026254030,
  "status": "passed"
});
formatter.match({
  "location": "OUAMobile.vistor_tap_on_the_menu_nevbar()"
});
formatter.result({
  "duration": 10080845134,
  "status": "passed"
});
formatter.after({
  "duration": 1418300186,
  "status": "passed"
});
});