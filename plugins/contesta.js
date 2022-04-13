let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/contesta.mp3'
conn.sendFile(m.chat, vn, 'contesta.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Contesta|contesta|contestame|Contestame|respone|respondeme/
handler.command = new RegExp
module.exports = handler
