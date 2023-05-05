const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
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
  let element = await this.driver.$(
    global.pageElements.design.menuItemNameInput
  );
  return await element.setValue(msg);
});

When("I fill page url {string}", async function (url) {
  let element = await this.driver.$(
    global.pageElements.design.menuItemUrlInput
  );
  return await element.setValue(url);
});

When("I save changes", async function () {
  let element = await this.driver.$(global.pageElements.design.saveBtn);
  return await element.click();
});

When("I click new post", async function () {
  let element = await this.driver.$(global.pageElements.post.newPost);
  return await element.click();
});

When("I enter title {string}", async function (title) {
  let element = await this.driver.$(global.pageElements.post.postTitle);
  return await element.setValue(title);
});

When("I enter content {kraken-string}", async function (content) {
  let element = await this.driver.$(global.pageElements.post.postContent);
  return await element.setValue(content);
});

When("I click post to go to previous page", async function () {
  let element = await this.driver.$(
    global.pageElements.post.newPostPreviousPage
  );
  return await element.click();
});

Then("I should see the draft post with title {string}", async function (title) {
  let element = await this.driver.$(global.pageElements.post.firstPostInList);
  const actualTitle = await element.getText();
  expect(actualTitle).to.equal(title);
});
