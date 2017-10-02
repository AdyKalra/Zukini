using BoDi;
using Coypu;
using NUnit.Framework;
using System;
using System.Linq;
using TechTalk.SpecFlow;
using Zukini.UI.Examples.Pages.ToDoMVC;
using Zukini.UI.Steps;

namespace Zukini.UI.Examples.Features.Steps.ToDoMVC
{
    [Binding]
    [Parallelizable(ParallelScope.Fixtures)]
    public class ToDoMVCSteps : UiSteps
    {
        private readonly SessionConfiguration _sessionConfiguration;
        private ToDoMVCPage _todomvcpage;

        public ToDoMVCSteps(IObjectContainer objectContainer, SessionConfiguration sessionConfiguration)
            : base(objectContainer)
        {
            _sessionConfiguration = sessionConfiguration;
        }

        [Given(@"I am on AngularJS page")]
        public void GivenIAmOnAngularJSPage()
        {
            Browser.WaitForNavigation(_sessionConfiguration, TestSettings.ToDoMVCUrl);
            _todomvcpage = new ToDoMVCPage(_sessionConfiguration, Browser);
            _todomvcpage.ClickAngularPageLink();
            Assert.IsTrue(_todomvcpage.ConfirmAngularpage());
        }
        
        [When(@"I choose to add ToDo Item")]
        public void WhenIChooseToAddToDoItem()
        {
            _todomvcpage.Additem1();
        }
        
        [When(@"I choose to edit content of First Item")]
        public void WhenIChooseToEditContentOfFirstItem()
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I choose to complete an Item")]
        public void WhenIChooseToCompleteAnItem()
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I choose to reactivate an completed Item")]
        public void WhenIChooseToReactivateAnCompletedItem()
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I choose to add second ToDO Item")]
        public void WhenIChooseToAddSecondToDOItem()
        {
            _todomvcpage.Additem1();
            _todomvcpage.AddSecondItem();
        }
        
        [When(@"I choose to mark all ToDo Items as Completed")]
        public void WhenIChooseToMarkAllToDoItemsAsCompleted()
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I choose to filter by Completed Items")]
        public void WhenIChooseToFilterByCompletedItems()
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I choose to click the close icon of first ToDo Item")]
        public void WhenIChooseToClickTheCloseIconOfFirstToDoItem()
        {
            ScenarioContext.Current.Pending();
        }
        
        [When(@"I choose to click the Clear Completed button")]
        public void WhenIChooseToClickTheClearCompletedButton()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Then(@"Item should be displayed")]
        public void ThenItemShouldBeDisplayed()
        {
            Assert.IsTrue(_todomvcpage.ConfirmItem1());
        }

        [Then(@"the second Item should be displayed")]
        public void ThenTheSecondItemShouldBeDisplayed()
        {
            Assert.IsTrue(_todomvcpage.ConfirmItem2());
        }

        [Then(@"Item should be marked as completed")]
        public void ThenItemShouldBeMarkedAsCompleted()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Then(@"Item should be reactivated")]
        public void ThenItemShouldBeReactivated()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Then(@"Completed Items should be displayed")]
        public void ThenCompletedItemsShouldBeDisplayed()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Then(@"First ToDoItem should be cleared")]
        public void ThenFirstToDoItemShouldBeCleared()
        {
            ScenarioContext.Current.Pending();
        }
        
        [Then(@"All completed ToDo items should be cleared")]
        public void ThenAllCompletedToDoItemsShouldBeCleared()
        {
            ScenarioContext.Current.Pending();
        }
    }
}
