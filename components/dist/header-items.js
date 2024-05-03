"use client";
"use strict";
exports.__esModule = true;
var active_section_context_1 = require("@/context/active-section-context");
var framer_motion_1 = require("framer-motion");
var link_1 = require("next/link");
function HeaderItem(_a) {
    var name = _a.name, hash = _a.hash, id = _a.id;
    var _b = active_section_context_1.useActiveSectionContext(), activeSection = _b.activeSection, setActiveSection = _b.setActiveSection;
    var scrollToSection = function (sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (React.createElement(framer_motion_1.motion.li, { className: 'h-3/4 flex items-center justify-center relative init', key: hash, initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
        React.createElement(link_1["default"], { className: "\n                " + (id === activeSection ? "text-green-200" : "") + " flex w-full transition-all items-center justify-center px-3 py-3 hover:text-green-900", href: "", onClick: function (e) {
                e.preventDefault();
                setActiveSection(id);
                scrollToSection(id);
            } },
            name,
            id === activeSection && (React.createElement(framer_motion_1.motion.span, { className: 'bg-gray-500 rounded-full absolute inset-0 -z-10 dark:bg-gray-400', layoutId: 'activeSection' })))));
}
exports["default"] = HeaderItem;
