var app;
(function (app) {
    var common;
    (function (common) {
        var BottomContentController = (function () {
            function BottomContentController(title, description) {
                this.title = title;
                this.description = description;
                var self = this;
                self.title = "Bottom Content",
                    self.description = "The Bottom Content is here to show how to use angulars ui router to seperate an html page into segments with dedicated views and controllers";
            }
            BottomContentController.$inject = [];
            return BottomContentController;
        })();
        angular.module("responsive-starter")
            .controller("bottomContentController", BottomContentController);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
