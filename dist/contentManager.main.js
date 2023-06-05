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

    buildRestaurantInfo(key, value) {
        const restInfo = document.createElement("div");
        restInfo.classList.add("info-block");
        restInfo.id = `${key}-info-block`;

        const keyLabel = document.createElement("label");
        keyLabel.classList.add("info-label");
        keyLabel.setAttribute("for", `${key}-value`);
        keyLabel.textContent = key;

        const valueSpan = document.createElement("span");
        valueSpan.classList.add("info-value");
        valueSpan.id = `${key}-value`;
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

        restInfo.appendChild(keyLabel);
        restInfo.appendChild(valueSpan);

        return restInfo;
    }

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
            "info": "Get in touch, and a Pythagorean will get back to you. Remember, do not take roads traveled by the public.",
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
            if (k === "info")
                contactElement.textContent = keyValues[k];
            else if (k !== "form")
                contactElement.appendChild(this.buildRestaurantInfo(k, keyValues[k]));
            else
                contactElement.appendChild(this.buildContactForm());
            contactCore.appendChild(contactElement);
        });
        // TODO: Build Contact

        // Build Home Element
        const homeCore = document.createElement("div");
        homeCore.classList.add("home");

        const homeTitle = document.createElement("h1");
        homeTitle.id = "welcome-title";
        homeTitle.textContent = "WELCOME TO THE PYTHAGOREAN PIZZARIA";
        homeCore.appendChild(homeTitle);

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

        console.log(`Menu Data: ${_js_menu_data_js__WEBPACK_IMPORTED_MODULE_2__["default"].data}`);
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
/* harmony import */ var _images_azerbaijan_bruschetta_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/azerbaijan-bruschetta.jpg */ "./src/images/azerbaijan-bruschetta.jpg");
/* harmony import */ var _images_azerbaijan_cheesy_garlic_bread_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/azerbaijan-cheesy-garlic-bread.jpg */ "./src/images/azerbaijan-cheesy-garlic-bread.jpg");
/* harmony import */ var _images_azerbaijan_spanakopita_spring_rolls_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/azerbaijan-spanakopita-spring-rolls.jpg */ "./src/images/azerbaijan-spanakopita-spring-rolls.jpg");
/* harmony import */ var _images_azerbaijan_bruschetta_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/azerbaijan-bruschetta-pizza.jpg */ "./src/images/azerbaijan-bruschetta-pizza.jpg");
/* harmony import */ var _images_azerbaijan_margharita_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/azerbaijan-margharita-pizza.jpg */ "./src/images/azerbaijan-margharita-pizza.jpg");
/* harmony import */ var _images_azerbaijan_spicy_pizza_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/azerbaijan-spicy-pizza.jpg */ "./src/images/azerbaijan-spicy-pizza.jpg");
/* harmony import */ var _images_azerbaijan_choc_brownie_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/azerbaijan-choc-brownie.jpg */ "./src/images/azerbaijan-choc-brownie.jpg");
/* harmony import */ var _images_azerbaijan_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/azerbaijan-tiramisu.jpg */ "./src/images/azerbaijan-tiramisu.jpg");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    data: "hello",
});

/***/ }),

/***/ "./src/images/azerbaijan-bruschetta-pizza.jpg":
/*!****************************************************!*\
  !*** ./src/images/azerbaijan-bruschetta-pizza.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4a7cdd8f9d8234423b3.jpg";

/***/ }),

