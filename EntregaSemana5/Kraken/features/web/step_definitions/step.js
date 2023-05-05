const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");

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

When("I click new post", async function () {
  let element = await this.driver.$(".gh-secondary-action.gh-nav-new-post");
  return await element.click();
});

When("I enter title {string}", async function (title) {
  let element = await this.driver.$(".gh-editor-title");
  return await element.setValue(title);
});

When("I enter content {kraken-string}", async function (content) {
  let element = await this.driver.$(".koenig-editor__editor");
  return await element.setValue(content);
});

When("I click post to go to previous page", async function () {
  let element = await this.driver.$("[href='#/posts/']");
  return await element.click();
});

Then("I should see the draft post with title {string}", async function (title) {
  let element = await this.driver.$(
    ".gh-list > li:nth-child(2) .gh-content-entry-title"
  );
  const actualTitle = await element.getText();
  expect(actualTitle).to.equal(title);
});
