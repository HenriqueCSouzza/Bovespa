"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
require("./database");
const app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(3333, () => {
    // eslint-disable-next-line no-console
    console.log('Server started on port 3333!');
});
