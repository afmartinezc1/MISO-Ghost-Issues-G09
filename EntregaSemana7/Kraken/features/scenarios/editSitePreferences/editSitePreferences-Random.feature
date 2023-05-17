Feature: Edit General Settings

  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, entro en las opciones generales del sitio, cambio el titulo y la descripcion, guardo cambios y valido que estos se vean reflejados en el blog
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click SignIn
    And I wait for 5 seconds
    And I click in General
    And I wait for 2 seconds
    And I click on general settings title description expand button
    And I wait for 1 seconds
    And I fill general settings site title with text "$name_1"
    And I wait for 1 seconds
    And I fill general settings site description with text "$name_2"
    And I wait for 1 seconds
    And I save general settings changes
    And I wait for 2 seconds
    And I should see the new site title with text "$$name_1"
    And I wait for 1 seconds
    And I navigate to page "<BLOG>"
    And I wait for 3 seconds
    Then I should see the new site description with text "$$name_2"