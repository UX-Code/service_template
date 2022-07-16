import { Router } from 'express';

export interface initRouter {
  getRouter(): Router;
}