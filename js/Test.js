const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('This is the test command!'),
    async execute(interaction, client) {
        await interaction.reply('The bot is working!');
    }
}