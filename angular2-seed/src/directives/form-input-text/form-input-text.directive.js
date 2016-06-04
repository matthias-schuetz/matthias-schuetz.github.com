System.register(['@angular/core', "@angular/common"], function(exports_1, context_1) {
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
    var core_1, common_1;
    var FormInputTextDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            FormInputTextDirective = (function () {
                function FormInputTextDirective() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], FormInputTextDirective.prototype, "inputId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], FormInputTextDirective.prototype, "inputType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', common_1.Control)
                ], FormInputTextDirective.prototype, "inputControl", void 0);
                FormInputTextDirective = __decorate([
                    core_1.Component({
                        selector: 'form-input-text',
                        templateUrl: 'src/directives/form-input-text/form-input-text.directive.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormInputTextDirective);
                return FormInputTextDirective;
            }());
            exports_1("FormInputTextDirective", FormInputTextDirective);
        }
    }
});
