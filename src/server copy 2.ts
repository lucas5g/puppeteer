import puppeteer from 'puppeteer'
import { getDate, nameDay } from './utils'
import { courses, login, diaryDay } from './service/data'
import Robo from './robo'

const menu = async () => {


  let name = courses[0].name
  let url = courses[0].url
  // const email: String = login.email 
  // const password = login.password
  // const robo = new Robo(name, url)

  const day = 'Tuesday'
  const teste = nameDay()

  console.log(teste === day)
  console.log(diaryDay[teste])

  // robo.setup()


}
menu()