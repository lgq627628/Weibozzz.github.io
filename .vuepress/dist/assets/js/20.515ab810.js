(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{280:function(s,t,e){"use strict";e.r(t);var a=e(0),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"node-os-shim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-os-shim"}},[s._v("#")]),s._v(" Node OS shim "),e("a",{attrs:{href:"http://travis-ci.org/AdesisNetlife/node-os-shim",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://secure.travis-ci.org/AdesisNetlife/node-os-shim.png?branch=master",alt:"Build Status"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"http://badge.fury.io/js/os-shim",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badge.fury.io/js/os-shim.png",alt:"NPM version"}}),e("OutboundLink")],1)]),s._v(" "),e("blockquote",[e("p",[s._v("Native OS module API shim for older node.js versions")])]),s._v(" "),e("h2",{attrs:{id:"about"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[s._v("#")]),s._v(" About")]),s._v(" "),e("p",[s._v("Node.js team froze the "),e("a",{attrs:{href:"http://nodejs.org/api/os.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("OS module API"),e("OutboundLink")],1),s._v(" in 0.10.x version, however the API differs a bit in lower node.js versions")]),s._v(" "),e("p",[s._v("This shim just provides the missing OS module API that is available on latest node.js versions.\nYou can now use the "),e("code",[s._v("os")]),s._v(" package in old node.js versions without fear.")]),s._v(" "),e("p",[s._v("It's based on the current node.js "),e("a",{attrs:{href:"https://github.com/joyent/node/blob/master/lib/os.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("implementations"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ npm install os-shim --save[-dev]\n")])])]),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("You simply should use the "),e("code",[s._v("os-shim")]),s._v(" module instead of the "),e("code",[s._v("os")]),s._v(" native node.js module")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" os "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'os-shim'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nos"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tmpdir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("p",[s._v("You can mutate the "),e("code",[s._v("os-shim")]),s._v(" module object without worring about it can create side effects in the native "),e("code",[s._v("os")]),s._v(" module object")]),s._v(" "),e("h2",{attrs:{id:"the-missing-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-missing-api"}},[s._v("#")]),s._v(" The missing API")]),s._v(" "),e("p",[s._v("The following API is missing in node.js "),e("code",[s._v("0.8.x")]),s._v(" and lower versions")]),s._v(" "),e("h4",{attrs:{id:"os-tmpdir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#os-tmpdir"}},[s._v("#")]),s._v(" os.tmpdir()")]),s._v(" "),e("p",[s._v("Returns the operating system's default directory for temp files")]),s._v(" "),e("h4",{attrs:{id:"os-endianness"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#os-endianness"}},[s._v("#")]),s._v(" os.endianness()")]),s._v(" "),e("p",[s._v('Returns the endianness of the CPU. Possible values are "BE" or "LE"')]),s._v(" "),e("h4",{attrs:{id:"os-eol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#os-eol"}},[s._v("#")]),s._v(" os.EOL")]),s._v(" "),e("p",[s._v("A constant defining the appropriate End-of-line marker for the operating system")]),s._v(" "),e("h4",{attrs:{id:"os-platform"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#os-platform"}},[s._v("#")]),s._v(" os.platform()")]),s._v(" "),e("p",[s._v("Returns the operating system platform")]),s._v(" "),e("h4",{attrs:{id:"os-arch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#os-arch"}},[s._v("#")]),s._v(" os.arch()")]),s._v(" "),e("p",[s._v("Returns the operating system CPU architecture")]),s._v(" "),e("h2",{attrs:{id:"contributing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[s._v("#")]),s._v(" Contributing")]),s._v(" "),e("p",[s._v("Instead of a formal styleguide, take care to maintain the existing coding style.")]),s._v(" "),e("p",[s._v("Add unit tests for any new or changed functionality")]),s._v(" "),e("h3",{attrs:{id:"development"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[s._v("#")]),s._v(" Development")]),s._v(" "),e("p",[s._v("Clone the repository")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/adesisnetlife/node-os-shim.git "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" node-os-shim\n")])])]),e("p",[s._v("Install dependencies")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),e("p",[s._v("Run tests")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),e("h2",{attrs:{id:"release-history"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#release-history"}},[s._v("#")]),s._v(" Release History")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("0.1.1")]),s._v(" "),e("code",[s._v("2013-12-11")]),s._v(" "),e("ul",[e("li",[s._v("Add platform() and arch() methods (for Node.js 0.4.x)")])])]),s._v(" "),e("li",[e("strong",[s._v("0.1.0")]),s._v(" "),e("code",[s._v("2013-12-11")]),s._v(" "),e("ul",[e("li",[s._v("Initial release")])])])]),s._v(" "),e("h2",{attrs:{id:"to-do"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#to-do"}},[s._v("#")]),s._v(" To Do")]),s._v(" "),e("ul",[e("li",[s._v("Add "),e("code",[s._v("os.networkInterfaces()")]),s._v(" shim method")])]),s._v(" "),e("p",[s._v("Do you miss something? Open an issue or make a PR!")]),s._v(" "),e("h2",{attrs:{id:"contributors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[s._v("#")]),s._v(" Contributors")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://github.com/h2non",target:"_blank",rel:"noopener noreferrer"}},[s._v("Tomas Aparicio"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[s._v("#")]),s._v(" License")]),s._v(" "),e("p",[s._v("Copyright (c) 2013 Adesis Netlife S.L and contributors")]),s._v(" "),e("p",[s._v("Released under MIT license")])])}),[],!1,null,null,null);t.default=r.exports}}]);