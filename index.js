let sidebar = document.getElementById("sidebar")
let title = document.getElementById("title")
let titleText = title.textContent
let desiredTitleText = "The double-edged sword of AI's influence on human society" //57
let subtitle = document.getElementById("subtitle")
let subtitleText = subtitle.textContent
let desiredSubtitleText = "Website by [redacted]"
let showing = 0

function changeCharacter(old, notOld, DOMelement, speed) {
    let currentIndex = 0
    let updatedText = old.split('');

    let interval = setInterval(() => {
        if (currentIndex < updatedText.length) {
            updatedText[currentIndex] = notOld[currentIndex];
            DOMelement.textContent = updatedText.join('');
            currentIndex++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        changeCharacter(titleText, desiredTitleText, title, 60)
    }, 1000)
    setTimeout(function() {
        changeCharacter(subtitleText, desiredSubtitleText, subtitle, 30)
    }, 4700)
    setTimeout(function() {
        document.getElementById("abstract").classList.add("fadeIn")
    }, 6000)
})

/*document.addEventListener("scroll", function() {
    document.getElementById("abstract").classList.add("fadeIn")
})*/

function showSidebar() {
    sidebar.classList.remove("slideOut")
    sidebar.classList.add("slideIn")
}

function hideSidebar() {
    sidebar.classList.remove("slideIn")
    sidebar.classList.add("slideOut")
}