const fs = require('fs')
const file = require.resolve(__filename)


global.ownerNumber = ["923290717061@s.whatsapp.net"]
global.nomerOwner = "923290717061"
global.nomorOwner = ['923290717061']
global.namaDeveloper = "千卂爪-ㄖ千匚" //jangn diubh bng
global.namaOwner = "千卂爪-ㄖ千匚"
global.namaBot = "Fam-bot"
global.versionBot = "ꪜ11"
global.packname = "𝐅𝐀𝐌 𝐎𝐅𝐂 ꪜ11"
global.author = "✨ FAM OFC MD ✨"
global.deployer = "*Owner of TBH*"
global.ThM = 'https://iili.io/2yFPx0F.png'
global.prefa = ['','!','.',',','🐤','🗿'] 
global.travaSend = "1" // total travas a ser enviado



fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})