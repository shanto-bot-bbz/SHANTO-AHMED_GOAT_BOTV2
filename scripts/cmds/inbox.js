module.exports = {
  config: {
    name: "inbox",
    aliases: ["in"],
    version: "2.0",
    author: "Shanto",
    countDown: 10,
    role: 0,
    shortDescription: {
      en: "Bot will send a private message to your inbox"
    },
    longDescription: {
      en: "Sends a professional confirmation message to the user's private inbox/message request."
    },
    category: "fun",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function({ api, event, message }) {
    const { threadID, senderID, messageID } = event;

    try {
      // 1️⃣ Fetch User Name
      const userInfo = await api.getUserInfo(senderID);
      const name = userInfo[senderID].name;

      // 2️⃣ Premium Quotes for Inbox
      const quotes = [
        "Believe in yourself and all that you are. ✨",
        "Your potential is endless. 🚀",
        "Make today amazing! 🌈",
        "Keep pushing forward, you're doing great. 💪"
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

      // 3️⃣ Inbox Message UI
      const inboxMsg = `
 ╭──『 𝗦𝗔𝗡𝗧𝗢 𝗕𝗢𝗧 』──⟡
【
【│🎀 𝐇𝐞𝐥𝐥𝐨, ${name}!
【│🎀 𝐘𝐨𝐮𝐫 𝐈𝐃 𝐢𝐬 𝐧𝐨𝐰 𝐀𝐥𝐥𝐨𝐰𝐞𝐝.
【│🎀 𝐈'𝐦 𝐒𝐡𝐚𝐧𝐭𝐨 𝐚𝐭 𝐲𝐨𝐮𝐫 𝐬𝐞𝐫𝐯𝐢𝐜𝐞.
【│
【├─『 𝐃𝐚𝐢𝐥𝐲 𝐐𝐮𝐨𝐭𝐞 』──⟡
【│ 
【│ 📝 "${randomQuote}"
【│
【├────────────────⟡
【│ 💡 𝐓𝐢𝐩: Check Message 
【│ Requests if you don't
【│ see this in Main Inbox.
 ╰─────────────────⟡`;

      // 4️⃣ Sending Messages
      // Send to Private Inbox
      await api.sendMessage(inboxMsg, senderID);

      // Reply in Thread (Group/Chat)
      return message.reply({
        body: `
 ╭─『 𝗔𝗟𝗜𝗦𝗛𝗔 𝗕𝗢𝗧 』─⟡
【        
【  ✅ 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐭!
【
【  🎀 𝐔𝐬𝐞𝐫: ${name}
【  🍁𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐈𝐧𝐛𝐨𝐱 
【     𝐨𝐫 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐬.
 ╰─────────────────⟡`,
      }, threadID, messageID);

    } catch (error) {
      console.error("Inbox Command Error: ", error);
      return message.reply("✦━━━━━━━━━━━━━━━━━✦\n🎀 ᴜɴᴀʙʟᴇ ᴛᴏ sᴇɴᴅ ᴍᴇssᴀɢᴇ. ᴘʟᴇᴀsᴇ ᴍᴀᴋᴇ sᴜʀᴇ ʏᴏᴜʀ ɪɴʙᴏx ɪs ᴏᴘᴇɴ ᴛᴏ ᴇᴠᴇʀʏᴏɴᴇ ᴏʀ ᴄʜᴇᴄᴋ ᴇɴᴅ-ᴛᴏ-ᴇɴᴅ ᴇɴᴄʀʏᴘᴛɪᴏɴ sᴇᴛᴛɪɴɢs.\n✦━━━━━━━━━━━━━━━━━✦");
    }
  }
};
