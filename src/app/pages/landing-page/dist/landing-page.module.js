"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LandingPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var landing_page_component_1 = require("./landing-page.component");
var angular_material_module_1 = require("../../shared/angular-material.module");
var billboard_module_1 = require("./billboard/billboard.module");
var router_1 = require("@angular/router");
var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, angular_material_module_1.AngularMaterialModule, billboard_module_1.BillboardModule, router_1.RouterModule],
            declarations: [landing_page_component_1.LandingPageComponent]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());
exports.LandingPageModule = LandingPageModule;
