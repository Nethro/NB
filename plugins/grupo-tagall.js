const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join``;
  const oi = `${pesan}`;
  let emot = `${pickRandom(['❤️', '💎', '🥰', '🙈', '👀', '💖', '⬟', '▢', '🥶', '❤️', '💵', '💲', '❤️‍🩹', '💓', '😍', '😈', '💀', '☠️'])}`
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
  let teks = `╭─────────\n│❏ 𝙉𝙚𝙩𝙝𝙧𝙤 𝘽𝙤𝙩 ♦️\n│❏ 𝙈𝙞𝙚𝙢𝙗𝙧𝙤𝙨 : *${participants.length}* ${oi}\n│❏ 𝙀𝙨 𝙃𝙤𝙧𝙖 𝘿𝙚 𝙅𝙪𝙜𝙖𝙧 🎮\n│\n`;
  for (const mem of participants) {
    teks += `│♦️ @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰@𝙉𝙚𝙩𝙝𝙧𝙤.𝙂𝙖𝙢𝙞𝙣𝙜`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;
