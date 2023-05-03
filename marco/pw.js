function isAuth(){
    var cookie = getCookie('auth');
    if (cookie == 'true'){
        document.getElementsByClassName('hidden')[0].className = '';
        document.getElementsByClassName('password-section')[0].className = 'hidden';}
}

function getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
    }
    return "";
}

function checkPW(){
    var entered = document.getElementById("unlock").value;
    console.log(entered);
    var key = "marco18";
    //honestly don't have to secure it bc damn who would be interested in this
    if (entered == key)
    {
        document.cookie = "auth=true";
        document.getElementsByClassName('hidden')[0].className = '';
        document.getElementsByClassName('password-section')[0].className = 'hidden';
    }
}
