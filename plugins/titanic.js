let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/titanic.mp3'
conn.sendFile(m.chat, vn, 'titanic.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Triste|triste|pena|Pena|llorando/
handler.command = new RegExp
module.exports = handler
