const moment = require("moment")

exports.getDate = () => {

  const date =  moment().format('D/MM/Y')

  return `Diário de Classe ${date}`
}
