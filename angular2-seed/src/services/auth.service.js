System.register(['@angular/core', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, Observable_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService() {
                    this._resetAuthData();
                }
                AuthService.prototype._authorizeUser = function (token) {
                    this._authData = {
                        token: token
                    };
                    sessionStorage.setItem('authData', JSON.stringify(this._authData));
                };
                AuthService.prototype._resetAuthData = function () {
                    this._authData = {
                        token: null
                    };
                };
                AuthService.prototype.isUserAuthorized = function () {
                    var isAuthorized = this._authData.token ? true : false;
                    if (!isAuthorized) {
                        this._sessionAuthData = JSON.parse(sessionStorage.getItem('authData'));
                        if (this._sessionAuthData && this._sessionAuthData.token) {
                            this._authorizeUser(this._sessionAuthData.token);
                            isAuthorized = true;
                        }
                    }
                    return isAuthorized;
                };
                AuthService.prototype.login = function (loginRequest) {
                    var _this = this;
                    return Observable_1.Observable.create(function (subscriber) {
                        if (loginRequest.username.toLowerCase() === 'user' && loginRequest.password === '123') {
                            _this._authorizeUser('json-web-token');
                            subscriber.next();
                            subscriber.complete();
                        }
                        else {
                            subscriber.error('Invalid username or password');
                        }
                    });
                };
                AuthService.prototype.logout = function () {
                    this._resetAuthData();
                    sessionStorage.removeItem('authData');
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
