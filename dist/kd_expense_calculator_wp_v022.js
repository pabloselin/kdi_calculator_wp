/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
console.log("init expense calculator wp");
document.addEventListener("click", function (e) {
  if (e.target && e.target.className === "kd_calculate_button" || e.target && e.target.className === "kd_calculate_button active") {
    console.log(e.target);
    let buttons = document.getElementsByClassName("kd_calculate_button");
    let appContainer = document.getElementById("kd_expense_calculator_wp");
    if (appContainer.classList.contains("active")) {
      appContainer.classList.remove("active");
      document.body.classList.remove("kd_expense_calculator_wp_active");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
      }
    } else {
      appContainer.classList.add("active");
      document.body.classList.add("kd_expense_calculator_wp_active");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("active");
      }
    }
  }
});
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************************!*\
  !*** ./src/scss/kd_expense_calculator_wp.scss ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=kd_expense_calculator_wp_v022.js.map