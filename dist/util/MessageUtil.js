"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    excepciones: {
        default: 'No se ha podido implementar la acción requerida, favor comunicarse con mesa de ayuda',
        FechaFinFechaInicial: 'La fecha inicial no puede ser mayor a la fecha final',
        fechaInvalida: (fecha) => { return `La fecha ${fecha} no corresponde a un formato de fecha valido. Favor ingresar un formato ISO o RFC2822 valído`; },
        parametroIncorrecto: (parametro) => { return `El parámetro ${parametro} es obligatorio`; },
        unidadesFaltantesEliminar: 'No se han enviado unidades a eliminar.',
        fechaFinalHoy: 'La fecha final no puede ser superior al dia actual.',
        errorImplementacionConsulta: 'Ha ocurrido un error al tratar de implementar la consulta, favor comunicarse con mesa de ayuda',
        jsonInvalido: 'El objeto JSON enviado está en un formato incorrecto',
        authInvalid: 'Los usuarios con código 0000 requieren iniciar sesion a traves del correo electronico',
        claveInvalida: 'La clave que ha ingresado es invalida, favor intente nuevamente',
        usuarioInvalido: 'El usuario ingresado no existe en nuestro sistema',
        usuarioInactivo: 'El usuario ingresado se encuentra inactivo en el sistema'
    },
    success: {
        default: 'La peticion se realizó de forma exitosa!',
    }
};
