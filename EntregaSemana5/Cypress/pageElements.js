const pageElements = {
  application: {
    body: "body",
    iframe: "iframe",
    siteTitle: ".gh-nav-menu-details-blog",
    siteDescription: ".site-description",
  },
  login: {
    userInput: "#ember8",
    passInput: "#ember10",
    loginBtn: "#ember12",
  },
  post: {
    postView: ".gh-nav-list-new [href='#/posts/']",
    newPost: "[href='#/editor/post/'].gh-secondary-action",
    postTitle: "[placeholder='Post Title']",
    postContent: "[data-placeholder='Begin writing your post...']",
    newPostPreviousPage: ".gh-editor-header [href='#/posts/']",
    firstPostInList: ".gh-list > li:nth-child(2) .gh-content-entry-title",
    postSettings: "button.post-settings",
    deletePostBtn: "button.settings-menu-delete-button",
    confirmDeleteBtn: "button.gh-btn-red > span",
    addExtraContentBtn: "button.koenig-plus-menu-button",
    addYoutubeLink:
      ".kg-cardmenu-card-hover[data-kg='cardmenu-card'][title='YouTube']",
    youtubeURLInput: "[placeholder='Paste URL to add embedded content...']",
  },
  page: {
    pageView: ".gh-nav-list [href='#/pages/']",
    newPage: "[href='#/editor/page/']",
    pageTitle: "[placeholder='Page Title']",
    pageContent: "[data-placeholder='Begin writing your page...']",
    newPagePreviousPage: ".gh-editor-header [href='#/pages/']",
    firstPageInList: ".gh-list > li:nth-child(2) .gh-content-entry-title",
    pageSettings: "button.post-settings",
    deletePageBtn: "button.settings-menu-delete-button",
    confirmDeleteBtn: "button.gh-btn-red > span",
  },
  design: {
    linkSideMenu: "ul.gh-nav-settings li:nth-child(3)",
    menuItemNameInput:
      "#settings-navigation > .gh-blognav-item .gh-blognav-line span:first-of-type input",
    menuItemUrlInput:
      "#settings-navigation > .gh-blognav-item .gh-blognav-line span:last-of-type input",
    saveBtn: ".gh-btn-blue",
    lastNavBarItem: ".site-home-header ul.nav:first-of-type li:last-child a",
    deleteButton:
      "#settings-navigation > .sortable-objects .draggable-object:last-child button",
    stayBtn: ".modal-footer button:first-of-type",
    leaveBtn: ".modal-footer button:last-of-type",
  },
  general: {
    linkSideMenu: "ul.gh-nav-settings li:nth-child(2)",
    expandTitleBtn: ".flex-column.mt2 > .gh-setting-first button",
    titleSettingsInput:
      ".form-group:not(.description-container) .ember-text-field",
    descriptionSettingsInput: ".description-container .ember-text-field",
    saveBtn: ".gh-btn-blue",
  },
  staff: {
    linkSideMenu: "ul.gh-nav-manage li:nth-child(5)",
    userToEdit: ".author",
    userEdited: ".apps-grid-cell:last-of-type",
    inputName: "#user-name",
    inputLocation: "#user-location",
    inputBio: "#user-bio",
    inputPassword: "#user-password-new",
    inputPasswordVerification: "#user-new-password-verification",
    saveBtn: ".gh-btn-blue",
    userEditedName: ".apps-grid-cell:last-of-type .apps-card-app-title",
    saveNewPassBtn: ".button-change-password",
    userProfile: ".gh-user-avatar",
    signout: ".user-menu-signout",
  },
};

global.pageElements = pageElements;
