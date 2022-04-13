let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/parchis.mp3'
conn.sendFile(m.chat, vn, 'parchis.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /parchis rap|Parchis rap|que rabia|maldito juego/
handler.command = new RegExp
module.exports = handler
