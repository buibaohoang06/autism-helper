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
    <input id="name" type="text" placeholder="Enter your name."></input>
    <input id="age" type="number" placeholder="Enter your age."></input>
    <button class="btn" id="submit" onclick="setData()">Submit</button>
    <script>
      let username = '';
      let age = '';
    </script>
  </div>
</div>
`

//feeling excelent

const feeling = `
<div id="main" class="center-align">
  <p id="welcome"></p>
  <p id="sub-welcome">How are you feeling?</p>
  <button onclick="excelent()" class="valign-wrapper btn-flat padding-100px waves-effect waves-grey"><img src="images/star.png" class="center-align margin-auto middle" height="150" width="150"></button>
  <button class="valign-wrapper btn-flat padding-100px waves-effect waves-grey"><img src="images/smile.png" class="center-align margin-auto middle" height="150" width="150"></button>
  <button class="valign-wrapper btn-flat padding-100px waves-effect waves-grey"><img src="images/sad.png" class="center-align margin-auto middle" height="150" width="150"></button>
</div>
`
//injecting head code
document.getElementById('head').innerHTML = header;

//welcome message

//setData
function setData(){
  username = document.getElementById('name').value;
  age = document.getElementById('age').value;
  window.localStorage.setItem('username', username);
  window.localStorage.setItem('age', age);
  console.log(window.localStorage.getItem('username'));
  console.log(window.localStorage.getItem('age'));
  location.reload();
};
//to app.html

function toApp(){
  window.location.replace('app.html');
}

function loggedIn(){
  let targetHtml = document.getElementById('main');
  document.getElementById('display').innerHTML = targetHtml.innerHTML;
  targetHtml.style.removeProperty("display");
}

//if user is feeling excelent
function excelent(){
  document.getElementById('display').innerHTML = `
    <div id="excelent">
      <p class="center-align">Perfect! Glad to hear that!</p>
      <p>What would you like to do now?</p>
    </div>
  `
}

//checker
if (localStorage.getItem('username') == undefined && localStorage.getItem('age') == undefined){
  document.getElementById('display').innerHTML = gettingInfo;
}
else{
  document.getElementById('display').innerHTML = feeling;
}
