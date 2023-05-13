Feature: Create Page and publish
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo una page, la publico y verifico que exista la url
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "createPagePublish/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "createPagePublish/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "createPagePublish/3_clickSignIn"
    And I wait for 7 seconds
    And I go to the pages view
    And I take screenshot with name "createPagePublish/4_clickPageView"
    And I wait for 2 seconds
    And I click new page
    And I take screenshot with name "createPagePublish/5_clickNewPage"
    And I wait for 2 seconds
    And I enter page title "MY_FIRST_PAGE"
    And I take screenshot with name "createPagePublish/6_enterPageTitle"
    And I wait for 2 seconds
    And I enter page content "<POST_PUBLICADO>"
    And I take screenshot with name "createPagePublish/7_enterPageContent"
    And I wait for 2 seconds
    And I click publish to show dialog to publish
    And I take screenshot with name "createPagePublish/8_clickPublishDialog"
    And I wait for 2 seconds
    When I click publish to confirm
    And I take screenshot with name "createPagePublish/9_clickPublishConfirm"
    And I wait for 2 seconds
    Then I navigate to page "<PAGE_PUBLICADO>"
    And I take screenshot with name "createPagePublish/10_navegateToPage"
    And I wait for 2 seconds
  
