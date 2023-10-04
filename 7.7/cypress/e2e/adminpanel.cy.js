import users from "../fixtures/admin.json";
import selector from "../fixtures/adminpage.selectors.json";

describe("Проверка входа в админпанель", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin");
  });

  it("Проверка отображения панели входа в админку", () => {
    cy.get(selector.pageSubtitle).should("have.text", "Администраторррская");
    cy.get(selector.loginTitle).should("have.text", "Авторизация");
  });

  it("Проверка входа с корректными данными", () => {
    cy.login(users.login, users.password);
    cy.get(selector.hallControl).should("have.text", "Управление залами");
  });

  it("Проверка входа с некорректными данными", () => {
    cy.login(users.incorrectLogin, users.incorrectPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});
