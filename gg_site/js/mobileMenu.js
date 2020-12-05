//bioThai
//Script for mobile menu display/hide on click

function mobileMenu()
{
    var menu = document.getElementById("mobile_nav");
    if (menu.style.display == "block")
        {
            menu.style.display = "none";
        }
    else
        {
            menu.style.display = "block";
        }
}