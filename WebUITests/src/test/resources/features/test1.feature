@Test @OTI_E2E_Testing_Mobile
Feature: OTI E2E Testing Mobile

  Background: 

  @test1
  Scenario: test1
    Given a visitor to OTI hompage using mobile browser

  @Verify_administrator_screen
  Scenario: Verify administrator screen
    Given load step "test1"
    #Given a visitor to OTI hompage using mobile browser
    When a vistor tap on the 'menu' nevbar
