@OTI_Mobile_scenarios
Feature: OTI_Mobile_scenarios

  @Verifying_expand_and_collapse
  Scenario: Verify_menuitems_visible_under_menu_on_mobile
    Given a visitor viewing OTI hompage using mobile browser
    When a vistor tap on the 'menu' nevbar
    Then the List of menuitems should be visible

  Scenario: Verify submenuitems visible under Viewcourses on mobile
    When a visitor click on the 'View courses' menuitem
    Then the List of sub menuitems should be visible

  Scenario: Verifying visitor able navigate administrator page
    When a visitor click on the 'Administration' submenu item
    Then the visitor navigate to 'Administration' page

  Scenario: Verifying visitor able navigate Certificate III page
    When a visitor click on the 'View Couse' button
    Then the visitor navigate to 'Certificate III in Business Administration' page

  Scenario: Verifying visitor able 
    When a visitor click on Expand button of field 'Language, literacy and numeracy requirements'
    Then the details under the field should be visible
