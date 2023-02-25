//scroll btn function
let scrollButton =document.querySelector(".scroll")
window.addEventListener("scroll", function() {
    if (window.scrollY >= 700) {
        scrollButton.style.display = "block"
    } else {
        scrollButton.style.display = "none"

    }
})
scrollButton.addEventListener("click", function(e) {
    window.scrollTo({
        left:0,
        top : 0,
        behavior : "smooth"
    })
})
