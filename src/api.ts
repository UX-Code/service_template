import { TYPESROUTER } from './config/inversify/types/TypesRouter';
import { DEPENDENCYCONTAINER } from './config/inversify/inversify.config';

import * as express from 'express';
import * as bodyParser from 'body-parser'; 
import * as logger from 'morgan';
import * as cors from 'cors';
import * as os from 'os';

import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
 
import { initRouter } from './routing/interfaces/router';

export class Geo {

 private paisesRouterImpl = DEPENDENCYCONTAINER.get<initRouter>(TYPESROUTER.paisesRouter); 
 private services: express.Application;

public static bootstrap(): express.Application {
    return new Geo().services;
}
  
  private constructor() {
    this.services = express();
    this.config();
    this.routing();
  }

  private config() {
    this.services.use(logger("dev"));
    this.services.use(bodyParser.json());
    this.services.use(bodyParser.urlencoded({
      extended: true
    }));
    this.services.use(methodOverride());

    this.services.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      err.status = 404;
      next(err);
    });

    this.services.use(errorHandler());
    this.services.use(cors()); 
  }

  private routing() {

    this.services.use(`/health-check`, (_, res) => res.json({ status: 'UP', hostname: os.hostname() }))
    this.services.use('/paises/', this.paisesRouterImpl.getRouter());  
     
  }
}