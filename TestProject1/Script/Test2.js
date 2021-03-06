var BasicMethod = require("BasicMethod");
function Test2()
{
  
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate(Project.Variables.URL);
  
  var myPage = Sys.Browser("chrome").Page(Project.Variables.URL);
  
  var account = myPage.EvaluateXPath('//*[@id="gatsby-focus-wrapper"]/div[1]/header/div/div[1]/div[1]/div/div[3]/div/div[2]/button[contains(@class, MenuItem-module--button--1pQpR)]');
  Delay(1000);
   // Check the result
   if (!strictEqual(account, null))
   {
     // click on the account button from the page
    //Aliases.browser.pageHollandBarrettTheUkSLeadingH.header.buttonAccount.ClickButton();
    account[0].Click(); // Note we refer to the array item
   }
   else 
   {
     // If nothing was found, post a message to the log
     Log.Error("Account button in not available.");
   }
   Delay(1000)
   
   try{
     var newAccount = myPage.EvaluateXPath("//header/div/div[2]/div/a[2][contains(@class, LoginModal-module--registerCta--1_BFF)]");
     newAccount[0].Click();
     var regPage = Sys.Browser("chrome").Page("https://www.hollandandbarrett.com/en-au/my-account/registration.jsp/");
     // Chechk Registretion page is visible or not
     var flag = aqObject.CheckProperty(Aliases.browser.pageRegistration.textnodeRegisterForAnAccount, "contentText", cmpEqual, "Register for an account");
     if(flag){
     
     BasicMethod.RegisterUser(Project.Variables.Title, Project.Variables.FirstName, Project.Variables.LastName, Project.Variables.Email1, Project.Variables.Email2, Project.Variables.Password1, Project.Variables.Password2);
       
     //Checks whether the 'contentText' property of the Aliases.browser.pageWwwHollandandbarrettComEnAuS.header.linkHelloDls.textnodeHelloDls object equals 'Hello dls'.
     aqObject.CheckProperty(Aliases.browser.pageWwwHollandandbarrettComEnAuS.header.linkHelloDls.textnodeHelloDls, "contentText", cmpEqual, "Hello ".concat(Project.Variables.FirstName));
       
     }
     
   }
   catch(e){
     Log.Error(e.message);
   }
}