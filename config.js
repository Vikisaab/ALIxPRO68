const fs = require('fs')
const file = require.resolve(__filename)


global.ownerNumber = ["923251070521@s.whatsapp.net"]
global.nomerOwner = "923251070521"
global.nomorOwner = ['923251070521']
global.namaDeveloper = "ALI-OFC" //jangn diubh bng
global.namaOwner = "ABDULLAH-PRO68"
global.namaBot = "Abdullahꪜ11𝐂r
global.versionBot = "ꪜ11"
global.packname = "ALI OFC ꪜ111"
global.author = "✨ ALI OFC MD ✨"
global.deployer = "*Owner of TBH*"
global.ThM = 'https://iili.io/2yFPx0F.png'
global.prefa = ['','!','.',',','🐤','🗿'] 
global.travaSend = "1" // total travas a ser enviado
𝐎𝐅𝐂


fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
