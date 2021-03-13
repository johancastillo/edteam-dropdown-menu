/*
#################
# Elements HTML #
#################
*/
const dropdownMenu = document.getElementById("dropdown-menu")
const dropdownContent = document.getElementById("dropdown-content")
const arrow = document.getElementById("arrow")

/*
##########
# Events #
##########
*/
dropdownMenu.addEventListener("mouseenter", () => {
    dropdownContent.style.display = "grid"
    arrow.className = "icon-chevron-up"
})

dropdownContent.addEventListener("mouseenter", () => {
    dropdownContent.style.display = "grid"
    arrow.className = "icon-chevron-up"
})

dropdownContent.addEventListener("mouseleave", () => {
    dropdownContent.style.display = "none"
    arrow.className = "icon-chevron-down"
})

// dropdownMenu.addEventListener("mouseleave", () => dropdownContent.style.display = "none")




