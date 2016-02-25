var app;
(function (app) {
    var common;
    (function (common) {
        var TechItem = (function () {
            function TechItem(technology, positives) {
                this.technology = technology;
                this.positives = positives;
            }
            return TechItem;
        }());
        var TopContentController = (function () {
            function TopContentController(title, description) {
                this.title = title;
                this.description = description;
                this.importantItems = [];
                var self = this;
                self.title = "This is the Top Content :)";
                self.description = "This is a starter template to get a basic website up and running in node using typescript and angular. This template shows the basics of angular controllers, directives and most importantly linking all the pieces together";
                self.importantItems = [
                    new TechItem("angular", "great framework for single page apps (SPA's) using javascript"),
                    new TechItem("angular ui router", "change pages easily using state"),
                    new TechItem("typescript", "if you're used to C# then typescript is a great choice"),
                    new TechItem("responsive design", "no bootstrap here but it could easily be added for content"),
                    new TechItem("node", "simple node server using express"),
                    new TechItem("gulp", "create great workflows using gulp")];
            }
            TopContentController.$inject = [];
            return TopContentController;
        }());
        angular.module("responsive-starter")
            .controller("topContentController", TopContentController);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
