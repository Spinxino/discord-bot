import discord
import os 
from discord.ext import tasks, commands
from itertools import cycle

intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)

bot = commands.Bot(command_prefix='.',intents=intents)

status = cycle(['Spotify', 'Youtube', 'Elden Ring' ])

@client.event 
async def on_ready():
  change_status.start()
  print('Heaven is ready.')

@tasks.loop(seconds=10)
async def change_status():
  await client.change_presence(activity=discord.Game(next(status)))


class MyCog(commands.Cog):
    def __init__(self):
        self.index = 0
        self.printer.start()

    def cog_unload(self):
        self.printer.cancel()

    @tasks.loop(seconds=5.0)
    async def printer(self):
        print(self.index)
        self.index += 1

      
client.run(os.getenv('TOKEN'))
