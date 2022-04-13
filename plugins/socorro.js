let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/socorro.mp3'
conn.sendFile(m.chat, vn, 'socorro.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /ayuda|Ayuda|socorro/
handler.command = new RegExp
module.exports = handler
