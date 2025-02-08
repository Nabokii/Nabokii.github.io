//Variables and imported elements from html
let sidebar = document.getElementById("sidebar")
let title = document.getElementById("title")
let titleText = title.textContent
let desiredTitleText = "The double-edged sword of AI's influence on human society" //57
let subtitle = document.getElementById("subtitle")
let subtitleText = subtitle.textContent
let desiredSubtitleText = "Website by [redacted]"
let showing = 0

//Function for the fancy little animation of the title and subtitle in the header
function changeCharacter(old, notOld, DOMelement, speed) {
    //Temp variable for loop
    let currentIndex = 0
    //Splits the old text (the 1s and 0s) up into individual letters
    let updatedText = old.split('');

    let interval = setInterval(() => {
        if (currentIndex < updatedText.length) {
            //Changes the specific 1 or 0 that the loop is currently on into the letter that is actually wanted
            updatedText[currentIndex] = notOld[currentIndex];
            //Changes the element in the html in real time to accomodate the new letter
            DOMelement.textContent = updatedText.join('');
            currentIndex++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

//All the things that happen when the website first loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        changeCharacter(titleText, desiredTitleText, title, 60) //60
    }, 1000)
    setTimeout(function() {
        changeCharacter(subtitleText, desiredSubtitleText, subtitle, 30) //30
    }, 4700)
    setTimeout(function() {
        document.getElementById("abstract").classList.add("fadeIn")
    }, 6000)
})

//Function to slide the sidebar in when icon is clicked
function showSidebar() {
    sidebar.classList.remove("slideOut")
    sidebar.classList.add("slideIn")
}

//Function to slide the sidebar off the page when the close icon is clicked
function hideSidebar() {
    sidebar.classList.remove("slideIn")
    sidebar.classList.add("slideOut")
}

//Function to go down the page
function moveTo() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
}

document.addEventListener('scroll', function() {
    if (window.location.href = "http://sourceReview.html") {
        document.getElementsByClassName("citationDiv").classList.add("fadeIn")
    }
})

