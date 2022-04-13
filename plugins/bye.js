let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/bye.mp3'
conn.sendFile(m.chat, vn, 'bye.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Bye|bye/
handler.command = new RegExp
module.exports = handler
