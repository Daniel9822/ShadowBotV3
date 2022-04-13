let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/atencion.mp3'
conn.sendFile(m.chat, vn, 'atencion.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /atencion|Atencion/
handler.command = new RegExp
module.exports = handler
