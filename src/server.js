import puppeteer from 'puppeteer'
import { getDate, nameDay } from './utils'
import { courses, login, diaryDay } from './service/data'
import Robo from './robo'

const menu = async () => {

    const coursesDay = diaryDay[nameDay()]
    console.log(nameDay())
    console.log({coursesDay})
    const diaryDayUrl = coursesDay.map((courseDay, index) => {
        const teste = courses.find(course => {
            if (course.name === courseDay) {
                return course
            }
        })
        return teste
    })

    let time = 0
    console.log({ diaryDayUrl })
    diaryDayUrl.forEach(course => {

        setTimeout(() => {

            let name = course.name
            let url = course.url
            let robo = new Robo(name, url)
            // robo.setup()
            console.log({ name })
        }, time)
        time+=50000

    })



}
menu()