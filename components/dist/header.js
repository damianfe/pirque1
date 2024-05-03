"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var data_1 = require("../lib/data");
var header_items_1 = require("./header-items");
function Header() {
    return (react_1["default"].createElement("header", { className: 'z-[999] relative' },
        react_1["default"].createElement(framer_motion_1.motion.div, { className: 'fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-green-800 bg-opacity-80 shadow-lg shadow-black/[0.03rem] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full', initial: { y: -100, x: "-50%", opacity: 0 }, animate: { y: 0, x: "-50%", opacity: 1 } }),
        react_1["default"].createElement("nav", { className: 'flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0' },
            react_1["default"].createElement("ul", { className: 'flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-blue-200 sm:w-[initial] sm:flex-nowrap sm:gap-5' }, data_1.links.map(function (link) {
                return react_1["default"].createElement(header_items_1["default"], { key: link.name, id: link.id, name: link.name, hash: link.hash });
            })))));
}
exports["default"] = Header;
