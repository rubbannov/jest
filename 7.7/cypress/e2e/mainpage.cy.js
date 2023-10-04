import selector from "../fixtures/mainpage.selectors.json";

describe("Проверка корректности отображения главной страницы", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Проверка видимости страницы для неавторизованного посетителя", () => {
    cy.contains("кино").should("be.visible");
  });

  it("Проверка текущей даты на главной странице", () => {
    let date = new Date();
    cy.get(selector.dateToday).should("have.text", date.getDate().toString());
  });
});
