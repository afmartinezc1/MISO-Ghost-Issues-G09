const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const fetch = require("node-fetch");
const exp = require("constants");
const dataAPriori = require("../../../a-priori-data.json");
require("./pageElements");
const randomRow0 = getRandomRow();
const randomRow1 = getRandomRow();
let pseudoData = {};

When("I get pseudoData from api", async function () {
  pseudoData = await fetchPseudoData();
});

//I enter email a-priori
When("I enter email a-priori", async function () {
  let element = await this.driver.$(global.pageElements.login.userInput);
  return await element.setValue(dataAPriori[randomRow0].email);
});

//I enter email pseudo
When("I enter email pseudo", async function () {
  let element = await this.driver.$(global.pageElements.login.userInput);
  return await element.setValue(pseudoData[0].email);
});

//I enter email random
When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$(global.pageElements.login.userInput);
  return await element.setValue(email);
});

//I enter password a-priori
When("I enter password a-priori", async function () {
  let element = await this.driver.$(global.pageElements.login.passInput);
  return await element.setValue(dataAPriori[randomRow0].password);
});

//I enter password pseudo
When("I enter password pseudo", async function () {
  let element = await this.driver.$(global.pageElements.login.passInput);
  return await element.setValue(pseudoData[0].password);
});

//I enter password random
When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$(global.pageElements.login.passInput);
  return await element.setValue(password);
});

When("I click SignIn", async function () {
  let element = await this.driver.$(global.pageElements.login.loginBtn);
  return await element.click();
});

// DESIGN //
When("I click in Design", async function () {
  let element = await this.driver.$(global.pageElements.design.linkSideMenu);
  return await element.click();
});

// fill new item name apriori
When("I fill name of menu item a-priori", async function () {
  let element = await this.driver.$(
    global.pageElements.design.menuItemNameInput
  );
  return await element.setValue(dataAPriori[randomRow0].title_two);
});

// fill new item name pseudo
When("I fill name of menu item pseudo", async function () {
  let element = await this.driver.$(
    global.pageElements.design.menuItemNameInput
  );
  return await element.setValue(pseudoData[0].title_two);
});

// fill new item name random
When("I fill name of menu item {kraken-string}", async function (name) {
  let element = await this.driver.$(
    global.pageElements.design.menuItemNameInput
  );
  return await element.setValue(name);
});

// fill new item url pseudo
When("I fill url of menu item pseudo", async function () {
  let element = await this.driver.$(
    global.pageElements.design.menuItemUrlInput
  );
  return await element.setValue(pseudoData[0].url);
});

// fill new item url apriori
When("I fill url of menu item a-priori", async function () {
  let element = await this.driver.$(
    global.pageElements.design.menuItemUrlInput
  );
  return await element.setValue(dataAPriori[0].url);
});

// fill new item url random
When("I fill url of menu item {kraken-string}", async function (url) {
  let element = await this.driver.$(
    global.pageElements.design.menuItemUrlInput
  );
  return await element.setValue(url);
});

When("I save navBar design changes", async function () {
  let element = await this.driver.$(global.pageElements.design.saveBtn);
  return await element.click();
});

// should see a navBar item with name a-priori
Then("I should see a navBar item with name a-priori", async function () {
  let element = await this.driver.$(global.pageElements.design.lastNavBarItem);
  const navBarText = await element.getText();
  expect(navBarText).to.equal(dataAPriori[randomRow0].title_two.toUpperCase());
});

// should see a navBar item with name pseudo
Then("I should see a navBar item with name pseudo", async function () {
  let element = await this.driver.$(global.pageElements.design.lastNavBarItem);
  const navBarText = await element.getText();
  expect(navBarText).to.equal(pseudoData[0].title_two.toUpperCase());
});

// should see a navBar item with name random
Then(
  "I should see a navBar item with name {kraken-string}",
  async function (name) {
    let element = await this.driver.$(
      global.pageElements.design.lastNavBarItem
    );
    const navBarText = await element.getText();
    expect(navBarText).to.equal(name.toUpperCase());
  }
);

When("I click in navBar delete button", async function () {
  let element = await this.driver.$(global.pageElements.design.deleteButton);
  return await element.click();
});

// shouldn't see a navBar item with name a-priori
Then("I shouldn't see a navBar item with name a-priori", async function () {
  let element = await this.driver.$(
    `.nav-${dataAPriori[randomRow0].title_two.toLowerCase()} a`
  );
  const existNavItem = await element.isExisting();
  expect(existNavItem).to.equal(false);
});

// shouldn't see a navBar item with pseudo
Then("I shouldn't see a navBar item with name pseudo", async function () {
  let element = await this.driver.$(
    `.nav-${pseudoData[0].title_two.toLowerCase()} a`
  );
  const existNavItem = await element.isExisting();
  expect(existNavItem).to.equal(false);
});

// shouldn't see a navBar item with random
Then(
  "I shouldn't see a navBar item with name {kraken-string}",
  async function (name) {
    let element = await this.driver.$(`.nav-${name.toLowerCase()} a`);
    const existNavItem = await element.isExisting();
    expect(existNavItem).to.equal(false);
  }
);

When("I click on stay modal design button", async function () {
  let element = await this.driver.$(global.pageElements.design.stayBtn);
  return await element.click();
});

When("I click on leave modal design button", async function () {
  let element = await this.driver.$(global.pageElements.design.leaveBtn);
  return await element.click();
});

Then(
  "I should see the new navBar item input with name {string}",
  async function (navItem) {
    let element = await this.driver.$(
      global.pageElements.design.menuItemNameInput
    );
    const navBarText = await element.getValue();
    expect(navBarText).to.equal(navItem);
  }
);

Then(
  "I shouldn't see the new navBar item input with name {string}",
  async function (navItem) {
    let element = await this.driver.$(
      global.pageElements.design.menuItemNameInput
    );
    const navBarText = await element.getValue();
    expect(navBarText).to.not.equal(navItem);
  }
);

// GENERAL //
When("I click in General", async function () {
  let element = await this.driver.$(global.pageElements.general.linkSideMenu);
  return await element.click();
});

