let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/sisoy.mp3'
conn.sendFile(m.chat, vn, 'sisoy.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /gay|Gay|pato|Pato/
handler.command = new RegExp
module.exports = handler
