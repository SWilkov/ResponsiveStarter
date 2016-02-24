module app.common{
    interface IShrinkNavAttributes extends ng.IAttributes{
        shrinkHeight:string;
    }
    
    class ShrinkNav implements ng.IDirective{
        restrict = "A";
        shrinkClassName: string = "shrink";
        
        constructor(private $window: ng.IWindowService){
            console.log("ShrinkNavDirective constructor");
            console.log($window);
        }
        
        link = 
            (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: IShrinkNavAttributes) =>
            {
                var height = scope.$eval(attrs.shrinkHeight);
                var $element = angular.element(element);
                 angular.element(this.$window).bind("scroll", 
                    (event: JQueryEventObject) => {
                        if(this.$window.pageYOffset > height){
                            $element.addClass(this.shrinkClassName);
                        } else {
                            $element.removeClass(this.shrinkClassName);
                        }  
                })                
            }
            
        static factory() : ng.IDirectiveFactory{
            const directive = ($window: ng.IWindowService) => 
                new ShrinkNav($window);
            directive.$inject = ["$window"];
            return directive;
        }
    }
    
    angular.module("common.directives")
           .directive("shrinkNav", ShrinkNav.factory());
}