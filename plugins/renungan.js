let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(global.renungan), 'renungan.jpeg', 'Nih renunganmu, jangan lupa dijadikan pelajaran yah buat masa depan nanti...', m)
}
handler.help = ['renungan']
handler.tags = ['maker']
handler.command = /^(renungan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.register = true
handler.fail = null

handler.limit = true
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.renungan = [
"soon lagi males bikin" 
]
