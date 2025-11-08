"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
var client_js_1 = require("./generated/prisma/client.js");
require("dotenv/config");
var express_1 = require("express");
var product_router_js_1 = require("./product-router.js");
exports.prisma = new client_js_1.PrismaClient();
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
// Middleware to parse JSON request bodies
app.use(express_1.default.json());
app.use('/api/products', product_router_js_1.default);
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
