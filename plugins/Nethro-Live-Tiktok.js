const handler = async (m, {conn}) => {
  m.reply(global.LiveTikTok);
};
handler.command = /^(LiveTikTok)$/i;
export default handler;

global.LiveTikTok = `
*¡Hola! Soy Nethro, tu streamer favorito de aventuras épicas y risas sin fin. Estoy en vivo ahora mismo:* https://www.tiktok.com/@nethro_gaming, 

*¡y me encantaría que te pasaras a saludar! Sumérgete en el mundo de Nethro Gaming, donde cada stream es una nueva aventura. ¡Te espero! *
`;
