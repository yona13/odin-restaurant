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


class ContentManager {
    constructor () {
        this._keys = ["Menu", "Contact"];
        this.index = this._keys.length;
        this.nav = document.createElement("div");
        this._nav.classList.add("nav");
        this.core = document.createElement("div");
        this._core.classList.add("core");
        this.cores = [];
    } 

    get index () { return this._index; }

    set index (value) { this._index = value; }

    get nav () { return this._nav; }

    set nav (obj) { this._nav = obj; }

    get core () { return this._core; }

    set core (obj) { this._core = obj; }

    get cores () { return this._cores; }

    set cores (arr) {
        this._cores = [];
        arr.forEach(c => this._cores.push(c));
    }

    update (key) {
        const keyID = `nav-${key.toLowerCase()}`;
        this._nav.querySelectorAll(".nav-obj").forEach(child => {
            if (child.id === keyID)
                child.classList.add("key-selected");
            else
                child.classList.remove("key-selected");
        });

        if (this._keys.includes(key))
            this.index = this._keys.indexOf(key);
        else
            this.index = this._keys.length;
        
        this.setCore();
    }

    buildHome () {
        const home = document.createElement("div");
        home.classList.add("nav-obj");
        home.id = "nav-home";
        const homeBtn = document.createElement("button");
        homeBtn.classList.add("nav-button");
        homeBtn.textContent = "Pythagoras' Pizzaria";
        const icon = new Image();
        icon.src = _images_pizza_png__WEBPACK_IMPORTED_MODULE_0__;
        icon.classList.add("nav-icon");

        home.classList.add("key-selected");
        home.addEventListener("click", (e) => { this.update("home"); });
        home.appendChild(homeBtn);
        home.appendChild(icon);
        this._nav.appendChild(home);
    }

    setCore () {
        this._core.innerHTML = "";
        this._core.appendChild(this._cores[this._index]);
    }

    buildObjects () {
        // Build Menu
        const menuCore = document.createElement("div");
        menuCore.classList.add("menu");
        // TODO: Build Menu

        // Build Contact
        const contactCore = document.createElement("div");
        contactCore.classList.add("contact");
        // TODO: Build Contact

        // Build Home
        const homeCore = document.createElement("div");
        homeCore.classList.add("home");
        // TODO: Build Home

        this._cores.push(menuCore);
        this._cores.push(contactCore);
        this._cores.push(homeCore);
    }

    generate () {
        this._keys.forEach(k => {
            const btn = document.createElement("button");
            btn.classList.add("nav-obj");
            btn.classList.add("nav-button");
            btn.id = `nav-${k.toLowerCase()}`;
            btn.textContent = k;
            btn.addEventListener("click", (e) => { this.update(k); });
            this._nav.append(btn);
        });
        this.buildHome();

        this.buildObjects();
        this.setCore();
    }
};

/***/ }),

