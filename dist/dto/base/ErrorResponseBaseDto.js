"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponseBaseDto = void 0;
class ErrorResponseBaseDto {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
    get $code() {
        return this.code;
    }
    get $message() {
        return this.message;
    }
}
exports.ErrorResponseBaseDto = ErrorResponseBaseDto;
