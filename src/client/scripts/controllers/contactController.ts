module app.common{
    interface IContact{
        name:string;
        message:string;
        email:string;
        company:string;
    }
    
    interface IContactController{
        title:string;
        
        sendMessage(contact:IContact):void;
    }
    
    class ContactController implements IContactController{
        static $inject = [];
        
        constructor(public title:string){
            var self = this;
            
            self.title = "Contact Page";
        }
        
        sendMessage(contact:IContact) : void {
            //TODO send contact information to an email address
            //if using nodejs could use nodemailer
        }
    }
    
    angular.module("responsive-starter")
           .controller("contactController", ContactController);    
}