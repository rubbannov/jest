import adminSelector from "../../fixtures/adminpage.selectors.json";
import mainpageSelector from "../../fixtures/mainpage.selectors.json";
import users from "../../fixtures/admin.json";
import seats from "../../fixtures/seats.json";

describe("UI-тест для бронирования фильма в доступный зал", () => {
  it("Берем название фильма и бронируем его как посетитель", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login(users.login, users.password);
    cy.get(adminSelector.hallsList).should("be.visible");

    cy.get(adminSelector.movie)
      .invoke("text")
      .then((nameMovieFromAdmin) => {
        cy.visit("/");
        cy.get(mainpageSelector.tomorrow).click();
        cy.checkNameMovie(nameMovieFromAdmin);
        cy.get(mainpageSelector.timeOfSeance).click();
        cy.checkNameMovie(nameMovieFromAdmin);
        seats.forEach((seats) => {
          cy.selectSeats(seats.row, seats.seat);
        });
        cy.get(mainpageSelector.bookingButton).click();
        cy.checkNameMovie(nameMovieFromAdmin);
      });
  });
});
