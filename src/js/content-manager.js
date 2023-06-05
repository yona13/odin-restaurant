import PizzaIcon from "../images/pizza.png";
import PythagorasPortrait from "../images/pythagoras-portrait.png";
import menuData from "../js/menu-data.js";

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
        this._current_course = "";
        
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
     * 
     * Return navigation panel element
     * 
     * @returns navigation panel element
     */
    get nav () { return this._nav; }

    /**
     * Navigation Panel Element Setter
     * 
     * Set navigation panel element
     * 
     * @param {HTMLElement} obj navigation panel element
     */
    set nav (obj) { this._nav = obj; }

    /**
     * Core Panel Element Getter
     * 
     * Return core element
     * 
     * @returns core element
     */
    get core () { return this._core; }

    /**
     * Core Panel Element Setter
     * 
     * Set core element
     * 
     * @param {HTMLElement} obj core element
     */
    set core (obj) { this._core = obj; }

    /**
     * Core-element Array Getter
     * 
     * Return core element array
     * 
     * @returns core elements array
     */
    get cores () { return this._cores; }

    /**
     * Core-element Array Setter
     * 
     * Sets core element array
     * 
     * @param {Array} arr array of core elements
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
        homeBtn.textContent = "Pythagorean Pizzaria"; // hard-coded
        
        
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

    /**
     * Built Restaurant Information Elements
     * 
     * For the Contact Core Element, this function will create 
     * the HTML elements for a given key-value pair of restaurant
     * information
     * 
     * @param {String} key name for information
     * @param {String} value values of the information
     * @returns HTML element representing restaurant information
     */
    buildRestaurantInfo(key, value) {
        // Create Restaurant Information Element
        const restInfo = document.createElement("div");
        restInfo.classList.add("info-block");
        restInfo.id = `${key}-info-block`;

        // Add a label for the key
        const keyLabel = document.createElement("label");
        keyLabel.classList.add("info-label");
        keyLabel.setAttribute("for", `${key}-value`);
        keyLabel.textContent = key;

        // Add the value
        const valueSpan = document.createElement("span");
        valueSpan.classList.add("info-value");
        valueSpan.id = `${key}-value`;

        // Only split the lines for addresses
        if (key !== "address")
            valueSpan.textContent = value;
        else {
            const arr = value.split(",");
            for (var i = 0; i < arr.length; i++) {
                const lineSpan = document.createElement("span");
                lineSpan.textContent += arr[i] + (i < arr.length - 1 ? "," : "");
                valueSpan.appendChild(lineSpan);
            }
        }

        // Add key-value to element
        restInfo.appendChild(keyLabel);
        restInfo.appendChild(valueSpan);

        return restInfo;
    }

    /**
     * Build Contact Form Element Function
     * 
     * For the Contact Core Element, builds the default
     * contact form for customer to send to restaurant
     * 
     * @returns HTML Element for Contact Form
     */
    buildContactForm () {
        const contactForm = document.createElement("form");
        contactForm.noValidate = true;  // prevent submission
        
        // Create form rows
        ["Name", "Email", "Message"].forEach(i => {
            const formRow = document.createElement("div");
            formRow.classList.add("form-row");
            
            // Create Input Label Element
            const labelElement = document.createElement("label");
            labelElement.classList.add("form-label");
            labelElement.setAttribute("for", i.toLowerCase());
            labelElement.textContent = i;
            formRow.appendChild(labelElement);
            
            if (i !== "Message") {
                // Create Input Element
                const inputElement = document.createElement("input");
                inputElement.classList.add("form-input");
                inputElement.id = i.toLowerCase();
                inputElement.required = true;
                
                inputElement.setAttribute(
                    "type",
                    i !== "Email" ? "text" : "email"
                );
                formRow.appendChild(inputElement);
            } else {
                const textElement = document.createElement("textarea");
                textElement.classList.add("form-input");
                textElement.id = i.toLowerCase();
                textElement.required = true;
                textElement.setAttribute("rows", 5);
                formRow.appendChild(textElement);
            }

            // Create Error Span Element
            const spanElement = document.createElement("span");
            spanElement.classList.add("error");
            spanElement.classList.add(i.toLowerCase());
            formRow.appendChild(spanElement);

            contactForm.appendChild(formRow);
        });

        // Create Submit Button
        const btn = document.createElement("button");
        btn.id = "form-submit";
        btn.setAttribute("type", "submit");
        btn.textContent = "Send message!";
        contactForm.appendChild(btn);

        return contactForm;
    }

    /**
     * Add Course Title Function
     * 
     * Add Appetisers, Mains or Desserts title to Menu Core element
     * 
     * @param {String} courseType appetisers, mains or desserts
     * @returns HTML element representing course title
     */
    addCourse (courseType) {
        // Create H2 object to represent title
        const course = document.createElement("h2");
        course.classList.add(`${courseType.toLowerCase()}-title`);
        course.textContent = courseType;
        this._current_course = courseType;

        return course;
    }

    /**
     * Build Menu Card Element Function
     * 
     * For the Menu Core Element, for each menu object, 
     * this function will build a card HTML object to the core
     * 
     * @param {Object} menuObj menu object
     * @returns HTML element representing menu card
     */
    buildMenuCard (menuObj) {
        // Create Div element for Card
        const menuDiv = document.createElement("div");
        menuDiv.classList.add("menu-object");

        // Add Image to Card from Object
        const menuPic = new Image();
        menuPic.classList.add("menu-pic");
        menuPic.src = menuObj.src;
        menuDiv.appendChild(menuPic);

        // Add Meal Name to Card from Object
        const menuName = document.createElement("h3");
        menuName.classList.add("menu-name");
        menuName.textContent = menuObj.name;
        menuDiv.appendChild(menuName);

        // Add Meal Price to Card from Object
        const menuPrice = document.createElement("h3");
        menuPrice.classList.add("menu-price");
        menuPrice.textContent = `$${menuObj.price}`;
        menuDiv.appendChild(menuPrice);

        // Add Meal Description to Card from Object
        const menuDesc = document.createElement("span");
        menuDesc.classList.add("menu-description");
        menuDesc.textContent = menuObj.description;
        menuDiv.appendChild(menuDesc);

        return menuDiv;
    }

    /**
     * Build Core Elements Function
     */
    buildCores () {
        // Build Menu Element
        const menuCore = document.createElement("div");
        menuCore.classList.add("menu");
        menuData.forEach(obj => {
            if (this._current_course === "" && obj.course === "starter")
                menuCore.appendChild(this.addCourse("Appetisers"));
            else if (this._current_course === "Appetisers" && obj.course === "main")
                menuCore.appendChild(this.addCourse("Mains"));
            else if (this._current_course === "Mains" && obj.course === "dessert") 
                menuCore.appendChild(this.addCourse("Desserts"));
            menuCore.appendChild(this.buildMenuCard(obj));
        });

        // Build Contact Element
        const contactCore = document.createElement("div");
        contactCore.classList.add("contact");
        const keyValues = {
            "info": "Get in touch, and a Pythagorean will get back to you. Remember, do not take roads traveled by the public.",
            "form": "", 
            "email": "pythagoras@pi.it", 
            "phone": "+39 345 6091109", 
            "address": "Giardino di Pitagora, Crotone, Provincia di Crotone, Italia 88900"
        };

        // Add Contact Core Elements
        ["info", "form", "email", "phone", "address"].forEach(k => {
            const contactElement = document.createElement("div");
            if (k === "info" || k === "form")
                contactElement.id = `contact-${k}`;
            else
                contactElement.id = `restaurant-${k}`;
            if (k === "info")
                contactElement.textContent = keyValues[k];
            else if (k !== "form")
                contactElement.appendChild(this.buildRestaurantInfo(k, keyValues[k]));
            else
                contactElement.appendChild(this.buildContactForm());
            contactCore.appendChild(contactElement);
        });

        // Build Home Element
        const homeCore = document.createElement("div");
        homeCore.classList.add("home");

        // Add Home Title
        const homeTitle = document.createElement("h1");
        homeTitle.id = "welcome-title";
        homeTitle.textContent = "WELCOME TO THE PYTHAGOREAN PIZZARIA";
        homeCore.appendChild(homeTitle);

        // Add Home Information
        const homeMessages = {
            "intro": "Following the 'Pythagorean diet', all the food is made without meat, beans or fish",
            "opening": "Open from 10am - Late",
            "weekly": "Seven days a week",
            "happy-hour": "Happy Hour: 3pm - 7pm"
        };

        Object.keys(homeMessages).forEach(k => {
            const messageSpan = document.createElement("span");
            messageSpan.classList.add("message-span");
            messageSpan.id = `${k}-message`
            messageSpan.textContent = homeMessages[k];
            homeCore.appendChild(messageSpan);
        });
        
        // Add Portrait of Pythagoras
        const pyPort = new Image();
        pyPort.id = "pythagoras-portrait";
        pyPort.src = PythagorasPortrait;
        homeCore.appendChild(pyPort);

        const pyLabel = document.createElement("label");
        pyLabel.id = "pythagoras-label";
        pyLabel.setAttribute("for", "pythagoras-portrait");
        pyLabel.textContent = "Portrait of Pythagoras";
        homeCore.appendChild(pyLabel);

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