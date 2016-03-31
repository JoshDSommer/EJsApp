"use strict";
var core_1 = require('angular2/core');
var frame = require('ui/frame');
var options_service_1 = require('./options-service');
var kid_button_1 = require('./kid-button');
var MainPage = (function () {
    function MainPage(options) {
        this.options = options;
        this.items = options.options;
    }
    MainPage.prototype.ngOnInit = function () {
        //get rid of the action bar.
        var page = frame.topmost().currentPage;
        page.actionBarHidden = true;
        // orientationModule.setCurrentOrientation("landscape", function() {
        // 	console.log("landscape orientation set");
        // });
    };
    MainPage = __decorate([
        core_1.Component({
            selector: 'main',
            template: "\n\t\t<StackLayout>\n\t\t\t<Label align=\"center\" text=\"EJs App!\"></Label>\n\t\t\t<ScrollView>\n\t\t\t<WrapLayout orientation=\"horizontal\" width=\"100%\">\n\t\t\t\t<kid-button [kid-option]=\"item\" *ngFor=\"#item of items\"></kid-button>\n\t\t\t</WrapLayout>\n\t\t\t</ScrollView>\n\t\t</StackLayout>\n\t",
            styles: ["\n\t\tLabel{\n\t\t\tfont-size: 45;\n\t\t\thorizontal-align: center;\n\t\t\tcolor:white;\n\t\t}\n\t\tStackLayout{\n\t\t\tbackground-color:blue;\n\t\t}\n\t"],
            directives: [kid_button_1.KidButton],
            providers: [options_service_1.OptionsService]
        }),
        __param(0, core_1.Inject(options_service_1.OptionsService))
    ], MainPage);
    return MainPage;
}());
exports.MainPage = MainPage;
//# sourceMappingURL=main-page.js.map