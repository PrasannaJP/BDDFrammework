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
      "name": "@OTI_Demo1"
    },
    {
      "line": 1,
      "name": "@Home_Page_MenuItem_Validation"
    }
  ]
});
formatter.before({
  "duration": 2256173144,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify the menuitems visible under menu onmobile",
  "description": "",
  "id": "oti-homepage-validation;verify-the-menuitems-visible-under-menu-onmobile",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Verify_menuitems_visible_under_menu_on_mobile"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "a visitor to OTI hompage using mobile browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "a vistor tap on the \u0027menu\u0027 nevbar",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the \u0027Home\u0027 nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the \u0027View courses\u0027 nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "the \u0027Study online\u0027 nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the \u0027How we support you\u0027 nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the \u0027Study online\u0027 nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "the \u0027Pricing\u0027 nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the \u0027Why us?\u0027 nevbar menuitem is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "OTIMenuITems_Validation_Mobile.a_visitor_to_OTI_hompage_using_mobile_browser()"
});
formatter.result({
  "duration": 5420906029,
  "status": "passed"
});
formatter.match({
  "location": "OTIMenuITems_Validation_Mobile.a_vistor_tap_on_the_menu_nevbar()"
});
formatter.result({
  "duration": 6400406709,
  "status": "passed"
});
formatter.match({
  "location": "OTIMenuITems_Validation_DeskTP.the_Home_nevbar_is_visible()"
});
formatter.result({
  "duration": 31956357482,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d44.0.2403.155)\n  (Driver info: chromedriver\u003d2.15.322448 (52179c1b310fec1797c81ea9a20326839860b7d3),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 31.93 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027BG4WS0866\u0027, ip: \u0027172.29.93.156\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\lokesh.lr\\AppData\\Local\\Temp\\scoped_dir3564_30300}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d44.0.2403.155, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: d906ee1c248bcee564c981130fdd4c7e\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Home1\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat com.oti.pom.OTIMenuItems.homeNavBar(OTIMenuItems.java:24)\r\n\tat com.webuitests.cuketests.OTIMenuITems_Validation_DeskTP.the_Home_nevbar_is_visible(OTIMenuITems_Validation_DeskTP.java:29)\r\n\tat ✽.Then the \u0027Home\u0027 nevbar menuitem is visible(verifyhompage_menuitems.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OTIMenuITems_Validation_DeskTP.the_View_courses_nevbar_menuitem_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OTIMenuITems_Validation_DeskTP.the_Study_online_nevbar_menuitem_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OTIMenuITems_Validation_DeskTP.the_How_we_support_you_nevbar_menuitem_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OTIMenuITems_Validation_DeskTP.the_Study_online_nevbar_menuitem_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OTIMenuITems_Validation_DeskTP.the_Pricing_nevbar_menuitem_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OTIMenuITems_Validation_DeskTP.the_Why_us_nevbar_menuitem_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1586579469,
  "status": "passed"
});
});