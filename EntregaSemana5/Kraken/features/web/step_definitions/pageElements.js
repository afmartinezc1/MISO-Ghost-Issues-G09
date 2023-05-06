const pageElements = {
  application: {
    body: "body",
    iframe: "iframe",
  },
  login: {
    userInput: "#ember8",
    passInput: "#ember10",
    loginBtn: "#ember12",
  },
  post: {
    postView: "[href='#/posts/']",
    newPost: "[href='#/editor/post/']",
    postTitle: "[placeholder='Post Title']",
    postContent: "[data-placeholder='Begin writing your post...']",
    newPostPreviousPage: "[href='#/posts/']",
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
    pageView: "[href='#/pages/']",
    newPage: "[href='#/editor/page/']",
    pageTitle: "[placeholder='Page Title']",
    pageContent: "[data-placeholder='Begin writing your page...']",
    newPagePreviousPage: "[href='#/pages/']",
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
    lastNavBarItem: "ul.nav li:last-child a",
    deleteButton: "#settings-navigation > .sortable-objects .draggable-object:last-child button",
    stayBtn: ".modal-footer button:first-of-type",
    leaveBtn: ".modal-footer button:last-of-type"
  },
  general: {
    linkSideMenu: "ul.gh-nav-settings li:nth-child(2)",
  },
};

global.pageElements = pageElements;
