Feature: Edit Page
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo una page, reviso que esté en la lista de draft pages, entro de nuevo a la page, edito su título y su contenido, reviso que el título editado sea el que aparece en la primera page de la lista de drafs, entro a ese page y valido que su título y contenido sean los editados
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click SignIn
    And I wait for 7 seconds
    And I go to the pages view
    And I wait for 2 seconds
    And I click new page
    And I wait for 2 seconds
    And I enter page title "FOO BAR BAZ"
    And I wait for 2 seconds
    And I enter page content "<LOREM1>"
    And I wait for 2 seconds
    And I click pages to go to previous page
    And I wait for 2 seconds
    Then I should see the first draft page with title "FOO BAR BAZ"
    And I wait for 2 seconds
    When I click on the first draft page
    And I wait for 2 seconds
    And I enter page title "BAZ BAR FOO"
    And I wait for 2 seconds
    And I enter page content "<LOREM2>"
    And I wait for 2 seconds
    And I click pages to go to previous page
    And I wait for 2 seconds
    Then I should see the first draft page with title "BAZ BAR FOO"
    And I wait for 2 seconds
    When I click on the first draft page
    And I wait for 2 seconds
    Then I should see that the page title is "BAZ BAR FOO"
    And I wait for 2 seconds
    Then I should see that the edited page content is "<LOREM2>""<LOREM1>"

