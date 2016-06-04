System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/auth.service', '../../pipes/is-route-active.pipe', '../../routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, auth_service_1, is_route_active_pipe_1, routes_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (is_route_active_pipe_1_1) {
                is_route_active_pipe_1 = is_route_active_pipe_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _location, _authService) {
                    var _this = this;
                    this._router = _router;
                    this._location = _location;
                    this._authService = _authService;
                    this.isUserAuthorized = false;
                    this._router.changes.subscribe(function () {
                        _this._currentRoute = _this._location.path();
                        _this._isPublicPage = routes_1.PublicRoutes.indexOf(_this._location.path()) !== -1;
                        _this.isUserAuthorized = _this._authService.isUserAuthorized();
                        if (!_this.isUserAuthorized && !_this._isPublicPage) {
                            _this._router.navigateByUrl('/login');
                        }
                        else if (_this.isUserAuthorized && (_this._currentRoute === '' || _this._currentRoute === 'login')) {
                            _this._router.navigateByUrl('/dashboard');
                        }
                    });
                }
                AppComponent.prototype.logout = function () {
                    this._authService.logout();
                    this._router.navigateByUrl('/');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'src/components/app/app.component.html',
                        styleUrls: ['styles/components/app.css'],
                        providers: [auth_service_1.AuthService],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [is_route_active_pipe_1.IsRouteActive]
                    }),
                    router_1.Routes(routes_1.RouteDefinitions), 
                    __metadata('design:paramtypes', [router_1.Router, common_1.Location, auth_service_1.AuthService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
