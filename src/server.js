import puppeteer from 'puppeteer'
import { getDate, nameDay } from './utils'
import { courses, login, diaryDay } from './service/data'
import Robo from './robo'

const menu = async () => {


    let name = courses[0].name
    let url = courses[0].url

    const coursesDay = diaryDay[nameDay()]

    // console.log({coursesDay})
    // console.log({courses})

    const diaryDayUrl = coursesDay.map((courseDay, index) => {
        // console.log({courseDay}, {index})
        // console.log(Object.values(courses[index]))
        const teste =  courses.find( course => {
            if(course.name === courseDay){
                return course 
            }
        })


        return teste 
        // console.log({teste})

    })
    console.log({ coursesDay })
    console.log({ diaryDayUrl })

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