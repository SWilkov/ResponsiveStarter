var app;
(function (app) {
    var common;
    (function (common) {
        var ContactController = (function () {
            function ContactController(title) {
                this.title = title;
                var self = this;
                self.title = "Contact Page";
            }
            ContactController.prototype.sendMessage = function (contact) {
                //TODO send contact information to an email address
                //if using nodejs could use nodemailer
            };
            ContactController.$inject = [];
            return ContactController;
        })();
        angular.module("responsive-starter")
            .controller("contactController", ContactController);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
