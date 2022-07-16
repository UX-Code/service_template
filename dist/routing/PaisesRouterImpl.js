"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaisesRouterImpl = void 0;
const inversify_config_1 = require("../config/inversify/inversify.config");
const express_1 = require("express");
const inversify_1 = require("inversify");
const TypesDao_1 = require("../config/inversify/types/TypesDao");
require("reflect-metadata");
let PaisesRouterImpl = class PaisesRouterImpl {
    constructor() {
        this.paisesDAO = inversify_config_1.DEPENDENCYCONTAINER.get(TypesDao_1.TYPESDAO.paisesDao);
        this.router = (0, express_1.Router)();
        this.init();
    }
    init() {
        this.router.get('', (req, res) => { this.obtenerPaises(req, res); });
        this.router.post('', (req, res) => { this.insertarPais(req, res); });
    }
    getRouter() {
        return this.router;
    }
    obtenerPaises(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.paisesDAO.getCountries();
                res.status(200).json({ error: false, state: "success", message: response });
            }
            catch (e) {
                console.error(`Hay un error en el metodo obtenerPaises(): `, e.message);
                res.status(200).json({ error: true, state: "error", menssage: "Ha ocurrido un error al obtener los paises", e });
            }
        });
    }
    insertarPais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const response = yield this.paisesDAO.insertCountry(data);
                res.status(200).json({ error: false, state: "success", message: response });
            }
            catch (e) {
                console.error(`Hay un error en el metodo insertarPais(): `, e.message);
                res.status(200).json({ error: true, state: "error", menssage: "Ha ocurrido un error al obtener los paises", e });
            }
        });
    }
};
PaisesRouterImpl = __decorate([
    (0, inversify_1.injectable)()
], PaisesRouterImpl);
exports.PaisesRouterImpl = PaisesRouterImpl;
