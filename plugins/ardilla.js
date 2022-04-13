let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/ardilla.mp3'
conn.sendFile(m.chat, vn, 'ardilla.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Borracho|borracho|tomar|beber/
handler.command = new RegExp
module.exports = handler
