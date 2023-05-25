Feature: Delete Page
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo una page, reviso que esté en la lista de draft pages, creo otra page, reviso que esté en la lista de draft pages, borro esta page, y valido que la primera page de la lista de draft pages sea la primera que cree, con lo cual me cercioro que la segunda page efectivamente fue borrada
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "deletePageDraft/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "deletePageDraft/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "deletePageDraft/3_clickSignIn"
    And I wait for 7 seconds
    And I go to the pages view
    And I take screenshot with name "deletePageDraft/4_clickPageView"
    And I wait for 2 seconds
    And I click new page
    And I take screenshot with name "deletePageDraft/5_clickNewPage1"
    And I wait for 2 seconds
    And I enter page title "FOO BAR BAZ"
    And I take screenshot with name "deletePageDraft/6_enterPageTitle1"
    And I wait for 2 seconds
    And I enter page content "<LOREM1>"
    And I take screenshot with name "deletePageDraft/7_enterPageContent1"
    And I wait for 2 seconds
    And I click pages to go to previous page
    And I take screenshot with name "deletePageDraft/8_clickPreviousPage1"
    And I wait for 2 seconds
    Then I should see the first draft page with title "FOO BAR BAZ"
    And I take screenshot with name "deletePageDraft/9_firstDraftPage1"
    And I click new page
    And I take screenshot with name "deletePageDraft/10_clickNewPage2"
    And I wait for 2 seconds
    And I enter page title "BAZ BAR FOO"
    And I take screenshot with name "deletePageDraft/11_enterPageTitle2"
    And I wait for 2 seconds
    And I enter page content "<LOREM2>"
    And I take screenshot with name "deletePageDraft/12_enterPageContent2"
    And I click pages to go to previous page
    And I wait for 2 seconds
    And I take screenshot with name "deletePageDraft/13_clickPreviousPage2"
    Then I should see the first draft page with title "BAZ BAR FOO"
    And I take screenshot with name "deletePageDraft/14_firstDraftPage2"
    And I wait for 2 seconds
    When I click on the first draft page
    And I take screenshot with name "deletePageDraft/15_clickFirstDraftPage1"
    And I wait for 2 seconds
    Then I should see that the page title is "BAZ BAR FOO"
    And I take screenshot with name "deletePageDraft/16_checkPageTitle1"
    And I wait for 2 seconds
    Then I should see that the page content is "<LOREM2>"
    And I take screenshot with name "deletePageDraft/17_checkPageContent1"
    And I wait for 2 seconds
    And I click on page settings
    And I take screenshot with name "deletePageDraft/18_clickPageSettings"
    And I wait for 2 seconds
    And I click on delete page
    And I take screenshot with name "deletePageDraft/19_clickDeletePage"
    And I wait for 2 seconds
    And I click on confirm page delete
    And I take screenshot with name "deletePageDraft/20_clickConfirmDelete"
    And I wait for 2 seconds
    When I click on the first draft page
    And I take screenshot with name "deletePageDraft/21_clickFirstDraftPage2"
    And I wait for 2 seconds
    Then I should see that the page title is "FOO BAR BAZ"
    And I take screenshot with name "deletePageDraft/22_checkPageTitle2"
    And I wait for 2 seconds
    Then I should see that the page content is "<LOREM1>"
    And I take screenshot with name "deletePageDraft/23_checkPageContent2"

