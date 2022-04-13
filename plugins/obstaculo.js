let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/obstaculo.mp3'
conn.sendFile(m.chat, vn, 'obstaculo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /veo|Veo|quitate|Quitate/
handler.command = new RegExp
module.exports = handler
