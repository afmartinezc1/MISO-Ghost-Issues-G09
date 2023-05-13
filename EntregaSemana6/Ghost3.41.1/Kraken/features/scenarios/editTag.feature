Feature: Edit Tag
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo y selecciono un tag, edito su información y reviso que haya quedado en la lista de tags con los datos editados
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "editTag/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "editTag/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "editTag/3_clickSignIn"
    And I wait for 7 seconds
    And I take screenshot with name "editTag/4_mainPage"
    And I go to the tags view
    And I take screenshot with name "editTag/5_clickTagView"
    And I wait for 2 seconds
    And I click new tag
    And I take screenshot with name "editTag/6_clickNewTag"
    And I wait for 2 seconds
    And I enter tag name "FOO BAR BAZ"
    And I take screenshot with name "editTag/7_enterTagName"
    And I wait for 2 seconds
    And I enter tag color "8889ec"
    And I take screenshot with name "editTag/8_enterTagColor"
    And I wait for 2 seconds
    And I enter tag slug "foo-bar-baz"
    And I take screenshot with name "editTag/9_enterTagSlug"
    And I wait for 2 seconds
    And I enter tag description "<LOREM1>"
    And I take screenshot with name "editTag/10_enterTagDescription"
    And I wait for 2 seconds
    And I save tag changes
    And I wait for 2 seconds
    And I take screenshot with name "editTag/11_clickSaveChanges"
    And I go to the tags view
    And I wait for 2 seconds
    Then I should see tag in tag list with name "FOO BAR BAZ", slug "foo-bar-baz" and description "<LOREM1>"
    And I take screenshot with name "editTag/12_checkTagCreated"
    And I click a tag with name "FOO BAR BAZ", slug "foo-bar-baz" and description "<LOREM1>"
    And I take screenshot with name "editTag/13_clickTagCreated"
    And I wait for 2 seconds
    And I enter tag name "BAZ BAR FOO"
    And I take screenshot with name "editTag/14_editTagName"
    And I wait for 2 seconds
    And I enter tag color "a52a2a"
    And I take screenshot with name "editTag/15_editTagColor"
    And I wait for 2 seconds
    And I enter tag slug "baz-bar-foo"
    And I take screenshot with name "editTag/16_editTagSlug"
    And I wait for 2 seconds
    And I enter tag description "<LOREM>"
    And I take screenshot with name "editTag/17_editTagDescription"
    And I wait for 2 seconds
    And I save tag changes
    And I take screenshot with name "editTag/18_clickSaveChanges"
    And I wait for 2 seconds
    And I go to the tags view
    And I wait for 2 seconds
    Then I should see tag in tag list with name "BAZ BAR FOO", slug "baz-bar-foo" and description "<LOREM>"
    And I take screenshot with name "editTag/19_checkTagEdited"
