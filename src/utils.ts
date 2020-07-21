import moment from "moment"

export const getDate = () => {

  const date =  moment().format('D/MM/Y')

  return `Diário de Classe - ${date}`
}

