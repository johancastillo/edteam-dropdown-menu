/*
#################
# Elements HTML #
#################
*/
const dropdownMenu = document.getElementById("dropdown-menu")
const dropdownContent = document.getElementById("dropdown-content")
const arrow = document.getElementById("arrow")
const loader = document.getElementById("loader")

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

/*
##########
# Loader #
##########
*/
setTimeout(() => {
    loader.style.display = "none"
    document.body.style.overflow = "visible"
}, 1500)



