import "../css/normalise.css";
import "../css/style.css";
import Pizzaria from "../images/pizza.jpg";
import ContentManager from "./content-manager.js";

/* Variables */
let initialised = false;
const cm = new ContentManager();

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

    const content = document.createElement("div");
    content.id = "content";
    
    cm.generate();

    content.appendChild(cm.nav);
    content.appendChild(cm.core);

    const footer = document.createElement("div");
    footer.classList.add("footer");
    content.appendChild(footer);

    initialised = true;
    document.body.appendChild(content);
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

render();