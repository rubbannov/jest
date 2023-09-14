import { validUser, invalidUser } from "./user.js";
const { test, expect } = require("@playwright/test");

test("Успешная авторизация", async ({ page }) => {
  // Идем на страницу авторизации
  await page.goto("https://netology.ru/?modal=sign_in");

  // Добавляем email в поле для ввода email
  await page.fill("input[placeholder='Email']", validUser.email);

  // Добавляем пароль в поле для ввода пароля
  await page.type("input[type='password']", validUser.password);

  // Нажимаем на кнопку Войти
  await page.click("text=Войти");

  await expect(page).toHaveURL("https://netology.ru/profile");
  await expect(
    page.locator(
      "#app > div.src-LMS-containers-Layout--root--_7tuL.src-LMS-containers-Layout--inner--Vmi8T.src-LMS-containers-Layout--mobile--y2_ce > section > div.src-components-pages-Profile--root--GZ5Xm > div.src-components-layouts-ProfileTemplates-WrapTemplate--wrap--zrXel.src-components-layouts-ProfileTemplates-WrapTemplate--mobile--buwI5 > div > div > div.src-components-pages-Profile-Programs--root--kF8uD > div.src-components-pages-Profile-Programs--heading--vVw3p > h2"
    )
  ).toContainText("Моё обучение");

  await page.close();
});

test("Неуспешная авторизация", async ({ page }) => {
  // Идем на страницу авторизации
  await page.goto("https://netology.ru/?modal=sign_in");

  // Добавляем email в поле для ввода email
  await page.fill("input[placeholder='Email']", invalidUser.uncorrectEmail);

  // Добавляем пароль в поле для ввода пароля
  await page.type("input[type='password']", invalidUser.uncorrectPassword);

  // Нажимаем на кнопку Войти
  await page.click("text=Войти");

  await expect(page.locator("div [data-testid='login-error-hint']")).toHaveText(
    "Вы ввели неправильно логин или пароль"
  );

  await page.close();
});
