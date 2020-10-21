$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/seller.feature");
formatter.feature({
  "name": "US101 user should join seller page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@seller"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC101 user should join as a seller",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the glbhomepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks seller join now button",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks agent seller button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters name1 \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters email1 \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters sub domain \"\u003csubdomain\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters mobile1 \"\u003cmobile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters  state \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters postalcode \"\u003cpostalcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters furniture \"\u003cfurniture\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters password1 \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks registiration",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "subdomain",
        "mobile",
        "country",
        "state",
        "city",
        "address",
        "postalcode",
        "furniture",
        "password"
      ]
    },
    {
      "cells": [
        "fatih",
        "fatih@gmail.com",
        "www.fatihyalcin.com",
        "6102023339",
        "USA",
        "PA",
        "Malvern",
        "152 sproul rd",
        "19355",
        "furniture",
        "malvern123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC101 user should join as a seller",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@seller"
    }
  ]
});
formatter.step({
  "name": "user on the glbhomepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.userOnTheGlbhomepage()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.SellerStepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: java.lang.NullPointerException\r\n\tat utilities.Driver.getDriver(Driver.java:27)\r\n\tat pages.SellerPage.\u003cinit\u003e(SellerPage.java:10)\r\n\tat stepdefinitions.SellerStepDefinitions.\u003cinit\u003e(SellerStepDefinitions.java:12)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks seller join now button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_clicks_seller_join_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks agent seller button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_clicks_agent_seller_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters name1 \"fatih\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_enters_name1(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters email1 \"fatih@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_enters_email1(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters sub domain \"www.fatihyalcin.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_enters_sub_domain(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters mobile1 \"6102023339\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_enters_mobile1(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters country \"USA\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_enters_country(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters  state \"PA\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_enters_state(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters city \"Malvern\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_enters_city(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters address \"152 sproul rd\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_enters_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters postalcode \"19355\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_enters_postalcode(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters furniture \"furniture\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_enters_furniture(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters password1 \"malvern123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_enters_password1(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks registiration",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinitions.user_clicks_registiration()"
});
formatter.result({
  "status": "skipped"
});
});