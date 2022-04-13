let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/pantera.mp3'
conn.sendFile(m.chat, vn, 'pantera.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /suave|Suave|pantera|pant/
handler.command = new RegExp
module.exports = handler
