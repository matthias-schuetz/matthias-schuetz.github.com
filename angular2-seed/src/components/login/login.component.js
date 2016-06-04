System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/auth.service', '../../directives/form-input-text/form-input-text.directive', '../../models/form/form-state.model', '../../models/auth/login-request.model'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, auth_service_1, form_input_text_directive_1, form_state_model_1, login_request_model_1;
    var LoginComponent;
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
            function (form_input_text_directive_1_1) {
                form_input_text_directive_1 = form_input_text_directive_1_1;
            },
            function (form_state_model_1_1) {
                form_state_model_1 = form_state_model_1_1;
            },
            function (login_request_model_1_1) {
                login_request_model_1 = login_request_model_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_formBuilder, _router, _authService) {
                    var _this = this;
                    this._formBuilder = _formBuilder;
                    this._router = _router;
                    this._authService = _authService;
                    this.formState = new form_state_model_1.FormStateModel();
                    this.loginForm = this._formBuilder.group({
                        'username': ['', common_1.Validators.required],
                        'password': ['', common_1.Validators.required]
                    });
                    this.loginForm.valueChanges.subscribe(function () {
                        _this.formState.submitError = false;
                    });
                }
                LoginComponent.prototype.onLoginFormSubmit = function () {
                    var _this = this;
                    this._loginRequest = new login_request_model_1.LoginRequestModel();
                    this._loginRequest.username = this.loginForm.value.username;
                    this._loginRequest.password = this.loginForm.value.password;
                    this.formState.submitting = true;
                    this.formState.submitError = false;
                    this._authService.login(this._loginRequest).subscribe(function () {
                        _this._router.navigate(['/dashboard']);
                    }, function (errorMessage) {
                        _this.formState.submitting = false;
                        _this.formState.submitError = true;
                        _this.formState.submitErrorMessage = errorMessage;
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'src/components/login/login.component.html',
                        providers: [auth_service_1.AuthService],
                        directives: [router_1.ROUTER_DIRECTIVES, form_input_text_directive_1.FormInputTextDirective],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, auth_service_1.AuthService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
