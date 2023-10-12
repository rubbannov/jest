describe("Проверка отображения главной страницы", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Проверка видимости названия фильмов", () => {
    cy.contains("Зверополис").should("be.visible");
    cy.contains("Терминатор-заржавел").should("be.visible");
    cy.contains("Унесенные ветром").should("be.visible");
  });
});
