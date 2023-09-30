const { clickElement, putText, getText } = require("./lib/commands.js");
//const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Бронирование билетов в кино", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test("Покупка обычного билета", async () => {
    await clickElement(
      page,
      "body > nav > a.page-nav__day.page-nav__day_chosen"
    );
    await clickElement(
      page,
      "body > main > section:nth-child(1) > div:nth-child(3) > ul > li > a"
    );
    await clickElement(page, "div:nth-child(3) > span:nth-child(5)");

    await clickElement(page, "body > main > section > button");
    await clickElement(page, "body > main > section > div > button");
    await expect(
      page.getByText(
        "Покажите QR-код нашему контроллеру для подтверждения бронирования."
      )
    ).toBeVisible();
  });

  test("Покупка VIP билета", async () => {
    await clickElement(
      page,
      "body > nav > a.page-nav__day.page-nav__day_chosen"
    );
    await clickElement(
      page,
      "body > main > section:nth-child(1) > div:nth-child(3) > ul > li > a"
    );
    await clickElement(page, "div:nth-child(3) > span:nth-child(4)");

    await clickElement(page, "body > main > section > button");
    await clickElement(page, "body > main > section > div > button");
    await expect(
      page.getByText(
        "Покажите QR-код нашему контроллеру для подтверждения бронирования."
      )
    ).toBeVisible();
  });

  test("Попытка бронирования занятого места", async () => {
    await clickElement(page, "text=Ср");
    await clickElement(page, "data-seance-id='177'");
    await clickElement(page, "div:nth-child(6) > span:nth-child(4)");

    await clickElement(page, "text=Забронировать");
  });

  // test("The first test'", async () => {
  //   const title = await page.title();
  //   console.log("Page title: " + title);
  //   await clickElement(page, "header a + a");
  //   const title2 = await page.title();
  //   console.log("Page title: " + title2);
  //   const pageList = await browser.newPage();
  //   await pageList.goto("https://netology.ru/navigation");
  //   await pageList.waitForSelector("h1");
  // });

  // test("The first link text 'Медиа Нетологии'", async () => {
  //   const actual = await getText(page, "header a + a");
  //   expect(actual).toContain("Медиа Нетологии");
  // });

  // test("The first link leads on 'Медиа' page", async () => {
  //   await clickElement(page, "header a + a");
  //   const actual = await getText(page, ".logo__media");
  //   await expect(actual).toContain("Медиа");
  // });
});

// test("Should look for a course", async () => {
//   await page.goto("https://netology.ru/navigation");
//   await putText(page, "input", "тестировщик");
//   const actual = await page.$eval("a[data-name]", (link) => link.textContent);
//   const expected = "Тестировщик ПО";
//   expect(actual).toContain(expected);
// });

// test("Should show warning if login is not email", async () => {
//   await page.goto("https://netology.ru/?modal=sign_in");
//   await putText(page, 'input[type="email"]', generateName(5));
// });
