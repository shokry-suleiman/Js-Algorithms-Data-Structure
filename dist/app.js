/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://leetcode/./src/scss/style.scss?");

/***/ }),

/***/ "./src/DST/Double linked List.js":
/*!***************************************!*\
  !*** ./src/DST/Double linked List.js ***!
  \***************************************/
/***/ (() => {

eval("class Node {\r\n    constructor(val){\r\n        this.val = val;\r\n        this.next = null;\r\n        this.prev = null;\r\n    }\r\n}\r\n\r\nclass DLL{\r\n    constructor(){\r\n        this.head = null;\r\n        this.tail = null;\r\n        this.length = 0;\r\n    }\r\n\r\n    push(val){\r\n        let node = new Node(val);\r\n        if(this.length ==0){\r\n            this.tail = node;\r\n            this.head = node;\r\n            ++this.length;\r\n            return;\r\n        }\r\n\r\n        this.tail.next = node;\r\n        node.prev = this.tail;\r\n        this.tail = node;\r\n        ++this.length;\r\n    }\r\n\r\n    pop(){\r\n        if(this.length == 0 )\r\n            return undefined;\r\n        this.tail = this.tail.prev;\r\n        this.tail.next = null;\r\n        --this.length;\r\n    }\r\n\r\n    shift(){\r\n        if(this.length == 0) return undefined;\r\n        if(this.length == 1){\r\n            this.tail = null;\r\n            this.head = null;\r\n            --this.length;\r\n            return;\r\n        }\r\n        let temp = this.head;\r\n        this.head = this.head.next;\r\n        temp.next = null;\r\n        this.head.prev = null;\r\n        --this.length;\r\n    }\r\n    \r\n    unShift(val){\r\n        let node = new Node(val);\r\n        if(this.length == 0) {\r\n            this.head = node;\r\n            this.tail = node;\r\n            ++this.length;\r\n            return\r\n        }\r\n        this.head.prev = node;\r\n        node.next = this.head;\r\n        this.head = node;\r\n        ++this.length;\r\n    }\r\n\r\n    get(index){\r\n        if(index < 0 || index >= this.length) return null;\r\n        if(index < ( this.length / 2 ) ){\r\n            let i =0;\r\n            let node = this.head;\r\n            while(i != index){\r\n                node = node.next;\r\n                i++;\r\n            }\r\n               \r\n            return node;\r\n        }else {\r\n            let i=this.length-1;\r\n            let node = this.tail\r\n            while(i != index){\r\n                node = node.prev;\r\n                i--;\r\n            }\r\n            return node;\r\n        }\r\n    }\r\n\r\n    set(index,val){\r\n        \r\n        let current = this.get(index);\r\n        if(!current)\r\n            return false;\r\n        current.val = val;\r\n        return true;\r\n    }\r\n\r\n    insert(index,val){\r\n        if(index < 0 || index > this.length) return false;\r\n\r\n        if(index == 0){\r\n            this.unShift(val);\r\n            return true;\r\n        }\r\n        if(index == this.length){\r\n            thiis.push(val);\r\n            return true;\r\n        }\r\n\r\n        \r\n        let node = new Node(val);\r\n        let current = this.get(index);\r\n        let temp = current.prev;\r\n        temp.next = node;\r\n        node.prev = temp;\r\n        node.next = current;\r\n        current.prev = node;\r\n        ++this.length;\r\n        return true;\r\n    }\r\n\r\n    remove(index){\r\n        if(index < 0 || index >= this.length) return false;\r\n        let node = this.get(index);\r\n\r\n        if(index == 0){\r\n            this.shift();\r\n            return node;\r\n        }\r\n\r\n        if(index == this.length-1){\r\n            this.pop();\r\n            return node;\r\n        }\r\n\r\n        let temp = node.prev;\r\n        temp.next = node.next;\r\n        node.next.prev = temp;\r\n        node.next =null;\r\n        node.prev = null;\r\n        --this.length;\r\n        return node;\r\n    }\r\n\r\n}\r\n\r\nvar dll = new DLL();\r\ndll.push(1);\r\ndll.push(4);\r\ndll.push(5);\r\n// dll.pop();\r\n// dll.shift();\r\n// dll.shift();\r\n// dll.unShift(3)\r\n// dll.unShift(6)\r\n// dll.set(1,2)\r\ndll.insert(1,2);\r\ndll.insert(2,3);\r\nconsole.log(dll.remove(5));\r\nconsole.log(dll);\r\n// console.log(dll.get(1))\n\n//# sourceURL=webpack://leetcode/./src/DST/Double_linked_List.js?");

/***/ }),

/***/ "./src/DST/Single Linked List.js":
/*!***************************************!*\
  !*** ./src/DST/Single Linked List.js ***!
  \***************************************/
