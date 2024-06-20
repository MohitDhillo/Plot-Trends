"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/', route_1.default);
// app.post("/", async (req, res) => {
//     console.log(req.query);
//     console.log(req.headers);
//     console.log((req.body));
//     console.log(req);
//
// });
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
