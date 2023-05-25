Feature: Filtrar pages
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, filtrar los pages por estado y por autor y verificar que filtra correctamente
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "filterPage/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "filterPage/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "filterPage/3_clickSignIn"
    And I wait for 7 seconds
    And I go to the pages view
    And I take screenshot with name "filterPage/4_clickPageView"
    And I wait for 2 seconds
    And I click filter page by state
    And I take screenshot with name "filterPage/5_clickFilterPageByState"
    And I wait for 2 seconds
    And I click filter page by state Draft
    And I take screenshot with name "filterPage/6_clickFilterPageByStateDraft"
    And I wait for 2 seconds
    Then I should see pages with estado "DRAFT"
    And I take screenshot with name "filterPage/7_shouldSeePageWithStateDraft"
    And I wait for 2 seconds
    And I click filter page by state
    And I take screenshot with name "filterPage/8_clickFilterPageByState"
    And I wait for 2 seconds
    When I click filter page by state Published
    And I take screenshot with name "filterPage/9_clickFilterPageByStatePublished"
    And I wait for 2 seconds
    Then I should see pages with estado "PUBLISHED"
    And I take screenshot with name "filterPage/10_shouldSeePageWithStatePublished"

    
