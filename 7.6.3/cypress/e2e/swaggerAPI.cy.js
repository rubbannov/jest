import { expect } from "chai";
import user from "../fixtures/user.json";
import responses from "../fixtures/responses.json";

describe("Тестирование API Swagger Pet Store", () => {
  it("Создание пользователя", () => {
    cy.request("POST", "/user", user.userJack).then((response) => {
      expect(response.body).be.eqls(responses.successfulResponse);
      expect(response.status).be.eq(200);
    });
  });
  it("Проверка поиск пользователя по юзернейму", () => {
    cy.request("GET", `/user/${user.userJack.username}`).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.eql(user.userJack);
    });
  });
  it("Внесение изменений пользователя", () => {
    cy.request(
      "PUT",
      `/user/${user.userJack.username}`,
      user.changeDataUser
    ).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.eql(responses.successfulResponse);
    });
  });
  it("Удаление пользователя", () => {
    cy.request(
      "DELETE",
      `/user/${user.userJack.username}`,
      user.userJack.username
    ).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.eql(responses.successfulDELETE);
    });
  });
});
