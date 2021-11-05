var resNumber = /[0-9]/gi;


function setCookie(Name,Value,Day)
{

    var d = new Date();
    d.setTime(d.getTime() + 24*60*60*1000*Day);
    var cookie = Name + "=" + Value + ";expires="+ d +"; Path=/";
    document.cookie = cookie;
    
}

function getCookie(Name)
{
    var arr = document.cookie.split(";")

    for (let i = 0; i < arr.length; i++) {

        var cookieName = arr[i].split("=");

        if(Name === cookieName[0].trim())
        {       
            return arr[i].trim();
        }
    }
    return null;
}

function hahCookie(Name) {
    return firstName = getCookie(Name)?true:false;
}

function DeleteCookie(Name) {
    var firstName = getCookie(Name);
    if(firstName)
    {
        var dt = new Date();
        dt.setFullYear(2000);
        document.cookie = firstName +";expires="+ dt+"; Path=/";
    }
}