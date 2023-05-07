const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const exp = require("constants");
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

// DESIGN //
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

Then("I should see a navBar item with name {string}", async function (navItem) {
  let element = await this.driver.$(global.pageElements.design.lastNavBarItem);
  const navBarText = await element.getText();
  expect(navBarText).to.equal(navItem.toUpperCase());
});

When("I click in navBar delete button", async function () {
  let element = await this.driver.$(global.pageElements.design.deleteButton);
  return await element.click();
});

Then("I shouldn't see a navBar item with name {string}", async function (navItem) {
  let element = await this.driver.$(`.nav-${navItem.toLowerCase()} a`);
  const existNavItem = await element.isExisting();
  expect(existNavItem).to.equal(false);
});

When("I click on stay modal design button", async function () {
  let element = await this.driver.$(global.pageElements.design.stayBtn);
  return await element.click();
});

When("I click on leave modal design button", async function () {
  let element = await this.driver.$(global.pageElements.design.leaveBtn);
  return await element.click();
});

Then("I should see the new navBar item input with name {string}", async function (navItem) {
  let element = await this.driver.$(global.pageElements.design.menuItemNameInput);
  const navBarText = await element.getValue();
  expect(navBarText).to.equal(navItem);
});

Then("I shouldn't see the new navBar item input with name {string}", async function (navItem) {
  let element = await this.driver.$(global.pageElements.design.menuItemNameInput);
  const navBarText = await element.getValue();
  expect(navBarText).to.not.equal(navItem);
});

// GENERAL //
When("I click in General", async function () {
  let element = await this.driver.$(global.pageElements.general.linkSideMenu);
  return await element.click();
});

When("I click on general settings title description expand button", async function () {
  let element = await this.driver.$(global.pageElements.general.expandTitleBtn);
  return await element.click();
});

When("I fill general settings site title with text {string}", async function (title) {
  let element = await this.driver.$(global.pageElements.general.titleSettingsInput);
  return await element.setValue(title);
});

When("I fill general settings site description with text {string}", async function (description) {
  let element = await this.driver.$(global.pageElements.general.descriptionSettingsInput);
  return await element.setValue(description);
});

When("I save general settings changes", async function () {
  let element = await this.driver.$(global.pageElements.general.saveBtn);
  return await element.click();
});

Then("I should see the new site title with text {string}", async function (title) {
  let element = await this.driver.$(global.pageElements.application.siteTitle);
  const navBarText = await element.getText();
  expect(navBarText).to.equal(title);
});

Then("I should see the new site description with text {string}", async function (description) {
  let element = await this.driver.$(global.pageElements.application.siteDescription);
  const navBarText = await element.getText();
  expect(navBarText).to.equal(description);
});

// STAFF //
When("I click in Staff", async function () {
  let element = await this.driver.$(global.pageElements.staff.linkSideMenu);
  return await element.click();
});

When("I click in author user to modify", async function () {
  let element = await this.driver.$(global.pageElements.staff.userToEdit);
  return await element.click();
});

When("I fill user full name in staff with text {string}", async function (name) {
  let element = await this.driver.$(global.pageElements.staff.inputName);
  return await element.setValue(name);
});

When("I fill user location in staff with text {string}", async function (location) {
  let element = await this.driver.$(global.pageElements.staff.inputLocation);
  return await element.setValue(location);
});

When("I fill user biography in staff with text {kraken-string}", async function (biography) {
  let element = await this.driver.$(global.pageElements.staff.inputBio);
  return await element.setValue(biography);
});

When("I fill user new password in staff with text {string}", async function (password) {
  let element = await this.driver.$(global.pageElements.staff.inputPassword);
  return await element.setValue(password);
});

When("I fill user new password verification in staff with text {string}", async function (password) {
  let element = await this.driver.$(global.pageElements.staff.inputPasswordVerification);
  return await element.setValue(password);
});

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
  "I should see user full name in staff list with text {string}",
  async function (name) {
    let element = await this.driver.$(global.pageElements.staff.userEditedName);
    const actualTitle = await element.getText();
    expect(actualTitle).to.equal(name);
  }
);

