const puppeteer = require("puppeteer");
const dotenv = require("dotenv");

dotenv.config();

const USERNAME = process.env.LINKEDIN_EMAIL;
const PASSWORD = process.env.LINKEDIN_PASSWORD;

async function sendMessages() {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: "C:\Users\janee\AppData\Local\Google\Chrome\User Data\Profile 4",
    args: ["--profile-directory=Default", "--disable-blink-features=AutomationControlled"],
  });

  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, "webdriver", { get: () => false });
  });

  await page.goto("https://www.linkedin.com/login", { waitUntil: "networkidle2" });
  await page.type("#username", USERNAME, { delay: randomDelay(100, 300) });
  await page.type("#password", PASSWORD, { delay: randomDelay(100, 300) });
  await page.keyboard.press("Enter");
  await page.waitForNavigation();

  await page.goto("https://www.linkedin.com/messaging/", { waitUntil: "networkidle2" });
  const chats = await page.$$("li.msg-conversation-listitem");

  let messagesSent = 0;

  for (let i = 0; i < Math.min(10, chats.length); i++) {
    if (messagesSent >= 20) break;

    await chats[i].click();
    await page.waitForTimeout(randomDelay(3000, 7000));

    const messageBox = await page.waitForSelector("div[role='textbox']");
    await messageBox.click();
    await typeLikeHuman(messageBox, "Hi");
    await page.keyboard.press("Enter");

    console.log(`✅ Message sent to connection ${i + 1}`);
    messagesSent++;

    await page.waitForTimeout(randomDelay(3000, 7000));
  }

  await browser.close();
}

async function typeLikeHuman(element, text) {
  for (let char of text) {
    await element.type(char, { delay: randomDelay(50, 200) });
  }
}

function randomDelay(min = 100, max = 500) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

sendMessages();
