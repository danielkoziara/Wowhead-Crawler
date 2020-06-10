"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GenericEntity = void 0;
var typeorm_1 = require("typeorm");
var GenericEntity = /** @class */ (function () {
    function GenericEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], GenericEntity.prototype, "id");
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'created_at',
            type: 'datetime',
            "default": function () { return "datetime()"; }
        })
    ], GenericEntity.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'updated_at',
            type: 'datetime',
            nullable: true
        })
    ], GenericEntity.prototype, "updatedAt");
    GenericEntity = __decorate([
        typeorm_1.Entity()
    ], GenericEntity);
    return GenericEntity;
}());
exports.GenericEntity = GenericEntity;
