$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
        var root = document.querySelector(':root');
        root.style.setProperty('--nav-bar', '#FFFFFF');
        root.style.setProperty('--font-color', '#000000');
    }
    else {
        var root = document.querySelector(':root');
        root.style.setProperty('--nav-bar', 'transparent');
        root.style.setProperty('--font-color', '#F0F8FF');
    }
});

var database = firebase.database();
function writeUserData() {
    var namee = document.getElementById("name").value;
    var MobileNo = document.getElementById("mobile-number").value;
    var Email = document.getElementById("email").value;
    var Age = document.getElementById("age").value;
    var Mess = document.getElementById("message").value;

    firebase.database().ref('/'+namee).set({
        Name: namee,
        Mobile_No: "+91 "+MobileNo,
        email: Email,
        age: Age,
        Message: Mess
    });
     
}