using BoDi;
using Coypu;
using NUnit.Framework;
using System;
using System.Linq;
using TechTalk.SpecFlow;
using Zukini.UI.Examples.Pages.Punters;
using Zukini.UI.Steps;

namespace Zukini.UI.Examples.Features.Steps.Punters
{
    [Binding]
    [Parallelizable(ParallelScope.Fixtures)]
    public class PuntersSteps : UiSteps
    {
        private readonly SessionConfiguration _sessionConfiguration;
        private PuntersPage _Punterspage;

        public PuntersSteps(IObjectContainer objectContainer, SessionConfiguration sessionConfiguration)
            : base(objectContainer)
        {
            _sessionConfiguration = sessionConfiguration;
        }

        [Given(@"I am on Punters Form Guide page")]
        public void GivenIAmOnPuntersFormGuidePage()
        {
            Browser.WaitForNavigation(_sessionConfiguration, TestSettings.PuntersUrl);
            _Punterspage = new PuntersPage(_sessionConfiguration, Browser);
            _Punterspage.ClickNextToJumpLink();
        }

        [When(@"I choose the first race")]
        public void WhenIChooseTheFirstRace()
        {
            _Punterspage.ClickPredictor();
        }

        [Then(@"I get the prediction of the race winner")]
        public void ThenIGetThePredictionOfTheRaceWinner()
        {
           String test = _Punterspage.ConfirmWinner();
           Console.WriteLine(test);
        }

    }
}
