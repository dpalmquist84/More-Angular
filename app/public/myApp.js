const app = angular.module("myApp", []);

app.directive("w3TestDirective", function() {
    return {
        template: "<h1>WHOSE THE DIRECTIVE NOW</h1>"
    }
})