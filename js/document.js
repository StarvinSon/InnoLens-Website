var rippleElements = document.getElementsByClassName('ripple');

//Create Ripple Effect
function createRipple() {
    //Create Ripple
    ripple = document.createElement("div");
    ripple.className = "ripple-effect run-animation"

    //Add Ripple to document
    this.appendChild(ripple);

    //Position Ripple
    ripple.style.top = (ripple.offsetTop - 12) + "px";
    ripple.style.left = (ripple.offsetLeft + 12) + "px";

    ripple.addEventListener("animationend", destroyRipple, false);
    ripple.addEventListener("webkitAnimationEnd", destroyRipple, false);
    ripple.addEventListener("oAnimationEnd", destroyRipple, false);
    ripple.addEventListener("MSAnimationEnd", destroyRipple, false);
}

function destroyRipple() {
    this.parentElement.removeChild(this);
}

//Add Event Listeners
for (var i = 0; i < rippleElements.length; i++) {
    rippleElements[i].addEventListener('mousedown', createRipple, false);
    rippleElements[i].addEventListener('touchstart', createRipple, false);
}