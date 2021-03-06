/** app.ts
 *  main entry point for the app
 *  takes care of setting up $StateProvider for SPA navigation
 * */
var app;
(function (app) {
    var main = angular.module("responsive-starter", ["ui.router", "common.directives"]);
    main.config(stateConfig);
    stateConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    function stateConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
            url: "/",
            templateUrl: "/src/client/views/home.html",
            views: {
                "": { templateUrl: "/src/client/views/home.html" },
                "topContent@home": {
                    templateUrl: "/src/client/views/topContent.html",
                    controller: "topContentController as vm"
                },
                "bottomContent@home": {
                    templateUrl: "/src/client/views/bottomContent.html",
                    controller: "bottomContentController as vm"
                }
            }
        })
            .state("contact", {
            url: "/contact",
            views: {
                "": {
                    templateUrl: "/src/client/views/contact.html",
                    controller: "contactController as vm"
                }
            }
        })
            .state("about", {
            url: "/about",
            views: {
                "": {
                    templateUrl: "/src/client/views/about.html",
                    controller: "aboutController as vm"
                }
            }
        });
    }
})(app || (app = {}));
