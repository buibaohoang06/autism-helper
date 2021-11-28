//audio playing

let hungry = new Audio('audio/hungry.mp3');
let play = new Audio('audio/play.mp3');
let sleepy = new Audio('audio/sleepy.mp3');
let toilet = new Audio('audio/toilet.mp3');
let work = new Audio('audio/work.mp3');

//default header
const header = `
<meta charset="utf-8">
<meta name="author" content="Bui Bao Hoang">
<meta name="description" content="A simple web application built to create a better way to communicate with autistic people. Made with HTML, CSS, Vanilla JS and MaterializeCSS">
<!--MaterializeCSS-->
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<title>Autism Helper</title>
<!--Main CSS-->
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/customizable.css">
<!--Google Fonts-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap" rel="stylesheet">
`


//getting info

const gettingInfo = `
<div id="getting-info" class="center-align">
  <p>First of all, lets get to know you!</p>
  <div id="form">
    <input id="name" type="text" placeholder="Enter your name.">
    <input id="age" type="number" placeholder="Enter your age.">
    <input id="email" type="email" placeholder="(For parents/guardian) Enter Email Address for Notifications">
    <button class="btn" id="submit" onclick="setData()">Submit</button>
    <script>
      let username = '';
      let age = '';
      let email = '';
    </script>
  </div>
</div>
`



//injecting head code
document.getElementById('head').innerHTML = header;

//welcome message

//setData
function setData(){
  username = document.getElementById('name').value;
  age = document.getElementById('age').value;
  email = document.getElementById('email').value;
  window.localStorage.setItem('username', username);
  window.localStorage.setItem('age', age);
  window.localStorage.setItem('email', email);
  location.reload()
}
//to app.html

function toApp(){
  window.location.replace('app.html');
}

//if user is feeling excelent
function theActualApp(){
  document.getElementById('display').innerHTML = `
    <script>
    //tts
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    </script>
    <div id="the-actual-app">
      <p id="welcome" class="center-align"></p>
      <p class="center-align">What would you like to do now?</p>
      <div id="button-wrapper" class="center-align">
        <button class="valign-wrapper padding-50px btn-flat waves-effect waves-grey center-align" onclick="hungry.play()"><img src="images/healthy.png" class="center-align margin-auto middle" height="100" width="100"></button>
        <button class="valign-wrapper padding-50px btn-flat waves-effect waves-grey center-align" onclick="sleepy.play()"><img src="images/sleeping.png" class="center-align margin-auto middle" height="100" width="100"></button>
        <button class="valign-wrapper padding-50px btn-flat waves-effect waves-grey center-align" onclick="play.play()"><img src="images/playtime.png" class="center-align margin-auto middle" height="100" width="100"></button>
        <button class="valign-wrapper padding-50px btn-flat waves-effect waves-grey center-align" onclick="toilet.play()"><img src="images/public-toilet.png" class="center-align margin-auto middle" height="100" width="100"></button>
        <button class="valign-wrapper padding-50px btn-flat waves-effect waves-grey center-align" onclick="work.play()"><img src="images/student.png" class="center-align margin-auto middle" height="100" width="100"></button>
        <input id="tts-request" class="center-align" placeholder="Can't find what you want to do here? Type here!" type="text"><button class="btn" onclick="var msg = new SpeechSynthesisUtterance(document.getElementById('tts-request').value); window.speechSynthesis.speak(msg);">Speak</button>
      </div>
      <div id="emergency" class="center-align">
        <button class="btn waves-effect red darken-1" onclick="emergency()">I am having an Emergency</button>
      </div>
    </div>
  `
}

//checker
if (localStorage.getItem('username') == undefined && localStorage.getItem('age') == undefined){
  document.getElementById('display').innerHTML = gettingInfo;
}
else{
  theActualApp()
}

//Emergency

function emergency(){
  let sendingEmail = window.localStorage.getItem('email');
  Email.send({
    Host : "smtp.gmail.com",
    Username : "hoang.nicolas2409@gmail.com",
    Password : "vhsipkrewlcfiojg",
    To : sendingEmail,
    From : "hoang.nicolas2409@gmail.com",
    Subject : "Emergency Signal from Autism Helper.",
    Body : "User " + localStorage.getItem('username') + " is requesting emergency assistance!"
}).then(
  console.log('SOS Signal Sent!')
);
  var msg = new SpeechSynthesisUtterance('Help! I am in trouble!');
  for (var i = 0; i < 10; i++){
    window.speechSynthesis.speak(msg)
  };
}
