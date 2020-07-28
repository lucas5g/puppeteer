import moment from "moment"

export const getDate = () => {

    const date = moment().format('D/MM/Y')

    return `Diário de Classe - ${date}`
}


export const nameDay = () => {

    const date = new Date()
    const weekDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
        
    return weekDay[date.getDay()]
}