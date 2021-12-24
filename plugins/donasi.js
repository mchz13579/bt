let handler = async m => m.reply(`
╭─「 Donasi • Premium Account 」
│ • Gopay [0851235948571]
│ • Dana [0851235948571]
│ • LinkAja [0851235948571]
╰────

╭─「 Donasi • Non Premium Account 」
│ • https://saweria.co/Phinix
│ • https://trakteer.id/phinix
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
