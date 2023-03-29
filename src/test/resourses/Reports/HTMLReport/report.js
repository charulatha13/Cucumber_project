$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/a_login.feature");
formatter.feature({
  "name": "To validate the login functionality of application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate the login functionality with valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user should be in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user has to click the signin link and then enter the \"\u003cemail\u003e\" \"\u003cpassword\u003e\" then click the signin button",
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
        "email",
        "password"
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
        "charugmail.com",
        "Charulatha113"
      ]
    },
    {
      "cells": [
        "anu@gmail.com",
        "anuashwiniK1"
      ]
    },
    {
      "cells": [
        "jayagmail.com",
        "Jayalaskcg8"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the login functionality with valid and invalid credentials",
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
  "location": "ALoginSteps.the_user_should_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to click the signin link and then enter the \"charulathavadivel02@gmail.com\" \"Charulatha13@\" then click the signin button",
  "keyword": "When "
});
formatter.match({
  "location": "ALoginSteps.the_user_has_to_click_the_signin_link_and_then_enter_the_then_click_the_signin_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be in homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ALoginSteps.the_user_should_be_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functionality with valid and invalid credentials",
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
  "location": "ALoginSteps.the_user_should_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to click the signin link and then enter the \"charugmail.com\" \"Charulatha113\" then click the signin button",
  "keyword": "When "
});
formatter.match({
  "location": "ALoginSteps.the_user_has_to_click_the_signin_link_and_then_enter_the_then_click_the_signin_button(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d111.0.5563.65)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-JM2I0RP6\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.65, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\SHIVAK~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52705}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ce8c69d1dbe6f645718e31660b44060a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat org.baseclass.BaseClass.sendkeys(BaseClass.java:103)\r\n\tat org.stepdefinition.ALoginSteps.the_user_has_to_click_the_signin_link_and_then_enter_the_then_click_the_signin_button(ALoginSteps.java:30)\r\n\tat ✽.The user has to click the signin link and then enter the \"charugmail.com\" \"Charulatha113\" then click the signin button(file:src/test/resources/features/a_login.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user should be in homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ALoginSteps.the_user_should_be_in_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functionality with valid and invalid credentials",
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
  "location": "ALoginSteps.the_user_should_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to click the signin link and then enter the \"anu@gmail.com\" \"anuashwiniK1\" then click the signin button",
  "keyword": "When "
});
formatter.match({
  "location": "ALoginSteps.the_user_has_to_click_the_signin_link_and_then_enter_the_then_click_the_signin_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be in homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ALoginSteps.the_user_should_be_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functionality with valid and invalid credentials",
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
  "location": "ALoginSteps.the_user_should_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to click the signin link and then enter the \"jayagmail.com\" \"Jayalaskcg8\" then click the signin button",
  "keyword": "When "
});
formatter.match({
  "location": "ALoginSteps.the_user_has_to_click_the_signin_link_and_then_enter_the_then_click_the_signin_button(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d111.0.5563.65)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-JM2I0RP6\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.65, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\SHIVAK~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53206}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9121d162312dde6c0ac1d29e7c96c525\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat org.baseclass.BaseClass.sendkeys(BaseClass.java:103)\r\n\tat org.stepdefinition.ALoginSteps.the_user_has_to_click_the_signin_link_and_then_enter_the_then_click_the_signin_button(ALoginSteps.java:30)\r\n\tat ✽.The user has to click the signin link and then enter the \"jayagmail.com\" \"Jayalaskcg8\" then click the signin button(file:src/test/resources/features/a_login.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user should be in homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ALoginSteps.the_user_should_be_in_homepage()"
});
formatter.result({
  "status": "skipped"
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
  "location": "ALoginSteps.the_user_should_be_in_login_page()"
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