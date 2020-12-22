"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var flex_layout_1 = require("@angular/flex-layout");
var auth_1 = require("@angular/fire/auth");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var angular_material_module_1 = require("./shared/angular-material.module");
var login_module_1 = require("./login/login.module");
var fire_1 = require("@angular/fire");
var environment_1 = require("src/environments/environment");
var layout_1 = require("@angular/cdk/layout");
var toolbar_1 = require("@angular/material/toolbar");
var button_1 = require("@angular/material/button");
var sidenav_1 = require("@angular/material/sidenav");
var icon_1 = require("@angular/material/icon");
var list_1 = require("@angular/material/list");
var landing_page_module_1 = require("./pages/landing-page/landing-page.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                page_not_found_component_1.PageNotFoundComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                auth_1.AngularFireAuthModule,
                angular_material_module_1.AngularMaterialModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
                flex_layout_1.FlexLayoutModule,
                login_module_1.LoginModule,
                landing_page_module_1.LandingPageModule,
                layout_1.LayoutModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                list_1.MatListModule,
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
