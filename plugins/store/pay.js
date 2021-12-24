let handler = async m => m.reply(`
╭─「 Pay • Premium Account 」
│ • Gopay [0851235948571]
│ • Dana [0851235948571]
│ • LinkAja [0851235948571]
╰────

╭─「 Pay • Non Premium Account 」
│ • https://saweria.co/Phinix
│ • https://trakteer.id/phinix
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['pay']
handler.tags = ['info']
handler.command = /^pay(te|si)$/i

module.exports = handler