@OTI_Homepage_MenuItem_Validation
Feature: OTI Homepage menu item validation

@Verify_SignInButton_desktop
   Scenario: Verify the SignIn button on desktop OTI homepage 
   Given a visitor to OTI homepage 
   When a vistior uses desktop browser  
   Then the SignIn button is visible
    
@Verify_SignInButton_OnMobile
   Scenario: Verify the SignIn button on mobile OTI homepage 
   Given a visitor to OTI homepage 
   When a vistor uses mobile browser 
   Then the signin button is not visible 