When(
  "I click on general settings title description expand button",
  async function () {
    let element = await this.driver.$(
      global.pageElements.general.expandTitleBtn
    );
    return await element.click();
  }
);

// fill general settings site title with a-priori
When(
  "I fill general settings site title with text a-priori",
  async function () {
    let element = await this.driver.$(
      global.pageElements.general.titleSettingsInput
    );
    return await element.setValue(dataAPriori[randomRow0].title);
  }
);

// fill general settings site title with pseudo
When("I fill general settings site title with text pseudo", async function () {
  let element = await this.driver.$(
    global.pageElements.general.titleSettingsInput
  );
  return await element.setValue(pseudoData[0].title);
});

// fill general settings site title with random
When(
  "I fill general settings site title with text {kraken-string}",
  async function (title) {
    let element = await this.driver.$(
      global.pageElements.general.titleSettingsInput
    );
    return await element.setValue(title);
  }
);

// fill general settings site description with a-priori
When(
  "I fill general settings site description with text a-priori",
  async function () {
    let element = await this.driver.$(
      global.pageElements.general.descriptionSettingsInput
    );
    return await element.setValue(dataAPriori[randomRow0].title_two);
  }
);

// fill general settings site description with pseudo
When(
  "I fill general settings site description with text pseudo",
  async function () {
    let element = await this.driver.$(
      global.pageElements.general.descriptionSettingsInput
    );
    return await element.setValue(pseudoData[0].title_two);
  }
);

// fill general settings site title with random
When(
  "I fill general settings site description with text {kraken-string}",
  async function (description) {
    let element = await this.driver.$(
      global.pageElements.general.descriptionSettingsInput
    );
    return await element.setValue(description);
  }
);

When("I save general settings changes", async function () {
  let element = await this.driver.$(global.pageElements.general.saveBtn);
  return await element.click();
});

// I should see the new site title with text a-priori
Then("I should see the new site title with text a-priori", async function () {
  let element = await this.driver.$(global.pageElements.application.siteTitle);
  const navBarText = await element.getText();
  expect(navBarText).to.equal(dataAPriori[randomRow0].title);
});

// I should see the new site title with text pseudo
Then("I should see the new site title with text pseudo", async function () {
  let element = await this.driver.$(global.pageElements.application.siteTitle);
  const navBarText = await element.getText();
  expect(navBarText).to.equal(pseudoData[0].title);
});

// I should see the new site title with text random
Then(
  "I should see the new site title with text {kraken-string}",
  async function (title) {
    let element = await this.driver.$(
      global.pageElements.application.siteTitle
    );
    const navBarText = await element.getText();
    expect(navBarText).to.equal(title);
  }
);

// I should see the new site description with text a-priori
Then(
  "I should see the new site description with text a-priori",
  async function () {
    let element = await this.driver.$(
      global.pageElements.application.siteDescription
    );
    const navBarText = await element.getText();
    expect(navBarText).to.equal(dataAPriori[randomRow0].title_two);
  }
);

// I should see the new site description with text pseudo
Then(
  "I should see the new site description with text pseudo",
  async function () {
    let element = await this.driver.$(
      global.pageElements.application.siteDescription
    );
    const navBarText = await element.getText();
    expect(navBarText).to.equal(pseudoData[0].title_two);
  }
);

// I should see the new site description with text random
Then(
  "I should see the new site description with text {kraken-string}",
  async function (description) {
    let element = await this.driver.$(
      global.pageElements.application.siteDescription
    );
    const navBarText = await element.getText();
    expect(navBarText).to.equal(description);
  }
);

// STAFF //
When("I click in Staff", async function () {
  let element = await this.driver.$(global.pageElements.staff.linkSideMenu);
  return await element.click();
});

When("I click in author user to modify", async function () {
  let element = await this.driver.$(global.pageElements.staff.userToEdit);
  return await element.click();
});

// fill user full name in staff with apriori
When("I fill user full name in staff with text a-priori", async function () {
  let element = await this.driver.$(global.pageElements.staff.inputName);
  return await element.setValue(dataAPriori[randomRow0].first_name);
});

// fill user full name in staff with pseudo
When("I fill user full name in staff with text pseudo", async function () {
  let element = await this.driver.$(global.pageElements.staff.inputName);
  return await element.setValue(pseudoData[0].first_name);
});

// fill user full name in staff with rendom
When(
  "I fill user full name in staff with text {kraken-string}",
  async function (name) {
    let element = await this.driver.$(global.pageElements.staff.inputName);
    return await element.setValue(name);
  }
);

// I fill user email in staff with text a-priori
Then("I fill user email in staff with text a-priori", async function () {
  let element = await this.driver.$(global.pageElements.staff.inputMail);
  return await element.setValue(dataAPriori[randomRow0].email);
});

// I fill user email in staff with text pseudo
Then("I fill user email in staff with text pseudo", async function () {
  let element = await this.driver.$(global.pageElements.staff.inputMail);
  return await element.setValue(pseudoData[0].email);
});

// I fill user email in staff with text random
Then(
  "I fill user email in staff with text {kraken-string}",
  async function (mail) {
    let element = await this.driver.$(global.pageElements.staff.inputMail);
    return await element.setValue(mail);
  }
);

// fill user location in staff with a-priori
When("I fill user location in staff with text a-priori", async function () {
  let element = await this.driver.$(global.pageElements.staff.inputLocation);
  return await element.setValue(dataAPriori[randomRow0].address);
});

// fill user location in staff with pseudo
When("I fill user location in staff with text pseudo", async function () {
  let element = await this.driver.$(global.pageElements.staff.inputLocation);
  return await element.setValue(pseudoData[0].address);
});

// fill user location in staff with random
When(
  "I fill user location in staff with text {kraken-string}",
  async function (location) {
    let element = await this.driver.$(global.pageElements.staff.inputLocation);
    return await element.setValue(location);
  }
);

// fill user biography in staff with a-priori
When("I fill user biography in staff with text a-priori", async function () {
  let element = await this.driver.$(global.pageElements.staff.inputBio);
  return await element.setValue(dataAPriori[randomRow0].last_name);
});

