let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/taxi.mp3'
conn.sendFile(m.chat, vn, 'taxi.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /taxi|Taxi|que rico|taxiaron|taxiando|soy taxi|taxy/
handler.command = new RegExp
module.exports = handler
