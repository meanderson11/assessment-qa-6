import { Builder, Capabilities, By } from "selenium-webdriver"
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(() => {
    driver.get('http://localhost:3000/')
})
afterEach(async () => {
    await driver.sleep(1000)
})
afterAll(async () => {
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking draw button displays bot choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
    await driver.sleep(2000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking "Add to Duo" displays "Your Duo"', async () => {
    await driver.findElement(By.id('draw')).click()
    driver.sleep(300)
    await driver.findElement(By.xpath('//button[@class="bot-btn"]')).click()
    driver.sleep(300)
    const duo = await driver.findElement(By.id('player-duo'))
    const displayed = await duo.isDisplayed()
    expect(displayed).toBeTruthy()
})
