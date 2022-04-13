let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/lastima.mp3'
conn.sendFile(m.chat, vn, 'lastima.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /lastima|das pena|das lastima|pendejo|Pendejo/
handler.command = new RegExp
module.exports = handler
