"use client";
"use strict";
exports.__esModule = true;
var features_1 = require("@/components/features");
var footer_1 = require("@/components/footer");
var header_1 = require("@/components/header");
var intro_1 = require("@/components/intro");
function Home() {
    return (React.createElement("main", null,
        React.createElement(header_1["default"], null),
        React.createElement(intro_1["default"], null),
        React.createElement(features_1["default"], null),
        React.createElement(footer_1["default"], null)));
}
exports["default"] = Home;
