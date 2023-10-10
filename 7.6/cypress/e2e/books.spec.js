const { users } = require("../fixtures/users.js");
const { book1, book2, book3 } = require("../fixtures/books.js");

describe(
  "booksApp тест на экране смартфона",
  {
    viewportHeight: 640,
    viewportWidth: 360,
  },
  () => {
    beforeEach(() => {
      cy.visit(Cypress.env("api_server"));
    });

    it("Проверка отображения страницы", () => {
      cy.contains("Books list").should("be.visible");
    });

    it("Проверка входа авторизованного пользователя", () => {
      cy.login(users.userEmail, users.userPass);
      cy.get(".pt-2")
        .should("be.visible")
        .and("have.text", "Добро пожаловать " + users.userEmail);
    });

    it("Проверка входа тестового аккаунта", () => {
      cy.login(users.testUserEmail, users.testUserPass);
      cy.get(".pt-2")
        .should("be.visible")
        .and("have.text", "Добро пожаловать " + users.testUserEmail);
    });

    it("Добавление книги в библиотеку", () => {
      cy.login(users.userEmail, users.userPass);
      cy.addBook(book1.title, book1.description, book1.authors);
      cy.addBook(book2.title, book2.description, book2.authors);
      cy.addBook(book3.title, book3.description, book3.authors);
    });

    it("Добавление книги в избранное", () => {
      cy.login(users.userEmail, users.userPass);
      cy.addToFavorite(book2.title);
      cy.contains(book2.title).click();
      cy.contains(book2.title).should("be.visible");
    });

    it("Удаление книги из избранного", () => {
      cy.login(users.userEmail, users.userPass);
      cy.contains("Favorites").click();
      cy.get("div")
        .contains(book2.title)
        .contains("Delete from favorite")
        .click();
      cy.contains("Books list").click();
      cy.get("div")
        .contains(book2.title)
        .contains("Add to favorite")
        .should("be.visible");
    });

    it("Проверка добавления книги в избранное неавторизованным пользователем", () => {
      cy.login(users.userEmail, users.userPass);
      cy.contains("Log out").click();
      cy.contains("Add to favorite").should("not.to.exist");
      cy.get("div").contains(book2.title).click();
      cy.contains("Add to favorite").should("not.to.exist");
    });
  }
);

describe(
  "booksApp тест на экране ноутбука",
  {
    viewportHeight: 768,
    viewportWidth: 1366,
  },
  () => {
    beforeEach(() => {
      cy.visit(Cypress.env("api_server"));
    });

    it("Проверка отображения страницы", () => {
      cy.contains("Books list").should("be.visible");
    });

    it("Проверка входа авторизованного пользователя", () => {
      cy.login(users.userEmail, users.userPass);
      cy.get(".pt-2")
        .should("be.visible")
        .and("have.text", "Добро пожаловать " + users.userEmail);
    });

    it("Проверка входа тестового аккаунта", () => {
      cy.login(users.testUserEmail, users.testUserPass);
      cy.get(".pt-2")
        .should("be.visible")
        .and("have.text", "Добро пожаловать " + users.testUserEmail);
    });

    // it("Добавление книги в библиотеку", () => {
    //   cy.login(users.userEmail, users.userPass);
    //   cy.addBook(book1.title, book1.description, book1.authors);
    //   cy.addBook(book2.title, book2.description, book2.authors);
    //   cy.addBook(book3.title, book3.description, book3.authors);
    // });

    it("Добавление книги в избранное", () => {
      cy.login(users.userEmail, users.userPass);
      cy.addToFavorite(book2.title);
      cy.contains(book2.title).click();
      cy.contains(book2.title).should("be.visible");
    });

    it("Удаление книги из избранного", () => {
      cy.login(users.userEmail, users.userPass);
      cy.contains("Favorites").click();
      cy.get("div")
        .contains(book2.title)
        .contains("Delete from favorite")
        .click();
      cy.contains("Books list").click();
      cy.get("div")
        .contains(book2.title)
        .contains("Add to favorite")
        .should("be.visible");
    });

    it("Проверка добавления книги в избранное неавторизованным пользователем", () => {
      cy.login(users.userEmail, users.userPass);
      cy.contains("Log out").click();
      cy.contains("Add to favorite").should("not.to.exist");
      cy.get("div").contains(book2.title).click();
      cy.contains("Add to favorite").should("not.to.exist");
    });
  }
);
