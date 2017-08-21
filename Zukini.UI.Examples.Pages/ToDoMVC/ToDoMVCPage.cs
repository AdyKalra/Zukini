﻿using Coypu;
using Zukini.UI.Pages;


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

        public void ClickAngularPageLink()
        {
            AngularPageLink.Click();
        }
    }
}
