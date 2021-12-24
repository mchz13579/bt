let handler = async m => m.reply(`
╭─「 Premium 」
│ • Canva [Rp. 10.000] (1 Month)
│ • Dropbox [Rp. 30.000] (1 Month)
│ • Iqiyi [Rp 15.000] (1 Month)
│ • Netflix [Rp 25.000] (1 Month) 
│ • Spotify [Rp 25.000] (1 Month) (no invite)
│ • Wetv [Rp 30.000] (1 Month) (no up vip)
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['accprem']
handler.tags = ['info']
handler.command = /^accprem(te|si)$/i

module.exports = handler