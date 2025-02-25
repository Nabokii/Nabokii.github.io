document.addEventListener('scroll', function() {
    setTimeout(function() {
        document.getElementsByClassName("citationDiv").classList.add("fadeIn")
        document.getElementsByClassName("citationDiv").classList.remove("hidden2")
    }, 2000)
})
