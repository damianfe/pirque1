"use client";
"use strict";
exports.__esModule = true;
var data_1 = require("@/lib/data");
var use_inter_section_1 = require("@/utils/use-inter-section");
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
var Feature = function (_a) {
    var item = _a.item, index = _a.index;
    var animation = { opacity: 1, x: 0 };
    var _b = use_inter_section_1["default"]("features", animation), elementRef = _b.elementRef, control = _b.control;
    return (React.createElement(framer_motion_1.motion.div, { ref: elementRef, initial: { opacity: 0, x: index % 2 === 0 ? 100 : -100 }, animate: control, className: "flex flex-col-reverse " + (index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse") + " " + (index === 0 ? "sm:mt-[2rem]" : "sm:mt-[18rem]") + " " + (index === 0 ? "mt-[2rem]" : "mt-[10rem]") + " mt-[10rem] items-center " },
        React.createElement("div", { className: "px-10 " + (index % 2 === 0 ? "sm:pr-20" : "sm:pl-20") + "flex flex-col items-start" },
            React.createElement("h2", { className: 'mx-auto sm:mx-0 text-2xl sm:text-4xl mb-5 font-bold mt-5 sm:mt-0' }, item.title),
            React.createElement("p", { className: "text-justify text-sm sm:text-xl text-gray-500 leading-[1.8rem]" }, item.description)),
        React.createElement(image_1["default"], { className: 'rounded-[1.5rem] border border-gray-150 shadow-sm w-[12.5rem] h-[12.5rem]', src: item.imagePath, width: 200, height: 200, alt: item.alt })));
};
function Features() {
    return (React.createElement("section", { id: "servicios", className: 'mx-auto w-full sm:max-w-2xl sm:mt-[18rem]' },
        React.createElement("h1", { className: ' text-center text-2xl text-green-950 mt-5 sm:mt-0 sm:text-3xl' }, "Servicios"),
        data_1.servicios.map(function (item, index) {
            return React.createElement(Feature, { key: item.title, item: item, index: index });
        })));
}
exports["default"] = Features;
