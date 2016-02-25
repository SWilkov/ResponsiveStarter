/** NavigationController.ts
 * Need to load up mobile-nav (and close it) when hamburger menu is clicked
 * This controller takes care of that with variable hamburgerMenuActive on the
 * $rootScope.
 */
var app;
(function (app) {
    var common;
    (function (common) {
        var NavigationController = (function () {
            function NavigationController($rootScope) {
                this.$rootScope = $rootScope;
                //Set the hamburgerMenuActive to false on website startup
                $rootScope.hamburgerMenuActive = false;
            }
            /** opens and close mobile menu via hamburger button */
            NavigationController.prototype.hamburgerMenuClicked = function () {
                var self = this;
                if (self.$rootScope.hamburgerMenuActive) {
                    self.$rootScope.hamburgerMenuActive = false;
                }
                else {
                    self.$rootScope.hamburgerMenuActive = true;
                }
            };
            NavigationController.prototype.closeMobileMenu = function () {
                var self = this;
                self.$rootScope.hamburgerMenuActive = false;
            };
            NavigationController.$inject = ["$rootScope"];
            return NavigationController;
        }());
        angular.module("responsive-starter")
            .controller("navigationController", NavigationController);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
