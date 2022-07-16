import { Container } from "inversify";
import "reflect-metadata";

import { TYPESDAO } from "./types/TypesDao";
import { TYPESROUTER } from "./types/TypesRouter";

import { DBAdapter } from "../../dao/sql-adapter/DBAdapter"; 
import { DBAdapterImpl } from "../../dao/sql-adapter/DBAdapterImpl";

import { DBAdapterMysql } from "../../dao/mysql-adapter/DBAdapterMysql"; 
import { DBAdapterMysqlImpl } from "../../dao/mysql-adapter/DBAdapterMysqlImpl";

import * as dao from "../../dao/interfaces/";
import * as daoImpl from "../../dao/";
 
import { initRouter } from "../../routing/interfaces/router"; 
import { PaisesRouterImpl } from "../../routing/PaisesRouterImpl"; 

export const DEPENDENCYCONTAINER = new Container();

DEPENDENCYCONTAINER.bind<DBAdapter>(TYPESDAO.db).to(DBAdapterImpl).inSingletonScope();
DEPENDENCYCONTAINER.bind<DBAdapterMysql>(TYPESDAO.dbMysql).to(DBAdapterMysqlImpl).inSingletonScope();
DEPENDENCYCONTAINER.bind<initRouter>(TYPESROUTER.paisesRouter).to(PaisesRouterImpl).inSingletonScope();

DEPENDENCYCONTAINER.bind<dao.PaisesDao>(TYPESDAO.paisesDao).to(daoImpl.PaisesDaoImpl).inSingletonScope();
 