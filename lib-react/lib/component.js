"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Component = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'World' : _b, children = _a.children;
    return react_1.default.createElement("h1", null,
        "Hello ",
        name);
};
exports.default = Component;
