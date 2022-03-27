
function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    console.log('0 ' + localStorage.getItem('darkmode'))
    localStorage.setItem('darkmode', !wasDarkmode);
    var x = document.getElementById("modebtn");
    var pic = document.getElementById("profile")
    var navi = document.getElementById("nav")

    if (wasDarkmode)
    {
        console.log('1 ' + wasDarkmode);
        pic.src = "profile.png";
        x.innerHTML = "Dark";
        x.classList.toggle("btn-dark");
        navi.classList.toggle("navbar-dark");
    }
    else
    {
        console.log('2 ' + wasDarkmode);
        pic.src = "profile_white.png";
        x.innerHTML = "Light";
        x.classList.toggle("btn-dark");
        navi.classList.toggle("navbar-dark");
    }

    document.body.classList.toggle("dark-mode", !wasDarkmode);
 }

 function onload() {
    var navi = document.getElementById("nav")
     if (localStorage.getItem('darkmode') === 'true')
     {
        document.body.classList.toggle("dark-mode");
        navi.classList.toggle("navbar-dark");
     }
 }

 function normode() {
    localStorage.removeItem('darkmode')

 }