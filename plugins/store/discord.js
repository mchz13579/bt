let handler = async m => m.reply(`
╭─「 Discord 」
│ • Discord Nitro Clasic [Rp 100.000] (1 Month)
│ • Discord Nitro Game [Rp 180.000] (1 Month)
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['discord']
handler.tags = ['info']
handler.command = /^discord(te|si)$/i

module.exports = handler