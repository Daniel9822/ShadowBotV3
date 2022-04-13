let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/parchi2.mp3'
conn.sendFile(m.chat, vn, 'parchi2.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /rap 2|parchi rap 2/
handler.command = new RegExp
module.exports = handler
