let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/payaso.mp3'
conn.sendFile(m.chat, vn, 'payaso.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /dormir|Dormir|duerme|Duerme/
handler.command = new RegExp
module.exports = handler
