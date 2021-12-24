let handler = async m => m.reply(`
╭─「 Domain • 1 YEAR」
│ • .my.id [Rp. 20.000] 
│ • .com [Rp. 150.000] 
│ • .net [Rp 200.000] 
│ • .site [Rp 25.000]  
│ • .xyz [Rp 20.000] 
╰────

note: control cloudflare(1*24h), more please order

format pemesanan: nama.domain (cth: phinix.my.id)
`.trim()) // Tambah sendiri kalo mau
handler.help = ['domain']
handler.tags = ['info']
handler.command = /^domain(te|si)$/i

module.exports = handler