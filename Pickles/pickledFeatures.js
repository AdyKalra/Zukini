jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "Zukini.API\\content\\Features\\ZukiniExample.feature",
      "Feature": {
        "Name": "API Example Features",
        "Description": "In order to provide an example of Zukini.API\r\nAs a user\r\nI want to try it out against a prototype API",
        "FeatureElements": [
          {
            "Name": "Get a resource from an API and validate the return data",
            "Slug": "get-a-resource-from-an-api-and-validate-the-return-data",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I perform a GET for post \"1\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the Get response should contain the following data",
                "TableArgument": {
                  "HeaderRow": [
                    "userId",
                    "id",
                    "title",
                    "body"
                  ],
                  "DataRows": [
                    [
                      "1",
                      "1",
                      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@get_example"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": [
          "@example"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Zukini.API.Examples.Features\\Features\\ApiExamples.feature",
      "Feature": {
        "Name": "API Example Features",
        "Description": "In order to provide an example of Zukini.API\r\nAs a user\r\nI want to try it out against a prototype API",
        "FeatureElements": [
          {
            "Name": "Get a resource from an API and validate the return data",
            "Slug": "get-a-resource-from-an-api-and-validate-the-return-data",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I perform a GET for post \"1\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the Get response should contain the following data",
                "TableArgument": {
                  "HeaderRow": [
                    "userId",
                    "id",
                    "title",
                    "body"
                  ],
                  "DataRows": [
                    [
                      "1",
                      "1",
                      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@get_example"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Post to an API and validate that the post data returned is correct",
            "Slug": "post-to-an-api-and-validate-that-the-post-data-returned-is-correct",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I post the following data to the API",
                "TableArgument": {
                  "HeaderRow": [
                    "title",
                    "body",
                    "userId"
                  ],
                  "DataRows": [
                    [
                      "Checkout this new POST",
                      "Here is a test title to demonstrate testing a post.",
                      "123"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the post data should return \"Checkout this new POST\" in the \"title\" field",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the post data should return \"Here is a test title to demonstrate testing a post.\" in the \"body\" field",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the post data should return \"123\" in the \"userId\" field",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@post_example"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Patch to an API and validate that the patch data returned is correct",
            "Slug": "patch-to-an-api-and-validate-that-the-patch-data-returned-is-correct",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I \"Patch\" a record with id \"1\"",
                "TableArgument": {
                  "HeaderRow": [
                    "title",
                    "body",
                    "userId"
                  ],
                  "DataRows": [
                    [
                      "Checkout this PATCH",
                      "Here is a test title to demonstrate testing a patch.",
                      "123"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the \"Patch\" data should return \"Checkout this PATCH\" in the \"title\" field",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the \"Patch\" data should return \"Here is a test title to demonstrate testing a patch.\" in the \"body\" field",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the \"Patch\" data should return \"123\" in the \"userId\" field",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@patch_example"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Put to an API and validate that the put data returned is correct",
            "Slug": "put-to-an-api-and-validate-that-the-put-data-returned-is-correct",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I \"Put\" a record with id \"2\"",
                "TableArgument": {
                  "HeaderRow": [
                    "title",
                    "body",
                    "userId"
                  ],
                  "DataRows": [
                    [
                      "Checkout my PUT",
                      "Here is a test title to demonstrate testing a put.",
                      "456"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the \"Put\" data should return \"Checkout my PUT\" in the \"title\" field",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the \"Put\" data should return \"Here is a test title to demonstrate testing a put.\" in the \"body\" field",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the \"Put\" data should return \"456\" in the \"userId\" field",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@put_example"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Delete a post from our fake API",
            "Slug": "delete-a-post-from-our-fake-api",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I perform a DELETE for postId \"1\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should get a status code of \"OK\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@delete_example"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": [
          "@api"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Zukini.API.Examples.Features\\Features\\ApiClaims.feature",
      "Feature": {
        "Name": "CCMSI API Mobile Example Features For Claim",
        "Description": "In order to provide an example of CCMSI Api Mobile\r\nAs a user\r\nI want to try it out against a prototype API",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "claimNumber",
                    "adjusterEmail"
                  ],
                  "DataRows": [
                    [
                      "F148576",
                      "epenaloza@ccmsi.com"
                    ]
                  ]
                }
              }
            ],
            "Name": "Ccmsi Get Paginated Claim List",
            "Slug": "ccmsi-get-paginated-claim-list",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "an access token",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I search for userId 'kthurman' and clientNumber '388'",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result must contains <claimNumber> and <adjusterEmail>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@claims",
              "@ccmsi"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": [
          "@api"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Zukini.API.Examples.Features\\Features\\ApiClients.feature",
      "Feature": {
        "Name": "CCMSI API Mobile Example Features for Client",
        "Description": "In order to provide an example of CCMSI Api Mobile\r\nAs a user\r\nI want to try it out against a prototype API",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "clientValue",
                    "clientName"
                  ],
                  "DataRows": [
                    [
                      "001",
                      "Nacco (001)"
                    ],
                    [
                      "002",
                      "CONSOLIDATED CONSTRUCTION SAFETY FUND OF ILLINOIS (002)"
                    ]
                  ]
                }
              }
            ],
            "Name": "Ccmsi Get Paginated Client List",
            "Slug": "ccmsi-get-paginated-client-list",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "an access token",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I search for userId \"kthurman\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result contains <clientValue> and <clientName>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@clients",
              "@ccmsi"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": [
          "@api"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Zukini.API.Services\\Ccmsi\\CcmsiMobileApiExample.feature",
      "Feature": {
        "Name": "CCMSI API Mobile Example Features",
        "Description": "In order to provide an example of CCMSI Api Mobile\r\nAs a user\r\nI want to try it out against a prototype API",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "clientValue",
                    "clientName"
                  ],
                  "DataRows": [
                    [
                      "001",
                      "Nacco (001)"
                    ],
                    [
                      "002",
                      "CONSOLIDATED CONSTRUCTION SAFETY FUND OF ILLINOIS (002)"
                    ]
                  ]
                }
              }
            ],
            "Name": "CCMSI Get Paginated Client List",
            "Slug": "ccmsi-get-paginated-client-list",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "an access token",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I search for userId \"kthurman\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result contains <clientValue> and <clientName>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": [
          "@api"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Zukini.UI\\content\\Features\\ZukiniExample.feature",
      "Feature": {
        "Name": "Zukini Example",
        "Description": "In order to provide an example of Zukini\r\nAs a user\r\nI want to try it out against Google",
        "FeatureElements": [
          {
            "Name": "Perform a google search for Zukini returns Zukini in the search results",
            "Slug": "perform-a-google-search-for-zukini-returns-zukini-in-the-search-results",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I navigate to Google",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter a search value of \"Zukini\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press Google Search",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see \"https://github.com/MikeMugu/Zukini\" in the results",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@google_search"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": [
          "@example"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Zukini.UI.Examples.Features\\Features\\ClaimView\\Login.feature",
      "Feature": {
        "Name": "Login",
        "Description": "    In order to access my account\r\n\tAs a user of the website\r\n\tI want to log into the website",
        "FeatureElements": [
          {
            "Name": "Logging in with valid credentials",
            "Slug": "logging-in-with-valid-credentials",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am at the login page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I fill in the following form",
                "TableArgument": {
                  "HeaderRow": [
                    "field",
                    "value"
                  ],
                  "DataRows": [
                    [
                      "Email",
                      "matias.alfonso@jbknowledge.com"
                    ],
                    [
                      "Password",
                      "Maipu671"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click the login button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should be at the Verification Page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@claimview"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Failed login due to incorrect username or password",
            "Slug": "failed-login-due-to-incorrect-username-or-password",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am at the login page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I fill in the following form",
                "TableArgument": {
                  "HeaderRow": [
                    "field",
                    "value"
                  ],
                  "DataRows": [
                    [
                      "Email",
                      "xtrumanx"
                    ],
                    [
                      "Password",
                      "P@55w0Rd"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click the login button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see \"User name or password incorrect.\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#Scenario: Failed login due to empty username or password fields"
                  },
                  {
                    "Text": "#    Given I am at the login page"
                  },
                  {
                    "Text": "#\tAnd I click the login button"
                  },
                  {
                    "Text": "#    Then I should see \"The email is required\""
                  },
                  {
                    "Text": "#\tAnd I should see \"The password is required\""
                  }
                ]
              }
            ],
            "Tags": [
              "@claimview"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": [
          "@login"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    },
    {
      "RelativeFolder": "Zukini.UI.Examples.Features\\Features\\SmokeTest.feature",
      "Feature": {
        "Name": "SmokeTest",
        "Description": "In order to provide an example of Zukini\r\nAs a user\r\nI want to try it out against Google",
        "FeatureElements": [
          {
            "Name": "Perform a google search for SpecFlow returns specflow.org site",
            "Slug": "perform-a-google-search-for-specflow-returns-specfloworg-site",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I navigate to Google",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter a search value of \"SpecFlow\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press Google Search",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see \"specflow.org\" in the results",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@google_search"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "I want to show how to use row and cell helpers",
            "Slug": "i-want-to-show-how-to-use-row-and-cell-helpers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I navigate to W3Schools table reference page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see that the table tag is supported in \"Chrome\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I should see that the table tag is supported in \"IE\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I should see that the table tag is supported in \"FireFox\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I should see that the table tag is supported in \"Safari\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@table_example"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "I want to demonstrate how to use the property bucket",
            "Slug": "i-want-to-demonstrate-how-to-use-the-property-bucket",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I navigate to W3Schools table reference page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I remember the sub-header text",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the sub-header text should have been \"THE WORLD'S LARGEST WEB DEVELOPER SITE\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@property_bucket"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "Performing a search for SpecFlow and expecting random text should fail and give me a screenshot",
            "Slug": "performing-a-search-for-specflow-and-expecting-random-text-should-fail-and-give-me-a-screenshot",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I navigate to Google",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter a search value of \"SpecFlow\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I press Google Search",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see \"ZZZXXXYYYGGGJJJPPPP\" in the results",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@ignore"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "Browser"
                  ],
                  "DataRows": [
                    [
                      "Chrome"
                    ],
                    [
                      "IE"
                    ],
                    [
                      "FireFox"
                    ],
                    [
                      "Safari"
                    ]
                  ]
                }
              }
            ],
            "Name": "I want to demonstrate how to use SpecFlow data tables",
            "Slug": "i-want-to-demonstrate-how-to-use-specflow-data-tables",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I navigate to W3Schools table reference page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should see that the table tag is supported for the following",
                "TableArgument": {
                  "HeaderRow": [
                    "Browser"
                  ],
                  "DataRows": [
                    [
                      "<Browser>"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@table_example"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "I want to demonstrate how to wait for a button to appear",
            "Slug": "i-want-to-demonstrate-how-to-wait-for-a-button-to-appear",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I create a delayed button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the delayed button should eventually exist",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the delayed button has a size and location",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@browser_session_extension"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "I want to demonstrate how to try until a button appears",
            "Slug": "i-want-to-demonstrate-how-to-try-until-a-button-appears",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I create a button that creates a delayed button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I use TryUntil on the button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the second button should exist",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@browser_session_extension"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "WaitForNavigation does timeout",
            "Slug": "waitfornavigation-does-timeout",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I try to navigate to a url that changes the browser location",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "navigation does timeout",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@browser_session_extension"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          },
          {
            "Name": "WaitForNavigation does not timeout",
            "Slug": "waitfornavigation-does-not-timeout",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I try to navigate to Google",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "navigation does not timeout",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@browser_session_extension"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false
        },
        "Tags": [
          "@ui"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@example",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@api",
        "Total": 8,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 8
      },
      {
        "Tag": "@login",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@ui",
        "Total": 9,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 9
      },
      {
        "Tag": "@get_example",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@post_example",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@patch_example",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@put_example",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@delete_example",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@claims",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@ccmsi",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@clients",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@google_search",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@claimview",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@table_example",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@property_bucket",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@ignore",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@browser_session_extension",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      }
    ],
    "Folders": [
      {
        "Folder": "Zukini.API",
        "Total": 9,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 9
      },
      {
        "Folder": "Zukini.API.Examples.Features",
        "Total": 7,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 7
      },
      {
        "Folder": "Zukini.API.Services",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "Zukini.UI",
        "Total": 12,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 12
      },
      {
        "Folder": "Zukini.UI.Examples.Features",
        "Total": 11,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 11
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "Zukini.API",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Zukini.API.Examples.Features",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Zukini.API.Services",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Zukini.UI",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "Zukini.UI.Examples.Features",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 21,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 21
    },
    "Features": {
      "Total": 8,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 8
    }
  },
  "Configuration": {
    "GeneratedOn": "31 July 2017 06:44:54"
  }
});