// fill user biography in staff with pseudo
When("I fill user biography in staff with text pseudo", async function () {
  let element = await this.driver.$(global.pageElements.staff.inputBio);
  return await element.setValue(pseudoData[0].last_name);
});

// fill user biography in staff with random
When(
  "I fill user biography in staff with text {kraken-string}",
  async function (biography) {
    let element = await this.driver.$(global.pageElements.staff.inputBio);
    return await element.setValue(biography);
  }
);

// fill user new password in staff with a-priori
When("I fill user new password in staff with text a-priori", async function () {
  let element = await this.driver.$(global.pageElements.staff.inputPassword);
  return await element.setValue(dataAPriori[randomRow0].password);
});

// fill user new password in staff with pseudo
When("I fill user new password in staff with text pseudo", async function () {
  let element = await this.driver.$(global.pageElements.staff.inputPassword);
  return await element.setValue(pseudoData[0].password);
});

// fill user new password in staff with random
When(
  "I fill user new password in staff with text {kraken-string}",
  async function (password) {
    let element = await this.driver.$(global.pageElements.staff.inputPassword);
    return await element.setValue(password);
  }
);

// fill user new password verification in staff with a-priori
When(
  "I fill user new password verification in staff with text a-priori",
  async function () {
    let element = await this.driver.$(
      global.pageElements.staff.inputPasswordVerification
    );
    return await element.setValue(dataAPriori[randomRow0].password);
  }
);

// fill user new password verification in staff with pseudo
When(
  "I fill user new password verification in staff with text pseudo",
  async function () {
    let element = await this.driver.$(
      global.pageElements.staff.inputPasswordVerification
    );
    return await element.setValue(pseudoData[0].password);
  }
);

// fill user new password verification in staff with diferent a-priori
When(
  "I fill user new password verification in staff with diferent text a-priori",
  async function () {
    let element = await this.driver.$(
      global.pageElements.staff.inputPasswordVerification
    );
    return await element.setValue(dataAPriori[randomRow1].password);
  }
);

// fill user new password verification in staff with diferent pseudo
When(
  "I fill user new password verification in staff with diferent text pseudo",
  async function () {
    let element = await this.driver.$(
      global.pageElements.staff.inputPasswordVerification
    );
    return await element.setValue(pseudoData[1].password);
  }
);

// fill user new password verification in staff with random
When(
  "I fill user new password verification in staff with text {kraken-string}",
  async function (password) {
    let element = await this.driver.$(
      global.pageElements.staff.inputPasswordVerification
    );
    return await element.setValue(password);
  }
);

When("I save user new password staff changes", async function () {
  let element = await this.driver.$(global.pageElements.staff.saveNewPassBtn);
  return await element.click();
});

When("I click user profile sideBar", async function () {
  let element = await this.driver.$(global.pageElements.staff.userProfile);
  return await element.click();
});

When("I click user sign out", async function () {
  let element = await this.driver.$(global.pageElements.staff.signout);
  return await element.click();
});

When("I save user edit staff changes", async function () {
  let element = await this.driver.$(global.pageElements.staff.saveBtn);
  return await element.click();
});

Then(
  "I shouldn see error in password match",
  async function () {
    let element = await this.driver.$(global.pageElements.staff.error);
    const error = await element.getText();
    expect(error).to.equal('Your new passwords do not match');
  }
);

// verify user full name in staff list with text a-priori
Then(
  "I should see user full name in staff list with text a-priori",
  async function () {
    let element = await this.driver.$(global.pageElements.staff.userEditedName);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(dataAPriori[randomRow0].first_name);
  }
);

// verify user full name in staff list with text pseudo
Then(
  "I should see user full name in staff list with text pseudo",
  async function () {
    let element = await this.driver.$(global.pageElements.staff.userEditedName);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(pseudoData[0].first_name);
  }
);

// verify user full name in staff list with text random
Then(
  "I should see user full name in staff list with text {kraken-string}",
  async function (name) {
    let element = await this.driver.$(global.pageElements.staff.userEditedName);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(name);
  }
);

// verify user full name in edit user with text a-priori
Then(
  "I should see user full name in edit user with text a-priori",
  async function () {
    let element = await this.driver.$(global.pageElements.staff.inputName);
    const actualTitle = await element.getValue();
    expect(actualTitle).to.equal(dataAPriori[randomRow0].first_name);
  }
);

// verify user full name in edit user with text pseudo
Then(
  "I should see user full name in edit user with text pseudo",
  async function () {
    let element = await this.driver.$(global.pageElements.staff.inputName);
    const actualTitle = await element.getValue();
    expect(actualTitle).to.equal(pseudoData[0].first_name);
  }
);

// verify user full name in edit user with text random
Then(
  "I should see user full name in edit user with text {kraken-string}",
  async function (name) {
    let element = await this.driver.$(global.pageElements.staff.inputName);
    const actualTitle = await element.getValue();
    expect(actualTitle).to.equal(name);
  }
);

// verify user location in edit user with text a-priori
Then(
  "I should see user location in edit user with text a-priori",
  async function () {
    let element = await this.driver.$(global.pageElements.staff.inputLocation);
    const actualTitle = await element.getValue();
    expect(actualTitle).to.equal(dataAPriori[randomRow0].address);
  }
);

// verify user location in edit user with text pseudo
Then(
  "I should see user location in edit user with text pseudo",
  async function () {
    let element = await this.driver.$(global.pageElements.staff.inputLocation);
    const actualTitle = await element.getValue();
    expect(actualTitle).to.equal(pseudoData[0].address);
  }
);

// verify user location in edit user with text random
Then(
  "I should see user location in edit user with text {kraken-string}",
  async function (location) {
    let element = await this.driver.$(global.pageElements.staff.inputLocation);
    const actualTitle = await element.getValue();
    expect(actualTitle).to.equal(location);
  }
);

// verify user biography in edit user with text a-priori
Then(
  "I should see user biography in edit user with text a-priori",
  async function () {
    let element = await this.driver.$(global.pageElements.staff.inputBio);
    const actualTitle = await element.getValue();
    expect(actualTitle).to.equal(dataAPriori[randomRow0].last_name);
  }
);

