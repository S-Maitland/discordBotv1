const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('Replies with a joke!'),
	async execute(interaction) {
		await interaction.reply('Two fish in a tank, one turns to the other and says "You drive, I\'ll shoot"');
	},
};