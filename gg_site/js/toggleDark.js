//bioThai
//Script to toggle main content and footer to light/dark mode

function toggleDark()
    {
        var element1 = document.getElementById("content");
        var element2 = document.getElementsByTagName("footer")[0];
    
        element1.classList.toggle("darkMode");
        element2.classList.toggle("darkMode");
        
        //set cookies when elements are in each toggle state
        if (element1.className == "darkMode" && element2.className == "darkMode")
            {
                setCookie("darkMode_enabled", "true");
            }
        else
            {
                setCookie("darkMode_enabled", "false");
            } 
    }