// verify user biography in edit user with text pseudo
Then(
  "I should see user biography in edit user with text pseudo",
  async function () {
    let element = await this.driver.$(global.pageElements.staff.inputBio);
    const actualTitle = await element.getValue();
    expect(actualTitle).to.equal(pseudoData[0].last_name);
  }
);

// verify user biography in edit user with text random
Then(
  "I should see user biography in edit user with text {kraken-string}",
  async function (biography) {
    let element = await this.driver.$(global.pageElements.staff.inputBio);
    const actualTitle = await element.getValue();
    expect(actualTitle).to.equal(biography);
  }
);

Then("I shouldn see a sideNav page title", async function () {
  let element = await this.driver.$(global.pageElements.application.siteTitle);
  const existNavItem = await element.isExisting();
  expect(existNavItem).to.equal(true);
});

// POSTS //
When("I go to the posts view", async function () {
  let element = await this.driver.$(global.pageElements.post.postView);
  return await element.click();
});

When("I click new post", async function () {
  let element = await this.driver.$(global.pageElements.post.newPost);
  return await element.click();
});

When("I enter post title {string}", async function (title) {
  let element = await this.driver.$(global.pageElements.post.postTitle);
  return await element.setValue(title);
});

// Post title a-priori
When("I enter post title a-priori-0", async function () {
  let element = await this.driver.$(global.pageElements.post.postTitle);
  return await element.setValue(dataAPriori[randomRow0].title);
});

When("I enter post title a-priori-1", async function () {
  let element = await this.driver.$(global.pageElements.post.postTitle);
  return await element.setValue(dataAPriori[randomRow1].title);
});

// Post-title pseudo
When("I enter post title pseudo-0", async function () {
  let element = await this.driver.$(global.pageElements.post.postTitle);
  return await element.setValue(pseudoData[0].title);
});

When("I enter post title pseudo-1", async function () {
  let element = await this.driver.$(global.pageElements.post.postTitle);
  return await element.setValue(pseudoData[1].title);
});

// Post-title random
When("I enter post title random {kraken-string}", async function (title) {
  let element = await this.driver.$(global.pageElements.post.postTitle);
  return await element.setValue(title);
});

When("I enter post content {kraken-string}", async function (content) {
  let element = await this.driver.$(global.pageElements.post.postContent);
  return await element.setValue(content);
});

// Post content a-priori
When("I enter post content a-priori-0", async function () {
  let element = await this.driver.$(global.pageElements.post.postContent);
  return await element.setValue(dataAPriori[randomRow0].text);
});

When("I enter post content a-priori-1", async function () {
  let element = await this.driver.$(global.pageElements.post.postContent);
  return await element.setValue(dataAPriori[randomRow1].text);
});

When("I enter post content pseudo-0", async function () {
  let element = await this.driver.$(global.pageElements.post.postContent);
  return await element.setValue(pseudoData[0].text);
});

When("I enter post content pseudo-1", async function () {
  let element = await this.driver.$(global.pageElements.post.postContent);
  return await element.setValue(pseudoData[1].text);
});

When("I click posts to go to previous page", async function () {
  let element = await this.driver.$(
    global.pageElements.post.newPostPreviousPage
  );
  return await element.click();
});

Then(
  "I should see the first draft post with title {string}",
  async function (title) {
    let element = await this.driver.$(global.pageElements.post.firstPostInList);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(title);
  }
);

Then("I should see that the post title is {string}", async function (title) {
  let element = await this.driver.$(global.pageElements.post.postTitle);
  const actualTitle = await element.getValue();
  expect(actualTitle).to.equal(title);
});

// Post title a-priori
Then(
  "I should see the first draft post with title a-priori-0",
  async function () {
    let element = await this.driver.$(global.pageElements.post.firstPostInList);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(dataAPriori[randomRow0].title);
  }
);

Then("I should see that the post title is a-priori-0", async function () {
  let element = await this.driver.$(global.pageElements.post.postTitle);
  const actualTitle = await element.getValue();
  expect(actualTitle).to.equal(dataAPriori[randomRow0].title);
});

Then(
  "I should see the first draft post with title a-priori-1",
  async function () {
    let element = await this.driver.$(global.pageElements.post.firstPostInList);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(dataAPriori[randomRow1].title);
  }
);

Then("I should see that the post title is a-priori-1", async function () {
  let element = await this.driver.$(global.pageElements.post.postTitle);
  const actualTitle = await element.getValue();
  expect(actualTitle).to.equal(dataAPriori[randomRow1].title);
});

// Post title pseudo
Then(
  "I should see the first draft post with title pseudo-0",
  async function () {
    let element = await this.driver.$(global.pageElements.post.firstPostInList);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(pseudoData[0].title);
  }
);

Then("I should see that the post title is pseudo-0", async function () {
  let element = await this.driver.$(global.pageElements.post.postTitle);
  const actualTitle = await element.getValue();
  expect(actualTitle).to.equal(pseudoData[0].title);
});

Then(
  "I should see the first draft post with title pseudo-1",
  async function () {
    let element = await this.driver.$(global.pageElements.post.firstPostInList);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(pseudoData[1].title);
  }
);

Then("I should see that the post title is pseudo-1", async function () {
  let element = await this.driver.$(global.pageElements.post.postTitle);
  const actualTitle = await element.getValue();
  expect(actualTitle).to.equal(pseudoData[1].title);
});

// Post-title random
Then(
  "I should see the first draft post with title random {kraken-string}",
  async function (title) {
    let element = await this.driver.$(global.pageElements.post.firstPostInList);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(title);
  }
);

Then(
  "I should see that the post title is random {kraken-string}",
  async function (title) {
    let element = await this.driver.$(global.pageElements.post.postTitle);
    const actualTitle = await element.getValue();
    expect(actualTitle).to.equal(title);
  }
);

Then(
  "I should see that the edited post content is {kraken-string}{kraken-string}",
  async function (content1, content2) {
    let element = await this.driver.$(global.pageElements.post.postContent);
    const actualContent = await element.getText();
    const content = `${content1}${content2}`;
    expect(actualContent).to.equal(content);
  }
);
Then(
  "I should see that the post content is {kraken-string}",
  async function (content) {
    let element = await this.driver.$(global.pageElements.post.postContent);
    const actualContent = await element.getText();
    expect(actualContent).to.equal(content);
  }
);

