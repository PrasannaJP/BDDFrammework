@OUA_Tests_Release1 @Home_Page_MenuItem_Validation
Feature: OTI Homepage Validation

  @Verify_menuitems_visible_in_homepage_desktop
  Scenario: verify home navbar menuitem visible in homepage
    Given a visitor to OTI hompage using desktop browser
    Then the 'Home' nevbar menuitem is visible
    Then the 'View courses' nevbar menuitem is visible
    Then the 'Study online' nevbar menuitem is visible
    Then the 'How we support you' nevbar menuitem is visible
    Then the 'Study online' nevbar menuitem is visible
    Then the 'Pricing' nevbar menuitem is visible
    Then the 'Why us?' nevbar menuitem is visible

  @Verify_menuitems_visible_under_menu_on_mobile
  Scenario: Verify the menuitems visible under menu onmobile
    Given a visitor to OTI hompage using mobile browser
    When a vistor tap on the 'menu' nevbar
    Then the 'Home' nevbar menuitem is visible
    Then the 'View courses' nevbar menuitem is visible
    Then the 'Study online' nevbar menuitem is visible
    Then the 'How we support you' nevbar menuitem is visible
    Then the 'Study online' nevbar menuitem is visible
    Then the 'Pricing' nevbar menuitem is visible
    Then the 'Why us?' nevbar menuitem is visible
