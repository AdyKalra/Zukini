using Coypu;
using Zukini.UI.Pages;

namespace Zukini.UI.Examples.Pages
{
    public class GoogleSearchPage : BasePage
    {
        public GoogleSearchPage(BrowserSession browser)
            : base(browser)
        { 
        }

        public ElementScope SearchTextBox => Browser.FindId("lst-ib");
        public ElementScope SearchButton => Browser.FindXPath("//*[@name='btnK']");
    }
}