// Post content a-priori
Then(
  "I should see that the edited post content is a-priori-1_a-priori-0",
  async function () {
    let element = await this.driver.$(global.pageElements.post.postContent);
    const actualContent = await element.getText();
    const content = `${dataAPriori[randomRow1].text}${dataAPriori[randomRow0].text}`;
    expect(actualContent).to.equal(content);
  }
);

Then("I should see that the post content is a-priori-0", async function () {
  let element = await this.driver.$(global.pageElements.post.postContent);
  const actualContent = await element.getText();
  expect(actualContent).to.equal(dataAPriori[randomRow0].text);
});

Then("I should see that the post content is a-priori-1", async function () {
  let element = await this.driver.$(global.pageElements.post.postContent);
  const actualContent = await element.getText();
  expect(actualContent).to.equal(dataAPriori[randomRow1].text);
});

// Post content pseudo
Then(
  "I should see that the edited post content is pseudo-1_pseudo-0",
  async function () {
    let element = await this.driver.$(global.pageElements.post.postContent);
    const actualContent = await element.getText();
    const content = `${pseudoData[1].text}${pseudoData[0].text}`;
    expect(actualContent).to.equal(content);
  }
);

Then("I should see that the post content is pseudo-0", async function () {
  let element = await this.driver.$(global.pageElements.post.postContent);
  const actualContent = await element.getText();
  expect(actualContent).to.equal(pseudoData[0].text);
});

Then("I should see that the post content is pseudo-1", async function () {
  let element = await this.driver.$(global.pageElements.post.postContent);
  const actualContent = await element.getText();
  expect(actualContent).to.equal(pseudoData[1].text);
});

When("I click on the first draft post", async function () {
  let element = await this.driver.$(global.pageElements.post.firstPostInList);
  return await element.click();
});

When("I click on post settings", async function () {
  let element = await this.driver.$(global.pageElements.post.postSettings);
  return await element.click();
});

When("I click on delete post", async function () {
  let element = await this.driver.$(global.pageElements.post.deletePostBtn);
  return await element.click();
});

When("I click on confirm post delete", async function () {
  let element = await this.driver.$(global.pageElements.post.confirmDeleteBtn);
  return await element.click();
});

When("I click on add post extra content", async function () {
  let element = await this.driver.$(
    global.pageElements.post.addExtraContentBtn
  );
  return await element.click();
});

When("I click on add post youtube link", async function () {
  let element = await this.driver.$(global.pageElements.post.addYoutubeLink);
  return await element.click();
});

When("I enter post youtube link {string}", async function (url) {
  let element = await this.driver.$(global.pageElements.post.youtubeURLInput);
  return await element.setValue(url);
});

When("I click on the application body", async function () {
  let element = await this.driver.$(global.pageElements.application.body);
  return await element.click();
});

Then("I should see an iframe with the youtube video", async function () {
  let element = await this.driver.$(global.pageElements.application.iframe);
  expect(element).to.not.be.undefined;
});

When("I click publish to show dialog to publish", async function () {
  let element = await this.driver.$(global.pageElements.post.publishPost);
  return await element.click();
});

When("I click publish to confirm", async function () {
  let element = await this.driver.$(global.pageElements.post.publishConfirm);
  return await element.click();
});
When("I click viewpost", async function () {
  let element = await this.driver.$(global.pageElements.post.publishConfirm);
  return await element.click();
});
When("I click calendar", async function () {
  let element = await this.driver.$(global.pageElements.post.calendarSheduler);
  return await element.click();
});

Then(
  "I should see the first post with state {string} {string}",
  async function (title, state) {
    let element = await this.driver.$(global.pageElements.post.firstPostInList);
    let element1 = await this.driver.$(
      global.pageElements.post.firstPostInListStatus
    );
    const actualTitle = await element.getText();
    const actualState = await element1.getText();
    expect(actualTitle).to.equal(title) && expect(actualState).to.equal(state);
  }
);

When("I click filter post by state", async function () {
  let element = await this.driver.$(global.pageElements.post.filterPostState);
  return await element.click();
});

When("I click filter post by state Draft", async function () {
  let element = await this.driver.$(
    global.pageElements.post.filterPostStateDraft
  );
  return await element.click();
});

When("I click filter post by state Published", async function () {
  let element = await this.driver.$(
    global.pageElements.post.filterPostStatePublished
  );
  return await element.click();
});

When("I click filter post by author", async function () {
  let element = await this.driver.$(global.pageElements.post.filterPostAuthor);
  return await element.click();
});

When("I click filter post by author ghost", async function () {
  let element = await this.driver.$(
    global.pageElements.post.filterPostAuthorGhost
  );
  return await element.click();
});

When("I click filter post by state All", async function () {
  let element = await this.driver.$(
    global.pageElements.post.filterPostStateAll
  );
  return await element.click();
});

Then("I should see posts with estado {string}", async function (state) {
  let elements = await this.driver.$$(global.pageElements.post.postList);
  let estadoOk = true;
  let i = 0;
  for (const element of elements) {
    const text = await element.getText();
    if (i > 0 && !text.includes(state)) {
      estadoOk = false;
    }
    i++;
  }
  expect(estadoOk).to.equal(true);
});

Then("I should see posts with author {string}", async function (state) {
  let elements = await this.driver.$$(global.pageElements.post.postList);
  let estadoOk = true;
  let i = 0;
  for (const element of elements) {
    const text = await element.getText();
    if (i > 0 && !text.includes(state)) {
      estadoOk = false;
    }
    i++;
  }
  expect(estadoOk).to.equal(true);
});

When("I click tags list", async function () {
  let element = await this.driver.$(global.pageElements.post.inputTag);
  return await element.click();
});

When("I select tag {string}", async function (tag) {
  let elements = await this.driver.$$(global.pageElements.post.tagList);
  let last = null;
  for (const element of elements) {
    const text = await element.getText();
    if (text.includes(tag)) {
      last = element;
    }
  }
  return await last.click();
});

