"use strict";
exports.__esModule = true;
var awilix_1 = require("awilix");
// services
var DbService_1 = require("../services/DbService");
var NewsService_1 = require("../services/NewsService");
var HttpService_1 = require("../services/HttpService");
var crawler_1 = require("./crawler");
// repositories
var newsRepository_1 = require("../repositories/newsRepository");
var EmailService_1 = require("../services/EmailService");
var container = awilix_1.createContainer({
    injectionMode: awilix_1.InjectionMode.PROXY
});
container.register({
    httpService: awilix_1.asClass(HttpService_1["default"]),
    dbService: awilix_1.asClass(DbService_1["default"]),
    newsService: awilix_1.asClass(NewsService_1["default"]),
    crawler: awilix_1.asClass(crawler_1["default"]),
    emailService: awilix_1.asClass(EmailService_1["default"]),
    newsRepository: awilix_1.asFunction(newsRepository_1["default"])
});
exports["default"] = container;
