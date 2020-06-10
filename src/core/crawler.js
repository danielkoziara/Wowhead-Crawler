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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
var CreateNewsDTO_1 = require("../dto/CreateNewsDTO");
var config_1 = require("../config");
var $ = require("cheerio");
var Crawler = /** @class */ (function () {
    function Crawler(opts) {
        this.httpService = opts.httpService;
        this.newsService = opts.newsService;
    }
    Crawler.prototype.start = function () {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var maxPaginationNumber, index, URL_1, pagePlainHTML, pageDOM, pageResults, pageResults_1, pageResults_1_1, item, e_1_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getMaxPaginationNumber()];
                    case 1:
                        maxPaginationNumber = _b.sent();
                        index = 1;
                        _b.label = 2;
                    case 2:
                        if (!(index <= maxPaginationNumber)) return [3 /*break*/, 19];
                        URL_1 = config_1["default"].base_url + "news&p=" + index;
                        return [4 /*yield*/, this.httpService.request(URL_1)];
                    case 3:
                        pagePlainHTML = _b.sent();
                        return [4 /*yield*/, this.httpService.plainHtmlToCheerio(pagePlainHTML)];
                    case 4:
                        pageDOM = _b.sent();
                        return [4 /*yield*/, this.getAllNewsFromPage(pageDOM)];
                    case 5:
                        pageResults = _b.sent();
                        _b.label = 6;
                    case 6:
                        _b.trys.push([6, 12, 13, 18]);
                        pageResults_1 = (e_1 = void 0, __asyncValues(pageResults));
                        _b.label = 7;
                    case 7: return [4 /*yield*/, pageResults_1.next()];
                    case 8:
                        if (!(pageResults_1_1 = _b.sent(), !pageResults_1_1.done)) return [3 /*break*/, 11];
                        item = pageResults_1_1.value;
                        return [4 /*yield*/, this.newsService.create(item)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 7];
                    case 11: return [3 /*break*/, 18];
                    case 12:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 18];
                    case 13:
                        _b.trys.push([13, , 16, 17]);
                        if (!(pageResults_1_1 && !pageResults_1_1.done && (_a = pageResults_1["return"]))) return [3 /*break*/, 15];
                        return [4 /*yield*/, _a.call(pageResults_1)];
                    case 14:
                        _b.sent();
                        _b.label = 15;
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 17: return [7 /*endfinally*/];
                    case 18:
                        index++;
                        return [3 /*break*/, 2];
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    Crawler.prototype.getAllNewsFromPage = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var list, newsList;
            var _this = this;
            return __generator(this, function (_a) {
                list = page('.news-list .news-post');
                newsList = [];
                list.each(function (index, element) {
                    var news = _this.extractNewsDataFromElement(element);
                    if (news) {
                        newsList.push(news);
                    }
                });
                return [2 /*return*/, newsList];
            });
        });
    };
    Crawler.prototype.extractNewsDataFromElement = function (element) {
        var news = new CreateNewsDTO_1.CreateNewsDTO();
        news.title = $(element).find('h1 a').text().trim();
        news.link = $(element).find('h1 a').attr('href');
        news.excerpt = $(element).find('.news-post-content noscript').text().trim();
        news.published = new Date($(element).find('.news-post-header-byline span.date-tip').attr('title').replace('at', ''));
        news.poster =
            String($(element).find('.news-post-teaser-image').attr('style'))
                .replace(/.*\(/g, '')
                .replace(/\?.*/g, '') || null;
        return news;
    };
    Crawler.prototype.getMaxPaginationNumber = function () {
        return __awaiter(this, void 0, void 0, function () {
            var homepage, homepageDOM, dirtyNumber, maxNumberPaginationPage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.request(config_1["default"].base_url)];
                    case 1:
                        homepage = _a.sent();
                        return [4 /*yield*/, this.httpService.plainHtmlToCheerio(homepage)];
                    case 2:
                        homepageDOM = _a.sent();
                        dirtyNumber = homepageDOM('.nav-pagination td a[rel="last"]').attr('href');
                        maxNumberPaginationPage = this.extractFirstNumber(dirtyNumber);
                        return [2 /*return*/, maxNumberPaginationPage];
                }
            });
        });
    };
    Crawler.prototype.extractFirstNumber = function (dirtyURL) {
        var pattern = /([0-9]+)/g;
        var execRegex = dirtyURL.match(pattern);
        var foundNumbers = execRegex
            .map(function (item) { return +item; })
            .filter(function (item) { return Number.isInteger(item); });
        if (foundNumbers.length) {
            return foundNumbers[0];
        }
        throw new Error('Not found numbers.');
    };
    return Crawler;
}());
exports["default"] = Crawler;
