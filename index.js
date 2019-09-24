<<<<<<< HEAD
const slackbot = require('slackbot');
const axios = require('axios');

const bot = new slackbot({
token = 'xoxp-770962157440-773167631702-759501575203-4430bdd8d1d6670cdecfb2f4afe67a6b',
name:' eubouleus bot'

});
// When it starts this is what shows up
bot.on('start',() =>{
    const params = {
        icons_emoji: ':smiley:'

    }
    bot.postMessagesToChannel('general','Hello Welcome to eubouleus bot Channel!',params);

});
=======
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");


// Creates express app
const app = express();
// The port used for Express server
const PORT = 3000;
// Starts server
app.listen(process.env.PORT || PORT, function() {
  console.log('Bot is listening on port ' + PORT);
});

>>>>>>> upstream/master
