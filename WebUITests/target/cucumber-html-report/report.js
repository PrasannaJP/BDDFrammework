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
  "duration": 2311255724,
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
  "duration": 1750493145,
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
  "duration": 12376,
  "status": "passed"
});
formatter.after({
  "duration": 365259760,
  "status": "passed"
});
});