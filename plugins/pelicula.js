let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './nuevo/pelicula.mp3'
conn.sendFile(m.chat, vn, 'pelicula.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /peli|Peli|move|cine|Cine/
handler.command = new RegExp
module.exports = handler
