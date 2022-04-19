let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/pedos.mp3'
conn.sendFile(m.chat, vn, 'pedos.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /pedos|Pedos|pedo|Pedo/
handler.command = new RegExp
module.exports = handler
