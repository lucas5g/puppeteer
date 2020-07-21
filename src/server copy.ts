import  puppeteer from 'puppeteer'
import { getDate } from './utils'
import { courses, login } from './service/data'

// console.log(login)
interface Courses{
  name: string,
  url: string
}

const menu =  async () => {
// async function menu(courses: Courses){
  // const browser = await puppeteer.launch({ headless: true, args: ['--start-fullscreen'] })
  // const page = await browser.newPage()
  // await page.setViewport({ width: 1550, height: 900 }); 

  console.log(courses[0].name)
  await robo(courses[0])

} 
const robo = async (course:Courses) => {
  const browser = await puppeteer.launch({ headless: false, /*args: ['--start-fullscreen']*/ })
  const page = await browser.newPage()
  await page.setViewport({ width: 1550, height: 900 });
  await page.goto(course.url)

  await loginRob(page)

  // await geral(page)
  await page.waitFor(11000)

  await page.waitFor('#dropdown-2')
  await page.click('#dropdown-2')

  await page.waitFor('#action-menu-2-menu > div:nth-child(2) > a')
  await page.click('#action-menu-2-menu > div:nth-child(2) > a')
  // setTimeout( async() => await page.click('#action-menu-2-menu > div:nth-child(2) > a'), 1000)

  await page.waitFor('ul.section.img-text.nosubtiles.yui3-dd-drop')
  // const qtdLi = await page.$$('ul.section.img-text.nosubtiles.yui3-dd-drop').('li').length
  const qtdLi = await page.evaluate(() => {
    const query = <HTMLInputElement>document.querySelector('ul.section.img-text.nosubtiles.yui3-dd-drop')
        
    return  query?.getElementsByTagName('li').length
  })

  // console.log(qtdLi)

  const ulSelected = `.section.img-text.nosubtiles.yui3-dd-drop li:nth-child(${qtdLi}) .dropdown-toggle.icon-no-margin`
  // console.log(ulSelected)

  const editDuplicate = `.dropdown-menu.dropdown-menu-right.menu.align-tr-br.show  a:nth-child(5)`
  // console.log(editDuplicate)

  await page.waitFor(ulSelected)
  await page.click(ulSelected)

  await page.waitFor(editDuplicate)
  await page.click(editDuplicate)


  // await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 600))
  //rename
  const ulSelectedRename = `.section.img-text.nosubtiles.yui3-dd-drop li:nth-child(${qtdLi + 1})  div > div > div > span  > .quickeditlink`
  await page.waitFor(ulSelectedRename)
  await page.click(ulSelectedRename)

  await page.waitFor(1000)
  await page.waitFor('input[type="text"]')
  await page.type('input[type="text"]', getDate(), {delay: 50})
  await page.keyboard.press('Enter')

  await page.waitFor(2000)
  await page.screenshot({ path: `./screenshots/${[course.name]}.png`, fullPage: true })

  console.log(`${course.name} - Concluído com Sucesso`)

  await browser.close()

}


const loginRob = async (page:any) => {
  await page.waitFor('.btn.btn-secondary')
  await page.click('.btn.btn-secondary')
  
  
  await page.waitFor('input[name="loginfmt"]')
  await page.type('input[name="loginfmt"]', login.email, { delay: 50 })
  await page.keyboard.press('Enter')
  
  await page.waitFor('input[name="Password"]')
  await page.type('input[name="Password"]', login.password, { delay: 50 })
  await page.keyboard.press('Enter')
  
  await page.waitFor('#idSIButton9')
  await page.click('#idSIButton9')
  
}

menu()