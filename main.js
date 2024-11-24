// const ball = document.querySelector('.ball');

// let mouseX = 0;
// let mouseY = 0;

// let ballX = 0;
// let ballY = 0;

// let speed = 0.1;

// // Update ball position
// function animate() {
// 	//Determine distance between ball and mouse
// 	let distX = mouseX - ballX;
// 	let distY = mouseY - ballY;
	
// 	// Find position of ball and some distance * speed
// 	ballX = ballX + (distX * speed);
// 	ballY = ballY + (distY * speed);
	
// 	ball.style.left = ballX + "px";
// 	ball.style.top = ballY + "px";
	
// 	requestAnimationFrame(animate);
// }
// animate();

// // Move ball with cursor
// document.addEventListener("mousemove", function(event) {
// 	mouseX = event.pageX;
// 	mouseY = event.pageY;
// });


//to stop the page from reloading
function showMessage() {
    var input = document.getElementById("message").value;
    alert(input);
    document.getElementById("message").value = ""; // Clear the input field
}

let button = document.querySelector('.submit-button');
button.addEventListener('click', function(event) {
    event.preventDefault();
    showMessage();
});
function showMessage() {
    var username = document.getElementById("name").value;
    if (username) {
        var username = username;
        var message = `${username},Thank you for reaching out to me. I will get back to you shortly.`;
        alert(message);
        document.getElementById("message").value = ""; // Clear the input field
    }
}
// Store messages in an array
// let messages = [];

// function showMessage() {
//     var input = document.getElementById("message").value;
//     if (input) {
//         messages.push(input); // Store the message
//         alert(input);
//         document.getElementById("message").value = ""; // Clear the input field
//         console.log(messages); // Log the messages to the console
//     }
// }

