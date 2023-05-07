const url = Cypress.env("URL");
const userName = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");
const pageElements = Cypress.env("pageElements");
const LOREM1 = Cypress.env("LOREM1");

/*describe('Testing basic Angular registration', () => {
  beforeEach(()=>{
     cy.visit('https://angular-6-registration-login-example.stackblitz.io/register')
      cy.wait(7000)
      cy.get('button').click()
  })
  it('Test links between registration and login page', () => {
      cy.get('a.btn.btn-link').click()
      cy.url().should('eq', 'https://angular-6-registration-login-example.stackblitz.io/login')
      cy.get('a.btn.btn-link').click()
      cy.url().should('eq', 'https://angular-6-registration-login-example.stackblitz.io/register')
  })
  it('Test form feedback', () => {
      cy.get('button.btn.btn-primary').click()
      cy.wait(1000)
      cy.get('div.invalid-feedback').then(($divs)=>{
          expect($divs.length).to.equal(4)
      })
  })
  it('Create an user and login', ()=>{
      cy.get('form').within(() => {
          cy.get('input[formcontrolname="firstName"]').type('Monitor')
          cy.get('input[formcontrolname="lastName"]').type('Pruebas')
          cy.get('input[formcontrolname="username"]').type('pruebas')
          cy.get('input[formcontrolname="password"]').type('MISO4208')
          cy.get('button.btn.btn-primary').click()
      })
      cy.wait(1000)
      //Redirected to login
      cy.get('div.alert.alert-success').should('be.visible')  
      cy.get('form').within(() => {
          cy.get('input[formcontrolname="username"]').type('pruebas')
          cy.get('input[formcontrolname="password"]').type('MISO4208')
          cy.get('button.btn.btn-primary').click()
      })
      cy.wait(1000)
      //logged in
      cy.get('h1').then(($header)=>{
          expect($header[0].innerText).to.equal('Hi Monitor!')
      })  
  })
})*/

describe("Create Tag", () => {
  beforeEach(()=>{
    // Given I navigate to page "<URL>"
    cy.visit(url);
    // And I wait for 3 seconds
    cy.wait(3000);
    // When I enter email "<USERNAME>"
    cy.get(pageElements.login.userInput).should('be.enabled').type(userName);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I enter password "<PASSWORD>"
    cy.get(pageElements.login.passInput).should('be.enabled').type(password);
    // And I wait for 2 seconds
    cy.wait(2000);
    // And I click SignIn
    cy.get(pageElements.login.loginBtn).should('be.enabled').click();
    // And I wait for 7 seconds
    cy.wait(7000);
  })
  it("Como usuario inicio sesion en ghost, creo un tag y reviso que haya quedado en la lista de tags con los datos de entrada dados previamente", async () => {
    // And I go to the posts view
    cy.get(pageElements.tag.tagView).click();
    // And I click new post
    cy.get(pageElements.tag.newTag).click();
    // And I enter tag name "FOO BAR BAZ"
    cy.get(pageElements.tag.inputName).should('be.enabled').type("FOO BAR BAZ");
    // And I enter tag color "8889ec"
    cy.get(pageElements.tag.inputColor).should('be.enabled').type("8889ec");
    // And I enter tag description "<LOREM1>"
    cy.get(pageElements.tag.inputDescription).type(LOREM1);
    // And I save tag changes
    cy.get(pageElements.tag.saveBtn).should('be.enabled').click();
    // And I wait for 3 seconds
    cy.wait(3000);
    // And I go to the tag view
    cy.get(pageElements.tag.tagView).click();
    // And I wait for 2 seconds
    cy.wait(2000);
    // Then I should see tag in tag list with name "FOO BAR BAZ", slug "foo-bar-baz" and description "<LOREM1>"
    /*let encontrado = false;
    cy.get(pageElements.tag.tagList).each(($tag) => {
      cy.log($tag.text());
      if ($tag.text().includes("FOO BAR BAZ") && $tag.text().includes("foo-bar-baz") && $tag.text().includes(LOREM1)) {
        encontrado = true;
      }
    })
    expect(encontrado).to.equal(true);*/
    cy.get(pageElements.tag.tagList)
    .should('contain', 'FOO BAR BAZ')
    .and('contain', 'foo-bar-baz')
    .and('contain', LOREM1);
  });
});
