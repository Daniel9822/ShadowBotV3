let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/mienten.mp3'
conn.sendFile(m.chat, vn, 'mienten.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /mientes|Mientes|Mienten|mienten/
handler.command = new RegExp
module.exports = handler
