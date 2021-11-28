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

//feeling

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

//if user is feeling excelent
function theActualApp(){
  document.getElementById('display').innerHTML = `
    <div id="the-actual-app">
      <p id="welcome" class="center-align"></p>
      <p class="center-align">What would you like to do now?</p>
      <div id="button-wrapper" class="center-align">
        <button class="valign-wrapper padding-50px btn-flat waves-effect waves-grey center-align"><img src="images/healthy.png" class="center-align margin-auto middle" height="100" width="100"></button>
        <button class="valign-wrapper padding-50px btn-flat waves-effect waves-grey center-align"><img src="images/sleeping.png" class="center-align margin-auto middle" height="100" width="100"></button>
        <button class="valign-wrapper padding-50px btn-flat waves-effect waves-grey center-align"><img src="images/playtime.png" class="center-align margin-auto middle" height="100" width="100"></button>
        <button class="valign-wrapper padding-50px btn-flat waves-effect waves-grey center-align"><img src="images/public-toilet.png" class="center-align margin-auto middle" height="100" width="100"></button>
        <button class="valign-wrapper padding-50px btn-flat waves-effect waves-grey center-align"><img src="images/student.png" class="center-align margin-auto middle" height="100" width="100"></button>
      </div>
      <div id="emergency" class="center-align">
        <button class="btn waves-effect red darken-1">I am having an Emergency</button>
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
