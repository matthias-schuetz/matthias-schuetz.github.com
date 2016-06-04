System.register(['./components/home/home.component', './components/login/login.component', './components/dashboard/dashboard.component', './components/error/error.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_component_1, login_component_1, dashboard_component_1, error_component_1;
    var RouteDefinitions, PublicRoutes;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (error_component_1_1) {
                error_component_1 = error_component_1_1;
            }],
        execute: function() {
            exports_1("RouteDefinitions", RouteDefinitions = [
                {
                    path: '/',
                    component: home_component_1.HomeComponent,
                },
                {
                    path: '/login',
                    component: login_component_1.LoginComponent
                },
                {
                    path: '/dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: '/error',
                    component: error_component_1.ErrorComponent
                },
                {
                    path: '*',
                    component: error_component_1.ErrorComponent
                }
            ]);
            exports_1("PublicRoutes", PublicRoutes = [
                '',
                '/login',
                '/error'
            ]);
        }
    }
});
