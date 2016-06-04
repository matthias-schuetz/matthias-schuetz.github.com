System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FormStateModel;
    return {
        setters:[],
        execute: function() {
            FormStateModel = (function () {
                function FormStateModel() {
                    this.submitting = false;
                    this.submitError = false;
                }
                return FormStateModel;
            }());
            exports_1("FormStateModel", FormStateModel);
        }
    }
});
