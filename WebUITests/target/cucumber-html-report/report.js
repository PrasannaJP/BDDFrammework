$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OTIAdministrativepage.feature");
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
  "duration": 5226226320,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify able expand and collapse Introduction section qualification page",
  "description": "",
  "id": "oti-mobile-scenarios;verify-able-expand-and-collapse-introduction-section-qualification-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Verify_able_expand_and_collapse_Introduction_section_qualification_page"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "OTI mobile user open the URL \u0027https://www.opentraining.edu.au\u0027,click on \u0027Menu\u0027,click on \u0027VIEW COURSES\u0027, navigate to \u0027Administration\u0027, click on \u0027View Course\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user expand \u0027Language, literacy and numeracy requirements\u0027 or \u0027Credit\u0027 field items",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Expect field items should be expanded.",
  "keyword": "Then "
});
formatter.match({
  "location": "OTIAdministrativepage.oti_mobile_user_open_the_URL_https_www_opentraining_edu_au_click_on_VIEW_COURSES_navigate_to_Administration_click_on_View_Course()"
});
formatter.result({
  "duration": 39330379159,
  "status": "passed"
});
formatter.match({
  "location": "OTIAdministrativepage.user_expand_Language_literacy_and_numeracy_requirements_or_Credit_field_items()"
});
formatter.result({
  "duration": 7469271846,
  "status": "passed"
});
formatter.match({
  "location": "OTIAdministrativepage.user_Expect_field_items_should_be_expanded()"
});
formatter.result({
  "duration": 3054720899,
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.webuitests.cuketests.OTIAdministrativepage.user_Expect_field_items_should_be_expanded(OTIAdministrativepage.java:85)\r\n\tat ✽.Then user Expect field items should be expanded.(OTIAdministrativepage.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 657503805,
  "status": "passed"
});
});