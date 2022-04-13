let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/imposible.mp3'
conn.sendFile(m.chat, vn, 'imposible.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /imposible|Imposible|mision|Mision/
handler.command = new RegExp
module.exports = handler
