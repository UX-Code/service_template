import { EntityCountry } from './../models/entities/entityCountry';
import { DEPENDENCYCONTAINER } from '../config/inversify/inversify.config';
import { Router, Request, Response } from 'express';
import { injectable } from 'inversify';
import { initRouter } from './interfaces/router';

import { TYPESDAO } from '../config/inversify/types/TypesDao';

import "reflect-metadata";
import { PaisesDao } from '../dao/interfaces';

@injectable()
export class PaisesRouterImpl implements initRouter {
  public  router: Router;
  private paisesDAO = DEPENDENCYCONTAINER.get<PaisesDao>(TYPESDAO.paisesDao);
   

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() { 
    this.router.get('', (req, res) => { this.obtenerPaises(req, res) });  
    this.router.post('', (req, res) => { this.insertarPais(req, res) });  
  }

  public getRouter() {
    return this.router;
  }
    //promesas await async 
    
  private async obtenerPaises(req:Request, res:Response){
    try {
      const response  = await this.paisesDAO.getCountries(); 
      res.status(200).json({ error: false, state: "success", message: response });
    } catch (e) { 
      console.error(`Hay un error en el metodo obtenerPaises(): `, e.message);
      res.status(200).json({error: true, state: "error", menssage:"Ha ocurrido un error al obtener los paises", e});
    }
  } 


  private async insertarPais(req: Request, res:Response){
    try {
      const data = req.body
      const response = await this.paisesDAO.insertCountry(data);
      res.status(200).json({ error: false, state: "success", message: response });
    } catch (e) {
      console.error(`Hay un error en el metodo insertarPais(): `, e.message);
      res.status(200).json({ error: true, state: "error", menssage: "Ha ocurrido un error al obtener los paises", e });
    }
  }

}