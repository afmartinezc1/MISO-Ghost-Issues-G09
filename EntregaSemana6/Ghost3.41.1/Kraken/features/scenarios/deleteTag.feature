Feature: Delete Tag
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo y selecciono un tag, lo elimino y reviso que se haya removido de la lista de tags
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "deleteTag/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "deleteTag/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "deleteTag/3_clickSignIn"
    And I wait for 7 seconds
    And I take screenshot with name "deleteTag/4_mainPage"
    And I go to the tags view
    And I take screenshot with name "deleteTag/5_clickTagView"
    And I wait for 2 seconds
    And I click new tag
    And I take screenshot with name "deleteTag/6_clickNewTag"
    And I wait for 2 seconds
    And I enter tag name "DELETE TAG"
    And I take screenshot with name "deleteTag/7_enterTagName"
    And I wait for 2 seconds
    And I enter tag color "8889ec"
    And I take screenshot with name "deleteTag/8_enterTagColor"
    And I wait for 2 seconds
    And I enter tag slug "delete-tag"
    And I take screenshot with name "deleteTag/9_enterTagSlug"
    And I wait for 2 seconds
    And I enter tag description "<LOREM1>"
    And I take screenshot with name "deleteTag/10_enterTagDescription"
    And I wait for 2 seconds
    And I save tag changes
    And I wait for 2 seconds
    And I take screenshot with name "deleteTag/11_clickSaveChanges"
    And I go to the tags view
    And I wait for 2 seconds
    Then I should see tag in tag list with name "DELETE TAG", slug "delete-tag" and description "<LOREM1>"
    And I take screenshot with name "deleteTag/12_checkTagCreated"
    And I click a tag with name "DELETE TAG", slug "delete-tag" and description "<LOREM1>"
    And I take screenshot with name "deleteTag/13_clickTagCreated"
    And I wait for 2 seconds
    And I click on delete tag
    And I take screenshot with name "deleteTag/14_clickDeleteTag"
    And I wait for 2 seconds
    And I click on confirm tag delete
    And I wait for 2 seconds
    Then I should not see tag in tag list with name "DELETE TAG", slug "delete-tag" and description "<LOREM1>"
    And I take screenshot with name "deleteTag/15_checkTagDeleted"
