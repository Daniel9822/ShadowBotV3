let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/madagascar.mp3'
conn.sendFile(m.chat, vn, 'madagascar.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /movimiento|muevelo|Movimiento|muevete|Muevete/
handler.command = new RegExp
module.exports = handler
