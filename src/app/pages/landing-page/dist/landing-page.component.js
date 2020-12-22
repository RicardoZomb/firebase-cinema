"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LandingPageComponent = void 0;
var core_1 = require("@angular/core");
var layout_1 = require("@angular/cdk/layout");
var operators_1 = require("rxjs/operators");
var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(breakpointServer, media) {
        this.breakpointServer = breakpointServer;
        this.media = media;
        this.isHandset$ = this.breakpointServer.observe(layout_1.Breakpoints.Handset)
            .pipe(operators_1.map(function (result) { return result.matches; }), operators_1.shareReplay());
        this.mobileQuery = media.matchMedia('(max-width: 731px)');
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.closeSidenav = function () {
        if (this.mobileQuery.matches !== false) {
            this.snav.close();
        }
    };
    LandingPageComponent.prototype.scrollHandler = function (event) {
        var height = window.scrollY;
        var el = document.getElementById('btn-returnToTop');
        height >= 500 ? el.className = 'show' : el.className = 'hide';
    };
    LandingPageComponent.prototype.scrollTop = function () {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    };
    __decorate([
        core_1.ViewChild('drawer', { static: true })
    ], LandingPageComponent.prototype, "snav");
    __decorate([
        core_1.HostListener('window: scroll', ['event'])
    ], LandingPageComponent.prototype, "scrollHandler");
    LandingPageComponent = __decorate([
        core_1.Component({
            selector: 'app-landing-page',
            templateUrl: './landing-page.component.html',
            styleUrls: ['./landing-page.component.scss']
        })
    ], LandingPageComponent);
    return LandingPageComponent;
}());
exports.LandingPageComponent = LandingPageComponent;
