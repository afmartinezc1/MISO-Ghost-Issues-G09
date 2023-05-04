const { Given, When, Then } = require("@cucumber/cucumber");

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("#ember8");
  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("#ember10");
  return await element.setValue(password);
});

When("I click SignIn", async function () {
  let element = await this.driver.$("#ember12");
  return await element.click();
});
