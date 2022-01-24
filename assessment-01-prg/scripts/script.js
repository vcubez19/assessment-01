

// Image
var theImage = document.querySelector("#page-image");


// Buttons that change image
const buttonOne = document.querySelector("#button-1");
const buttonTwo = document.querySelector("#button-2");
const buttonThree = document.querySelector("#button-3");


// P tag
const paragraph = document.querySelector("#paragraph");


// Changing images onclick
buttonOne.onclick = () => {
    theImage.src = "./images/dog-1.jpg";
}


buttonTwo.onclick = () => {
    theImage.src = "./images/dog-2.jpg";
}


buttonThree.onclick = () => {
    theImage.src = "./images/dog-3.jpg";
}


// Function to update p tag when page loads
function change_text(){
    paragraph.innerHTML = "Here is some text that appeared when the page loaded :)";
}


// Adding text when page loads
window.onload = change_text;


// Button that changes p tag text
const change = document.querySelector("#change-p");


// Changing text on button click
change.onclick = () => {
    paragraph.innerHTML = "Changed it!";
}


// Changing the text again
const changeAgain = document.querySelector("#change-p-again");


changeAgain.onclick = () => {
    paragraph.innerHTML = "You changed it again!";
}


// Changing CSS with JavaScript ****


// Change image width
const changeImageWidth = document.querySelector("#change-img-width");
var didChangeImageWidth = false;


changeImageWidth.onclick = () => {
    didChangeImageWidth = !didChangeImageWidth 
    if ( didChangeImageWidth ) { 
        theImage.style.width = "70%";
    } else {
        theImage.style.width = "40%";
    }
}


// Change text color
const changeTextColorButton = document.querySelector("#change-text-color");
var didChangeTextColor = false;


changeTextColorButton.onclick = () => {
    didChangeTextColor = !didChangeTextColor;
    if ( didChangeTextColor ) {
        paragraph.style.color = "dodgerblue";
    } else {
        paragraph.style.color = "black";
    }
}


// Show/hide image
const showImage = document.querySelector("#show-image");
const hideImage = document.querySelector("#hide-image");


showImage.onclick = () => {
    theImage.style.display = "block";
}


hideImage.onclick = () => {
    theImage.style.display = "none";
}

