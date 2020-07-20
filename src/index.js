const puppeteer = require('puppeteer')
const dotenv = require('dotenv')
const { getDate } = require('./utils')

dotenv.config()

console.log(getDate())


const courses = {

  teste: {name: 'teste', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=81&section=5&singlesec=5'},
  portuguesVM3: {name: 'portuguesVM3', url:'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=49&section=1&notifyeditingon=1'},
  espanholVM2: {name: 'espanholVM2', url:'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=63&section=1&singlesec=1'}
  

}
// console.log(courses)

const login = {
  link: 'https://meuvicuna.freicarlosvicuna.com.br/',
  email: process.env.Email,
  password: process.env.Password
}

const menu = async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--start-fullscreen'] })
  const page = await browser.newPage()
  await page.setViewport({ width: 1550, height: 900 }); 

  await robo(courses.teste)

} 
const robo = async course => {
  const browser = await puppeteer.launch({ headless: true, args: ['--start-fullscreen'] })
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

  const qtdLi = await page.evaluate(() => {
    return document.querySelector('ul.section.img-text.nosubtiles.yui3-dd-drop').querySelectorAll('li').length
  })
  console.log(qtdLi)

  const ulSelected = `.section.img-text.nosubtiles.yui3-dd-drop li:nth-child(${qtdLi}) .dropdown-toggle.icon-no-margin`
  console.log(ulSelected)

  const editDuplicate = `.dropdown-menu.dropdown-menu-right.menu.align-tr-br.show  a:nth-child(5)`
  console.log(editDuplicate)

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

  await page.waitFor(1000)
  await page.screenshot({ path: `./screenshots/${[course.name]}.png`, fullPage: true })

  await browser.close()

}


const loginRob = async page => {
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