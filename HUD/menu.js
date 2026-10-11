//code to open and close bigger menus essentially

function menuButton(Menu) {
    if (Menu.style.visibility == "hidden") {
        Menu.style.visibility = "visible";
        popUp.style.visibility = "visible";
    } else if (Menu.style.visibility == "visible") {
        Menu.style.visibility = "hidden";
        popUp.style.visibility = "hidden";
    }
}

// for the info menu pop-up
const infoButton = document.getElementById("infoButton");
const infoMenu = document.getElementById("info");
const popUp = document.getElementById("pop-up_Menu");

popUp.style.visibility = "hidden";
infoMenu.style.visibility = "hidden";

infoButton.addEventListener('click', function() {
    menuButton(infoMenu);
});

// working on the settings page