import puppeteer from 'puppeteer'
import { getDate } from './utils'
import { courses, login } from './service/data'
import Robo from './robo'

const menu = async () => {


  let name = courses[0].name
  let url = courses[0].url
  // const email: String = login.email 
  // const password = login.password
  const robo = new Robo(name, url)
  // robo.setup()


}
menu()