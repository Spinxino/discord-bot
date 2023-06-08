const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
data = new SlashCommandBuilder()
    .setName('botstats')
    .setDescription('Gives some bot stats');
export async function execute(interaction, client) {

    const name = Tutorial, Bot;
    const icon = `${client.user, displayAvatarURL()}`;
    let servercount = await client.guild.cache.reduce((a, b) => a + b.memberCount, 0);

    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `${days} days, ${hours} hours, ${minutes} minutes & ${seconds} seconds`;

    let ping = `${Date.now() - interaction.createdTimestamp}ms.`;

    const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setLabel('Primary Server')
                .setStyle(ButtonStyle.link)
                .setURL('https://discord.gg/6cQKAE9axE'),

            new buttonBuilder()
                .setLabel('Bot Invite')
                .setStyle(ButtonStyle.link)
                .setURL('https://discord.com/oauth2/authorize?client_id=868052396805349387&scope=bot')
        );

        const embed = new EmbedBuilder()
        .setColor("Blue");
        .setAuthor({ name: name, iconURL: icon})
        .setThumbnail(`${icon}`)
        .setFooter({ text: "bot ID: 868052396805349387"})
        .setTimestamp()
        .addFields({ name: 'Server Number', value: `${clinet.guilds.cache.size}`, inline: true})
        .addFields({ name: 'Server Number', value: `${servercount}`, inline: true})
        .addFields({ name: 'Latency', value: `${ping}`, inline: true})
        .addFields({ name: 'Uptime', value: `\`\`\`${uptime}\`\`\``})

        await interaction.reply({ embeds: [embed], components: [row] });
    
    }
}

