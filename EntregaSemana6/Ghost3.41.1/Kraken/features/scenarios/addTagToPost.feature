Feature: Add Tag to postseconds
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un tag y un post, selecciono el post, le agregó el tag y verificó que el tag se agregó correctamente
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "addTagToPost/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "addTagToPost/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I take screenshot with name "addTagToPost/3_clickSignIn"
    And I wait for 7 seconds
    And I take screenshot with name "addTagToPost/4_mainPage"
    And I go to the tags view
    And I wait for 2 seconds
    And I take screenshot with name "addTagToPost/5_clickTagView"
    And I click new tag
    And I take screenshot with name "addTagToPost/6_clickNewTag"
    And I wait for 2 seconds
    And I enter tag name "FOO BAR BAZ"
    And I take screenshot with name "addTagToPost/7_enterTagName"
    And I wait for 2 seconds
    And I enter tag color "8889ec"
    And I take screenshot with name "addTagToPost/8_enterTagColor"
    And I wait for 2 seconds
    And I enter tag slug "foo-bar-baz"
    And I take screenshot with name "addTagToPost/9_enterTagSlug"
    And I wait for 2 seconds
    And I enter tag description "<LOREM1>"
    And I take screenshot with name "addTagToPost/10_enterTagDescription"
    And I wait for 2 seconds
    And I save tag changes
    And I wait for 2 seconds
    And I take screenshot with name "addTagToPost/11_clickSaveChanges"
    And I go to the tags view
    And I wait for 2 seconds
    Then I should see tag in tag list with name "FOO BAR BAZ", slug "foo-bar-baz" and description "<LOREM1>"
    And I take screenshot with name "addTagToPost/12_checkTagCreated"
    And I go to the posts view
    And I take screenshot with name "addTagToPost/13_clickPostView"
    And I wait for 2 seconds
    And I click new post
    And I take screenshot with name "addTagToPost/14_clickNewPost"
    And I wait for 2 seconds
    And I enter post title "FOO BAR BAZ"
    And I take screenshot with name "addTagToPost/15_enterPostTitle"
    And I wait for 2 seconds
    And I enter post content "<LOREM1>"
    And I take screenshot with name "addTagToPost/16_enterPostContent"
    And I wait for 2 seconds
    And I click posts to go to previous page
    And I wait for 2 seconds
    And I take screenshot with name "addTagToPost/17_clickPreviousPage"
    Then I should see the first draft post with title "FOO BAR BAZ"
    And I wait for 2 seconds
    When I click on the first draft post
    And I take screenshot with name "addTagToPost/18_clickFirstDraftPost"
    And I wait for 2 seconds
    And I click on post settings
    And I take screenshot with name "addTagToPost/19_clickPostSettings"
    And I wait for 2 seconds
    And I click tags list
    And I take screenshot with name "addTagToPost/20_clickTagsList"
    And I wait for 2 seconds
    And I select tag "FOO BAR BAZ"
    And I take screenshot with name "addTagToPost/21_selectCreatedTag"
    And I wait for 2 seconds
    And I click on close post settings
    And I take screenshot with name "addTagToPost/22_closePostSettings"
    And I wait for 2 seconds
    And I click posts to go to previous page
    And I wait for 2 seconds
    And I take screenshot with name "addTagToPost/23_clickPreviousPage"
    And I click on leave modal design button
    And I wait for 2 seconds
    Then I should see the first draft post with title "FOO BAR BAZ"
    And I take screenshot with name "addTagToPost/24_firstDraftPost"
    And I wait for 2 seconds
    When I click on the first draft post
    And I take screenshot with name "addTagToPost/25_clickFirstDraftPost"
    And I wait for 2 seconds
    And I click on post settings
    And I wait for 2 seconds
    Then I should see the selected tag "FOO BAR BAZ"
    And I take screenshot with name "addTagToPost/26_checkTagIsSelected"
