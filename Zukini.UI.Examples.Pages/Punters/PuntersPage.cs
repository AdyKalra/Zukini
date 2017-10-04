using Coypu;
using Zukini.UI.Pages;
using OpenQA.Selenium;
using System;



namespace Zukini.UI.Examples.Pages.Punters
{
    public class PuntersPage : BasePage
    {
        readonly BrowserSession _browser;

        public PuntersPage(SessionConfiguration sessionConfiguration, BrowserSession browser) : base(browser)
        {
            _browser = browser;
            _browser.WaitForNavigation(sessionConfiguration, PageSettings.PuntersUrl);
        }

        public ElementScope NextToJump => _browser.FindXPath("//*[@id='nexttojump']/div/div/a[1]/div/div[1]");
        public ElementScope Predictor => _browser.FindId("LinkPredictor");
        public ElementScope Winner => _browser.FindXPath("//*[contains(text(),'(100%)')]");
        public ElementScope Item2display => _browser.FindXPath("//*[@id='todo-list']/li[2]/div/label");

        public void ClickNextToJumpLink()
        {
            NextToJump.Click();
        }

        public void ClickPredictor()
        {
            Predictor.Click();
        }

        public string ConfirmWinner()
        {
            
            return Winner.InnerHTML;
         
        }

        public bool ConfirmItem2()
        {
            return Item2display.Exists();
        }
    }
}
