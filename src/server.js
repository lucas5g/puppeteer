import puppeteer from 'puppeteer'
import { getDate, nameDay } from './utils'
import { courses, login, diaryDay } from './service/data'
import Robo from './robo'

const menu = async () => {




    const coursesDay = diaryDay[nameDay()]
    const diaryDayUrl = coursesDay.map((courseDay, index) => {
        // console.log({courseDay}, {index})
        // console.log(Object.values(courses[index]))
        const teste = courses.find(course => {
            if (course.name === courseDay) {
                return course
            }
        })

        return teste

    })
    // console.log({ coursesDay })
    // console.log({ diaryDayUrl })
    // let time = 14000
        let time = 0
        diaryDayUrl.forEach(course => {

            setTimeout(() => {

                let name = course.name
                let url = course.url
                let robo = new Robo(name, url)
                console.log({ name })
            }, time)
            time+=15000

        })

    // let name = diaryDayUrl[0].name
    // let url = diaryDayUrl[0].url
    // let robo = new Robo(name, url)
    // robo.setup()

    // console.log({name, url})



    // const diaryDayUrl = courses.map(course => {

    //   console.log(course.name)
    //   // console.log(course.name, diaryDay[nameDay()][course.name])
    //   let courseVerifyDay = diaryDay[nameDay()].find(item => {
    //     // console.log('item ', item)
    //     // console.log('course', course.name)
    //     // console.log('true ', item === course.name)
    //     return item === course.name
    //   })

    //   if (course.name === courseVerifyDay ) {
    //     return course
    //   }
    //   return course === diaryDay[course]
    // })

    // console.log(diaryDayUrl)



    // robo.setup()


}
menu()