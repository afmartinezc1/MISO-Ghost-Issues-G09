Feature: Edit General Settings

  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, entro en las opciones generales del sitio, cambio el titulo y la descripcion, guardo cambios y valido que estos se vean reflejados en el blog
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "editSitePreferences/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "editSitePreferences/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "editSitePreferences/3_clickSignIn"
    And I wait for 5 seconds
    And I click in General
    And I take screenshot with name "editSitePreferences/4_clickInGeneral"
    And I wait for 2 seconds
    And I click on general settings title description expand button
    And I take screenshot with name "editSitePreferences/5_clickOnExpandButton"
    And I wait for 1 seconds
    And I fill general settings site title with text "New Site Title"
    And I take screenshot with name "editSitePreferences/6_fillSiteTitle"
    And I wait for 1 seconds
    And I fill general settings site description with text "New Site Description"
    And I take screenshot with name "editSitePreferences/7_fillSiteDescription"
    And I wait for 1 seconds
    And I save general settings changes
    And I take screenshot with name "editSitePreferences/8_saveGeneral"
    And I wait for 2 seconds
    And I should see the new site title with text "New Site Title"
    And I take screenshot with name "editSitePreferences/9_shouldSeeNewSiteTitle"
    And I wait for 1 seconds
    And I navigate to page "<BLOG>"
    And I take screenshot with name "editSitePreferences/10_navigateToBlog"
    And I wait for 3 seconds
    Then I should see the new site description with text "New Site Description"
    And I take screenshot with name "editSitePreferences/11_shouldSeeNewSiteDescription"