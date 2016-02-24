var app;
(function (app) {
    var common;
    (function (common) {
        var ShrinkNav = (function () {
            function ShrinkNav($window) {
                var _this = this;
                this.$window = $window;
                this.restrict = "A";
                this.shrinkClassName = "shrink";
                this.link = function (scope, element, attrs) {
                    var height = scope.$eval(attrs.shrinkHeight);
                    var $element = angular.element(element);
                    angular.element(_this.$window).bind("scroll", function (event) {
                        if (_this.$window.pageYOffset > height) {
                            $element.addClass(_this.shrinkClassName);
                        }
                        else {
                            $element.removeClass(_this.shrinkClassName);
                        }
                    });
                };
                console.log("ShrinkNavDirective constructor");
                console.log($window);
            }
            ShrinkNav.factory = function () {
                var directive = function ($window) {
                    return new ShrinkNav($window);
                };
                directive.$inject = ["$window"];
                return directive;
            };
            return ShrinkNav;
        })();
        angular.module("common.directives")
            .directive("shrinkNav", ShrinkNav.factory());
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
