// let buy_now_buttons = document.querySelectorAll(".buy-now-button");

// for(let i=0;i<buy_now_buttons.length;i++){
//     buy_now_buttons[i].addEventListener("click",function(e){
//         console.log(e.currentTarget);
//     })
// }
var twilio = require('twilio');
var accountSid = 'AC34ec89e9ad699abb800090891cca4f48'; // Your Account SID from www.twilio.com/console
var authToken = '562acaefe96279ec9be86ec80a38e8c0';   // Your Auth Token from www.twilio.com/console


var client = new twilio(accountSid, authToken);

function temp(){
    alert("Messege Sent");

client.messages.create({
    body: 'TRY THIS AR-"https://www.instagram.com/ar/296770051816751/?ch=OGMwMGE0MjMxNWQ0NjcxMTZiNWFkMWQ2ZGNhNjNmNTI%3D"',
    to: '+91**********',  // Text this number
    from: '+19313132115' // From a valid Twilio number
})
.then((message) => console.log(message.sid)) 
};


