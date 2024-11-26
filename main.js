
// function to show the side menu
function showSideMenu() {
    var sideMenu = document.querySelector('.side-menu');
    sideMenu.style.display = 'flex';
}

// function to hide the side menu
function hideMenu() {
    var sideMenu = document.querySelector('.side-menu');
    sideMenu.style.display = 'none';
}


// function showMessage() {
//     var input = document.getElementById("message").value;
//     alert(input);
//     document.getElementById("message").value = ""; // Clear the input field
// }

// //to stop the page from reloading
// let button = document.querySelector('.submit-button');
// button.addEventListener('click', function(event) {
//     showMessage();
// });

// function showMessage() {
//     var username = document.getElementById("name").value;
//     if (username) {
//         var username = username;
//         var message = `${username},Thank you for reaching out to me. I will get back to you shortly.`;
//         alert(message);
//         document.getElementById("message").value = ""; // Clear the input field
//     }
// }
