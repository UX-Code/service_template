"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityCountry = void 0;
class EntityCountry {
    constructor(sortname, name, phonecode) {
        this.sortname = sortname;
        this.name = name;
        this.phonecode = phonecode;
    }
    get $sortname() {
        return this.sortname;
    }
    get $name() {
        return this.name;
    }
    get $phonecode() {
        return this.phonecode;
    }
}
exports.EntityCountry = EntityCountry;
