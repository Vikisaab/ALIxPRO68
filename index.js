//base by © sevenz/Yuri
//developer famofc
//deployed owneroftbh


const { default: makeWASocket, DisconnectReason, makeInMemoryStore, jidDecode, Browsers, proto, getContentType, useMultiFileAuthState, downloadContentFromMessage } = require("@adiwajshing/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const readline = require("readline");
const _ = require('lodash')
const FileType = require('file-type')
const path = require('path')
const yargs = require('yargs/yargs')
const PhoneNumber = require('awesome-phonenumber')
const simple = require('./lib/oke.js')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
global.db.chain = _.chain(global.db.data)}
loadDatabase()

const appenTextMessage = async (m, conn, text, chatUpdate) => {
let messages = await generateWAMessage(
m.key.remoteJid,
{
text: text
},
{
quoted: m.quoted,
},
);
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id);
messages.key.id = m.key.id;
messages.pushName = m.pushName;
if (m.isGroup) messages.participant = m.sender;
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: "append",
};
return conn.ev.emit("messages.upsert", msg);
}

const question = (text) => { const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); return new Promise((resolve) => { rl.question(text, resolve) }) };

async function connStart() {
const { state, saveCreds } = await useMultiFileAuthState("session")
const conn = simple({
logger: pino({ level: "silent" }),
printQRInTerminal: false,
auth: state,
version: [2, 3000, 1017531287],
 browser: Browsers.ubuntu("Edge"),
getMessage: async key => {
const jid = jidNormalizedUser(key.remoteJid);
const msg = await store.loadMessage(jid, key.id);
return msg?.message || '';
},
shouldSyncHistoryMessage: msg => {return !!msg.syncType;},
}, store);


if (!conn.authState.creds.registered) {
const phoneNumber = await question('Digite seu número do WhatsApp: \n');
let code = await conn.requestPairingCode(phoneNumber.replace(/[^\d]/g, ''));
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`code :`, code);
}
store.bind(conn.ev);



conn.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!conn.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(conn, mek, store)
require("./famofc_v11.js")(conn, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

// Setting
conn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

conn.getName = (jid, withoutContact= false) => {
id = conn.decodeJid(jid)
withoutContact = conn.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === conn.decodeJid(conn.user.id) ?
conn.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

conn.public = true

conn.serializeM = (m) => smsg(conn, m, store);
conn.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update;
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

switch (reason) {
case DisconnectReason.badSession: // Bad session file, delete and create a new one
console.error('Bad session file. Deleting session and reconnecting...');
fs.rmSync('./session', { recursive: true, force: true }); // Delete session folder
connStart();
break;

case DisconnectReason.connectionClosed: // connection closed, reconnect
case DisconnectReason.connectionLost:
case DisconnectReason.timedOut:
console.warn('Conexão fechada. Reconectando...');
connStart();
break;

case DisconnectReason.loggedOut:
console.error('Desconectado. Exclua a sessão e execute o script novamente.');
fs.rmSync('./session', { recursive: true, force: true });
connStart();
break;

case DisconnectReason.restartRequired:
console.log('Reinicialização necessária. Reconectando...');
connStart();
break;

case DisconnectReason.forbidden:
fs.rmSync('./session', { recursive: true, force: true });
connStart();
break;

default:
console.error(`Unknown disconnect reason: ${reason}. Reconnecting...`);
connStart();
break;
}
} else if (connection === 'open') {
console.log(fs.readFileSync('.log', 'utf-8'))
console.log('\n\n')
console.log('connected successfully ✅');
console.log(JSON.stringify(conn.user, null, 2))
}
});


conn.ev.on('creds.update', saveCreds)

async function getMessage(key) {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg
}
return {
conversation: "sevensbase"
}
}
conn.ev.on('messages.update', 
async(chatUpdate) => {
for (const { key, update } of chatUpdate) {
	if (update.pollUpdates && key.fromMe) {
	 const pollCreation = await getMessage(key);	
	 	if (pollCreation) {
 let pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation?.message,
							pollUpdates: update.pollUpdates,
						});
	let toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
console.log(toCmd);
	await appenTextMessage(m, conn, toCmd, pollCreation);
	await conn.sendMessage(m.cht, { delete: key });
	 	} else return false
	return 
 		}
 	}
});

conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })
//=========================================\\
conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./sticker/' + filename + '.' + type.ext) : './sticker/' + filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
//=========================================\\
conn.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}

}

conn.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await conn.getFile(path, true);
let { res, data: file, filename: pathFile } = type;

if (res && res.status !== 200 || file.length <= 65536) {
try {
throw {
json: JSON.parse(file.toString())
};
} catch (e) {
if (e.json) throw e.json;
}
}

let opt = {
filename
};

if (quoted) opt.quoted = quoted;
if (!type) options.asDocument = true;

let mtype = '',
mimetype = type.mime,
convert;

if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
else if (/video/.test(type.mime)) mtype = 'video';
else if (/audio/.test(type.mime)) {
convert = await (ptt ? toPTT : toAudio)(file, type.ext);
file = convert.data;
pathFile = convert.filename;
mtype = 'audio';
mimetype = 'audio/ogg; codecs=opus';
} else mtype = 'document';

if (options.asDocument) mtype = 'document';

delete options.asSticker;
delete options.asLocation;
delete options.asVideo;
delete options.asDocument;
delete options.asImage;

let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
let m;

try {
m = await conn.sendMessage(jid, message, { ...opt, ...options });
} catch (e) {
//console.error(e)
m = null;
} finally {
if (!m) m = await conn.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
file = null;
return m;
}
}

conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
//=========================================\\
conn.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

return conn
}




connStart()

function smsg(conn, m, store) {
if (!m) return m
let M = proto.WebMessageInfo
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.sender = conn.decodeJid(m.fromMe && conn.user.id || m.participant || m.key.participant || m.chat || '')
if (m.isGroup) m.participant = conn.decodeJid(m.key.participant) || ''
}
if (m.message) {
m.mtype = getContentType(m.message)
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])

m.body = m.message.conversation || 
(m.msg && m.msg.caption ? m.msg.caption : '') || 
(m.msg && m.msg.text ? m.msg.text : '') || 
(m.mtype == 'listResponseMessage' && m.msg ? m.msg.singleSelectReply.selectedRowId : '') || 
(m.mtype == 'buttonsResponseMessage' && m.msg ? m.msg.selectedButtonId : '') || 
(m.mtype == 'viewOnceMessage' && m.msg ? m.msg.caption : '') || 
m.text;


let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
if (m.quoted) {
let type = getContentType(quoted)
m.quoted = m.quoted[type]
if (['productMessage'].includes(type)) {
type = getContentType(m.quoted)
m.quoted = m.quoted[type]
}
if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
}
m.quoted.mtype = type
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
m.quoted.sender = conn.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === conn.decodeJid(conn.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return false
let q = await store.loadMessage(m.chat, m.quoted.id, conn)
 return exports.smsg(conn, q, store)
}
let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
})
m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })
m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options)
m.quoted.download = () => conn.downloadMediaMessage(m.quoted)
}
}
if (m.msg.url) m.download = () => conn.downloadMediaMessage(m.msg)
m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''
m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? conn.sendMedia(chatId, text, 'file', '', m, { ...options }) : conn.sendText(chatId, text, m, { ...options })
m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options)

return m
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
