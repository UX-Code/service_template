"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbGEO = void 0;
const conn = {
    user: 'root',
    password: 'Guille0502',
    server: 'localhost'
};
exports.dbGEO = Object.assign(Object.assign({}, conn), { database: 'geo' });
