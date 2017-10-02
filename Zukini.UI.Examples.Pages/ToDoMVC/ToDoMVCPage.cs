using Coypu;
using Zukini.UI.Pages;
using OpenQA.Selenium;


namespace Zukini.UI.Examples.Pages.ToDoMVC
{
    public class ToDoMVCPage : BasePage
    {
        readonly BrowserSession _browser;

        public ToDoMVCPage(SessionConfiguration sessionConfiguration, BrowserSession browser) : base(browser)
        {
            _browser = browser;
            _browser.WaitForNavigation(sessionConfiguration, PageSettings.ToDoMVCUrl);
        }

        public ElementScope AngularPageLink => _browser.FindXPath("//a[@href='examples/angularjs']");
        public ElementScope ToDoItem => _browser.FindId("new-todo");
        public ElementScope Item1display => _browser.FindXPath("//*[@id='todo-list']/li/div/label");


        public void ClickAngularPageLink()
        {
            AngularPageLink.Click();
        }

        public bool ConfirmAngularpage()
        {
            return ToDoItem.Exists();
        }

        public void Additem1()
        {
            ToDoItem.SendKeys("Item1");
            ToDoItem.SendKeys(Keys.Enter);
            
        }

        public bool ConfirmItem1()
        {
            return Item1display.Exists();
        }
    }
}
