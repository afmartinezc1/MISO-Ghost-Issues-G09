Feature: change password Staff

  @user1 @web
  Scenario: Como usuario inicio sesion en ghost, entro a staff, y modifico la contraseña de un usuario, me deslogueo e ingreso con la nueva
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I take screenshot with name "editUserPassword/1_enterEmail"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I take screenshot with name "editUserPassword/2_enterPassword"
    And I wait for 2 seconds
    And I click SignIn    
    And I take screenshot with name "editUserPassword/3_clickSignIn"
    And I wait for 5 seconds
    And I click in Staff
    And I take screenshot with name "editUserPassword/4_click_in_staff"
    And I wait for 2 seconds
    And I click in author user to modify
    And I take screenshot with name "editUserPassword/5_click_in_author_user_to_modify"
    And I wait for 1 seconds
    And I fill user new password in staff with text "MISOTest.2023"
    And I take screenshot with name "editUserPassword/6_fill_user_new_password_in_staff"
    And I wait for 1 seconds
    And I fill user new password verification in staff with text "MISOTest.2023"
    And I take screenshot with name "editUserPassword/7_fill_user_new_password_verification_in_staff"
    And I wait for 1 seconds
    And I save user new password staff changes
    And I take screenshot with name "editUserPassword/8_save_user_new_password_staff_changes"
    And I wait for 2 seconds
    And I click user profile sideBar
    And I take screenshot with name "editUserPassword/9_click_user_profile_sidebar"
    And I wait for 3 seconds
    And I click user sign out
    And I take screenshot with name "editUserPassword/10_click_user_sign_out"
    And I wait for 2 seconds
    And I enter email "ghost-author@example.com"
    And I take screenshot with name "editUserPassword/11_enter_email"
    And I wait for 2 seconds
    And I enter password "MISOTest.2023"
    And I take screenshot with name "editUserPassword/12_enter_password"
    And I wait for 2 seconds
    And I click SignIn    
    And I take screenshot with name "editUserPassword/13_click_SignIn"
    And I wait for 5 seconds
    Then I shouldn see a sideNav page title
    And I take screenshot with name "editUserPassword/14_shouldn_see_sideNav_page_title"