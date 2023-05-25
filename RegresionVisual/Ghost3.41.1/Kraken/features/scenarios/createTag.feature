Feature: Create Tag
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un tag y reviso que haya quedado en la lista de tags con los datos de entrada dados previamente
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "createTag/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "createTag/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "createTag/3_clickSignIn"
    And I wait for 7 seconds
    And I take screenshot with name "createTag/4_mainPage"
    And I go to the tags view
    And I take screenshot with name "createTag/5_clickTagView"
    And I wait for 2 seconds
    And I click new tag
    And I take screenshot with name "createTag/6_clickNewTag"
    And I wait for 2 seconds
    And I enter tag name "FOO BAR BAZ"
    And I take screenshot with name "createTag/7_enterTagName"
    And I wait for 2 seconds
    And I enter tag color "8889ec"
    And I take screenshot with name "createTag/8_enterTagColor"
    And I wait for 2 seconds
    And I enter tag slug "foo-bar-baz"
    And I take screenshot with name "createTag/9_enterTagSlug"
    And I wait for 2 seconds
    And I enter tag description "<LOREM1>"
    And I take screenshot with name "createTag/10_enterTagDescription"
    And I wait for 2 seconds
    And I save tag changes
    And I wait for 2 seconds
    And I take screenshot with name "createTag/11_clickSaveChanges"
    And I go to the tags view
    And I wait for 2 seconds
    Then I should see tag in tag list with name "FOO BAR BAZ", slug "foo-bar-baz" and description "<LOREM1>"
    And I take screenshot with name "createTag/12_checkTagCreated"