When("I click on close post settings", async function () {
  let element = await this.driver.$(global.pageElements.post.closePostSettings);
  return await element.click();
});

Then("I should see the selected tag {string}", async function (tag) {
  let elements = await this.driver.$$(global.pageElements.post.selectedTags);
  let encontrado = false;
  for (const element of elements) {
    const text = await element.getText();
    if (text.includes(tag)) {
      encontrado = true;
    }
  }
  expect(encontrado).to.equal(true);
});

// PAGES //
When("I go to the pages view", async function () {
  let element = await this.driver.$(global.pageElements.page.pageView);
  return await element.click();
});

When("I click new page", async function () {
  let element = await this.driver.$(global.pageElements.page.newPage);
  return await element.click();
});

When("I enter page title {string}", async function (title) {
  let element = await this.driver.$(global.pageElements.page.pageTitle);
  return await element.setValue(title);
});

// Page title a-priori
When("I enter page title a-priori-0", async function () {
  let element = await this.driver.$(global.pageElements.page.pageTitle);
  return await element.setValue(dataAPriori[randomRow0].title);
});

When("I enter page title a-priori-1", async function () {
  let element = await this.driver.$(global.pageElements.page.pageTitle);
  return await element.setValue(dataAPriori[randomRow1].title);
});

// Page title pseudo
When("I enter page title pseudo-0", async function () {
  let element = await this.driver.$(global.pageElements.page.pageTitle);
  return await element.setValue(pseudoData[0].title);
});

When("I enter page title pseudo-1", async function () {
  let element = await this.driver.$(global.pageElements.page.pageTitle);
  return await element.setValue(pseudoData[1].title);
});

// Page-title random
When("I enter page title random {kraken-string}", async function (title) {
  let element = await this.driver.$(global.pageElements.page.pageTitle);
  return await element.setValue(title);
});

When("I enter page content {kraken-string}", async function (content) {
  let element = await this.driver.$(global.pageElements.page.pageContent);
  return await element.setValue(content);
});

// Page content a-priori
When("I enter page content a-priori-0", async function () {
  let element = await this.driver.$(global.pageElements.page.pageContent);
  return await element.setValue(dataAPriori[randomRow0].text);
});

When("I enter page content a-priori-1", async function () {
  let element = await this.driver.$(global.pageElements.page.pageContent);
  return await element.setValue(dataAPriori[randomRow1].text);
});

// Page content pseudo
When("I enter page content pseudo-0", async function () {
  let element = await this.driver.$(global.pageElements.page.pageContent);
  return await element.setValue(pseudoData[0].text);
});

When("I enter page content pseudo-1", async function () {
  let element = await this.driver.$(global.pageElements.page.pageContent);
  return await element.setValue(pseudoData[1].text);
});

When("I click pages to go to previous page", async function () {
  let element = await this.driver.$(
    global.pageElements.page.newPagePreviousPage
  );
  return await element.click();
});

Then(
  "I should see the first draft page with title {string}",
  async function (title) {
    let element = await this.driver.$(global.pageElements.page.firstPageInList);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(title);
  }
);

Then("I should see that the page title is {string}", async function (title) {
  let element = await this.driver.$(global.pageElements.page.pageTitle);
  const actualTitle = await element.getValue();
  expect(actualTitle).to.equal(title);
});

// Page title a-priori
Then(
  "I should see the first draft page with title a-priori-0",
  async function () {
    let element = await this.driver.$(global.pageElements.page.firstPageInList);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(dataAPriori[randomRow0].title);
  }
);

Then("I should see that the page title is a-priori-0", async function () {
  let element = await this.driver.$(global.pageElements.page.pageTitle);
  const actualTitle = await element.getValue();
  expect(actualTitle).to.equal(dataAPriori[randomRow0].title);
});

Then(
  "I should see the first draft page with title a-priori-1",
  async function () {
    let element = await this.driver.$(global.pageElements.page.firstPageInList);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(dataAPriori[randomRow1].title);
  }
);

Then("I should see that the page title is a-priori-1", async function () {
  let element = await this.driver.$(global.pageElements.page.pageTitle);
  const actualTitle = await element.getValue();
  expect(actualTitle).to.equal(dataAPriori[randomRow1].title);
});

// Page title pseudo
Then(
  "I should see the first draft page with title pseudo-0",
  async function () {
    let element = await this.driver.$(global.pageElements.page.firstPageInList);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(pseudoData[0].title);
  }
);

Then("I should see that the page title is pseudo-0", async function () {
  let element = await this.driver.$(global.pageElements.page.pageTitle);
  const actualTitle = await element.getValue();
  expect(actualTitle).to.equal(pseudoData[0].title);
});

Then(
  "I should see the first draft page with title pseudo-1",
  async function () {
    let element = await this.driver.$(global.pageElements.page.firstPageInList);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(pseudoData[1].title);
  }
);

Then("I should see that the page title is pseudo-1", async function () {
  let element = await this.driver.$(global.pageElements.page.pageTitle);
  const actualTitle = await element.getValue();
  expect(actualTitle).to.equal(pseudoData[1].title);
});

// Page title random
Then(
  "I should see the first draft page with title random {kraken-string}",
  async function (title) {
    let element = await this.driver.$(global.pageElements.page.firstPageInList);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(title);
  }
);

Then(
  "I should see that the page title is random {kraken-string}",
  async function (title) {
    let element = await this.driver.$(global.pageElements.page.pageTitle);
    const actualTitle = await element.getValue();
    expect(actualTitle).to.equal(title);
  }
);

Then(
  "I should see that the edited page content is {kraken-string}{kraken-string}",
  async function (content1, content2) {
    let element = await this.driver.$(global.pageElements.page.pageContent);
    const actualContent = await element.getText();
    const content = `${content1}${content2}`;
    expect(actualContent).to.equal(content);
  }
);

Then(
  "I should see that the page content is {kraken-string}",
  async function (content) {
    let element = await this.driver.$(global.pageElements.page.pageContent);
    const actualContent = await element.getText();
    expect(actualContent).to.equal(content);
  }
);