/***/ "./src/images/pizza.png":
/*!******************************!*\
  !*** ./src/images/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bc66d5ec0da54f0bd44.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/content-manager.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudE1hbmFnZXIubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0Qzs7QUFFN0I7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1COztBQUVuQix3QkFBd0I7O0FBRXhCLGlCQUFpQjs7QUFFakIsb0JBQW9COztBQUVwQixrQkFBa0I7O0FBRWxCLHFCQUFxQjs7QUFFckIsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixrQkFBa0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBUztBQUM1Qjs7QUFFQTtBQUNBLGdEQUFnRCxzQkFBc0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBLG1EQUFtRCxpQkFBaUI7QUFDcEU7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvanMvY29udGVudC1tYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaXp6YUljb24gZnJvbSBcIi4uL2ltYWdlcy9waXp6YS5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IFtcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5fa2V5cy5sZW5ndGg7XG4gICAgICAgIHRoaXMubmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gICAgICAgIHRoaXMuY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2NvcmUuY2xhc3NMaXN0LmFkZChcImNvcmVcIik7XG4gICAgICAgIHRoaXMuY29yZXMgPSBbXTtcbiAgICB9IFxuXG4gICAgZ2V0IGluZGV4ICgpIHsgcmV0dXJuIHRoaXMuX2luZGV4OyB9XG5cbiAgICBzZXQgaW5kZXggKHZhbHVlKSB7IHRoaXMuX2luZGV4ID0gdmFsdWU7IH1cblxuICAgIGdldCBuYXYgKCkgeyByZXR1cm4gdGhpcy5fbmF2OyB9XG5cbiAgICBzZXQgbmF2IChvYmopIHsgdGhpcy5fbmF2ID0gb2JqOyB9XG5cbiAgICBnZXQgY29yZSAoKSB7IHJldHVybiB0aGlzLl9jb3JlOyB9XG5cbiAgICBzZXQgY29yZSAob2JqKSB7IHRoaXMuX2NvcmUgPSBvYmo7IH1cblxuICAgIGdldCBjb3JlcyAoKSB7IHJldHVybiB0aGlzLl9jb3JlczsgfVxuXG4gICAgc2V0IGNvcmVzIChhcnIpIHtcbiAgICAgICAgdGhpcy5fY29yZXMgPSBbXTtcbiAgICAgICAgYXJyLmZvckVhY2goYyA9PiB0aGlzLl9jb3Jlcy5wdXNoKGMpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGtleSkge1xuICAgICAgICBjb25zdCBrZXlJRCA9IGBuYXYtJHtrZXkudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICB0aGlzLl9uYXYucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtb2JqXCIpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmlkID09PSBrZXlJRClcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKFwia2V5LXNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJrZXktc2VsZWN0ZWRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9rZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5fa2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLl9rZXlzLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0Q29yZSgpO1xuICAgIH1cblxuICAgIGJ1aWxkSG9tZSAoKSB7XG4gICAgICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJuYXYtb2JqXCIpO1xuICAgICAgICBob21lLmlkID0gXCJuYXYtaG9tZVwiO1xuICAgICAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvblwiKTtcbiAgICAgICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiUHl0aGFnb3JhcycgUGl6emFyaWFcIjtcbiAgICAgICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpY29uLnNyYyA9IFBpenphSWNvbjtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWljb25cIik7XG5cbiAgICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwia2V5LXNlbGVjdGVkXCIpO1xuICAgICAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLnVwZGF0ZShcImhvbWVcIik7IH0pO1xuICAgICAgICBob21lLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgICAgICBob21lLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICB0aGlzLl9uYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgfVxuXG4gICAgc2V0Q29yZSAoKSB7XG4gICAgICAgIHRoaXMuX2NvcmUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5fY29yZS5hcHBlbmRDaGlsZCh0aGlzLl9jb3Jlc1t0aGlzLl9pbmRleF0pO1xuICAgIH1cblxuICAgIGJ1aWxkT2JqZWN0cyAoKSB7XG4gICAgICAgIC8vIEJ1aWxkIE1lbnVcbiAgICAgICAgY29uc3QgbWVudUNvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtZW51Q29yZS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICAgICAgLy8gVE9ETzogQnVpbGQgTWVudVxuXG4gICAgICAgIC8vIEJ1aWxkIENvbnRhY3RcbiAgICAgICAgY29uc3QgY29udGFjdENvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWN0Q29yZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgICAgICAgLy8gVE9ETzogQnVpbGQgQ29udGFjdFxuXG4gICAgICAgIC8vIEJ1aWxkIEhvbWVcbiAgICAgICAgY29uc3QgaG9tZUNvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob21lQ29yZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgICAgICAgLy8gVE9ETzogQnVpbGQgSG9tZVxuXG4gICAgICAgIHRoaXMuX2NvcmVzLnB1c2gobWVudUNvcmUpO1xuICAgICAgICB0aGlzLl9jb3Jlcy5wdXNoKGNvbnRhY3RDb3JlKTtcbiAgICAgICAgdGhpcy5fY29yZXMucHVzaChob21lQ29yZSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGUgKCkge1xuICAgICAgICB0aGlzLl9rZXlzLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJuYXYtb2JqXCIpO1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xuICAgICAgICAgICAgYnRuLmlkID0gYG5hdi0ke2sudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gaztcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy51cGRhdGUoayk7IH0pO1xuICAgICAgICAgICAgdGhpcy5fbmF2LmFwcGVuZChidG4pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idWlsZEhvbWUoKTtcblxuICAgICAgICB0aGlzLmJ1aWxkT2JqZWN0cygpO1xuICAgICAgICB0aGlzLnNldENvcmUoKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==