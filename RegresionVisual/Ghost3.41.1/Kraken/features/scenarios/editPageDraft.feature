Feature: Edit Page
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo una page, reviso que esté en la lista de draft pages, entro de nuevo a la page, edito su título y su contenido, reviso que el título editado sea el que aparece en la primera page de la lista de drafs, entro a ese page y valido que su título y contenido sean los editados
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "editPageDraft/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "editPageDraft/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "editPageDraft/3_clickSignIn"
    And I wait for 7 seconds
    And I go to the pages view
    And I take screenshot with name "editPageDraft/4_clickNewPage"
    And I wait for 2 seconds
    And I click new page
    And I wait for 2 seconds
    And I enter page title "FOO BAR BAZ"
    And I take screenshot with name "editPageDraft/5_enterPageTitle1"
    And I wait for 2 seconds
    And I enter page content "<LOREM1>"
    And I take screenshot with name "editPageDraft/6_enterPageContent1"
    And I wait for 2 seconds
    And I click pages to go to previous page
    And I take screenshot with name "editPageDraft/7_clickPreviousPage1"
    And I wait for 2 seconds
    Then I should see the first draft page with title "FOO BAR BAZ"
    And I take screenshot with name "editPageDraft/8_firstDraftPage1"
    And I wait for 2 seconds
    When I click on the first draft page
    And I take screenshot with name "editPageDraft/9_clickFirstDraftPage1"
    And I wait for 2 seconds
    And I enter page title "BAZ BAR FOO"
    And I take screenshot with name "editPageDraft/10_enterPageTitle2"
    And I wait for 2 seconds
    And I enter page content "<LOREM2>"
    And I take screenshot with name "editPageDraft/11_enterPageContent2"
    And I wait for 2 seconds
    And I click pages to go to previous page
    And I take screenshot with name "editPageDraft/12_clickPreviousPage2"
    And I wait for 2 seconds
    Then I should see the first draft page with title "BAZ BAR FOO"
    And I take screenshot with name "editPageDraft/13_firstDraftPage2"
    And I wait for 2 seconds
    When I click on the first draft page
    And I take screenshot with name "editPageDraft/14_clickFirstDraftPage2"
    And I wait for 2 seconds
    Then I should see that the page title is "BAZ BAR FOO"
    And I take screenshot with name "editPageDraft/15_checkPageTitle"
    And I wait for 2 seconds
    Then I should see that the edited page content is "<LOREM2>""<LOREM1>"
    And I take screenshot with name "editPageDraft/16_checkPageContent"