// Page content a-priori
Then(
  "I should see that the edited page content is a-priori-1_a-priori-0",
  async function () {
    let element = await this.driver.$(global.pageElements.page.pageContent);
    const actualContent = await element.getText();
    const content = `${dataAPriori[randomRow1].text}${dataAPriori[randomRow0].text}`;
    expect(actualContent).to.equal(content);
  }
);

Then("I should see that the page content is a-priori-0", async function () {
  let element = await this.driver.$(global.pageElements.page.pageContent);
  const actualContent = await element.getText();
  expect(actualContent).to.equal(dataAPriori[randomRow0].text);
});

Then("I should see that the page content is a-priori-1", async function () {
  let element = await this.driver.$(global.pageElements.page.pageContent);
  const actualContent = await element.getText();
  expect(actualContent).to.equal(dataAPriori[randomRow1].text);
});

// Page content pseudo
Then(
  "I should see that the edited page content is pseudo-1_pseudo-0",
  async function () {
    let element = await this.driver.$(global.pageElements.page.pageContent);
    const actualContent = await element.getText();
    const content = `${pseudoData[1].text}${pseudoData[0].text}`;
    expect(actualContent).to.equal(content);
  }
);

Then("I should see that the page content is pseudo-0", async function () {
  let element = await this.driver.$(global.pageElements.page.pageContent);
  const actualContent = await element.getText();
  expect(actualContent).to.equal(pseudoData[0].text);
});

Then("I should see that the page content is pseudo-1", async function () {
  let element = await this.driver.$(global.pageElements.page.pageContent);
  const actualContent = await element.getText();
  expect(actualContent).to.equal(pseudoData[1].text);
});

When("I click on the first draft page", async function () {
  let element = await this.driver.$(global.pageElements.page.firstPageInList);
  return await element.click();
});

When("I click on page settings", async function () {
  let element = await this.driver.$(global.pageElements.page.pageSettings);
  return await element.click();
});

When("I click on delete page", async function () {
  let element = await this.driver.$(global.pageElements.page.deletePageBtn);
  return await element.click();
});

When("I click on confirm page delete", async function () {
  let element = await this.driver.$(global.pageElements.page.confirmDeleteBtn);
  return await element.click();
});

When("I click filter page by state", async function () {
  let element = await this.driver.$(global.pageElements.post.filterPostState);
  return await element.click();
});

When("I click filter page by state Draft", async function () {
  let element = await this.driver.$(
    global.pageElements.post.filterPostStateDraft
  );
  return await element.click();
});

When("I click filter page by state Published", async function () {
  let element = await this.driver.$(
    global.pageElements.post.filterPostStatePublished
  );
  return await element.click();
});

When("I click filter page by author", async function () {
  let element = await this.driver.$(global.pageElements.post.filterPostAuthor);
  return await element.click();
});

When("I click filter page by author ghost", async function () {
  let element = await this.driver.$(
    global.pageElements.post.filterPostAuthorGhost
  );
  return await element.click();
});

When("I click filter page by state All", async function () {
  let element = await this.driver.$(
    global.pageElements.post.filterPostStateAll
  );
  return await element.click();
});

Then("I should see pages with estado {string}", async function (state) {
  let elements = await this.driver.$$(global.pageElements.page.pageList);
  let estadoOk = true;
  let i = 0;
  for (const element of elements) {
    const text = await element.getText();
    if (i > 0 && !text.includes(state)) {
      estadoOk = false;
    }
    i++;
  }
  expect(estadoOk).to.equal(true);
});

Then("I should see pages with author {string}", async function (state) {
  let elements = await this.driver.$$(global.pageElements.post.postList);
  let estadoOk = true;
  let i = 0;
  for (const element of elements) {
    const text = await element.getText();
    if (i > 0 && !text.includes(state)) {
      estadoOk = false;
    }
    i++;
  }
  expect(estadoOk).to.equal(true);
});

// TAGS //
When("I go to the tags view", async function () {
  let element = await this.driver.$(global.pageElements.tag.tagView);
  return await element.click();
});

When("I click new tag", async function () {
  let element = await this.driver.$(global.pageElements.tag.newTag);
  return await element.click();
});

When("I enter tag name a-priori-0", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputName);
  return await element.setValue(dataAPriori[randomRow0].title_two);
});

When("I enter tag name a-priori-1", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputName);
  return await element.setValue(dataAPriori[randomRow1].title_two);
});

When("I enter tag name pseudo-0", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputName);
  return await element.setValue(pseudoData[0].title_two);
});

When("I enter tag name pseudo-1", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputName);
  return await element.setValue(pseudoData[1].title_two);
});

When("I enter tag name random {kraken-string}", async function (name) {
  let element = await this.driver.$(global.pageElements.tag.inputName);
  return await element.setValue(name);
});

When("I enter tag color a-priori-0", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputColor);
  return await element.setValue(dataAPriori[randomRow0].color.substring(1));
});

When("I enter tag color a-priori-1", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputColor);
  return await element.setValue(dataAPriori[randomRow1].color.substring(1));
});

When("I enter tag color pseudo-0", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputColor);
  return await element.setValue(pseudoData[0].color.substring(1));
});

When("I enter tag color pseudo-1", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputColor);
  return await element.setValue(pseudoData[1].color.substring(1));
});

When("I enter tag color random", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputColor);
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var rHex = r.toString(16).padStart(2, '0');
  var gHex = g.toString(16).padStart(2, '0');
  var bHex = b.toString(16).padStart(2, '0');
  return await element.setValue(rHex + gHex + bHex);
});

When("I enter tag slug a-priori-0", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputSlug);
  return await element.setValue(dataAPriori[randomRow0].title_two);
});

When("I enter tag slug a-priori-1", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputSlug);
  return await element.setValue(dataAPriori[randomRow1].title_two);
});

When("I enter tag slug pseudo-0", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputSlug);
  return await element.setValue(pseudoData[0].title_two);
});

When("I enter tag slug pseudo-1", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputSlug);
  return await element.setValue(pseudoData[1].title_two);
});

When("I enter tag slug random {kraken-string}", async function (slug) {
  let element = await this.driver.$(global.pageElements.tag.inputSlug);
  return await element.setValue(slug);
});

