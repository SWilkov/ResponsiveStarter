/** ShrinkNav shrinks the top navigation bar when the user scrolls down from the top
 * css class used is shrink which reduces the height to 35px in this example
 * if your navbar is a different size to mine (50px) change the shrinkHeight attribute
 * eg your navigation holder is 100px
 * <nav shrink-nav shrink-height="100"/>
 * change shrink css height to whatever you need
 */
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
                    /** listens to the JQuery scroll event
                     *  checks height is over shrink-height attribute and shrinks
                     */
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
            //Factory method used to create new instance of ShrinkNav   
            ShrinkNav.factory = function () {
                var directive = function ($window) {
                    return new ShrinkNav($window);
                };
                directive.$inject = ["$window"];
                return directive;
            };
            return ShrinkNav;
        }());
        angular.module("common.directives")
            .directive("shrinkNav", ShrinkNav.factory());
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
