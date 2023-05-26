import "../css/normalise.css";
import "../css/style.css";
import Pizzaria from "../images/pizza.jpg";

/* Variables */
let initialised = false;

/**
 * Initialise Function
 * 
 * Initialises the elements for the DOM
 */
function initialise () {
    const background = new Image();
    background.src = Pizzaria;
    background.classList.add("background");
    document.body.appendChild(background);

    background.addEventListener("click", (e) => {console.log(e)});  // TODO: delete after use

    const content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);

    const nav = document.createElement("div");
    nav.classList.add("nav");
    content.appendChild(nav);

    initialised = true;
    console.log("initialised!");
}

/**
 * Render Function
 * 
 * Initialises DOM & // TODO: Add additional features
 */
function render () {
    if (!initialised) // Setup content div
        initialise();
}

// Render DOM
render();