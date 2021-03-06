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
  Delay(3000)
  Aliases.browser.pageWwwHollandandbarrettComEnAuS2.textnode.textnode2.form.buttonAddToBasket.ClickButton();
  
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
  Delay(3000);
  Aliases.browser.pageWwwHollandandbarrettComEnAuS3.textnode.textnode2.form.buttonAddToBasket.ClickButton();
  //Clicks the 'panel' control.
  Aliases.browser.pageWwwHollandandbarrettComEnAuS3.panel.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageWwwHollandandbarrettComEnAuS3.textnode.textnode2.textnodeVegoOrganicHazelnutChoco object equals 'Vego Organic Hazelnut Chocolate Bar 65g'.
  var expectedVegan = aqObject.GetPropertyValue(Aliases.browser.pageWwwHollandandbarrettComEnAuS3.textnode.textnode2.textnodeVegoOrganicHazelnutChoco, "contentText");
  
  Browsers.Item(btChrome).Navigate("https://www.hollandandbarrett.com/basket/basket.jsp");
  Delay(1000);
  
  var vitaminPrice = aqObject.GetPropertyValue(Aliases.browser.pageBasket.form.section.article.panel, "contentText");
  var veganPrice = aqObject.GetPropertyValue(Aliases.browser.pageBasket.form2.section2.article2.panel2, "contentText");
  
  var totalPrice = aqObject.GetPropertyValue(Aliases.browser.pageBasket.form.section3.textnode2966, "contentText"); 
  
  try{
    if(parseInt(totalPrice.slice(1,6)) == parseInt(vitaminPrice.slice(1,6))+parseInt(veganPrice.slice(1,5))){
      Log.Error("Total Value is not proper: "+totalPrice+" Vitamin: "+vitaminPrice+" Vegan: "+veganPrice);
    }
    
  }
  catch(e){
    Log.Error(e.message);
    
  }
  // Logout From the System
  BasicMethod.Logout();

}