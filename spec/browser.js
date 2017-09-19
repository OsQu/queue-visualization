require("babel-register")();

const { JSDOM } = require("jsdom");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === "undefined")
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;

// Copy missing globals for rxjs in tests
global.window.Object = Object;
global.window.Array = Array;
global.window.Date = Date;
global.window.Function = Function;
global.window.Math = Math;
global.window.Number = Number;
global.window.Object = Object;
global.window.RegExp = RegExp;
global.window.String = String;
global.window.Uint8Array = Uint8Array;
global.window.WeakMap = WeakMap;
global.window.Set = Set;
global.window.Error = Error;
global.window.TypeError = TypeError;
global.window.parseInt = parseInt;
global.window.parseFloat = parseFloat;

global.document = window.document;
global.navigator = {
  userAgent: "node.js"
};
copyProps(window, global);
