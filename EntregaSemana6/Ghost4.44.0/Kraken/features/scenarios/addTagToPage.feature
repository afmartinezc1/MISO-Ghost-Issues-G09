Feature: Add Tag to page
  
  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, creo un tag y un page, selecciono el page, le agregó el tag y verificó que el tag se agregó correctamente
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "addTagToPage/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "addTagToPage/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn
    And I wait for 7 seconds
    And I take screenshot with name "addTagToPage/3_mainPage"
    And I go to the tags view
    And I wait for 2 seconds
    And I take screenshot with name "addTagToPage/4_clickTagView"
    And I click new tag
    And I take screenshot with name "addTagToPage/5_clickNewTag"
    And I wait for 2 seconds
    And I enter tag name "FOO BAR BAZ"
    And I take screenshot with name "addTagToPage/6_enterTagName"
    And I wait for 2 seconds
    And I enter tag color "8889ec"
    And I take screenshot with name "addTagToPage/7_enterTagColor"
    And I wait for 2 seconds
    And I enter tag slug "foo-bar-baz"
    And I take screenshot with name "addTagToPage/8_enterTagSlug"
    And I wait for 2 seconds
    And I enter tag description "<LOREM1>"
    And I take screenshot with name "addTagToPage/9_enterTagDescription"
    And I wait for 2 seconds
    And I save tag changes
    And I wait for 2 seconds
    And I take screenshot with name "addTagToPage/10_clickSaveChanges"
    And I go to the tags view
    And I wait for 2 seconds
    Then I should see tag in tag list with name "FOO BAR BAZ" and description "<LOREM1>"
    And I take screenshot with name "addTagToPage/11_checkTagCreated"
    And I go to the pages view
    And I take screenshot with name "addTagToPage/12_clickPageView"
    And I wait for 2 seconds
    And I click new page
    And I take screenshot with name "addTagToPage/13_clickNewPage"
    And I wait for 2 seconds
    And I enter page title "FOO BAR BAZ"
    And I take screenshot with name "addTagToPage/14_enterPageTitle"
    And I wait for 2 seconds
    And I enter page content "<LOREM1>"
    And I take screenshot with name "addTagToPage/15_enterPageContent"
    And I wait for 2 seconds
    And I click pages to go to previous page
    And I wait for 2 seconds
    And I take screenshot with name "addTagToPage/16_clickPreviousPage"
    Then I should see the first draft page with title "FOO BAR BAZ"
    And I wait for 2 seconds
    When I click on the first draft page
    And I take screenshot with name "addTagToPage/17_clickFirstDraftPage"
    And I wait for 2 seconds
    And I click on post settings
    And I take screenshot with name "addTagToPage/18_clickPostSettings"
    And I wait for 2 seconds
    And I click tags list
    And I take screenshot with name "addTagToPage/19_clickTagsList"
    And I wait for 2 seconds
    And I select tag "FOO BAR BAZ"
    And I take screenshot with name "addTagToPage/20_selectCreatedTag"
    And I wait for 2 seconds
    And I click on close post settings
    And I take screenshot with name "addTagToPage/21_closePageSettings"
    And I wait for 2 seconds
    And I click pages to go to previous page
    And I wait for 2 seconds
    And I take screenshot with name "addTagToPage/22_clickPreviousPage"
    And I click on leave modal design button
    And I wait for 2 seconds
    Then I should see the first draft page with title "FOO BAR BAZ"
    And I take screenshot with name "addTagToPage/23_firstDraftPage"
    And I wait for 2 seconds
    When I click on the first draft page
    And I take screenshot with name "addTagToPage/24_clickFirstDraftPage"
    And I wait for 2 seconds
    And I click on post settings
    And I wait for 2 seconds
    Then I should see the selected tag "FOO BAR BAZ"
    And I take screenshot with name "addTagToPage/25_checkTagIsSelected"