When("I enter tag description a-priori-0", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputDescription);
  return await element.setValue(dataAPriori[randomRow0].text.substring(0,500));
});

When("I enter tag description a-priori-1", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputDescription);
  return await element.setValue(dataAPriori[randomRow1].text.substring(0,500));
});

When("I enter tag description pseudo-0", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputDescription);
  return await element.setValue(pseudoData[0].text.substring(0,500));
});

When("I enter tag description pseudo-1", async function () {
  let element = await this.driver.$(global.pageElements.tag.inputDescription);
  return await element.setValue(pseudoData[1].text.substring(0,500));
});

When("I enter tag description random {kraken-string}", async function (description) {
  let element = await this.driver.$(global.pageElements.tag.inputDescription);
  return await element.setValue(description);
});

When("I save tag changes", async function () {
  let element = await this.driver.$(global.pageElements.tag.saveBtn);
  return await element.click();
});

Then(
  "I should see tag in tag list with name a-priori-0, slug a-priori-0 and description a-priori-0",
  async function () {
    let elements = await this.driver.$$(global.pageElements.tag.tagList);
    let encontrado = false;
    for (const element of elements) {
      const text = await element.getText();
      if (
        text.includes(dataAPriori[randomRow0].title_two) &&
        text.includes(dataAPriori[randomRow0].title_two) &&
        text.includes(dataAPriori[randomRow0].text.substring(0,500))
      ) {
        encontrado = true;
      }
    }
    expect(encontrado).to.equal(true);
  }
);

Then(
  "I should see tag in tag list with name a-priori-1, slug a-priori-1 and description a-priori-1",
  async function () {
    let elements = await this.driver.$$(global.pageElements.tag.tagList);
    let encontrado = false;
    for (const element of elements) {
      const text = await element.getText();
      if (
        text.includes(dataAPriori[randomRow1].title_two) &&
        text.includes(dataAPriori[randomRow1].title_two) &&
        text.includes(dataAPriori[randomRow1].text.substring(0,500))
      ) {
        encontrado = true;
      }
    }
    expect(encontrado).to.equal(true);
  }
);

Then(
  "I should see tag in tag list with name pseudo-0, slug pseudo-0 and description pseudo-0",
  async function () {
    let elements = await this.driver.$$(global.pageElements.tag.tagList);
    let encontrado = false;
    for (const element of elements) {
      const text = await element.getText();
      if (
        text.includes(pseudoData[0].title_two) &&
        text.includes(pseudoData[0].title_two) &&
        text.includes(pseudoData[0].text.substring(0,500))
      ) {
        encontrado = true;
      }
    }
    expect(encontrado).to.equal(true);
  }
);

Then(
  "I should see tag in tag list with name pseudo-1, slug pseudo-1 and description pseudo-1",
  async function () {
    let elements = await this.driver.$$(global.pageElements.tag.tagList);
    let encontrado = false;
    for (const element of elements) {
      const text = await element.getText();
      if (
        text.includes(pseudoData[1].title_two) &&
        text.includes(pseudoData[1].title_two) &&
        text.includes(pseudoData[1].text.substring(0,500))
      ) {
        encontrado = true;
      }
    }
    expect(encontrado).to.equal(true);
  }
);

Then(
  "I should see tag in tag list with name random {kraken-string}, slug random {kraken-string} and description random {kraken-string}",
  async function (name, slug, description) {
    let elements = await this.driver.$$(global.pageElements.tag.tagList);
    let encontrado = false;
    for (const element of elements) {
      const text = await element.getText();
      if (
        text.includes(name) &&
        text.includes(slug) &&
        text.includes(description)
      ) {
        encontrado = true;
      }
    }
    expect(encontrado).to.equal(true);
  }
);

When(
  "I click a tag with name a-priori-0, slug a-priori-0 and description a-priori-0",
  async function () {
    let elements = await this.driver.$$(global.pageElements.tag.tagList);
    let last = null;
    for (const element of elements) {
      const text = await element.getText();
      if (
        text.includes(dataAPriori[randomRow0].title_two) &&
        text.includes(dataAPriori[randomRow0].title_two) &&
        text.includes(dataAPriori[randomRow0].text.substring(0,500))
      ) {
        last = element;
      }
    }
    return await last.click();
  }
);

When(
  "I click a tag with name pseudo-0, slug pseudo-0 and description pseudo-0",
  async function () {
    let elements = await this.driver.$$(global.pageElements.tag.tagList);
    let last = null;
    for (const element of elements) {
      const text = await element.getText();
      if (
        text.includes(pseudoData[0].title_two) &&
        text.includes(pseudoData[0].title_two) &&
        text.includes(pseudoData[0].text.substring(0,500))
      ) {
        last = element;
      }
    }
    return await last.click();
  }
);

When(
  "I click a tag with name random {kraken-string}, slug random {kraken-string} and description random {kraken-string}",
  async function (name, slug, description) {
    let elements = await this.driver.$$(global.pageElements.tag.tagList);
    let last = null;
    for (const element of elements) {
      const text = await element.getText();
      if (
        text.includes(name) &&
        text.includes(slug) &&
        text.includes(description)
      ) {
        last = element;
      }
    }
    return await last.click();
  }
);

When("I click on delete tag", async function () {
  let element = await this.driver.$(global.pageElements.tag.deleteTagBtn);
  return await element.click();
});

When("I click on confirm tag delete", async function () {
  let element = await this.driver.$(global.pageElements.tag.confirmDeleteBtn);
  return await element.click();
});

Then(
  "I should not see tag in tag list with name {string}, slug {string} and description {kraken-string}",
  async function (name, slug, description) {
    let elements = await this.driver.$$(global.pageElements.tag.tagList);
    let encontrado = false;
    for (const element of elements) {
      const text = await element.getText();
      if (
        text.includes(name) &&
        text.includes(slug) &&
        text.includes(description)
      ) {
        encontrado = true;
      }
    }
    expect(encontrado).to.equal(false);
  }
);

function getRandomRow() {
  return Math.floor(Math.random() * dataAPriori.length);
}

async function fetchPseudoData() {
  try {
    const response = await fetch(
      "https://my.api.mockaroo.com/ghost_data.json?key=0d001640"
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
