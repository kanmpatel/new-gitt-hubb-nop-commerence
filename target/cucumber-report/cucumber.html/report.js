$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 2,
  "name": "Computer Page Functionality",
  "description": "As user, I would like to shopping on Computer category",
  "id": "computer-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@rgs"
    }
  ]
});
formatter.before({
  "duration": 4256200000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 863218999,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 86900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "I should able to navigate to computer page successfully",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on computer page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am successfully navigate to computer page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the computer message \"Computer\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullyNavigateToComputerPage()"
});
formatter.result({
  "duration": 26500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 32
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheComputerMessage(String)"
});
formatter.result({
  "duration": 65550401,
  "error_message": "org.junit.ComparisonFailure: computer text is not match expected:\u003cComputer[]\u003e but was:\u003cComputer[s]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.nopcommerce.demo.cucumber.steps.ComputerPageTest.iCanSeeTheComputerMessage(ComputerPageTest.java:28)\r\n\tat ✽.And I can see the computer message \"Computer\"(computer.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1021036299,
  "status": "passed"
});
formatter.before({
  "duration": 1958277600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 574007100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 15599,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "I should able to navigate to desktops page successfully",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I am successfully navigate to desktop page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I can see the desktops message \"Desktops\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 521350800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullyNavigateToDesktopPage()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 32
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheDesktopsMessage(String)"
});
formatter.result({
  "duration": 41200201,
  "status": "passed"
});
formatter.after({
  "duration": 694767200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select desktop product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see the build your own computer message \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"\u003cProcessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"\u003cRAM\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"\u003cHDD\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"\u003cOS\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"\u003cSoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;",
  "rows": [
    {
      "cells": [
        "Processor",
        "RAM",
        "HDD",
        "OS",
        "Software"
      ],
      "line": 36,
      "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 37,
      "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 38,
      "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 39,
      "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1910651799,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 590874600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 106700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@rgs"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select desktop product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see the build your own computer message \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 519081201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 26
    }
  ],
  "location": "ComputerPageTest.iSelectDesktopProduct(String)"
});
formatter.result({
  "duration": 790484001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 47
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheBuildYourOwnComputerMessage(String)"
});
formatter.result({
  "duration": 39608300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 128165300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectRam(String)"
});
formatter.result({
  "duration": 97132000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectHdd(String)"
});
formatter.result({
  "duration": 81745401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageTest.iSelectOs(String)"
});
formatter.result({
  "duration": 85202400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 77683600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 55955700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 73301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 352455600,
  "status": "passed"
});
formatter.after({
  "duration": 677070900,
  "status": "passed"
});
formatter.before({
  "duration": 2582721999,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 633202600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 15399,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@rgs"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select desktop product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see the build your own computer message \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 519311799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 26
    }
  ],
  "location": "ComputerPageTest.iSelectDesktopProduct(String)"
});
formatter.result({
  "duration": 797048999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 47
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheBuildYourOwnComputerMessage(String)"
});
formatter.result({
  "duration": 39553400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 68374300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectRam(String)"
});
formatter.result({
  "duration": 87186000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectHdd(String)"
});
formatter.result({
  "duration": 83025400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageTest.iSelectOs(String)"
});
formatter.result({
  "duration": 70979001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 73750500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 49271099,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 9899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 304210601,
  "status": "passed"
});
formatter.after({
  "duration": 686005500,
  "status": "passed"
});
formatter.before({
  "duration": 2618839300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 602732200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@rgs"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select desktop product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see the build your own computer message \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 541840901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 26
    }
  ],
  "location": "ComputerPageTest.iSelectDesktopProduct(String)"
});
formatter.result({
  "duration": 830857100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 47
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheBuildYourOwnComputerMessage(String)"
});
formatter.result({
  "duration": 32016301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 40751099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectRam(String)"
});
formatter.result({
  "duration": 71468400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectHdd(String)"
});
formatter.result({
  "duration": 68799899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageTest.iSelectOs(String)"
});
formatter.result({
  "duration": 72049499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 110278700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 57035200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 11900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 279543399,
  "status": "passed"
});
formatter.after({
  "duration": 670378601,
  "status": "passed"
});
});