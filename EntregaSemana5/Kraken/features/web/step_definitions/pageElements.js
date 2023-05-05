const pageElements = {
  login: {
    userInput: "#ember8",
    passInput: "#ember10",
    loginBtn: "#ember12",
  },
  post: {
    newPost: ".gh-secondary-action.gh-nav-new-post",
    postTitle: ".gh-editor-title",
    postContent: ".koenig-editor__editor",
    newPostPreviousPage: "[href='#/posts/']",
    firstPostInList: ".gh-list > li:nth-child(2) .gh-content-entry-title",
  },
  design: {
    linkSideMenu: "#ember41",
    menuItemNameInput:
      "#settings-navigation > .gh-blognav-item .gh-blognav-line span:first-of-type input",
    menuItemUrlInput:
      "#settings-navigation > .gh-blognav-item .gh-blognav-line span:last-of-type input",
    saveBtn: ".gh-btn-blue",
  },
};

global.pageElements = pageElements;
