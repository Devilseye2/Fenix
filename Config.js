const fs = require('fs')
const chalk = require('chalk')




//F E N I X - V1 UPDATE 

//contact details
global.ownernumber = ['254113419479'] //ඔයගෙ නම්බරෙ✅
global.ownername = "FENIX-ID SERVER"//ඔයගෙ නම✅
global.ytname = "YT: Fenix_programmer.inc" //don't change❌❌
global.socialm = "FENIX_ID_CASE" //don't change❌❌
global.location = "srilanka" //don't change❌❌

global.botname = 'ꜰᴇɴɪx ɪᴅ - ᴠ ɪɴꜰɪɴɪᴛᴇ' //බොට්ගෙ නම✅

//sticker details
global.stickername = '𝙁𝙀𝙉𝙄𝙓-𝙄𝘿' //ස්ට්කර් නම✅
global.packname = 'Sticker By'
global.author = '𝙁𝙐𝘾𝙆 𝘾𝙊𝘿𝙀 𝙐𝙋' //ස්ට්කර් නම✅
//console view/theme
global.themeemoji = '🦊'
global.wm = "Fenix botz inc." //don't change❌❌

//theme link
global.link = 'https://whatsapp.com/channel/0029VaV2xYy72WTw8ERfJE2w' 

//custom prefix
global.prefa = ['!'] //don't change❌❌

//ඔබට අවශ්‍ය දෙවල් true✅ සහ අනවශ්‍ය දෙවල් false❌
//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = true //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*FENIX-ID-1999E*', //don't change❌❌
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}
 //don't change❌❌
global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
