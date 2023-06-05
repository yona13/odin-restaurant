"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["contentManager"],{

/***/ "./src/js/content-manager.js":
/*!***********************************!*\
  !*** ./src/js/content-manager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentManager)
/* harmony export */ });
/* harmony import */ var _images_pizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pizza.png */ "./src/images/pizza.png");
/* harmony import */ var _images_pythagoras_portrait_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/pythagoras-portrait.png */ "./src/images/pythagoras-portrait.png");
/* harmony import */ var _js_menu_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/menu-data.js */ "./src/js/menu-data.js");




class ContentManager {
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
        icon.src = _images_pizza_png__WEBPACK_IMPORTED_MODULE_0__;
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
        _js_menu_data_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(obj => {
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
        pyPort.src = _images_pythagoras_portrait_png__WEBPACK_IMPORTED_MODULE_1__;
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

/***/ }),

/***/ "./src/js/menu-data.js":
/*!*****************************!*\
  !*** ./src/js/menu-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_azerbaijan_burrata_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/azerbaijan-burrata.jpg */ "./src/images/azerbaijan-burrata.jpg");
/* harmony import */ var _images_azerbaijan_cheesy_garlic_bread_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/azerbaijan-cheesy-garlic-bread.jpg */ "./src/images/azerbaijan-cheesy-garlic-bread.jpg");
/* harmony import */ var _images_azerbaijan_spanakopita_spring_rolls_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/azerbaijan-spanakopita-spring-rolls.jpg */ "./src/images/azerbaijan-spanakopita-spring-rolls.jpg");
/* harmony import */ var _images_azerbaijan_burrata_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/azerbaijan-burrata-pizza.jpg */ "./src/images/azerbaijan-burrata-pizza.jpg");
/* harmony import */ var _images_azerbaijan_margharita_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/azerbaijan-margharita-pizza.jpg */ "./src/images/azerbaijan-margharita-pizza.jpg");
/* harmony import */ var _images_azerbaijan_spicy_pizza_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/azerbaijan-spicy-pizza.jpg */ "./src/images/azerbaijan-spicy-pizza.jpg");
/* harmony import */ var _images_azerbaijan_mushroom_pizza_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/azerbaijan-mushroom-pizza.jpg */ "./src/images/azerbaijan-mushroom-pizza.jpg");
/* harmony import */ var _images_azerbaijan_mini_pizza_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/azerbaijan-mini-pizza.jpg */ "./src/images/azerbaijan-mini-pizza.jpg");
/* harmony import */ var _images_azerbaijan_choc_brownie_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/azerbaijan-choc-brownie.jpg */ "./src/images/azerbaijan-choc-brownie.jpg");
/* harmony import */ var _images_azerbaijan_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/azerbaijan-tiramisu.jpg */ "./src/images/azerbaijan-tiramisu.jpg");











/**
 * List of Menu Objects
 * 
 * Contains: 
 *      -> Course Type
 *      -> Name for meal
 *      -> Description of Meal
 *      -> Price
 *      -> Image Source
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        course: "starter",
        name: "Burrata",
        description: "Fresh tomatoes served with burrata cheese on grilled bread",
        price: 5,
        src: _images_azerbaijan_burrata_jpg__WEBPACK_IMPORTED_MODULE_0__
    }, {
        course: "starter",
        name: "Garlic Bread",
        description: "Oven baked cheesy garlic bread",
        price: 7,
        src: _images_azerbaijan_cheesy_garlic_bread_jpg__WEBPACK_IMPORTED_MODULE_1__
    }, {
        course: "starter",
        name: "Spanakopita Spring Rolls",
        description: "Samian style spanakopita, rolled up",
        price: 5,
        src: _images_azerbaijan_spanakopita_spring_rolls_jpg__WEBPACK_IMPORTED_MODULE_2__
    }, {
        course: "main",
        name: "Burrata Pizza",
        description: "Want a burrata? Want a pizza? Why not both?",
        price: 11,
        src: _images_azerbaijan_burrata_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__
    }, {
        course: "main",
        name: "Margharitta Pizza",
        description: "The safe one. Tomato sauce and cheese on pizza",
        price: 11,
        src: _images_azerbaijan_margharita_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__
    }, {
        course: "main",
        name: "The Central Fire Pizza",
        description: "Olives & Serrano Peppers. Served with hot sauce",
        price: 13,
        src: _images_azerbaijan_spicy_pizza_jpg__WEBPACK_IMPORTED_MODULE_5__
    }, {
        course: "main",
        name: "Pizza ai Funghi",
        description: "For all the mycologists out there",
        price: 13,
        src: _images_azerbaijan_mushroom_pizza_jpg__WEBPACK_IMPORTED_MODULE_6__
    }, {
        course: "main",
        name: "Kids Pizza",
        description: "The kid-sized pizza. A mini margharitta",
        price: 7,
        src: _images_azerbaijan_mini_pizza_jpg__WEBPACK_IMPORTED_MODULE_7__
    }, {
        course: "dessert",
        name: "Chocolate Brownie with Vanilla Ice Cream",
        description: "This rich chocoloate brownie is served with some vanilla ice cream",
        price: 7,
        src: _images_azerbaijan_choc_brownie_jpg__WEBPACK_IMPORTED_MODULE_8__
    }, {
        course: "dessert",
        name: "Tiramisu",
        description: "Elegant and rich, this delicately made dessert is made with espresso, wine, rum and cocoa powder",
        price: 11,
        src: _images_azerbaijan_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_9__
    },
]);

/***/ }),

/***/ "./src/images/azerbaijan-burrata-pizza.jpg":
/*!*************************************************!*\
  !*** ./src/images/azerbaijan-burrata-pizza.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4a7cdd8f9d8234423b3.jpg";

/***/ }),

/***/ "./src/images/azerbaijan-burrata.jpg":
/*!*******************************************!*\
  !*** ./src/images/azerbaijan-burrata.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a83ffa1c3133d0b7bb3.jpg";

/***/ }),

