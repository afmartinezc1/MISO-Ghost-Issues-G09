Feature: Create Page
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo una page, reviso que sea el primero en la lista de draft pages, entro a esa page y reviso que título y contenido sean los ingresados previamente
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "createPageDraft/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "createPageDraft/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "createPageDraft/3_clickSingIn"
    And I wait for 7 seconds
    And I go to the pages view
    And I take screenshot with name "createPageDraft/4_clickPageView"
    And I wait for 2 seconds
    And I click new page
    And I take screenshot with name "createPageDraft/5_clickNewPage"
    And I wait for 2 seconds
    And I enter page title "FOO BAR BAZ"
    And I take screenshot with name "createPageDraft/6_enterPageTitle"
    And I wait for 2 seconds
    And I enter page content "<LOREM1>"
    And I take screenshot with name "createPageDraft/7_enterPageContent"
    And I wait for 2 seconds
    And I click pages to go to previous page
    And I take screenshot with name "createPageDraft/8_clickPreviousPage"
    And I wait for 2 seconds
    Then I should see the first draft page with title "FOO BAR BAZ"
    And I take screenshot with name "createPageDraft/9_firstDraftPage"
    And I wait for 2 seconds
    When I click on the first draft page
    And I take screenshot with name "createPageDraft/10_clickFirstDraftPage"
    And I wait for 2 seconds
    Then I should see that the page title is "FOO BAR BAZ"
    And I take screenshot with name "createPageDraft/11_checkPageTitle"
    And I wait for 2 seconds
    Then I should see that the page content is "<LOREM1>"
    And I take screenshot with name "createPageDraft/12_checkPageContent"
