import PizzaIcon from "../images/pizza.png";

export default class ContentManager {
    /**
     * Content Manager Class
     * 
     * Manages content on the page that depends on the
     * user selection along the navigation panel.
     */
    constructor () {
        // Initialise variables
        this._keys = ["Menu", "Contact"];
        this.index = this._keys.length;
        
        // Initialise HTML Elements
        this.nav = document.createElement("div");
        this._nav.classList.add("nav");
        this.core = document.createElement("div");
        this._core.classList.add("core");
        this.cores = [];  // list of html core elements
    } 

    /**
     * Index Getter
     * 
     * Return user selection index
     * 
     * @returns selected index; legal values:
     *      0: Menu
     *      1: Contact
     *      2: Home
     */
    get index () { return this._index; }

    /**
     * Index Setter
     * 
     * Set user selection index
     * 
     * @param {Number} value legal values:
     *      0: Menu
     *      1: Contact
     *      2: Home
     */
    set index (value) { this._index = value; }

    /**
     * Navigation Panel Element Getter
     * // TODO: Add information
     */
    get nav () { return this._nav; }

    /**
     * Navigation Panel Element Setter
     * // TODO: Add information
     */
    set nav (obj) { this._nav = obj; }

    /**
     * Core Panel Element Getter
     * // TODO: Add information
     */
    get core () { return this._core; }

    /**
     * Core Panel Element Setter
     * // TODO: Add information
     */
    set core (obj) { this._core = obj; }

    /**
     * Core-element Array Getter
     * // TODO: Add information
     */
    get cores () { return this._cores; }

    /**
     * Core-element Array Setter
     * // TODO: Add information
     */
    set cores (arr) {
        this._cores = [];
        arr.forEach(c => this._cores.push(c));
    }

    /**
     * Update Function
     * 
     * Updates navigation panel element to highlight and 
     * sets the core content to display
     * 
     * @param {String} key update key
     */
    update (key) {
        // Build key-id
        const keyID = `nav-${key.toLowerCase()}`;
        this._nav.querySelectorAll(".nav-obj").forEach(child => {
            // Highlight navigation element selected
            if (child.id === keyID)
                child.classList.add("key-selected");

            // Remove any highlights if not selected
            else
                child.classList.remove("key-selected");
        });

        // Update selection index
        if (this._keys.includes(key))
            this.index = this._keys.indexOf(key);
        else
            this.index = this._keys.length;
        
        // Update display
        this.setCore();
    }

    /**
     * Build Home Navigation Panel Element Function
     * 
     * Create elements and content for the Home navigation
     * panele element, including name of restaurant and icon 
     * for the home panel
     */
    buildHome () {
        // Create element
        const home = document.createElement("div");
        home.classList.add("nav-obj");
        home.id = "nav-home";

        // First, create button with restaurant name
        const homeBtn = document.createElement("button");
        homeBtn.classList.add("nav-button");
        homeBtn.textContent = "Pythagoras' Pizzaria"; // hard-coded
        
        // Next, create icon element (courtesy FlatIcon)
        const icon = new Image();
        icon.src = PizzaIcon;
        icon.classList.add("nav-icon");

        // Default, item should be highlighted
        home.classList.add("key-selected");

        // Update index & set core on element's click-event
        home.addEventListener("click", (e) => { this.update("home"); });
        
        // Add elements to other elements
        home.appendChild(homeBtn);
        home.appendChild(icon);
        this._nav.appendChild(home);
    }

    /**
     * Build Navigation Panel Elements Function
     * 
     * For all default keys, create buttons or required HTML
     * element for the given key in the navigation panel
     */
    buildNavigation () {
        // For keys, create navigation elements
        this._keys.forEach(k => {
            // Default keys only get buttons
            const btn = document.createElement("button");
            btn.classList.add("nav-obj");
            btn.classList.add("nav-button");
            btn.id = `nav-${k.toLowerCase()}`;
            btn.textContent = k;

            // Update index & set core on button's click-event
            btn.addEventListener("click", (e) => { this.update(k); });
            
            // Add button to navigation element
            this._nav.append(btn);
        });
        this.buildHome();
    }

    /**
     * Set Core Content Function
     * 
     * Dependent on user selection index, core content should
     * be updated to reflect the desired selection from previously
     * generated core elements
     */
    setCore () {
        // Remove inner HTML element from core element
        this._core.innerHTML = "";

        // Add desired HTML element to core element
        this._core.appendChild(this._cores[this._index]);
    }

    buildContactForm () {
        const contactForm = document.createElement("form");
        contactForm.noValidate = true;  // prevent submission
        
        // Create form rows
        ["Name", "Email", "Message"].forEach(i => {
            const formRow = document.createElement("div");
            formRow.classList.add("form-row");
            
            if (i !== "Message") {
                // Create Input Element
                const inputElement = document.createElement("input");
                inputElement.id = i.toLowerCase();
                inputElement.required = true;
                
                inputElement.setAttribute(
                    "type",
                    i !== "Email" ? "text" : "email"
                );
                formRow.appendChild(inputElement);
            } else {
                const textElement = document.createElement("textarea");
                textElement.id = i.toLowerCase();
                textElement.required = true;
                textElement.setAttribute("rows", 5);
                formRow.appendChild(textElement);
            }
            
            // Create Input Label Element
            const labelElement = document.createElement("label");
            labelElement.setAttribute("for", i.toLowerCase());
            labelElement.textContent = i;

            // Create Error Span Element
            const spanElement = document.createElement("span");
            spanElement.classList.add("error");
            spanElement.classList.add(i.toLowerCase());

            // Add elements to other elements
            formRow.appendChild(labelElement);
            formRow.appendChild(spanElement);
            contactForm.appendChild(formRow);
        });

        // Create Submit Button
        const btn = document.createElement("button");
        btn.setAttribute("type", "submit");
        btn.textContent = "Send message!";
        contactForm.appendChild(btn);

        return contactForm;
    }

    /**
     * Build Core Elements Function
     */
    buildCores () {
        // Build Menu Element
        const menuCore = document.createElement("div");
        menuCore.classList.add("menu");
        // TODO: Build Menu

        // Build Contact Element
        const contactCore = document.createElement("div");
        contactCore.classList.add("contact");
        const keyValues = {
            "info": "Get in touch, and one of my followers will get back to you as soon as possible. Remember, do not take roads traveled by the public.",
            "form": "", 
            "email": "pythagoras@pi.it", 
            "phone": "+39 345 6091109", 
            "address": "Giardino di Pitagora, Crotone, Provincia di Crotone, Italia 88900"
        };
        ["info", "form", "email", "phone", "address"].forEach(k => {
            const contactElement = document.createElement("div");
            if (k === "info" || k === "form")
                contactElement.id = `contact-${k}`;
            else
                contactElement.id = `restaurant-${k}`;
            if (k !== "form")
                contactElement.textContent = keyValues[k];
            else 
                contactElement.appendChild(this.buildContactForm());
            contactCore.appendChild(contactElement);
        });
        // TODO: Build Contact

        // Build Home Element
        const homeCore = document.createElement("div");
        homeCore.classList.add("home");
        // TODO: Build Home

        // Add elements to cores array
        this._cores.push(menuCore);
        this._cores.push(contactCore);
        this._cores.push(homeCore);

        // Setup default core content, i.e. home-page
        this.setCore();
    }

    /**
     * Generate Function
     * 
     * Generates all HTML elements for restaurant page
     */
    generate () {
        this.buildNavigation();
        this.buildCores();
    }
};