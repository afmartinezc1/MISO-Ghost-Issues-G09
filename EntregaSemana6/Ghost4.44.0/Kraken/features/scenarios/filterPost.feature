Feature: Filtrar post
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, filtrar los post por estado y por autor y verificar que filtra correctamente
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "filterPost/enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "filterPost/enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "filterPost/clickSignIn"
    And I wait for 7 seconds
    And I go to the posts view
    And I take screenshot with name "filterPost/clickPostView"
    And I wait for 2 seconds
    And I click filter post by state
    And I take screenshot with name "filterPost/clickFilterPostByState"
    And I wait for 2 seconds
    And I click filter post by state Draft
    And I take screenshot with name "filterPost/clickFilterPostByStateDraft"
    And I wait for 2 seconds
    Then I should see posts with estado "DRAFT"
    And I take screenshot with name "filterPost/shouldSeePostWithStateDraft"
    And I wait for 2 seconds
    And I click filter post by state
    And I take screenshot with name "filterPost/clickFilterPostByState"
    And I wait for 2 seconds
    When I click filter post by state Published
    And I take screenshot with name "filterPost/clickFilterPostByStatePublished"
    And I wait for 2 seconds
    Then I should see posts with estado "PUBLISHED"
    And I take screenshot with name "filterPost/shouldSeePostWithStatePublished"
   