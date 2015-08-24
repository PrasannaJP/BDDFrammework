$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("verifyhompage_menuitems.feature");
formatter.feature({
  "line": 2,
  "name": "OTI Homepage Validation",
  "description": "",
  "id": "oti-homepage-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Home_Page_MenuItem_Validation"
    }
  ]
});
formatter.before({
  "duration": 5228306045,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify home navbar menuitem visible in homepage",
  "description": "",
  "id": "oti-homepage-validation;verify-home-navbar-menuitem-visible-in-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Verify_menuitems_visible_in_homepage_desktop"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a visitor to OTI hompage using desktop browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the Home nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the \u0027View courses\u0027 nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the \u0027Study online\u0027 nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the \u0027How we support you\u0027 nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \u0027Study online\u0027 nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the \u0027Pricing\u0027 nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the \u0027Why us?\u0027 nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "homePage.a_visitor_to_OTI_hompage_using_desktop_browser()"
});
formatter.result({
  "duration": 18274485585,
  "status": "passed"
});
formatter.match({
  "location": "homePage.the_Home_nevbar_is_visible()"
});
formatter.result({
  "duration": 420481030,
  "status": "passed"
});
formatter.match({
  "location": "homePage.the_View_courses_nevbar_menuitem_is_visible()"
});
formatter.result({
  "duration": 20494190,
  "status": "passed"
});
formatter.match({
  "location": "homePage.the_Study_online_nevbar_menuitem_is_visible()"
});
formatter.result({
  "duration": 22656921,
  "status": "passed"
});
formatter.match({
  "location": "homePage.the_How_we_support_you_nevbar_menuitem_is_visible()"
});
formatter.result({
  "duration": 13797417,
  "status": "passed"
});
formatter.match({
  "location": "homePage.the_Study_online_nevbar_menuitem_is_visible()"
});
formatter.result({
  "duration": 14352211,
  "status": "passed"
});
formatter.match({
  "location": "homePage.the_Pricing_nevbar_menuitem_is_visible()"
});
formatter.result({
  "duration": 15208249,
  "status": "passed"
});
formatter.match({
  "location": "homePage.the_Why_us_nevbar_menuitem_is_visible()"
});
formatter.result({
  "duration": 13146333,
  "status": "passed"
});
formatter.after({
  "duration": 397940017,
  "status": "passed"
});
});