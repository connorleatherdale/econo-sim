//code to open and close bigger menus essentially

function menuButton(Menu) {
    if (Menu.style.visibility == "hidden") {
        Menu.style.visibility = "visible";
        popUp.style.visibility = "visible";
    } else if (Menu.style.visibility == "visible") {
        Menu.style.visibility = "hidden";
        popUp.style.visibility = "hidden";
        console.log(Menu + "is hidden");
    }
}




// for the info menu pop-up
const infoButton = document.getElementById("infoButton");
const infoMenu = document.getElementById("info");
const popUp = document.getElementById("pop-up_Menu");
const wiki = document.getElementById("Wiki");

popUp.style.visibility = "hidden";
infoMenu.style.visibility = "hidden";

infoButton.addEventListener('click', function() {
    menuButton(infoMenu);
    settingsMenu.style.visibility = "hidden";
    buildingMenu.style.visibility = "hidden";
});

// working on the settings page
const settingsButton = document.getElementById("settings");
const settingsMenu = document.getElementById("settingsMenu");

settingsMenu.style.visibility = "hidden";

settingsButton.addEventListener("click", function() {
    menuButton(settingsMenu);
    buildingMenu.style.visibility = "hidden";
    infoMenu.style.visibility = "hidden";
})



// working on opening the building Menu
const buildingButton = document.getElementById("building");
const buildingMenu = document.getElementById("buildingMenu");

buildingMenu.style.visibility = "hidden";

buildingButton.addEventListener("click", function() {
    menuButton(buildingMenu);
    settingsMenu.style.visibility = "hidden";
    infoMenu.style.visibility = "hidden";
})



