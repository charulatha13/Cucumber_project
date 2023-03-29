$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/a_login.feature");
formatter.feature({
  "name": "To validate the login functionality of application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate the login functionality with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user should be in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user has to click the signin link and then enter the \"\u003cemailid\u003e\" \"\u003cpass\u003e\" then click the signin button",
  "keyword": "When "
});
formatter.step({
  "name": "the user should be in homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailid",
        "pass"
      ]
    },
    {
      "cells": [
        "charulathavadivel02@gmail.com",
        "Charulatha13@"
      ]
    },
    {
      "cells": [
        "charulatha@gmail.com",
        "Charulatha3@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the login functionality with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to click the signin link and then enter the \"charulathavadivel02@gmail.com\" \"Charulatha13@\" then click the signin button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.the_user_has_to_click_the_signin_link_and_then_enter_the_then_click_the_signin_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be in homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functionality with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to click the signin link and then enter the \"charulatha@gmail.com\" \"Charulatha3@\" then click the signin button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.the_user_has_to_click_the_signin_link_and_then_enter_the_then_click_the_signin_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be in homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the login functionality with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user should be in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user has to click the signin link and enter the \"\u003cemail\u003e\"then click signin button",
  "keyword": "When "
});
formatter.step({
  "name": "the user should get a invalid message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email"
      ]
    },
    {
      "cells": [
        "charugmail.com"
      ]
    },
    {
      "cells": [
        "jayagmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the login functionality with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to click the signin link and enter the \"charugmail.com\"then click signin button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.the_user_has_to_click_the_signin_link_and_enter_the_then_click_signin_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should get a invalid message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_should_get_a_invalid_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functionality with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to click the signin link and enter the \"jayagmail.com\"then click signin button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.the_user_has_to_click_the_signin_link_and_enter_the_then_click_signin_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should get a invalid message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_should_get_a_invalid_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/b_homepageelements.feature");
formatter.feature({
  "name": "To validate the homepage elements functionality of application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the homepage elements is present or not",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user entered the homepage",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageElements.the_user_entered_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hower on the \"salvarkameez\" and verify whether the drop down options are present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageElements.hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hower on the \"saree\" and verify whether the drop down options are present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageElements.hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hower on the \"blouse\" and verify whether the drop down options are present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageElements.hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hower on the \"lehanga\" and verify whether the drop down options are present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageElements.hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hower on the \"indowestern\" and verify whether the drop down options are present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageElements.hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hower on the \"kurtis\" and verify whether the drop down options are present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageElements.hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hower on the \"bridal\" and verify whether the drop down options are present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageElements.hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hower on the \"men\" and verify whether the drop down options are present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageElements.hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hower on the \"accessories\" and verify whether the drop down options are present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageElements.hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hower on the \"kids\" and verify whether the drop down options are present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageElements.hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hower on the \"collection\" and verify whether the drop down options are present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageElements.hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hower on the \"new\" and verify whether the drop down options are present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageElements.hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hower on the \"sale\" and verify whether the drop down options are present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageElements.hower_on_the_and_verify_whether_the_drop_down_options_are_present_or_not(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/c_ProductSearch.feature");
formatter.feature({
  "name": "To validate the search contents in the application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the search contents and print the product names and prices",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in kalki fashion homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchPageContentSteps.the_user_should_be_in_kalki_fashion_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user search the product kurthi",
  "keyword": "When "
});
formatter.match({
  "location": "SearchPageContentSteps.the_user_search_the_product_kurthi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print all product names and price to verify whether it is accurate",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchPageContentSteps.print_all_product_names_and_price_to_verify_whether_it_is_accurate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/d_BuyNow.feature");
formatter.feature({
  "name": "To validate till buynow button",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify till the buynow button by providing all the neccessary details",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be in kalki fashion homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchPageContentSteps.the_user_should_be_in_kalki_fashion_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user search the product kurthi",
  "keyword": "When "
});
formatter.match({
  "location": "SearchPageContentSteps.the_user_search_the_product_kurthi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the first product which is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BuyNowSteps.click_the_first_product_which_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecting all the details based on the product we are booking",
  "keyword": "Then "
});
formatter.match({
  "location": "BuyNowSteps.selecting_all_the_details_based_on_the_product_we_are_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the buy now button to book the product",
  "keyword": "Then "
});
formatter.match({
  "location": "BuyNowSteps.click_the_buy_now_button_to_book_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});