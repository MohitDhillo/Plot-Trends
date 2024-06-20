"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrendsData = void 0;
// @ts-ignore
const google_trends_api_1 = __importDefault(require("google-trends-api"));
const getTrendsData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield google_trends_api_1.default.interestOverTime({ keyword: req.query.keyword });
    let jsoned = JSON.parse(result);
    let timelineData = jsoned.default.timelineData;
    let values = [];
    for (let i = 0; i < timelineData.length; i++) {
        let item = timelineData[i];
        values.push(item.value[0]);
        // console.log(item);
        // Process each item here
    }
    return res.send(values);
});
exports.getTrendsData = getTrendsData;
