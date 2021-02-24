// Modal Image Gallery
// function onClick(element) {
//     document.getElementById("earthquake").src = element.src;
//     document.getElementById("earthquake").style.display = "block";
//     var captionText = document.getElementById("caption");
//     captionText.innerHTML = element.alt;
// }

// function onClick(element) {
//     document.getElementById("amazon_review").src = element.src;
//     document.getElementById("amazon_review").style.display = "block";
//     var captionText = document.getElementById("caption");
//     captionText.innerHTML = element.alt;
// }

// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navErika");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
    for (var i = 0; i < imgContent.length; i++) {
        x = e.pageX;
        y = e.pageY;
        imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
};

document.addEventListener('mousemove', showImgContent);