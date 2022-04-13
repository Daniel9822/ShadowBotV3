let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/malhablado.mp3'
conn.sendFile(m.chat, vn, 'malhablado.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /habla|hable|gago|hablar/
handler.command = new RegExp
module.exports = handler
