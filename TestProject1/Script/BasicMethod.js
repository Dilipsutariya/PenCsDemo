function Login(email, pass){
  
  Aliases.browser.pageHollandBarrettTheUkSLeadingH.header.form.labelEmail.emailinputEmail.Click();
  //Sets the email in the 'emailinputEmail' text editor.
  Aliases.browser.pageHollandBarrettTheUkSLeadingH.header.form.labelEmail.emailinputEmail.SetText(email);
  //Clicks the 'passwordboxPasswordShow' control.
  Aliases.browser.pageHollandBarrettTheUkSLeadingH.header.form.labelPasswordShow.passwordboxPasswordShow.Click();
  //Sets the password in the 'passwordboxPasswordShow' text editor.
  Aliases.browser.pageHollandBarrettTheUkSLeadingH.header.form.labelPasswordShow.passwordboxPasswordShow.SetText(pass);
  //Clicks the 'buttonSignIn' button.
  Aliases.browser.pageHollandBarrettTheUkSLeadingH.header.form.buttonSignIn.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHollandBarrettTheUkSLeadingH.Wait();
}

function Logout(){
  Delay(1000);
  Browsers.Item(btChrome).Navigate("https://www.hollandandbarrett.com/my-account/my-account.jsp");
  Delay(1000);
  //Clicks the 'linkLogout' link.
  Aliases.browser.pageMyAccount.nav.textnode.textnode2.linkLogout.Click();
}


function RegisterUser(title, firstName, lastName, email, confirmEmail, pass, confirmPass){
  Aliases.browser.pageRegistration.formRegistrationForm.fieldset.textnode.selectYourTitleOptional.ClickItem(tile);
  //Clicks the 'textboxYourFirstName' control.
  Aliases.browser.pageRegistration.formRegistrationForm.fieldset.textnode2.textboxYourFirstName.Click();
  //Sets the text in the 'textboxYourFirstName' text editor.
  Aliases.browser.pageRegistration.formRegistrationForm.fieldset.textnode2.textboxYourFirstName.SetText(firstName);
  //Clicks the 'textboxYourLastName' control.
  Aliases.browser.pageRegistration.formRegistrationForm.fieldset.textnodeYourLastName.textboxYourLastName.Click();
  //Sets the text in the 'textboxYourLastName' text editor.
  Aliases.browser.pageRegistration.formRegistrationForm.fieldset.textnodeYourLastName.textboxYourLastName.SetText(lastName);
  //Clicks the 'emailinputYourEmailAddress' control.
  Aliases.browser.pageRegistration.formRegistrationForm.fieldset.textnodeYourEmailAddress.emailinputYourEmailAddress.Click();
  //Sets the text in the 'emailinputYourEmailAddress' text editor.
  Aliases.browser.pageRegistration.formRegistrationForm.fieldset.textnodeYourEmailAddress.emailinputYourEmailAddress.SetText(email);
  //Clicks the 'emailinputConfirmYourEmailAddres' control.
  Aliases.browser.pageRegistration.formRegistrationForm.fieldset.textnodeConfirmYourEmailAddress.emailinputConfirmYourEmailAddres.Click();
  //Sets the text in the 'emailinputConfirmYourEmailAddres' text editor.
  Aliases.browser.pageRegistration.formRegistrationForm.fieldset.textnodeConfirmYourEmailAddress.emailinputConfirmYourEmailAddres.SetText(confirmEmail);
  //Clicks the 'passwordboxCreateAPassword' control.
  Aliases.browser.pageRegistration.formRegistrationForm.fieldset.textnodeCreateAPasswordShowWeAcc.passwordboxCreateAPassword.Click();
  //Sets the password the 'passwordboxCreateAPassword' text editor.
  Aliases.browser.pageRegistration.formRegistrationForm.fieldset.textnodeCreateAPasswordShowWeAcc.passwordboxCreateAPassword.SetText(pass);
  //Clicks the 'passwordboxConfirmYourPassword' control.
  Aliases.browser.pageRegistration.formRegistrationForm.fieldset.textnode3.passwordboxConfirmYourPassword.Click();
  //Sets the password in the 'passwordboxConfirmYourPassword' text editor.
  Aliases.browser.pageRegistration.formRegistrationForm.fieldset.textnode3.passwordboxConfirmYourPassword.SetText(confirmPass);
  //Sets the state of the 'checkboxIAgreeToTheWebsiteTermsC' checkbox to True.
  Aliases.browser.pageRegistration.fieldset2.labelIAgreeToTheWebsiteTermsCond.checkboxIAgreeToTheWebsiteTermsC.ClickChecked(true);
  //Clicks the 'buttonRegisterNow' button.
  Aliases.browser.pageRegistration.formRegistrationForm.buttonRegisterNow.ClickButton();       
  
}
module.exports.RegisterUser = RegisterUser;
module.exports.Login = Login;
module.exports.Logout = Logout;