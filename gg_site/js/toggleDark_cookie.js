//bioThai
//Script to set, get, and check cookie for light/dark mode toggle state

function setCookie(cookieName, cookieValue)
{
    //set path to "/" so cookie is available to whole domain
    document.cookie = cookieName + "=" + cookieValue + ";path=/";
}

function getCookie(cookieName)
{
    var cookArray;
    var cookName = cookieName + "=";
    var cookString = document.cookie.split(';');
    
    for (var i = 0; i < cookString.length; i++)
        {
            cookArray = cookString[i];
            while (cookArray.charAt(0) == ' ')
                {
                    cookArray = cookArray.substring(1);
                }
            if (cookArray.indexOf(cookName) == 0)
                {
                    return cookArray.substring(cookName.length, cookArray.length);
                }
        }
    return "";
}

function checkCookie()
{
    var element1 = document.getElementById("content");
    var element2 = document.getElementsByTagName("footer")[0];
    var toggleState = getCookie("darkMode_enabled");
    
    //if a toggleState has been defined (dark/light mode toggle icon has been clicked at least once)
    if (toggleState != "")
        {
            if (toggleState == "true")
                {
                    element1.classList.add("darkMode");
                    element2.classList.add("darkMode");
                }
            else
                {
                    element1.classList.remove("darkMode");
                    element2.classList.remove("darkMode");
                }
        }
    //If no toggleState is defined (dark/light mode toggle icon has not been clicked), then light mode is enabled as the default setting. 
}
