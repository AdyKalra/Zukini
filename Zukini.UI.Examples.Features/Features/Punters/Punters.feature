Feature: Punters
	
@Additem
Scenario: Predict the winner
	Given I am on Punters Form Guide page
	When I choose the first race
	Then I get the prediction of the race winner