/***/ "./src/images/azerbaijan-bruschetta.jpg":
/*!**********************************************!*\
  !*** ./src/images/azerbaijan-bruschetta.jpg ***!
  \**********************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxFQUFFO0FBQ2xDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDREQUFrQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyw2REFBYSxDQUFDO0FBQ2hEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsWDZEO0FBQ1U7QUFDUztBQUNSO0FBQ0E7QUFDVjtBQUNFO0FBQ1A7O0FBRXpELGlFQUFlO0FBQ2Y7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2pzL2NvbnRlbnQtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvanMvbWVudS1kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaXp6YUljb24gZnJvbSBcIi4uL2ltYWdlcy9waXp6YS5wbmdcIjtcbmltcG9ydCBQeXRoYWdvcmFzUG9ydHJhaXQgZnJvbSBcIi4uL2ltYWdlcy9weXRoYWdvcmFzLXBvcnRyYWl0LnBuZ1wiO1xuaW1wb3J0IE1lbnVEYXRhIGZyb20gXCIuLi9qcy9tZW51LWRhdGEuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudE1hbmFnZXIge1xuICAgIC8qKlxuICAgICAqIENvbnRlbnQgTWFuYWdlciBDbGFzc1xuICAgICAqIFxuICAgICAqIE1hbmFnZXMgY29udGVudCBvbiB0aGUgcGFnZSB0aGF0IGRlcGVuZHMgb24gdGhlXG4gICAgICogdXNlciBzZWxlY3Rpb24gYWxvbmcgdGhlIG5hdmlnYXRpb24gcGFuZWwuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIHZhcmlhYmxlc1xuICAgICAgICB0aGlzLl9rZXlzID0gW1wiTWVudVwiLCBcIkNvbnRhY3RcIl07XG4gICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLl9rZXlzLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWxpc2UgSFRNTCBFbGVtZW50c1xuICAgICAgICB0aGlzLm5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX25hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuICAgICAgICB0aGlzLmNvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9jb3JlLmNsYXNzTGlzdC5hZGQoXCJjb3JlXCIpO1xuICAgICAgICB0aGlzLmNvcmVzID0gW107ICAvLyBsaXN0IG9mIGh0bWwgY29yZSBlbGVtZW50c1xuICAgIH0gXG5cbiAgICAvKipcbiAgICAgKiBJbmRleCBHZXR0ZXJcbiAgICAgKiBcbiAgICAgKiBSZXR1cm4gdXNlciBzZWxlY3Rpb24gaW5kZXhcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBzZWxlY3RlZCBpbmRleDsgbGVnYWwgdmFsdWVzOlxuICAgICAqICAgICAgMDogTWVudVxuICAgICAqICAgICAgMTogQ29udGFjdFxuICAgICAqICAgICAgMjogSG9tZVxuICAgICAqL1xuICAgIGdldCBpbmRleCAoKSB7IHJldHVybiB0aGlzLl9pbmRleDsgfVxuXG4gICAgLyoqXG4gICAgICogSW5kZXggU2V0dGVyXG4gICAgICogXG4gICAgICogU2V0IHVzZXIgc2VsZWN0aW9uIGluZGV4XG4gICAgICogXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIGxlZ2FsIHZhbHVlczpcbiAgICAgKiAgICAgIDA6IE1lbnVcbiAgICAgKiAgICAgIDE6IENvbnRhY3RcbiAgICAgKiAgICAgIDI6IEhvbWVcbiAgICAgKi9cbiAgICBzZXQgaW5kZXggKHZhbHVlKSB7IHRoaXMuX2luZGV4ID0gdmFsdWU7IH1cblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpb24gUGFuZWwgRWxlbWVudCBHZXR0ZXJcbiAgICAgKiAvLyBUT0RPOiBBZGQgaW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBnZXQgbmF2ICgpIHsgcmV0dXJuIHRoaXMuX25hdjsgfVxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGlvbiBQYW5lbCBFbGVtZW50IFNldHRlclxuICAgICAqIC8vIFRPRE86IEFkZCBpbmZvcm1hdGlvblxuICAgICAqL1xuICAgIHNldCBuYXYgKG9iaikgeyB0aGlzLl9uYXYgPSBvYmo7IH1cblxuICAgIC8qKlxuICAgICAqIENvcmUgUGFuZWwgRWxlbWVudCBHZXR0ZXJcbiAgICAgKiAvLyBUT0RPOiBBZGQgaW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBnZXQgY29yZSAoKSB7IHJldHVybiB0aGlzLl9jb3JlOyB9XG5cbiAgICAvKipcbiAgICAgKiBDb3JlIFBhbmVsIEVsZW1lbnQgU2V0dGVyXG4gICAgICogLy8gVE9ETzogQWRkIGluZm9ybWF0aW9uXG4gICAgICovXG4gICAgc2V0IGNvcmUgKG9iaikgeyB0aGlzLl9jb3JlID0gb2JqOyB9XG5cbiAgICAvKipcbiAgICAgKiBDb3JlLWVsZW1lbnQgQXJyYXkgR2V0dGVyXG4gICAgICogLy8gVE9ETzogQWRkIGluZm9ybWF0aW9uXG4gICAgICovXG4gICAgZ2V0IGNvcmVzICgpIHsgcmV0dXJuIHRoaXMuX2NvcmVzOyB9XG5cbiAgICAvKipcbiAgICAgKiBDb3JlLWVsZW1lbnQgQXJyYXkgU2V0dGVyXG4gICAgICogLy8gVE9ETzogQWRkIGluZm9ybWF0aW9uXG4gICAgICovXG4gICAgc2V0IGNvcmVzIChhcnIpIHtcbiAgICAgICAgdGhpcy5fY29yZXMgPSBbXTtcbiAgICAgICAgYXJyLmZvckVhY2goYyA9PiB0aGlzLl9jb3Jlcy5wdXNoKGMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBVcGRhdGVzIG5hdmlnYXRpb24gcGFuZWwgZWxlbWVudCB0byBoaWdobGlnaHQgYW5kIFxuICAgICAqIHNldHMgdGhlIGNvcmUgY29udGVudCB0byBkaXNwbGF5XG4gICAgICogXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSB1cGRhdGUga2V5XG4gICAgICovXG4gICAgdXBkYXRlIChrZXkpIHtcbiAgICAgICAgLy8gQnVpbGQga2V5LWlkXG4gICAgICAgIGNvbnN0IGtleUlEID0gYG5hdi0ke2tleS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgIHRoaXMuX25hdi5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1vYmpcIikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgbmF2aWdhdGlvbiBlbGVtZW50IHNlbGVjdGVkXG4gICAgICAgICAgICBpZiAoY2hpbGQuaWQgPT09IGtleUlEKVxuICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJrZXktc2VsZWN0ZWRcIik7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbnkgaGlnaGxpZ2h0cyBpZiBub3Qgc2VsZWN0ZWRcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwia2V5LXNlbGVjdGVkXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgc2VsZWN0aW9uIGluZGV4XG4gICAgICAgIGlmICh0aGlzLl9rZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5fa2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLl9rZXlzLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZSBkaXNwbGF5XG4gICAgICAgIHRoaXMuc2V0Q29yZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIEhvbWUgTmF2aWdhdGlvbiBQYW5lbCBFbGVtZW50IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogQ3JlYXRlIGVsZW1lbnRzIGFuZCBjb250ZW50IGZvciB0aGUgSG9tZSBuYXZpZ2F0aW9uXG4gICAgICogcGFuZWxlIGVsZW1lbnQsIGluY2x1ZGluZyBuYW1lIG9mIHJlc3RhdXJhbnQgYW5kIGljb24gXG4gICAgICogZm9yIHRoZSBob21lIHBhbmVsXG4gICAgICovXG4gICAgYnVpbGRIb21lICgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcIm5hdi1vYmpcIik7XG4gICAgICAgIGhvbWUuaWQgPSBcIm5hdi1ob21lXCI7XG5cbiAgICAgICAgLy8gRmlyc3QsIGNyZWF0ZSBidXR0b24gd2l0aCByZXN0YXVyYW50IG5hbWVcbiAgICAgICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XG4gICAgICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIlB5dGhhZ29yZWFuIFBpenphcmlhXCI7IC8vIGhhcmQtY29kZWRcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyBOZXh0LCBjcmVhdGUgaWNvbiBlbGVtZW50IChjb3VydGVzeSBGbGF0SWNvbilcbiAgICAgICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpY29uLnNyYyA9IFBpenphSWNvbjtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWljb25cIik7XG5cbiAgICAgICAgLy8gRGVmYXVsdCwgaXRlbSBzaG91bGQgYmUgaGlnaGxpZ2h0ZWRcbiAgICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwia2V5LXNlbGVjdGVkXCIpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBpbmRleCAmIHNldCBjb3JlIG9uIGVsZW1lbnQncyBjbGljay1ldmVudFxuICAgICAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLnVwZGF0ZShcImhvbWVcIik7IH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIGVsZW1lbnRzIHRvIG90aGVyIGVsZW1lbnRzXG4gICAgICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgICAgIGhvbWUuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIHRoaXMuX25hdi5hcHBlbmRDaGlsZChob21lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBOYXZpZ2F0aW9uIFBhbmVsIEVsZW1lbnRzIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRm9yIGFsbCBkZWZhdWx0IGtleXMsIGNyZWF0ZSBidXR0b25zIG9yIHJlcXVpcmVkIEhUTUxcbiAgICAgKiBlbGVtZW50IGZvciB0aGUgZ2l2ZW4ga2V5IGluIHRoZSBuYXZpZ2F0aW9uIHBhbmVsXG4gICAgICovXG4gICAgYnVpbGROYXZpZ2F0aW9uICgpIHtcbiAgICAgICAgLy8gRm9yIGtleXMsIGNyZWF0ZSBuYXZpZ2F0aW9uIGVsZW1lbnRzXG4gICAgICAgIHRoaXMuX2tleXMuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIC8vIERlZmF1bHQga2V5cyBvbmx5IGdldCBidXR0b25zXG4gICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJuYXYtb2JqXCIpO1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xuICAgICAgICAgICAgYnRuLmlkID0gYG5hdi0ke2sudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gaztcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGluZGV4ICYgc2V0IGNvcmUgb24gYnV0dG9uJ3MgY2xpY2stZXZlbnRcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy51cGRhdGUoayk7IH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBZGQgYnV0dG9uIHRvIG5hdmlnYXRpb24gZWxlbWVudFxuICAgICAgICAgICAgdGhpcy5fbmF2LmFwcGVuZChidG4pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idWlsZEhvbWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgQ29yZSBDb250ZW50IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRGVwZW5kZW50IG9uIHVzZXIgc2VsZWN0aW9uIGluZGV4LCBjb3JlIGNvbnRlbnQgc2hvdWxkXG4gICAgICogYmUgdXBkYXRlZCB0byByZWZsZWN0IHRoZSBkZXNpcmVkIHNlbGVjdGlvbiBmcm9tIHByZXZpb3VzbHlcbiAgICAgKiBnZW5lcmF0ZWQgY29yZSBlbGVtZW50c1xuICAgICAqL1xuICAgIHNldENvcmUgKCkge1xuICAgICAgICAvLyBSZW1vdmUgaW5uZXIgSFRNTCBlbGVtZW50IGZyb20gY29yZSBlbGVtZW50XG4gICAgICAgIHRoaXMuX2NvcmUuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBBZGQgZGVzaXJlZCBIVE1MIGVsZW1lbnQgdG8gY29yZSBlbGVtZW50XG4gICAgICAgIHRoaXMuX2NvcmUuYXBwZW5kQ2hpbGQodGhpcy5fY29yZXNbdGhpcy5faW5kZXhdKTtcbiAgICB9XG5cbiAgICBidWlsZFJlc3RhdXJhbnRJbmZvKGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmVzdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByZXN0SW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mby1ibG9ja1wiKTtcbiAgICAgICAgcmVzdEluZm8uaWQgPSBgJHtrZXl9LWluZm8tYmxvY2tgO1xuXG4gICAgICAgIGNvbnN0IGtleUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBrZXlMYWJlbC5jbGFzc0xpc3QuYWRkKFwiaW5mby1sYWJlbFwiKTtcbiAgICAgICAga2V5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGAke2tleX0tdmFsdWVgKTtcbiAgICAgICAga2V5TGFiZWwudGV4dENvbnRlbnQgPSBrZXk7XG5cbiAgICAgICAgY29uc3QgdmFsdWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHZhbHVlU3Bhbi5jbGFzc0xpc3QuYWRkKFwiaW5mby12YWx1ZVwiKTtcbiAgICAgICAgdmFsdWVTcGFuLmlkID0gYCR7a2V5fS12YWx1ZWA7XG4gICAgICAgIGlmIChrZXkgIT09IFwiYWRkcmVzc1wiKVxuICAgICAgICAgICAgdmFsdWVTcGFuLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXJyID0gdmFsdWUuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIGxpbmVTcGFuLnRleHRDb250ZW50ICs9IGFycltpXSArIChpIDwgYXJyLmxlbmd0aCAtIDEgPyBcIixcIiA6IFwiXCIpO1xuICAgICAgICAgICAgICAgIHZhbHVlU3Bhbi5hcHBlbmRDaGlsZChsaW5lU3Bhbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXN0SW5mby5hcHBlbmRDaGlsZChrZXlMYWJlbCk7XG4gICAgICAgIHJlc3RJbmZvLmFwcGVuZENoaWxkKHZhbHVlU3Bhbik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3RJbmZvO1xuICAgIH1cblxuICAgIGJ1aWxkQ29udGFjdEZvcm0gKCkge1xuICAgICAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBjb250YWN0Rm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTsgIC8vIHByZXZlbnQgc3VibWlzc2lvblxuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIGZvcm0gcm93c1xuICAgICAgICBbXCJOYW1lXCIsIFwiRW1haWxcIiwgXCJNZXNzYWdlXCJdLmZvckVhY2goaSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZChcImZvcm0tcm93XCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDcmVhdGUgSW5wdXQgTGFiZWwgRWxlbWVudFxuICAgICAgICAgICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgbGFiZWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxhYmVsXCIpO1xuICAgICAgICAgICAgbGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZShcImZvclwiLCBpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgbGFiZWxFbGVtZW50LnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGkgIT09IFwiTWVzc2FnZVwiKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIElucHV0IEVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5pZCA9IGkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBpICE9PSBcIkVtYWlsXCIgPyBcInRleHRcIiA6IFwiZW1haWxcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZm9ybVJvdy5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1pbnB1dFwiKTtcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5pZCA9IGkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwicm93c1wiLCA1KTtcbiAgICAgICAgICAgICAgICBmb3JtUm93LmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIEVycm9yIFNwYW4gRWxlbWVudFxuICAgICAgICAgICAgY29uc3Qgc3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIHNwYW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIHNwYW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoaS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoc3BhbkVsZW1lbnQpO1xuXG4gICAgICAgICAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtUm93KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFN1Ym1pdCBCdXR0b25cbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLmlkID0gXCJmb3JtLXN1Ym1pdFwiO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJTZW5kIG1lc3NhZ2UhXCI7XG4gICAgICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhY3RGb3JtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIENvcmUgRWxlbWVudHMgRnVuY3Rpb25cbiAgICAgKi9cbiAgICBidWlsZENvcmVzICgpIHtcbiAgICAgICAgLy8gQnVpbGQgTWVudSBFbGVtZW50XG4gICAgICAgIGNvbnN0IG1lbnVDb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWVudUNvcmUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgICAgIC8vIFRPRE86IEJ1aWxkIE1lbnVcblxuICAgICAgICAvLyBCdWlsZCBDb250YWN0IEVsZW1lbnRcbiAgICAgICAgY29uc3QgY29udGFjdENvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWN0Q29yZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgICAgICAgY29uc3Qga2V5VmFsdWVzID0ge1xuICAgICAgICAgICAgXCJpbmZvXCI6IFwiR2V0IGluIHRvdWNoLCBhbmQgYSBQeXRoYWdvcmVhbiB3aWxsIGdldCBiYWNrIHRvIHlvdS4gUmVtZW1iZXIsIGRvIG5vdCB0YWtlIHJvYWRzIHRyYXZlbGVkIGJ5IHRoZSBwdWJsaWMuXCIsXG4gICAgICAgICAgICBcImZvcm1cIjogXCJcIiwgXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwicHl0aGFnb3Jhc0BwaS5pdFwiLCBcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMzkgMzQ1IDYwOTExMDlcIiwgXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCJHaWFyZGlubyBkaSBQaXRhZ29yYSwgQ3JvdG9uZSwgUHJvdmluY2lhIGRpIENyb3RvbmUsIEl0YWxpYSA4ODkwMFwiXG4gICAgICAgIH07XG4gICAgICAgIFtcImluZm9cIiwgXCJmb3JtXCIsIFwiZW1haWxcIiwgXCJwaG9uZVwiLCBcImFkZHJlc3NcIl0uZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGlmIChrID09PSBcImluZm9cIiB8fCBrID09PSBcImZvcm1cIilcbiAgICAgICAgICAgICAgICBjb250YWN0RWxlbWVudC5pZCA9IGBjb250YWN0LSR7a31gO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNvbnRhY3RFbGVtZW50LmlkID0gYHJlc3RhdXJhbnQtJHtrfWA7XG4gICAgICAgICAgICBpZiAoayA9PT0gXCJpbmZvXCIpXG4gICAgICAgICAgICAgICAgY29udGFjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBrZXlWYWx1ZXNba107XG4gICAgICAgICAgICBlbHNlIGlmIChrICE9PSBcImZvcm1cIilcbiAgICAgICAgICAgICAgICBjb250YWN0RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkUmVzdGF1cmFudEluZm8oaywga2V5VmFsdWVzW2tdKSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY29udGFjdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZENvbnRhY3RGb3JtKCkpO1xuICAgICAgICAgICAgY29udGFjdENvcmUuYXBwZW5kQ2hpbGQoY29udGFjdEVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVE9ETzogQnVpbGQgQ29udGFjdFxuXG4gICAgICAgIC8vIEJ1aWxkIEhvbWUgRWxlbWVudFxuICAgICAgICBjb25zdCBob21lQ29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvbWVDb3JlLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuXG4gICAgICAgIGNvbnN0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgaG9tZVRpdGxlLmlkID0gXCJ3ZWxjb21lLXRpdGxlXCI7XG4gICAgICAgIGhvbWVUaXRsZS50ZXh0Q29udGVudCA9IFwiV0VMQ09NRSBUTyBUSEUgUFlUSEFHT1JFQU4gUElaWkFSSUFcIjtcbiAgICAgICAgaG9tZUNvcmUuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcblxuICAgICAgICBjb25zdCBob21lTWVzc2FnZXMgPSB7XG4gICAgICAgICAgICBcImludHJvXCI6IFwiRm9sbG93aW5nIHRoZSAnUHl0aGFnb3JlYW4gZGlldCcsIGFsbCB0aGUgZm9vZCBpcyBtYWRlIHdpdGhvdXQgbWVhdCwgYmVhbnMgb3IgZmlzaFwiLFxuICAgICAgICAgICAgXCJvcGVuaW5nXCI6IFwiT3BlbiBmcm9tIDEwYW0gLSBMYXRlXCIsXG4gICAgICAgICAgICBcIndlZWtseVwiOiBcIlNldmVuIGRheXMgYSB3ZWVrXCIsXG4gICAgICAgICAgICBcImhhcHB5LWhvdXJcIjogXCJIYXBweSBIb3VyOiAzcG0gLSA3cG1cIlxuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGhvbWVNZXNzYWdlcykuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBtZXNzYWdlU3Bhbi5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZS1zcGFuXCIpO1xuICAgICAgICAgICAgbWVzc2FnZVNwYW4uaWQgPSBgJHtrfS1tZXNzYWdlYFxuICAgICAgICAgICAgbWVzc2FnZVNwYW4udGV4dENvbnRlbnQgPSBob21lTWVzc2FnZXNba107XG4gICAgICAgICAgICBob21lQ29yZS5hcHBlbmRDaGlsZChtZXNzYWdlU3Bhbik7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHlQb3J0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHB5UG9ydC5pZCA9IFwicHl0aGFnb3Jhcy1wb3J0cmFpdFwiO1xuICAgICAgICBweVBvcnQuc3JjID0gUHl0aGFnb3Jhc1BvcnRyYWl0O1xuICAgICAgICBob21lQ29yZS5hcHBlbmRDaGlsZChweVBvcnQpO1xuXG4gICAgICAgIGNvbnN0IHB5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHB5TGFiZWwuaWQgPSBcInB5dGhhZ29yYXMtbGFiZWxcIjtcbiAgICAgICAgcHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJweXRoYWdvcmFzLXBvcnRyYWl0XCIpO1xuICAgICAgICBweUxhYmVsLnRleHRDb250ZW50ID0gXCJQb3J0cmFpdCBvZiBQeXRoYWdvcmFzXCI7XG4gICAgICAgIGhvbWVDb3JlLmFwcGVuZENoaWxkKHB5TGFiZWwpO1xuXG4gICAgICAgIC8vIEFkZCBlbGVtZW50cyB0byBjb3JlcyBhcnJheVxuICAgICAgICB0aGlzLl9jb3Jlcy5wdXNoKG1lbnVDb3JlKTtcbiAgICAgICAgdGhpcy5fY29yZXMucHVzaChjb250YWN0Q29yZSk7XG4gICAgICAgIHRoaXMuX2NvcmVzLnB1c2goaG9tZUNvcmUpO1xuXG4gICAgICAgIC8vIFNldHVwIGRlZmF1bHQgY29yZSBjb250ZW50LCBpLmUuIGhvbWUtcGFnZVxuICAgICAgICB0aGlzLnNldENvcmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIEdlbmVyYXRlcyBhbGwgSFRNTCBlbGVtZW50cyBmb3IgcmVzdGF1cmFudCBwYWdlXG4gICAgICovXG4gICAgZ2VuZXJhdGUgKCkge1xuICAgICAgICB0aGlzLmJ1aWxkTmF2aWdhdGlvbigpO1xuICAgICAgICB0aGlzLmJ1aWxkQ29yZXMoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgTWVudSBEYXRhOiAke01lbnVEYXRhLmRhdGF9YCk7XG4gICAgfVxufTsiLCJpbXBvcnQgQnJ1c2NoZXR0YSBmcm9tIFwiLi4vaW1hZ2VzL2F6ZXJiYWlqYW4tYnJ1c2NoZXR0YS5qcGdcIjtcbmltcG9ydCBHYXJsaWNCcmVhZCBmcm9tIFwiLi4vaW1hZ2VzL2F6ZXJiYWlqYW4tY2hlZXN5LWdhcmxpYy1icmVhZC5qcGdcIjtcbmltcG9ydCBTcGFua29waXRhUm9sbHMgZnJvbSBcIi4uL2ltYWdlcy9hemVyYmFpamFuLXNwYW5ha29waXRhLXNwcmluZy1yb2xscy5qcGdcIjtcbmltcG9ydCBCcnVzY2hldHRhUGl6emEgZnJvbSBcIi4uL2ltYWdlcy9hemVyYmFpamFuLWJydXNjaGV0dGEtcGl6emEuanBnXCI7XG5pbXBvcnQgTWFyZ2hhcml0YVBpenphIGZyb20gXCIuLi9pbWFnZXMvYXplcmJhaWphbi1tYXJnaGFyaXRhLXBpenphLmpwZ1wiO1xuaW1wb3J0IFNwaWN5UGl6emEgZnJvbSBcIi4uL2ltYWdlcy9hemVyYmFpamFuLXNwaWN5LXBpenphLmpwZ1wiO1xuaW1wb3J0IENob2NCcm93bmllIGZyb20gXCIuLi9pbWFnZXMvYXplcmJhaWphbi1jaG9jLWJyb3duaWUuanBnXCI7XG5pbXBvcnQgVGlyYW1pc3UgZnJvbSBcIi4uL2ltYWdlcy9hemVyYmFpamFuLXRpcmFtaXN1LmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YTogXCJoZWxsb1wiLFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=