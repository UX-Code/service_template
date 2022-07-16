"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geo = void 0;
const TypesRouter_1 = require("./config/inversify/types/TypesRouter");
const inversify_config_1 = require("./config/inversify/inversify.config");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const os = require("os");
const errorHandler = require("errorhandler");
const methodOverride = require("method-override");
class Geo {
    constructor() {
        this.paisesRouterImpl = inversify_config_1.DEPENDENCYCONTAINER.get(TypesRouter_1.TYPESROUTER.paisesRouter);
        this.services = express();
        this.config();
        this.routing();
    }
    static bootstrap() {
        return new Geo().services;
    }
    config() {
        this.services.use(logger("dev"));
        this.services.use(bodyParser.json());
        this.services.use(bodyParser.urlencoded({
            extended: true
        }));
        this.services.use(methodOverride());
        this.services.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        this.services.use(errorHandler());
        this.services.use(cors());
    }
    routing() {
        this.services.use(`/health-check`, (_, res) => res.json({ status: 'UP', hostname: os.hostname() }));
        this.services.use('/paises/', this.paisesRouterImpl.getRouter());
    }
}
exports.Geo = Geo;
