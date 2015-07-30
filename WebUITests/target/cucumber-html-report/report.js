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
formatter.before({
  "duration": 2462596882,
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
  "duration": 2126083674,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Open Page",
  "description": "",
  "id": "google-search;open-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Open_Page"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I see default page",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.i_see_default_page()"
});
formatter.result({
  "duration": 14187,
  "status": "passed"
});
formatter.after({
  "duration": 437732706,
  "status": "passed"
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
  "duration": 1731759213,
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
  "duration": 1477853216,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 257361560,
  "status": "passed"
});
formatter.before({
  "duration": 1757275683,
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
  "duration": 1518938435,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 257300284,
  "status": "passed"
});
});