/***/ (() => {

eval("class Node {\r\n    constructor(val){\r\n        this.val = val;\r\n        this.next = null;\r\n    }\r\n}\r\n\r\nclass SingleLinkedList{\r\n\r\n    constructor(){\r\n        this.head = null;\r\n        this.tail = null\r\n        this.length = 0;\r\n    }\r\n\r\n    push(val){\r\n        let node = new Node(val);\r\n        if(this.head == null){\r\n            this.head = node;\r\n            this.tail = node;\r\n        }else{\r\n            this.tail.next = node;\r\n            this.tail = node;\r\n        }\r\n        ++ this.length;\r\n    }\r\n\r\n    pop(){\r\n        if(this.head == null)\r\n            return undefined;\r\n        let current = this.head;\r\n        while(current.next != this.tail){\r\n            current = current.next;\r\n        }\r\n        \r\n        current.next = null;\r\n        this.tail =current;\r\n        --this.length;\r\n        if(this.length == 0){\r\n            this.head = null;\r\n            this.tail = null;\r\n        }\r\n    }\r\n\r\n    shift(){\r\n        if(this.head == null)\r\n            return undefined\r\n        let current = this.head;\r\n        this.head = this.head.next;\r\n        --this.length;\r\n    }\r\n\r\n    unShift(val){\r\n        let node = new Node(val);\r\n        if(!this.head){\r\n            this.head = node;\r\n            this.tail = node;\r\n            ++this.length;\r\n            return this;\r\n        }\r\n        let current = this.head;\r\n        this.head = node;\r\n        this.head.next = current;\r\n        ++this.length;\r\n    }\r\n\r\n    get(index){\r\n        if(index < 0 || index > this.length) return null;\r\n        let i = 0;\r\n        let current = this.head;\r\n        while(i < index){\r\n            current = current.next;\r\n            ++i;\r\n        }\r\n\r\n        return current;\r\n    }\r\n\r\n    set(index,val){\r\n        let current = this.get(index);\r\n        if(!current)\r\n            return false;\r\n        current.val = val;\r\n        return true;\r\n    }\r\n\r\n    insert(index,val){\r\n        if(index == 0){\r\n            this.unShift(val);\r\n            return true;\r\n        }\r\n\r\n        if(index == this.length){\r\n            this.push(val);\r\n            return true;\r\n        }\r\n\r\n        let node = new Node(val);\r\n        let current = this.get(index-1);\r\n        \r\n        if(!current)return false;\r\n        let temp = current;\r\n        node.next = temp.next;\r\n        current.next = node;\r\n        ++this.length;\r\n        return true;\r\n    }\r\n\r\n    remove(index){\r\n        if(index < 0 || index >= this.length) return null;\r\n        let node = this.get(index);\r\n\r\n        if(index == 0){\r\n            this.shift();\r\n            return node.val;\r\n        }\r\n\r\n        if(index == this.length-1 ){\r\n            this.pop();\r\n            return node.val\r\n        }\r\n\r\n        let current = this.get(index-1);\r\n\r\n        if(!current) return null;\r\n        current.next = node.next;\r\n        --this.length;\r\n        return node.val;\r\n    }\r\n\r\n    reverse(){\r\n        let root = this.head;\r\n        this.head = this.tail;\r\n        this.tail = root;\r\n        let current = root;\r\n        let prev = null;\r\n        let next = null;\r\n        console.log('current',current);\r\n        console.log('prev',prev);\r\n        console.log(next)\r\n        let i =0;\r\n        while(i<this.length){\r\n            console.log('curr',current)\r\n            next = current.next;\r\n            current.next = prev\r\n            prev = current;\r\n            current = next\r\n            ++i;\r\n        }\r\n        // this.head.next = prev\r\n    }\r\n}\r\n\r\nlet SLL = new SingleLinkedList();\r\nSLL.push(1);\r\nSLL.push(2);\r\nSLL.push(3);\r\nSLL.push(4);\r\nconsole.log('before')\r\nconsole.log(SLL);\r\nSLL.reverse();\r\nconsole.log('after')\r\nconsole.log(SLL)\r\n\r\n// SLL.pop();\r\n// SLL.shift();\r\n// SLL.unShift(5);\r\n// console.log(SLL);\r\n// console.log(SLL.get(2))\r\n// console.log(SLL.set(2,9))\r\n// console.log(SLL.insert(0,3));\r\n// console.log(SLL);\r\n// console.log(SLL.remove(1));\r\n// console.log(SLL);\r\n\n\n//# sourceURL=webpack://leetcode/./src/DST/Single_Linked_List.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _DST_Single_Linked_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DST/Single Linked List */ \"./src/DST/Single Linked List.js\");\n/* harmony import */ var _DST_Single_Linked_List__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DST_Single_Linked_List__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DST_Double_linked_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DST/Double linked List */ \"./src/DST/Double linked List.js\");\n/* harmony import */ var _DST_Double_linked_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DST_Double_linked_List__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://leetcode/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;