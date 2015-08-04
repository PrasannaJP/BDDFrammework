$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Check Search",
  "description": "",
  "id": "google-search;check-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Check_Search"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I set text \u0027\u003ctext\u003e\u0027 at default page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I did not see search button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I set text \u0027\u003ctext\u003e\u0027 at default page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click \u0027Search2\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I see first link text \u0027\u003ctitle\u003e\u0027 at results page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click at \u00271\u0027 results link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see first link title \u0027\u003ctitle\u003e\u0027 at new tab",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "google-search;check-search;",
  "rows": [
    {
      "cells": [
        "text",
        "title"
      ],
      "line": 22,
      "id": "google-search;check-search;;1"
    },
    {
      "cells": [
        "Selenium",
        "Selenium - Web Browser Automation"
      ],
      "line": 23,
      "id": "google-search;check-search;;2"
    },
    {
      "cells": [
        "Cucumber",
        "Cucumber - Making BDD fun"
      ],
      "line": 24,
      "id": "google-search;check-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2498321269,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open default website",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearch.open_default_website()"
});
formatter.result({
  "duration": 1767554534,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Check Search",
  "description": "",
  "id": "google-search;check-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demo"
    },
    {
      "line": 11,
      "name": "@Check_Search"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I set text \u0027Selenium\u0027 at default page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I did not see search button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I set text \u0027Selenium\u0027 at default page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click \u0027Search2\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I see first link text \u0027Selenium - Web Browser Automation\u0027 at results page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click at \u00271\u0027 results link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see first link title \u0027Selenium - Web Browser Automation\u0027 at new tab",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 12
    }
  ],
  "location": "GoogleSearch.i_set_text_at_default_page(String)"
});
formatter.result({
  "duration": 625330109,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.i_did_not_see_search_button()"
});
formatter.result({
  "duration": 30305566179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 12
    }
  ],
  "location": "GoogleSearch.i_set_text_at_default_page(String)"
});
formatter.result({
  "duration": 1615400196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search2",
      "offset": 9
    }
  ],
  "location": "GoogleSearch.i_click_search_button(String)"
});
formatter.result({
  "duration": 30253691080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium - Web Browser Automation",
      "offset": 23
    }
  ],
  "location": "GoogleSearch.i_see_first_link_text_at_results_page(String)"
});
formatter.result({
  "duration": 30020747262,
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 0, Size: 0\r\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:653)\r\n\tat java.util.ArrayList.get(ArrayList.java:429)\r\n\tat com.webuiframework.oua.uitests.control.Elements.getWebElement(Elements.java:374)\r\n\tat com.webuitests.cuketests.GoogleSearch.i_see_first_link_text_at_results_page(GoogleSearch.java:77)\r\n\tat ✽.Then I see first link text \u0027Selenium - Web Browser Automation\u0027 at results page(GoogleSearch.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "GoogleSearch.i_click_at_results_link(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium - Web Browser Automation",
      "offset": 24
    }
  ],
  "location": "GoogleSearch.i_see_first_link_title_at_new_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 467685145,
  "status": "passed"
});
formatter.before({
  "duration": 1777798673,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open default website",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearch.open_default_website()"
});
formatter.result({
  "duration": 1510453168,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Check Search",
  "description": "",
  "id": "google-search;check-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demo"
    },
    {
      "line": 11,
      "name": "@Check_Search"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I set text \u0027Cucumber\u0027 at default page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I did not see search button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I set text \u0027Cucumber\u0027 at default page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click \u0027Search2\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I see first link text \u0027Cucumber - Making BDD fun\u0027 at results page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click at \u00271\u0027 results link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I see first link title \u0027Cucumber - Making BDD fun\u0027 at new tab",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 12
    }
  ],
  "location": "GoogleSearch.i_set_text_at_default_page(String)"
});
formatter.result({
  "duration": 674500040,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.i_did_not_see_search_button()"
});
