"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataResponseBaseDto = void 0;
class DataResponseBaseDto {
    constructor(message, data) {
        this.message = message;
        this.data = data;
    }
    get $message() {
        return this.message;
    }
    get $data() {
        return this.data;
    }
}
exports.DataResponseBaseDto = DataResponseBaseDto;
