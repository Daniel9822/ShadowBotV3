let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/visibilidad.mp3'
conn.sendFile(m.chat, vn, 'visibilidad.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /viste|vio|permiso/
handler.command = new RegExp
module.exports = handler
