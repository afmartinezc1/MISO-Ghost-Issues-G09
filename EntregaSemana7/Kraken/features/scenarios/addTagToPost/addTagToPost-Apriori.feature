Feature: Add Tag to post
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un tag y un post, selecciono el post, le agregó el tag y verificó que el tag se agregó correctamente
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click SignIn
    And I wait for 7 seconds
    And I go to the tags view
    And I wait for 2 seconds
    And I click new tag
    And I wait for 2 seconds
    And I enter tag name a-priori-0
    And I wait for 2 seconds
    And I enter tag color a-priori-0
    And I wait for 2 seconds
    And I enter tag slug a-priori-0
    And I wait for 2 seconds
    And I enter tag description a-priori-0
    And I wait for 2 seconds
    And I save tag changes
    And I wait for 2 seconds
    And I go to the tags view
    And I wait for 2 seconds
    Then I should see tag in tag list with name a-priori-0, slug a-priori-0 and description a-priori-0
    And I go to the posts view
    And I wait for 2 seconds
    And I click new post
    And I wait for 2 seconds
    And I enter post title a-priori-0
    And I wait for 2 seconds
    And I enter post content a-priori-0
    And I wait for 2 seconds
    And I click posts to go to previous page
    And I wait for 2 seconds
    Then I should see the first draft post with title a-priori-0
    And I wait for 2 seconds
    When I click on the first draft post
    And I wait for 2 seconds
    And I click on post settings
    And I wait for 2 seconds
    And I click tags list
    And I wait for 2 seconds
    And I select tag a-priori-0
    And I wait for 2 seconds
    And I click on close post settings
    And I wait for 2 seconds
    And I click posts to go to previous page
    And I wait for 2 seconds
    And I click on leave modal design button
    And I wait for 2 seconds
    Then I should see the first draft post with title a-priori-0
    And I wait for 2 seconds
    When I click on the first draft post
    And I wait for 2 seconds
    And I click on post settings
    And I wait for 2 seconds
    Then I should see the selected tag a-priori-0
