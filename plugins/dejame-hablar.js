let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/dejame-hablar.mp3'
conn.sendFile(m.chat, vn, 'dejame-hablar.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /dejame hablar|hablar|tranquilo|dejame/
handler.command = new RegExp
module.exports = handler
