import "../css/normalise.css";
import "../css/style.css";
import Pizzaria from "../images/pizza.jpg";
import ContentManager from "./content-manager.js";

/* Variables */
const cm = new ContentManager();

/**
 * Render Function
 * 
 * Initialises layout using Content Manager
 */
function render () {
    // Setup the background image
    const background = new Image();
    background.src = Pizzaria;
    background.classList.add("background");
    document.body.appendChild(background);

    // Create Content Element
    const content = document.createElement("div");
    content.id = "content";
    
    // Use Content Manager to Generate layout
    cm.generate();
    content.appendChild(cm.nav);
    content.appendChild(cm.core);

    // Add Footer
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "Yona \u00a9 2023";
    content.appendChild(footer);

    document.body.appendChild(content);
}

// Render everything
render();