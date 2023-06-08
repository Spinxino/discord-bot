const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { execute } = require('./ping');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`botstats`)
    .setDescription(`Gives bot stats`),
    async execute(interaction, client) {

        const name = "Tutorial";
        const icon = `${client.user.displayAvatarURL()}`;
        let servercount = await client.guilds.cache.reduce((a,b) => a+b.memberCount, 0);

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let horus = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        let uptime = `${days} days, ${hours} hours, ${minutes} minutes % ${seconds} seconds`;

        let ping = `${Date.now() - interaction.createdTimestamp}ms.`;

        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel(`Primary Server`)
            .setStyle(ButtonStyle.link)
            .setURL(""),

            new ButtonBuilder()
            .setLabel(`Bot Invite`)
            .setStyle(ButtonStyle.link)
            .setURL(``)
        )

        const embed = new EmbedBuilder()
        .setColor("Pink")
        .setAuthor({ name: name, iconURL: icon })
        .setThumbnail(`${icon}`)
        .setFooter({ text: "Bot ID: "})
        .setTimestamp()
        .addFields({ name: 'Server Numbers', value: `${client.guilds.cache.size}`, inline: true })
        .addFields({ name: 'Server Member', value: `${servercount}`, inline: true })
        .addFields({ name: 'Latency', value: `${ping}`, inline: true })
        .addFields({ name: 'Uptime', value: `\`\`\`${uptime}\`\`\`` })
        
        await interaction.reply({ embeds: [embed], components: [now]});
    }
}