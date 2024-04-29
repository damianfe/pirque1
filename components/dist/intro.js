"use client";
"use strict";
exports.__esModule = true;
var gi_1 = require("react-icons/gi");
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var use_inter_section_1 = require("@/utils/use-inter-section");
function Intro() {
    var animacion = {
    // Define las propiedades de tu animación aquí
    };
    var elementRef = use_inter_section_1["default"]("intro", animacion).elementRef;
    return (react_1["default"].createElement("section", { ref: elementRef, id: "inicio", className: 'mx-auto max-w-6xl mt-24 sm:mb-[15rem]' },
        react_1["default"].createElement("div", { className: 'flex flex-row justify-between items-center mx-5 mb-5 bg-white-500' },
            react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: 'flex flex-row items-center' },
                react_1["default"].createElement(gi_1.GiFruitTree, { className: 'w-10 h-10 text-lime-700' }),
                react_1["default"].createElement("span", { className: 'font-bold text-[1rem] sm-text-xl ml-1' }, "Disfrut\u00E1 Pirque")),
            react_1["default"].createElement(framer_motion_1.motion.button, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: 'bg-sky-200 cursor-pointer hover:bg-green-200 active:bg-purple-50 focus:bg-purple-50 border text-[0.9rem] sm:text-[1rem] border-blue-950 rounded-lg w-[6.3rem] h-[2.1rem] sm:w-[8.1rem] sm:h-[2.5rem]' }, "Reservar")),
        react_1["default"].createElement("div", { className: 'flex flex-col sm:flex-row justify-between mx-5 items-start ' },
            react_1["default"].createElement("div", { className: ' flex flex-col sm:pr-5 md:pr-10' },
                react_1["default"].createElement(framer_motion_1.motion.h1, { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 }, className: 'text-2xl mt-5 mb:0 sm:text-3xl md:text-5xl text-green-800' }, "Celebra tus Eventos en Nuestra Quinta"),
                react_1["default"].createElement(framer_motion_1.motion.p, { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 }, className: 'mt-3 sm:mt-5' }, "Disfrut\u00E1 de momentos inolvidables en nuestra quinta para eventos. Contamos con amplios espacios, hermosos jardines y todas las comodidades para hacer de tu celebraci\u00F3n un \u00E9xito."),
                react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: 'flex mt-5 gap-5 flex-col xl:flex-row mx-auto sm:mx-0' })),
            react_1["default"].createElement(framer_motion_1.motion.video, { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 }, className: 'relative mx:auto sm:mx-0 flex h-[23rem] w-[27rem] sm:w-[26rem] sm:h-[30rem] lg:w-[39rem] lg:h-[37rem] ', muted: true, autoPlay: true, loop: true }))));
}
exports["default"] = Intro;
