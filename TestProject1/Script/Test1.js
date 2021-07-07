var BasicMethod = require("BasicMethod");
function Test1()
{
  
  Browsers.Item(btChrome).Navigate(Project.Variables.URL);
  Delay(1000);
  //Clicks the 'buttonAccount' button.
  Aliases.browser.pageHollandBarrettTheUkSLeadingH.header.buttonAccount.ClickButton();
  
  // Login to the System
  BasicMethod.Login(Project.Variables.Email, Project.Variables.Pass);
  
  // Add Vitamin Product into Cart
  //Clicks the 'linkVitaminsSupplements' link.
  //Aliases.browser.pageHollandBarrettVitaminCWithWi.wait();
  Delay(3000);
  
  Browsers.Item(btChrome).Navigate("https://www.hollandandbarrett.com/en-au/shop/vitamins-supplements/vitamins/vitamin-c/");
  Delay(1000);
  //Clicks the 'buttonAddToBasket' button.
  Aliases.browser.pageWwwHollandandbarrettComEnAuS2.textnode.textnode2.form.buttonAddToBasket.ClickButton();
  //Checks whether the 'contentText' property of the Aliases.browser.pageWwwHollandandbarrettComEnAuS2.textnode.textnode2.textnodeHollandBarrettVitaminCWi object equals 'Holland & Barrett Vitamin C with Wild Rose Hips 100 Caplets 1000mg'.
  aqObject.CheckProperty(Aliases.browser.pageWwwHollandandbarrettComEnAuS2.textnode.textnode2.textnodeHollandBarrettVitaminCWi, "contentText", cmpEqual, "Holland & Barrett Vitamin C with Wild Rose Hips 100 Caplets 1000mg");
  var expectedVitamin = aqObject.GetPropertyValue(Aliases.browser.pageWwwHollandandbarrettComEnAuS2.textnode.textnode2.textnodeHollandBarrettVitaminCWi, "contentText");
  // Add Vegan chochlate into the cart
  Aliases.browser.pageWwwHollandandbarrettComEnAuS2.header.nav.textnode3.linkVegan.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageWwwHollandandbarrettComEnAuS5.Wait();
  //Clicks the 'linkVeganChocolate' link.
  Aliases.browser.pageWwwHollandandbarrettComEnAuS5.nav.linkVeganChocolate.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageWwwHollandandbarrettComEnAuS3.Wait();
  //Clicks the 'buttonAddToBasket' button.
  Aliases.browser.pageWwwHollandandbarrettComEnAuS3.textnode.textnode2.form.buttonAddToBasket.ClickButton();
  //Clicks the 'panel' control.
  Aliases.browser.pageWwwHollandandbarrettComEnAuS3.panel.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageWwwHollandandbarrettComEnAuS3.textnode.textnode2.textnodeVegoOrganicHazelnutChoco object equals 'Vego Organic Hazelnut Chocolate Bar 65g'.
  var expectedVegan = aqObject.GetPropertyValue(Aliases.browser.pageWwwHollandandbarrettComEnAuS3.textnode.textnode2.textnodeVegoOrganicHazelnutChoco, "contentText");
  
  Browsers.Item(btChrome).Navigate("https://www.hollandandbarrett.com/basket/basket.jsp");
  Delay(1000);
  
  
  //Checks whether the 'contentText' property of the Aliases.browser.pageBasket.form.section.linkHollandBarrettVitaminCWithWi.textnodeHollandBarrettVitaminCWi object equals 'Holland & Barrett Vitamin C with Wild Rose Hips 100 Caplets 1000mg'.
  var actualVitamin = aqObject.GetPropertyValue(Aliases.browser.pageBasket.form.section.linkHollandBarrettVitaminCWithWi.textnodeHollandBarrettVitaminCWi, "contentText");
  //Checks whether the 'contentText' property of the Aliases.browser.pageBasket.form.section.linkVegoOrganicHazelnutChocolate.textnodeVegoOrganicHazelnutChoco object equals 'Vego Organic Hazelnut Chocolate Bar 65g'.
  var actualVegan = aqObject.GetPropertyValue(Aliases.browser.pageBasket.form.section.linkVegoOrganicHazelnutChocolate.textnodeVegoOrganicHazelnutChoco, "contentText");
  
  try{
    if(expectedVitamin != actualVitamin){
      Log.Error("Vitamin C Item are not added in the basket");
    }
    if(expectedVegan != actualVegan){
      Log.Error("Vegan Chochlate is not added in the basket");
    }
    
  }
  catch(e){
    Log.Error(e.message);
    
  }
  // Logout From the System
  BasicMethod.Logout();

}