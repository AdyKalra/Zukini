Feature: ToDoMVC
	
@Additem
Scenario: Add ToDoItems
	Given I am on AngularJS page
	When I choose to add ToDo Item
	Then Item should be displayed
@EditItem
Scenario: Edit Content of First Item
	Given I am on AngularJS page
	When I choose to edit content of First Item
	Then Item should be displayed 
@CompleteItem
Scenario: Complete First Item
	Given I am on AngularJS page
	When I choose to complete an Item
	Then Item should be marked as completed
@ReactivateItem
Scenario: Reactivate First Item
	Given I am on AngularJS page
	When I choose to reactivate an completed Item
	Then Item should be reactivated
@AddSecondItem
Scenario: Add Second ToDoItem
	Given I am on AngularJS page
	When I choose to add second ToDO Item
	Then Item should be displayed
@CompleteAllToDoItems
Scenario: Mark all ToDo Items as Completed
	Given I am on AngularJS page
	When I choose to mark all ToDo Items as Completed
	Then Item should be marked as completed
@FilterCompletedItems
Scenario: Filter Completed Items
	Given I am on AngularJS page
	When I choose to filter by Completed Items
	Then Completed Items should be displayed
@ClearToDoItemCompletelybyCloseIcon
Scenario: Clear ToDo Item Completely by clicking close icon
	Given I am on AngularJS page
	When I choose to click the close icon of first ToDo Item
	Then First ToDoItem should be cleared
@ClearCompletedItemCompletely
Scenario: Clear Closed ToDo Item by clicking Clear Completed Button
	Given I am on AngularJS page
	When I choose to click the Clear Completed button
	Then All completed ToDo items should be cleared
