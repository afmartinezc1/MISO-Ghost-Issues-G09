const { Given, When, Then } = require("@cucumber/cucumber");
require("./pageElements");

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$(global.pageElements.login.userInput);
  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$(global.pageElements.login.passInput);
  return await element.setValue(password);
});

When("I click SignIn", async function () {
  let element = await this.driver.$(global.pageElements.login.loginBtn);
  return await element.click();
});

When("I click in Design", async function () {
  let element = await this.driver.$(global.pageElements.design.linkSideMenu);
  return await element.click();
});

When("I fill name of menu item {string}", async function (msg) {
  let element = await this.driver.$(global.pageElements.design.menuItemNameInput);
  return await element.setValue(msg);
});

When("I fill page url {string}", async function (url) {
  let element = await this.driver.$(global.pageElements.design.menuItemUrlInput);
  return await element.setValue(url);
});

When("I save changes", async function () {
  let element = await this.driver.$(global.pageElements.design.saveBtn);
  return await element.click();
});
