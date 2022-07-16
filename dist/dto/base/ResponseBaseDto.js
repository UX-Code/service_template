"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBaseDto = void 0;
class ResponseBaseDto {
    constructor(isError, typeResponse, response) {
        this.isError = isError;
        this.typeResponse = typeResponse;
        this.response = response;
    }
    get $isError() {
        return this.isError;
    }
    get $message() {
        return this.typeResponse;
    }
    get $response() {
        return this.response;
    }
}
exports.ResponseBaseDto = ResponseBaseDto;
