"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtil = void 0;
const moment = require("moment-timezone");
const MessageUtil_1 = require("./MessageUtil");
class DateUtil {
    static obtenerFecha(date) {
        return moment(date).tz("America/Bogota").format("YYYY-MM-DD");
    }
    static obtenerFechaHoy() {
        return moment().tz("America/Bogota").format("YYYY-MM-DD");
    }
    static obtenerHora(date) {
        return moment(date).tz("America/Bogota").format("HH:mm:ss");
    }
    static obtenerHoraHoy() {
        return moment().tz("America/Bogota").format("HH:mm:ss");
    }
    static obtenerFechaYHora(date) {
        return moment(date).tz("America/Bogota").format("YYYY-MM-DD HH:mm:ss");
    }
    static obtenerFechaYHoraHoy() {
        return moment().tz("America/Bogota").format("YYYY-MM-DD HH:mm:ss");
    }
    static restarFechaPorDias(date, diasARestar) {
        return moment(date).subtract(diasARestar, 'days').format('YYYY-MM-DD');
    }
    static validarFecha(date) {
        return moment(date, "YYYY-MM-DD").isValid();
    }
    static validarFechaIniFechaFin(date_start, date_end) {
        const stack = {
            isError: true,
            typeError: 'error',
            httpCode: 400,
        };
        try {
            const fechaInicio = this.obtenerFecha(new Date(date_start));
            const fechaFinal = this.obtenerFecha(new Date(date_end));
            if (!moment(fechaInicio).isValid()) {
                stack["message"] = MessageUtil_1.default.excepciones.fechaInvalida(date_start);
                throw new TypeError(JSON.stringify(stack));
            }
            if (!moment(fechaFinal).isValid()) {
                stack["message"] = MessageUtil_1.default.excepciones.fechaInvalida(date_end);
                throw new TypeError(JSON.stringify(stack));
            }
            if (fechaInicio > fechaFinal) {
                stack["message"] = MessageUtil_1.default.excepciones.FechaFinFechaInicial;
                throw new TypeError(JSON.stringify(stack));
            }
            return true;
        }
        catch (error) {
            throw new TypeError(JSON.stringify(stack));
        }
    }
    static validarFechaFinalHoy(date_end) {
        const stack = {
            isError: true,
            typeError: 'error',
            httpCode: 400,
        };
        try {
            const fechaFinal = this.obtenerFecha(new Date(date_end));
            if (!moment(fechaFinal).isValid()) {
                stack["message"] = MessageUtil_1.default.excepciones.fechaInvalida(date_end);
                throw new TypeError(JSON.stringify(stack));
            }
            if (fechaFinal > this.obtenerFechaHoy()) {
                stack["message"] = MessageUtil_1.default.excepciones.fechaFinalHoy;
                throw new TypeError(JSON.stringify(stack));
            }
            return true;
        }
        catch (error) {
            throw new TypeError(JSON.stringify(stack));
        }
    }
}
exports.DateUtil = DateUtil;
