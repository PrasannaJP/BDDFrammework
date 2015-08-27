@OTI_Mobile_scenarios
Feature: OTI_Mobile_scenarios

  @Verify_able_expand_and_collapse_Introduction_section_qualification_page
  Scenario: Verify able expand and collapse Introduction section qualification page
    Given OTI mobile user open the URL 'https://www.opentraining.edu.au',click on 'Menu',click on 'VIEW COURSES', navigate to 'Administration', click on 'View Course'
    When user expand 'Language, literacy and numeracy requirements' or 'Credit' field items
    Then user Expect field items should be expanded.
