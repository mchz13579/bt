let handler = async m => m.reply(`
╭─「 Discord 」
│ • Discord Nitro Clasic [Rp 100.000] (1 Month)
│ • Discord Nitro Game [Rp 180.000] (1 Month)
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['provider']
handler.tags = ['info']
handler.command = /^provider(te|si)$/i

module.exports = handler