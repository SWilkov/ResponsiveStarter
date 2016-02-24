/** aboutController.ts */
var app;
(function (app) {
    var common;
    (function (common) {
        var AboutController = (function () {
            function AboutController(title, aboutMe) {
                this.title = title;
                this.aboutMe = aboutMe;
                var self = this;
                self.title = "about page";
                self.aboutMe = "A little bit about me....";
            }
            AboutController.$inject = [];
            return AboutController;
        })();
        angular.module("responsive-starter")
            .controller("aboutController", AboutController);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