/***/ "./src/images/azerbaijan-cheesy-garlic-bread.jpg":
/*!*******************************************************!*\
  !*** ./src/images/azerbaijan-cheesy-garlic-bread.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29a659d11cf13545fac1.jpg";

/***/ }),

/***/ "./src/images/azerbaijan-choc-brownie.jpg":
/*!************************************************!*\
  !*** ./src/images/azerbaijan-choc-brownie.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bd9f29054b97f3d3d54.jpg";

/***/ }),

/***/ "./src/images/azerbaijan-margharita-pizza.jpg":
/*!****************************************************!*\
  !*** ./src/images/azerbaijan-margharita-pizza.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13fb44ea5a6552f94f3b.jpg";

/***/ }),

/***/ "./src/images/azerbaijan-mini-pizza.jpg":
/*!**********************************************!*\
  !*** ./src/images/azerbaijan-mini-pizza.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db0d4e00d779e0554692.jpg";

/***/ }),

/***/ "./src/images/azerbaijan-mushroom-pizza.jpg":
/*!**************************************************!*\
  !*** ./src/images/azerbaijan-mushroom-pizza.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5764e77bc97e494283e2.jpg";

/***/ }),

/***/ "./src/images/azerbaijan-spanakopita-spring-rolls.jpg":
/*!************************************************************!*\
  !*** ./src/images/azerbaijan-spanakopita-spring-rolls.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27fdf4dbf9e3f597c7fd.jpg";

/***/ }),

/***/ "./src/images/azerbaijan-spicy-pizza.jpg":
/*!***********************************************!*\
  !*** ./src/images/azerbaijan-spicy-pizza.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25eb260f8360c57e8f71.jpg";

/***/ }),

/***/ "./src/images/azerbaijan-tiramisu.jpg":
/*!********************************************!*\
  !*** ./src/images/azerbaijan-tiramisu.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4db955b6613df27ad203.jpg";

/***/ }),

/***/ "./src/images/pizza.png":
/*!******************************!*\
  !*** ./src/images/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bc66d5ec0da54f0bd44.png";

/***/ }),

