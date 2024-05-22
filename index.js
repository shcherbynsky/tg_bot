const TelegramBot = require('node-telegram-bot-api');


const token = '7110280615:AAE09S5NgZBmCyMIxLJ3DeRZpW36agPdDMk';
const bot = new TelegramBot(token, { polling: true });

bot.on('polling_error', (error) => {
  console.error('Polling error:', error);  // Логування помилки
});

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  console.log(chatId);
  const firstName = msg.from.first_name;
  const lastName = msg.from.last_name;
  const username = msg.from.username;

  console.log('User ID:', chatId);
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Username:', username);
  const text = msg.text;
  if (text === '/start') {
    await bot.sendPhoto(chatId, './assets/d07e8d11-1233-4487-b689-a4e088d344f3.jpeg', {
      // caption: 'Enter the portal and fight ghost enemies! 😈\n\nLet\'s tap!',
      caption: '<b>Enter the portal and fight ghost enemies!</b> 😈\n\n<i>Let\'s tap!</i>',
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [
            {text: 'Play Game', web_app: {url: 'https://js13kgames.com/games/xx142-b2exe/index.html'}},
          ],
          [
            {text: 'Play Game', callback_data: 'play_game', color: 'red'},
          ],
          [
            {text: 'Vlad the best', callback_data: 'vlad_the_best'}
          ],
          [
            {text: 'Vlad the best', callback_data: 'vlad_the_best'}
          ],
          [
            {text: 'Vlad the best', callback_data: 'vlad_the_best'}
          ]
        ]
      },

    });
  }
  bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
        const data = callbackQuery.data;

        if (data === 'play_game') {
            // Send a message indicating the game is starting

            // Send another message with additional buttons after handling the command
            bot.sendMessage(chatId, 'Choose an option:', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            // Large button spanning two columns
                            { text: 'Large Button', callback_data: 'large_button', columns: 2,url: 'https://example.com/large_button' }
                        ],
                        [
                            // Two buttons in two columns
                            { text: 'Button 1', url: 'https://gamirare.com/' },
                            { text: 'Button 2', url: 'https://gamirare.com/twitch-ua' },

                        ],
                        [
                            { text: 'Chat', url: 'https://t.me/@olfamelles' },
                            { text: 'Channel', url: 'https://t.me/@olfamelles' }
                        ]
                    ]
                }
            });
        }
        if(data === 'vlad_the_best') {
          bot.sendMessage(chatId, 'Vlad the best?', {
            reply_markup: {
              inline_keyboard: [
                  [
                      // Large button spanning two columns
                      { text: 'Large Button', callback_data: 'large_button', columns: 2,url: 'https://example.com/large_button' }
                  ],
                  [
                      // Two 4 in 4 columns
                      { text: 'Button 1', url: 'https://gamirare.com/' },
                      { text: 'Button 2', url: 'https://gamirare.com/twitch-ua' },
                      { text: 'Chat', url: 'https://t.me/@olfamelles' },
                      { text: 'Channel', url: 'https://t.me/@olfamelles' }
                  ],
              ]
          }
          });
        }
    });
});