import puppeteer from 'puppeteer'
import { login } from './service/data'
import { getDate } from './utils'
import moment from 'moment'

class Robo {

  private name: string
  private url: string
  private email: string = login.email || ''
  private password: string = login.password || ''
  // constructor(name:string, url:string, email:string, password:string) {
  constructor(name: string, url: string) {
    this.name = name
    this.url = url


  }

  async teste() {

    console.log(`name ${this.name}`)
    console.log(`url ${this.url}`)
    console.log(`email ${this.email}`)
    console.log(`password ${this.password}`)
  }

  async setup() {
    const browser = await puppeteer.launch({ headless: false, /*args: ['--start-fullscreen']*/ })
    const page = await browser.newPage()
    await page.setViewport({ width: 1550, height: 900 });
    await page.goto(this.url)

    console.log('start robo')
    this.login(page)
    this.activeEdtion(page)

    const qtdLi = await this.countLi(page)
    this.duplicateLi(page, qtdLi)
    this.hideLi(page, qtdLi)
    this.print(page)


  }

  async login(page: any) {
    await page.waitFor('.btn.btn-secondary')
    await page.click('.btn.btn-secondary')


    await page.waitFor('input[name="loginfmt"]')
    await page.type('input[name="loginfmt"]', this.email, { delay: 50 })
    await page.keyboard.press('Enter')

    await page.waitFor('input[name="Password"]')
    await page.type('input[name="Password"]', this.password, { delay: 50 })
    await page.keyboard.press('Enter')

    await page.waitFor('#idSIButton9')
    await page.click('#idSIButton9')
  }

  async activeEdtion(page: any) {
    await page.waitFor(14000)
    await page.waitFor('#dropdown-2')
    await page.click('#dropdown-2')
    
    await page.waitFor('#action-menu-2-menu > div:nth-child(2) > a')
    await page.click('#action-menu-2-menu > div:nth-child(2) > a')
    console.log('clique na engrenagem, para ativar o modo edição')
  }


  async countLi(page: any) {

    await page.waitFor('ul.section.img-text.nosubtiles.yui3-dd-drop')

    const qtdLi = await page.evaluate(() => {
      const query = document.querySelector('ul.section.img-text.nosubtiles.yui3-dd-drop')

      return query?.getElementsByTagName('li').length
    })
    return qtdLi
  }

  async duplicateLi(page: any, qtdLi: number) {
    const ulSelected = `.section.img-text.nosubtiles.yui3-dd-drop li:nth-child(${qtdLi}) .dropdown-toggle.icon-no-margin`
    // console.log(ulSelected)
    const editDuplicate = `.dropdown-menu.dropdown-menu-right.menu.align-tr-br.show  a:nth-child(5)`
    
    await page.waitFor(ulSelected)
    await page.click(ulSelected)
    
    await page.waitFor(editDuplicate)
    await page.click(editDuplicate)
    
    const ulSelectedRename = `.section.img-text.nosubtiles.yui3-dd-drop li:nth-child(${qtdLi + 1})  div > div > div > span  > .quickeditlink`
    await page.waitFor(ulSelectedRename)
    await page.click(ulSelectedRename)
    
    await page.waitFor(1000)
    await page.waitFor('input[type="text"]')
    await page.type('input[type="text"]', getDate(), { delay: 50 })
    await page.keyboard.press('Enter')
    console.log('duplicate li')
  }

  async hideLi(page: any, qtdLi: number){
    await page.waitFor(7000)
    console.log('hideLi')
    const ulSelected = `.section.img-text.nosubtiles.yui3-dd-drop li:nth-child(${qtdLi}) .dropdown-toggle.icon-no-margin`
    const hide  = `.dropdown-menu.dropdown-menu-right.menu.align-tr-br.show  a:nth-child(4)`    

    await page.waitFor(ulSelected)
    await page.click(ulSelected)

    await page.waitFor(hide)
    await page.click(hide)
  }
  async print(page: any) {

    await page.waitFor(8000)
    console.log('print page')
    const fileName = `./screenshots/${moment().format('MM-D')}-${this.name}.png`
    await page.screenshot({ path: fileName , fullPage: true })

  }


}

export default Robo