/***/ "./src/images/pythagoras-portrait.png":
/*!********************************************!*\
  !*** ./src/images/pythagoras-portrait.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3978a9b5af41e6e48234.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/content-manager.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25ld0Q7QUFDZTtBQUNTO0FBQ2Q7QUFDTTtBQUNWO0FBQ007QUFDUjtBQUNJO0FBQ1A7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyREFBUTtBQUNyQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVFQUFXO0FBQ3hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNEVBQWU7QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpRUFBWTtBQUN6QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9FQUFlO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0RBQVU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrRUFBYTtBQUMxQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhEQUFTO0FBQ3RCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0VBQVc7QUFDeEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0REFBUTtBQUNyQixLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9qcy9jb250ZW50LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2pzL21lbnUtZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGl6emFJY29uIGZyb20gXCIuLi9pbWFnZXMvcGl6emEucG5nXCI7XG5pbXBvcnQgUHl0aGFnb3Jhc1BvcnRyYWl0IGZyb20gXCIuLi9pbWFnZXMvcHl0aGFnb3Jhcy1wb3J0cmFpdC5wbmdcIjtcbmltcG9ydCBtZW51RGF0YSBmcm9tIFwiLi4vanMvbWVudS1kYXRhLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRNYW5hZ2VyIHtcbiAgICAvKipcbiAgICAgKiBDb250ZW50IE1hbmFnZXIgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBNYW5hZ2VzIGNvbnRlbnQgb24gdGhlIHBhZ2UgdGhhdCBkZXBlbmRzIG9uIHRoZVxuICAgICAqIHVzZXIgc2VsZWN0aW9uIGFsb25nIHRoZSBuYXZpZ2F0aW9uIHBhbmVsLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5fa2V5cyA9IFtcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5fa2V5cy5sZW5ndGg7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRfY291cnNlID0gXCJcIjtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWxpc2UgSFRNTCBFbGVtZW50c1xuICAgICAgICB0aGlzLm5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX25hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuICAgICAgICB0aGlzLmNvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9jb3JlLmNsYXNzTGlzdC5hZGQoXCJjb3JlXCIpO1xuICAgICAgICB0aGlzLmNvcmVzID0gW107ICAvLyBsaXN0IG9mIGh0bWwgY29yZSBlbGVtZW50c1xuICAgIH0gXG5cbiAgICAvKipcbiAgICAgKiBJbmRleCBHZXR0ZXJcbiAgICAgKiBcbiAgICAgKiBSZXR1cm4gdXNlciBzZWxlY3Rpb24gaW5kZXhcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBzZWxlY3RlZCBpbmRleDsgbGVnYWwgdmFsdWVzOlxuICAgICAqICAgICAgMDogTWVudVxuICAgICAqICAgICAgMTogQ29udGFjdFxuICAgICAqICAgICAgMjogSG9tZVxuICAgICAqL1xuICAgIGdldCBpbmRleCAoKSB7IHJldHVybiB0aGlzLl9pbmRleDsgfVxuXG4gICAgLyoqXG4gICAgICogSW5kZXggU2V0dGVyXG4gICAgICogXG4gICAgICogU2V0IHVzZXIgc2VsZWN0aW9uIGluZGV4XG4gICAgICogXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIGxlZ2FsIHZhbHVlczpcbiAgICAgKiAgICAgIDA6IE1lbnVcbiAgICAgKiAgICAgIDE6IENvbnRhY3RcbiAgICAgKiAgICAgIDI6IEhvbWVcbiAgICAgKi9cbiAgICBzZXQgaW5kZXggKHZhbHVlKSB7IHRoaXMuX2luZGV4ID0gdmFsdWU7IH1cblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpb24gUGFuZWwgRWxlbWVudCBHZXR0ZXJcbiAgICAgKiBcbiAgICAgKiBSZXR1cm4gbmF2aWdhdGlvbiBwYW5lbCBlbGVtZW50XG4gICAgICogXG4gICAgICogQHJldHVybnMgbmF2aWdhdGlvbiBwYW5lbCBlbGVtZW50XG4gICAgICovXG4gICAgZ2V0IG5hdiAoKSB7IHJldHVybiB0aGlzLl9uYXY7IH1cblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpb24gUGFuZWwgRWxlbWVudCBTZXR0ZXJcbiAgICAgKiBcbiAgICAgKiBTZXQgbmF2aWdhdGlvbiBwYW5lbCBlbGVtZW50XG4gICAgICogXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb2JqIG5hdmlnYXRpb24gcGFuZWwgZWxlbWVudFxuICAgICAqL1xuICAgIHNldCBuYXYgKG9iaikgeyB0aGlzLl9uYXYgPSBvYmo7IH1cblxuICAgIC8qKlxuICAgICAqIENvcmUgUGFuZWwgRWxlbWVudCBHZXR0ZXJcbiAgICAgKiBcbiAgICAgKiBSZXR1cm4gY29yZSBlbGVtZW50XG4gICAgICogXG4gICAgICogQHJldHVybnMgY29yZSBlbGVtZW50XG4gICAgICovXG4gICAgZ2V0IGNvcmUgKCkgeyByZXR1cm4gdGhpcy5fY29yZTsgfVxuXG4gICAgLyoqXG4gICAgICogQ29yZSBQYW5lbCBFbGVtZW50IFNldHRlclxuICAgICAqIFxuICAgICAqIFNldCBjb3JlIGVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvYmogY29yZSBlbGVtZW50XG4gICAgICovXG4gICAgc2V0IGNvcmUgKG9iaikgeyB0aGlzLl9jb3JlID0gb2JqOyB9XG5cbiAgICAvKipcbiAgICAgKiBDb3JlLWVsZW1lbnQgQXJyYXkgR2V0dGVyXG4gICAgICogXG4gICAgICogUmV0dXJuIGNvcmUgZWxlbWVudCBhcnJheVxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIGNvcmUgZWxlbWVudHMgYXJyYXlcbiAgICAgKi9cbiAgICBnZXQgY29yZXMgKCkgeyByZXR1cm4gdGhpcy5fY29yZXM7IH1cblxuICAgIC8qKlxuICAgICAqIENvcmUtZWxlbWVudCBBcnJheSBTZXR0ZXJcbiAgICAgKiBcbiAgICAgKiBTZXRzIGNvcmUgZWxlbWVudCBhcnJheVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyciBhcnJheSBvZiBjb3JlIGVsZW1lbnRzXG4gICAgICovXG4gICAgc2V0IGNvcmVzIChhcnIpIHtcbiAgICAgICAgdGhpcy5fY29yZXMgPSBbXTtcbiAgICAgICAgYXJyLmZvckVhY2goYyA9PiB0aGlzLl9jb3Jlcy5wdXNoKGMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBVcGRhdGVzIG5hdmlnYXRpb24gcGFuZWwgZWxlbWVudCB0byBoaWdobGlnaHQgYW5kIFxuICAgICAqIHNldHMgdGhlIGNvcmUgY29udGVudCB0byBkaXNwbGF5XG4gICAgICogXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSB1cGRhdGUga2V5XG4gICAgICovXG4gICAgdXBkYXRlIChrZXkpIHtcbiAgICAgICAgLy8gQnVpbGQga2V5LWlkXG4gICAgICAgIGNvbnN0IGtleUlEID0gYG5hdi0ke2tleS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgIHRoaXMuX25hdi5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1vYmpcIikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgbmF2aWdhdGlvbiBlbGVtZW50IHNlbGVjdGVkXG4gICAgICAgICAgICBpZiAoY2hpbGQuaWQgPT09IGtleUlEKVxuICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJrZXktc2VsZWN0ZWRcIik7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbnkgaGlnaGxpZ2h0cyBpZiBub3Qgc2VsZWN0ZWRcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwia2V5LXNlbGVjdGVkXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgc2VsZWN0aW9uIGluZGV4XG4gICAgICAgIGlmICh0aGlzLl9rZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5fa2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLl9rZXlzLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZSBkaXNwbGF5XG4gICAgICAgIHRoaXMuc2V0Q29yZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIEhvbWUgTmF2aWdhdGlvbiBQYW5lbCBFbGVtZW50IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogQ3JlYXRlIGVsZW1lbnRzIGFuZCBjb250ZW50IGZvciB0aGUgSG9tZSBuYXZpZ2F0aW9uXG4gICAgICogcGFuZWxlIGVsZW1lbnQsIGluY2x1ZGluZyBuYW1lIG9mIHJlc3RhdXJhbnQgYW5kIGljb24gXG4gICAgICogZm9yIHRoZSBob21lIHBhbmVsXG4gICAgICovXG4gICAgYnVpbGRIb21lICgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcIm5hdi1vYmpcIik7XG4gICAgICAgIGhvbWUuaWQgPSBcIm5hdi1ob21lXCI7XG5cbiAgICAgICAgLy8gRmlyc3QsIGNyZWF0ZSBidXR0b24gd2l0aCByZXN0YXVyYW50IG5hbWVcbiAgICAgICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XG4gICAgICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIlB5dGhhZ29yZWFuIFBpenphcmlhXCI7IC8vIGhhcmQtY29kZWRcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyBOZXh0LCBjcmVhdGUgaWNvbiBlbGVtZW50IChjb3VydGVzeSBGbGF0SWNvbilcbiAgICAgICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpY29uLnNyYyA9IFBpenphSWNvbjtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWljb25cIik7XG5cbiAgICAgICAgLy8gRGVmYXVsdCwgaXRlbSBzaG91bGQgYmUgaGlnaGxpZ2h0ZWRcbiAgICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwia2V5LXNlbGVjdGVkXCIpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBpbmRleCAmIHNldCBjb3JlIG9uIGVsZW1lbnQncyBjbGljay1ldmVudFxuICAgICAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLnVwZGF0ZShcImhvbWVcIik7IH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIGVsZW1lbnRzIHRvIG90aGVyIGVsZW1lbnRzXG4gICAgICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgICAgIGhvbWUuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIHRoaXMuX25hdi5hcHBlbmRDaGlsZChob21lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBOYXZpZ2F0aW9uIFBhbmVsIEVsZW1lbnRzIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRm9yIGFsbCBkZWZhdWx0IGtleXMsIGNyZWF0ZSBidXR0b25zIG9yIHJlcXVpcmVkIEhUTUxcbiAgICAgKiBlbGVtZW50IGZvciB0aGUgZ2l2ZW4ga2V5IGluIHRoZSBuYXZpZ2F0aW9uIHBhbmVsXG4gICAgICovXG4gICAgYnVpbGROYXZpZ2F0aW9uICgpIHtcbiAgICAgICAgLy8gRm9yIGtleXMsIGNyZWF0ZSBuYXZpZ2F0aW9uIGVsZW1lbnRzXG4gICAgICAgIHRoaXMuX2tleXMuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIC8vIERlZmF1bHQga2V5cyBvbmx5IGdldCBidXR0b25zXG4gICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJuYXYtb2JqXCIpO1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xuICAgICAgICAgICAgYnRuLmlkID0gYG5hdi0ke2sudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gaztcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGluZGV4ICYgc2V0IGNvcmUgb24gYnV0dG9uJ3MgY2xpY2stZXZlbnRcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy51cGRhdGUoayk7IH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBZGQgYnV0dG9uIHRvIG5hdmlnYXRpb24gZWxlbWVudFxuICAgICAgICAgICAgdGhpcy5fbmF2LmFwcGVuZChidG4pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idWlsZEhvbWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgQ29yZSBDb250ZW50IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRGVwZW5kZW50IG9uIHVzZXIgc2VsZWN0aW9uIGluZGV4LCBjb3JlIGNvbnRlbnQgc2hvdWxkXG4gICAgICogYmUgdXBkYXRlZCB0byByZWZsZWN0IHRoZSBkZXNpcmVkIHNlbGVjdGlvbiBmcm9tIHByZXZpb3VzbHlcbiAgICAgKiBnZW5lcmF0ZWQgY29yZSBlbGVtZW50c1xuICAgICAqL1xuICAgIHNldENvcmUgKCkge1xuICAgICAgICAvLyBSZW1vdmUgaW5uZXIgSFRNTCBlbGVtZW50IGZyb20gY29yZSBlbGVtZW50XG4gICAgICAgIHRoaXMuX2NvcmUuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBBZGQgZGVzaXJlZCBIVE1MIGVsZW1lbnQgdG8gY29yZSBlbGVtZW50XG4gICAgICAgIHRoaXMuX2NvcmUuYXBwZW5kQ2hpbGQodGhpcy5fY29yZXNbdGhpcy5faW5kZXhdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsdCBSZXN0YXVyYW50IEluZm9ybWF0aW9uIEVsZW1lbnRzXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDb250YWN0IENvcmUgRWxlbWVudCwgdGhpcyBmdW5jdGlvbiB3aWxsIGNyZWF0ZSBcbiAgICAgKiB0aGUgSFRNTCBlbGVtZW50cyBmb3IgYSBnaXZlbiBrZXktdmFsdWUgcGFpciBvZiByZXN0YXVyYW50XG4gICAgICogaW5mb3JtYXRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IG5hbWUgZm9yIGluZm9ybWF0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlcyBvZiB0aGUgaW5mb3JtYXRpb25cbiAgICAgKiBAcmV0dXJucyBIVE1MIGVsZW1lbnQgcmVwcmVzZW50aW5nIHJlc3RhdXJhbnQgaW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBidWlsZFJlc3RhdXJhbnRJbmZvKGtleSwgdmFsdWUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIFJlc3RhdXJhbnQgSW5mb3JtYXRpb24gRWxlbWVudFxuICAgICAgICBjb25zdCByZXN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJlc3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWJsb2NrXCIpO1xuICAgICAgICByZXN0SW5mby5pZCA9IGAke2tleX0taW5mby1ibG9ja2A7XG5cbiAgICAgICAgLy8gQWRkIGEgbGFiZWwgZm9yIHRoZSBrZXlcbiAgICAgICAgY29uc3Qga2V5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGtleUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWxhYmVsXCIpO1xuICAgICAgICBrZXlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYCR7a2V5fS12YWx1ZWApO1xuICAgICAgICBrZXlMYWJlbC50ZXh0Q29udGVudCA9IGtleTtcblxuICAgICAgICAvLyBBZGQgdGhlIHZhbHVlXG4gICAgICAgIGNvbnN0IHZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB2YWx1ZVNwYW4uY2xhc3NMaXN0LmFkZChcImluZm8tdmFsdWVcIik7XG4gICAgICAgIHZhbHVlU3Bhbi5pZCA9IGAke2tleX0tdmFsdWVgO1xuXG4gICAgICAgIC8vIE9ubHkgc3BsaXQgdGhlIGxpbmVzIGZvciBhZGRyZXNzZXNcbiAgICAgICAgaWYgKGtleSAhPT0gXCJhZGRyZXNzXCIpXG4gICAgICAgICAgICB2YWx1ZVNwYW4udGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSB2YWx1ZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgbGluZVNwYW4udGV4dENvbnRlbnQgKz0gYXJyW2ldICsgKGkgPCBhcnIubGVuZ3RoIC0gMSA/IFwiLFwiIDogXCJcIik7XG4gICAgICAgICAgICAgICAgdmFsdWVTcGFuLmFwcGVuZENoaWxkKGxpbmVTcGFuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBrZXktdmFsdWUgdG8gZWxlbWVudFxuICAgICAgICByZXN0SW5mby5hcHBlbmRDaGlsZChrZXlMYWJlbCk7XG4gICAgICAgIHJlc3RJbmZvLmFwcGVuZENoaWxkKHZhbHVlU3Bhbik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3RJbmZvO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIENvbnRhY3QgRm9ybSBFbGVtZW50IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDb250YWN0IENvcmUgRWxlbWVudCwgYnVpbGRzIHRoZSBkZWZhdWx0XG4gICAgICogY29udGFjdCBmb3JtIGZvciBjdXN0b21lciB0byBzZW5kIHRvIHJlc3RhdXJhbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBIVE1MIEVsZW1lbnQgZm9yIENvbnRhY3QgRm9ybVxuICAgICAqL1xuICAgIGJ1aWxkQ29udGFjdEZvcm0gKCkge1xuICAgICAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBjb250YWN0Rm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTsgIC8vIHByZXZlbnQgc3VibWlzc2lvblxuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIGZvcm0gcm93c1xuICAgICAgICBbXCJOYW1lXCIsIFwiRW1haWxcIiwgXCJNZXNzYWdlXCJdLmZvckVhY2goaSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZChcImZvcm0tcm93XCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDcmVhdGUgSW5wdXQgTGFiZWwgRWxlbWVudFxuICAgICAgICAgICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgbGFiZWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpO1xuICAgICAgICAgICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZShcImZvclwiLCBpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgbGFiZWxFbGVtZW50LnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGkgIT09IFwiTWVzc2FnZVwiKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIElucHV0IEVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5pZCA9IGkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBpICE9PSBcIkVtYWlsXCIgPyBcInRleHRcIiA6IFwiZW1haWxcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZm9ybVJvdy5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1pbnB1dFwiKTtcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5pZCA9IGkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwicm93c1wiLCA1KTtcbiAgICAgICAgICAgICAgICBmb3JtUm93LmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIEVycm9yIFNwYW4gRWxlbWVudFxuICAgICAgICAgICAgY29uc3Qgc3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHNwYW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIHNwYW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoaS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoc3BhbkVsZW1lbnQpO1xuXG4gICAgICAgICAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtUm93KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFN1Ym1pdCBCdXR0b25cbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLmlkID0gXCJmb3JtLXN1Ym1pdFwiO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJTZW5kIG1lc3NhZ2UhXCI7XG4gICAgICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhY3RGb3JtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBDb3Vyc2UgVGl0bGUgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBBZGQgQXBwZXRpc2VycywgTWFpbnMgb3IgRGVzc2VydHMgdGl0bGUgdG8gTWVudSBDb3JlIGVsZW1lbnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY291cnNlVHlwZSBhcHBldGlzZXJzLCBtYWlucyBvciBkZXNzZXJ0c1xuICAgICAqIEByZXR1cm5zIEhUTUwgZWxlbWVudCByZXByZXNlbnRpbmcgY291cnNlIHRpdGxlXG4gICAgICovXG4gICAgYWRkQ291cnNlIChjb3Vyc2VUeXBlKSB7XG4gICAgICAgIC8vIENyZWF0ZSBIMiBvYmplY3QgdG8gcmVwcmVzZW50IHRpdGxlXG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgY291cnNlLmNsYXNzTGlzdC5hZGQoYCR7Y291cnNlVHlwZS50b0xvd2VyQ2FzZSgpfS10aXRsZWApO1xuICAgICAgICBjb3Vyc2UudGV4dENvbnRlbnQgPSBjb3Vyc2VUeXBlO1xuICAgICAgICB0aGlzLl9jdXJyZW50X2NvdXJzZSA9IGNvdXJzZVR5cGU7XG5cbiAgICAgICAgcmV0dXJuIGNvdXJzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBNZW51IENhcmQgRWxlbWVudCBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIEZvciB0aGUgTWVudSBDb3JlIEVsZW1lbnQsIGZvciBlYWNoIG1lbnUgb2JqZWN0LCBcbiAgICAgKiB0aGlzIGZ1bmN0aW9uIHdpbGwgYnVpbGQgYSBjYXJkIEhUTUwgb2JqZWN0IHRvIHRoZSBjb3JlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1lbnVPYmogbWVudSBvYmplY3RcbiAgICAgKiBAcmV0dXJucyBIVE1MIGVsZW1lbnQgcmVwcmVzZW50aW5nIG1lbnUgY2FyZFxuICAgICAqL1xuICAgIGJ1aWxkTWVudUNhcmQgKG1lbnVPYmopIHtcbiAgICAgICAgLy8gQ3JlYXRlIERpdiBlbGVtZW50IGZvciBDYXJkXG4gICAgICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LW9iamVjdFwiKTtcblxuICAgICAgICAvLyBBZGQgSW1hZ2UgdG8gQ2FyZCBmcm9tIE9iamVjdFxuICAgICAgICBjb25zdCBtZW51UGljID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG1lbnVQaWMuY2xhc3NMaXN0LmFkZChcIm1lbnUtcGljXCIpO1xuICAgICAgICBtZW51UGljLnNyYyA9IG1lbnVPYmouc3JjO1xuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVQaWMpO1xuXG4gICAgICAgIC8vIEFkZCBNZWFsIE5hbWUgdG8gQ2FyZCBmcm9tIE9iamVjdFxuICAgICAgICBjb25zdCBtZW51TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbWVudU5hbWUuY2xhc3NMaXN0LmFkZChcIm1lbnUtbmFtZVwiKTtcbiAgICAgICAgbWVudU5hbWUudGV4dENvbnRlbnQgPSBtZW51T2JqLm5hbWU7XG4gICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudU5hbWUpO1xuXG4gICAgICAgIC8vIEFkZCBNZWFsIFByaWNlIHRvIENhcmQgZnJvbSBPYmplY3RcbiAgICAgICAgY29uc3QgbWVudVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBtZW51UHJpY2UuY2xhc3NMaXN0LmFkZChcIm1lbnUtcHJpY2VcIik7XG4gICAgICAgIG1lbnVQcmljZS50ZXh0Q29udGVudCA9IGAkJHttZW51T2JqLnByaWNlfWA7XG4gICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudVByaWNlKTtcblxuICAgICAgICAvLyBBZGQgTWVhbCBEZXNjcmlwdGlvbiB0byBDYXJkIGZyb20gT2JqZWN0XG4gICAgICAgIGNvbnN0IG1lbnVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIG1lbnVEZXNjLmNsYXNzTGlzdC5hZGQoXCJtZW51LWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBtZW51RGVzYy50ZXh0Q29udGVudCA9IG1lbnVPYmouZGVzY3JpcHRpb247XG4gICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudURlc2MpO1xuXG4gICAgICAgIHJldHVybiBtZW51RGl2O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIENvcmUgRWxlbWVudHMgRnVuY3Rpb25cbiAgICAgKi9cbiAgICBidWlsZENvcmVzICgpIHtcbiAgICAgICAgLy8gQnVpbGQgTWVudSBFbGVtZW50XG4gICAgICAgIGNvbnN0IG1lbnVDb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWVudUNvcmUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgICAgIG1lbnVEYXRhLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50X2NvdXJzZSA9PT0gXCJcIiAmJiBvYmouY291cnNlID09PSBcInN0YXJ0ZXJcIilcbiAgICAgICAgICAgICAgICBtZW51Q29yZS5hcHBlbmRDaGlsZCh0aGlzLmFkZENvdXJzZShcIkFwcGV0aXNlcnNcIikpO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fY3VycmVudF9jb3Vyc2UgPT09IFwiQXBwZXRpc2Vyc1wiICYmIG9iai5jb3Vyc2UgPT09IFwibWFpblwiKVxuICAgICAgICAgICAgICAgIG1lbnVDb3JlLmFwcGVuZENoaWxkKHRoaXMuYWRkQ291cnNlKFwiTWFpbnNcIikpO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fY3VycmVudF9jb3Vyc2UgPT09IFwiTWFpbnNcIiAmJiBvYmouY291cnNlID09PSBcImRlc3NlcnRcIikgXG4gICAgICAgICAgICAgICAgbWVudUNvcmUuYXBwZW5kQ2hpbGQodGhpcy5hZGRDb3Vyc2UoXCJEZXNzZXJ0c1wiKSk7XG4gICAgICAgICAgICBtZW51Q29yZS5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkTWVudUNhcmQob2JqKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJ1aWxkIENvbnRhY3QgRWxlbWVudFxuICAgICAgICBjb25zdCBjb250YWN0Q29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhY3RDb3JlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSB7XG4gICAgICAgICAgICBcImluZm9cIjogXCJHZXQgaW4gdG91Y2gsIGFuZCBhIFB5dGhhZ29yZWFuIHdpbGwgZ2V0IGJhY2sgdG8geW91LiBSZW1lbWJlciwgZG8gbm90IHRha2Ugcm9hZHMgdHJhdmVsZWQgYnkgdGhlIHB1YmxpYy5cIixcbiAgICAgICAgICAgIFwiZm9ybVwiOiBcIlwiLCBcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJweXRoYWdvcmFzQHBpLml0XCIsIFxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIiszOSAzNDUgNjA5MTEwOVwiLCBcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIkdpYXJkaW5vIGRpIFBpdGFnb3JhLCBDcm90b25lLCBQcm92aW5jaWEgZGkgQ3JvdG9uZSwgSXRhbGlhIDg4OTAwXCJcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBZGQgQ29udGFjdCBDb3JlIEVsZW1lbnRzXG4gICAgICAgIFtcImluZm9cIiwgXCJmb3JtXCIsIFwiZW1haWxcIiwgXCJwaG9uZVwiLCBcImFkZHJlc3NcIl0uZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGlmIChrID09PSBcImluZm9cIiB8fCBrID09PSBcImZvcm1cIilcbiAgICAgICAgICAgICAgICBjb250YWN0RWxlbWVudC5pZCA9IGBjb250YWN0LSR7a31gO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNvbnRhY3RFbGVtZW50LmlkID0gYHJlc3RhdXJhbnQtJHtrfWA7XG4gICAgICAgICAgICBpZiAoayA9PT0gXCJpbmZvXCIpXG4gICAgICAgICAgICAgICAgY29udGFjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBrZXlWYWx1ZXNba107XG4gICAgICAgICAgICBlbHNlIGlmIChrICE9PSBcImZvcm1cIilcbiAgICAgICAgICAgICAgICBjb250YWN0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkUmVzdGF1cmFudEluZm8oaywga2V5VmFsdWVzW2tdKSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY29udGFjdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZENvbnRhY3RGb3JtKCkpO1xuICAgICAgICAgICAgY29udGFjdENvcmUuYXBwZW5kQ2hpbGQoY29udGFjdEVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCdWlsZCBIb21lIEVsZW1lbnRcbiAgICAgICAgY29uc3QgaG9tZUNvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob21lQ29yZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICAgICAgICAvLyBBZGQgSG9tZSBUaXRsZVxuICAgICAgICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhvbWVUaXRsZS5pZCA9IFwid2VsY29tZS10aXRsZVwiO1xuICAgICAgICBob21lVGl0bGUudGV4dENvbnRlbnQgPSBcIldFTENPTUUgVE8gVEhFIFBZVEhBR09SRUFOIFBJWlpBUklBXCI7XG4gICAgICAgIGhvbWVDb3JlLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG5cbiAgICAgICAgLy8gQWRkIEhvbWUgSW5mb3JtYXRpb25cbiAgICAgICAgY29uc3QgaG9tZU1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgXCJpbnRyb1wiOiBcIkZvbGxvd2luZyB0aGUgJ1B5dGhhZ29yZWFuIGRpZXQnLCBhbGwgdGhlIGZvb2QgaXMgbWFkZSB3aXRob3V0IG1lYXQsIGJlYW5zIG9yIGZpc2hcIixcbiAgICAgICAgICAgIFwib3BlbmluZ1wiOiBcIk9wZW4gZnJvbSAxMGFtIC0gTGF0ZVwiLFxuICAgICAgICAgICAgXCJ3ZWVrbHlcIjogXCJTZXZlbiBkYXlzIGEgd2Vla1wiLFxuICAgICAgICAgICAgXCJoYXBweS1ob3VyXCI6IFwiSGFwcHkgSG91cjogM3BtIC0gN3BtXCJcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3Qua2V5cyhob21lTWVzc2FnZXMpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgbWVzc2FnZVNwYW4uY2xhc3NMaXN0LmFkZChcIm1lc3NhZ2Utc3BhblwiKTtcbiAgICAgICAgICAgIG1lc3NhZ2VTcGFuLmlkID0gYCR7a30tbWVzc2FnZWBcbiAgICAgICAgICAgIG1lc3NhZ2VTcGFuLnRleHRDb250ZW50ID0gaG9tZU1lc3NhZ2VzW2tdO1xuICAgICAgICAgICAgaG9tZUNvcmUuYXBwZW5kQ2hpbGQobWVzc2FnZVNwYW4pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBQb3J0cmFpdCBvZiBQeXRoYWdvcmFzXG4gICAgICAgIGNvbnN0IHB5UG9ydCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBweVBvcnQuaWQgPSBcInB5dGhhZ29yYXMtcG9ydHJhaXRcIjtcbiAgICAgICAgcHlQb3J0LnNyYyA9IFB5dGhhZ29yYXNQb3J0cmFpdDtcbiAgICAgICAgaG9tZUNvcmUuYXBwZW5kQ2hpbGQocHlQb3J0KTtcblxuICAgICAgICBjb25zdCBweUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBweUxhYmVsLmlkID0gXCJweXRoYWdvcmFzLWxhYmVsXCI7XG4gICAgICAgIHB5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHl0aGFnb3Jhcy1wb3J0cmFpdFwiKTtcbiAgICAgICAgcHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUG9ydHJhaXQgb2YgUHl0aGFnb3Jhc1wiO1xuICAgICAgICBob21lQ29yZS5hcHBlbmRDaGlsZChweUxhYmVsKTtcblxuICAgICAgICAvLyBBZGQgZWxlbWVudHMgdG8gY29yZXMgYXJyYXlcbiAgICAgICAgdGhpcy5fY29yZXMucHVzaChtZW51Q29yZSk7XG4gICAgICAgIHRoaXMuX2NvcmVzLnB1c2goY29udGFjdENvcmUpO1xuICAgICAgICB0aGlzLl9jb3Jlcy5wdXNoKGhvbWVDb3JlKTtcblxuICAgICAgICAvLyBTZXR1cCBkZWZhdWx0IGNvcmUgY29udGVudCwgaS5lLiBob21lLXBhZ2VcbiAgICAgICAgdGhpcy5zZXRDb3JlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBHZW5lcmF0ZXMgYWxsIEhUTUwgZWxlbWVudHMgZm9yIHJlc3RhdXJhbnQgcGFnZVxuICAgICAqL1xuICAgIGdlbmVyYXRlICgpIHtcbiAgICAgICAgdGhpcy5idWlsZE5hdmlnYXRpb24oKTtcbiAgICAgICAgdGhpcy5idWlsZENvcmVzKCk7XG4gICAgfVxufTsiLCJpbXBvcnQgQnVycmF0dGEgZnJvbSBcIi4uL2ltYWdlcy9hemVyYmFpamFuLWJ1cnJhdGEuanBnXCI7XG5pbXBvcnQgR2FybGljQnJlYWQgZnJvbSBcIi4uL2ltYWdlcy9hemVyYmFpamFuLWNoZWVzeS1nYXJsaWMtYnJlYWQuanBnXCI7XG5pbXBvcnQgU3BhbmtvcGl0YVJvbGxzIGZyb20gXCIuLi9pbWFnZXMvYXplcmJhaWphbi1zcGFuYWtvcGl0YS1zcHJpbmctcm9sbHMuanBnXCI7XG5pbXBvcnQgQnVycmF0YVBpenphIGZyb20gXCIuLi9pbWFnZXMvYXplcmJhaWphbi1idXJyYXRhLXBpenphLmpwZ1wiO1xuaW1wb3J0IE1hcmdoYXJpdGFQaXp6YSBmcm9tIFwiLi4vaW1hZ2VzL2F6ZXJiYWlqYW4tbWFyZ2hhcml0YS1waXp6YS5qcGdcIjtcbmltcG9ydCBTcGljeVBpenphIGZyb20gXCIuLi9pbWFnZXMvYXplcmJhaWphbi1zcGljeS1waXp6YS5qcGdcIjtcbmltcG9ydCBNdXNocm9vbVBpenphIGZyb20gXCIuLi9pbWFnZXMvYXplcmJhaWphbi1tdXNocm9vbS1waXp6YS5qcGdcIjtcbmltcG9ydCBNaW5pUGl6emEgZnJvbSBcIi4uL2ltYWdlcy9hemVyYmFpamFuLW1pbmktcGl6emEuanBnXCI7XG5pbXBvcnQgQ2hvY0Jyb3duaWUgZnJvbSBcIi4uL2ltYWdlcy9hemVyYmFpamFuLWNob2MtYnJvd25pZS5qcGdcIjtcbmltcG9ydCBUaXJhbWlzdSBmcm9tIFwiLi4vaW1hZ2VzL2F6ZXJiYWlqYW4tdGlyYW1pc3UuanBnXCI7XG5cbi8qKlxuICogTGlzdCBvZiBNZW51IE9iamVjdHNcbiAqIFxuICogQ29udGFpbnM6IFxuICogICAgICAtPiBDb3Vyc2UgVHlwZVxuICogICAgICAtPiBOYW1lIGZvciBtZWFsXG4gKiAgICAgIC0+IERlc2NyaXB0aW9uIG9mIE1lYWxcbiAqICAgICAgLT4gUHJpY2VcbiAqICAgICAgLT4gSW1hZ2UgU291cmNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IFtcbiAgICB7XG4gICAgICAgIGNvdXJzZTogXCJzdGFydGVyXCIsXG4gICAgICAgIG5hbWU6IFwiQnVycmF0YVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGcmVzaCB0b21hdG9lcyBzZXJ2ZWQgd2l0aCBidXJyYXRhIGNoZWVzZSBvbiBncmlsbGVkIGJyZWFkXCIsXG4gICAgICAgIHByaWNlOiA1LFxuICAgICAgICBzcmM6IEJ1cnJhdHRhXG4gICAgfSwge1xuICAgICAgICBjb3Vyc2U6IFwic3RhcnRlclwiLFxuICAgICAgICBuYW1lOiBcIkdhcmxpYyBCcmVhZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJPdmVuIGJha2VkIGNoZWVzeSBnYXJsaWMgYnJlYWRcIixcbiAgICAgICAgcHJpY2U6IDcsXG4gICAgICAgIHNyYzogR2FybGljQnJlYWRcbiAgICB9LCB7XG4gICAgICAgIGNvdXJzZTogXCJzdGFydGVyXCIsXG4gICAgICAgIG5hbWU6IFwiU3BhbmFrb3BpdGEgU3ByaW5nIFJvbGxzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNhbWlhbiBzdHlsZSBzcGFuYWtvcGl0YSwgcm9sbGVkIHVwXCIsXG4gICAgICAgIHByaWNlOiA1LFxuICAgICAgICBzcmM6IFNwYW5rb3BpdGFSb2xsc1xuICAgIH0sIHtcbiAgICAgICAgY291cnNlOiBcIm1haW5cIixcbiAgICAgICAgbmFtZTogXCJCdXJyYXRhIFBpenphXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldhbnQgYSBidXJyYXRhPyBXYW50IGEgcGl6emE/IFdoeSBub3QgYm90aD9cIixcbiAgICAgICAgcHJpY2U6IDExLFxuICAgICAgICBzcmM6IEJ1cnJhdGFQaXp6YVxuICAgIH0sIHtcbiAgICAgICAgY291cnNlOiBcIm1haW5cIixcbiAgICAgICAgbmFtZTogXCJNYXJnaGFyaXR0YSBQaXp6YVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgc2FmZSBvbmUuIFRvbWF0byBzYXVjZSBhbmQgY2hlZXNlIG9uIHBpenphXCIsXG4gICAgICAgIHByaWNlOiAxMSxcbiAgICAgICAgc3JjOiBNYXJnaGFyaXRhUGl6emFcbiAgICB9LCB7XG4gICAgICAgIGNvdXJzZTogXCJtYWluXCIsXG4gICAgICAgIG5hbWU6IFwiVGhlIENlbnRyYWwgRmlyZSBQaXp6YVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJPbGl2ZXMgJiBTZXJyYW5vIFBlcHBlcnMuIFNlcnZlZCB3aXRoIGhvdCBzYXVjZVwiLFxuICAgICAgICBwcmljZTogMTMsXG4gICAgICAgIHNyYzogU3BpY3lQaXp6YVxuICAgIH0sIHtcbiAgICAgICAgY291cnNlOiBcIm1haW5cIixcbiAgICAgICAgbmFtZTogXCJQaXp6YSBhaSBGdW5naGlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRm9yIGFsbCB0aGUgbXljb2xvZ2lzdHMgb3V0IHRoZXJlXCIsXG4gICAgICAgIHByaWNlOiAxMyxcbiAgICAgICAgc3JjOiBNdXNocm9vbVBpenphXG4gICAgfSwge1xuICAgICAgICBjb3Vyc2U6IFwibWFpblwiLFxuICAgICAgICBuYW1lOiBcIktpZHMgUGl6emFcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGtpZC1zaXplZCBwaXp6YS4gQSBtaW5pIG1hcmdoYXJpdHRhXCIsXG4gICAgICAgIHByaWNlOiA3LFxuICAgICAgICBzcmM6IE1pbmlQaXp6YVxuICAgIH0sIHtcbiAgICAgICAgY291cnNlOiBcImRlc3NlcnRcIixcbiAgICAgICAgbmFtZTogXCJDaG9jb2xhdGUgQnJvd25pZSB3aXRoIFZhbmlsbGEgSWNlIENyZWFtXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgcmljaCBjaG9jb2xvYXRlIGJyb3duaWUgaXMgc2VydmVkIHdpdGggc29tZSB2YW5pbGxhIGljZSBjcmVhbVwiLFxuICAgICAgICBwcmljZTogNyxcbiAgICAgICAgc3JjOiBDaG9jQnJvd25pZVxuICAgIH0sIHtcbiAgICAgICAgY291cnNlOiBcImRlc3NlcnRcIixcbiAgICAgICAgbmFtZTogXCJUaXJhbWlzdVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFbGVnYW50IGFuZCByaWNoLCB0aGlzIGRlbGljYXRlbHkgbWFkZSBkZXNzZXJ0IGlzIG1hZGUgd2l0aCBlc3ByZXNzbywgd2luZSwgcnVtIGFuZCBjb2NvYSBwb3dkZXJcIixcbiAgICAgICAgcHJpY2U6IDExLFxuICAgICAgICBzcmM6IFRpcmFtaXN1XG4gICAgfSxcbl07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9