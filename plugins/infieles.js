let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/infieles.mp3'
conn.sendFile(m.chat, vn, 'infieles.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /infiel|Infiel/
handler.command = new RegExp
module.exports = handler
