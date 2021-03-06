"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEPENDENCYCONTAINER = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const TypesDao_1 = require("./types/TypesDao");
const TypesRouter_1 = require("./types/TypesRouter");
const DBAdapterImpl_1 = require("../../dao/sql-adapter/DBAdapterImpl");
const DBAdapterMysqlImpl_1 = require("../../dao/mysql-adapter/DBAdapterMysqlImpl");
const daoImpl = require("../../dao/");
const PaisesRouterImpl_1 = require("../../routing/PaisesRouterImpl");
exports.DEPENDENCYCONTAINER = new inversify_1.Container();
exports.DEPENDENCYCONTAINER.bind(TypesDao_1.TYPESDAO.db).to(DBAdapterImpl_1.DBAdapterImpl).inSingletonScope();
exports.DEPENDENCYCONTAINER.bind(TypesDao_1.TYPESDAO.dbMysql).to(DBAdapterMysqlImpl_1.DBAdapterMysqlImpl).inSingletonScope();
exports.DEPENDENCYCONTAINER.bind(TypesRouter_1.TYPESROUTER.paisesRouter).to(PaisesRouterImpl_1.PaisesRouterImpl).inSingletonScope();
exports.DEPENDENCYCONTAINER.bind(TypesDao_1.TYPESDAO.paisesDao).to(daoImpl.PaisesDaoImpl).inSingletonScope();