Then(
  "I should see user full name in edit user with text {string}",
  async function (name) {
    let element = await this.driver.$(global.pageElements.staff.inputName);
    const actualTitle = await element.getValue();
    expect(actualTitle).to.equal(name);
  }
);

Then(
  "I should see user location in edit user with text {string}",
  async function (location) {
    let element = await this.driver.$(global.pageElements.staff.inputLocation);
    const actualTitle = await element.getValue();
    expect(actualTitle).to.equal(location);
  }
);

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

When("I enter post content {kraken-string}", async function (content) {
  let element = await this.driver.$(global.pageElements.post.postContent);
  return await element.setValue(content);
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

When("I click tags list", async function () {
  let element = await this.driver.$(global.pageElements.post.inputTag);
  return await element.click();
});

When(
  "I select tag {string}",
  async function (tag) {
    let elements = await this.driver.$$(global.pageElements.post.tagList);
    let last = null;
    for (const element of elements) {
      const text = await element.getText();
      if (text.includes(tag)) {
        last = element;
      }
    }
    return await last.click();
  }
);

When("I click on close post settings", async function () {
  let element = await this.driver.$(global.pageElements.post.closePostSettings);
  return await element.click();
});

Then(
  "I should see the selected tag {string}",
  async function (tag) {
    let elements = await this.driver.$$(global.pageElements.post.selectedTags);
    let encontrado = false;
    for (const element of elements) {
      const text = await element.getText();
      if (text.includes(tag)) {
        encontrado = true;
      }
    }
    expect(encontrado).to.equal(true);
  }
);

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

When("I enter page content {kraken-string}", async function (content) {
  let element = await this.driver.$(global.pageElements.page.pageContent);
  return await element.setValue(content);
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

// TAGS //
When("I go to the tags view", async function () {
  let element = await this.driver.$(global.pageElements.tag.tagView);
  return await element.click();
});

When("I click new tag", async function () {
  let element = await this.driver.$(global.pageElements.tag.newTag);
  return await element.click();
});

When("I enter tag name {string}", async function (name) {
  let element = await this.driver.$(global.pageElements.tag.inputName);
  return await element.setValue(name);
});

When("I enter tag color {string}", async function (color) {
  let element = await this.driver.$(global.pageElements.tag.inputColor);
  return await element.setValue(color);
});

When("I enter tag slug {string}", async function (slug) {
  let element = await this.driver.$(global.pageElements.tag.inputSlug);
  return await element.setValue(slug);
});

When("I enter tag description {kraken-string}", async function (description) {
  let element = await this.driver.$(global.pageElements.tag.inputDescription);
  return await element.setValue(description);
});

When("I save tag changes", async function () {
  let element = await this.driver.$(global.pageElements.tag.saveBtn);
  return await element.click();
});

Then(
  "I should see tag in tag list with name {string}, slug {string} and description {kraken-string}",
  async function (name, slug, description) {
    let elements = await this.driver.$$(global.pageElements.tag.tagList);
    let encontrado = false;
    for (const element of elements) {
      const text = await element.getText();
      if (text.includes(name) && text.includes(slug) && text.includes(description)) {
        encontrado = true;
      }
    }
    expect(encontrado).to.equal(true);
  }
);

When(
  "I click a tag with name {string}, slug {string} and description {kraken-string}",
  async function (name, slug, description) {
    let elements = await this.driver.$$(global.pageElements.tag.tagList);
    let last = null;
    for (const element of elements) {
      const text = await element.getText();
      if (text.includes(name) && text.includes(slug) && text.includes(description)) {
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
      if (text.includes(name) && text.includes(slug) && text.includes(description)) {
        encontrado = true;
      }
    }
    expect(encontrado).to.equal(false);
  }
);
