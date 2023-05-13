Feature: Filtrar post
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, filtrar los post por estado y por autor y verificar que filtra correctamente
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "filterPost/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "filterPost/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "filterPost/3_clickSignIn"
    And I wait for 7 seconds
    And I go to the posts view
    And I take screenshot with name "filterPost/4_clickPostView"
    And I wait for 2 seconds
    And I click filter post by state
    And I take screenshot with name "filterPost/5_clickFilterPostByState"
    And I wait for 2 seconds
    And I click filter post by state Draft
    And I take screenshot with name "filterPost/6_clickFilterPostByStateDraft"
    And I wait for 2 seconds
    Then I should see posts with estado "DRAFT"
    And I take screenshot with name "filterPost/7_shouldSeePostWithStateDraft"
    And I wait for 2 seconds
    And I click filter post by state
    And I take screenshot with name "filterPost/8_clickFilterPostByState"
    And I wait for 2 seconds
    When I click filter post by state Published
    And I take screenshot with name "filterPost/9_clickFilterPostByStatePublished"
    And I wait for 2 seconds
    Then I should see posts with estado "PUBLISHED"
    And I take screenshot with name "filterPost/10_shouldSeePostWithStatePublished"
