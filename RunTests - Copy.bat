:://///////////////////////////////////////////////////////////////////////////
:: This batch file is responsible for running SpecFlow tests and generating
:: a specflow test run report.
::
:: Usage:
::	RunTests.bat [-tags [tag1,tag2]]
::		-tags: 			Optionally specify which tags to run
:://///////////////////////////////////////////////////////////////////////////
@echo off
@setlocal

call :Defaults
call :GenerateNunitReport


:Defaults
rem ===========================================================================
SET REPORTGEN_EXE=NUnitHTMLReportGenerator.exe
SET TEST_RESULTS=TestResults.xml
SET TEST_RESULTS_HTML=TestResultsNew.html

:GenerateNunitReport
rem ===========================================================================
@echo **************** Generating Report *************************
%REPORTGEN_EXE%  %TEST_RESULTS% %TEST_RESULTS_HTML%

PAUSE

