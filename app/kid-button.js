"use strict";
var core_1 = require('angular2/core');
var sound_service_1 = require('./sound-service');
var frame = require('ui/frame');
var KidButton = (function () {
    function KidButton(sound) {
        this.sound = sound;
        this.page = frame.topmost().currentPage;
    }
    KidButton.prototype.ngOnInit = function () {
    };
    KidButton.prototype.Tapped = function () {
        var image = this.page.getViewById('imgButton-' + this.KidOption.name);
        var txt = this.page.getViewById('txtLabel-' + this.KidOption.name);
        this.sound.playTTS(this.KidOption.value);
        image.animate({
            scale: { x: 1.2, y: 1.2 },
            duration: 10
        }).then(function () { return image.animate({ scale: { x: 0.7, y: 0.7 } }); })
            .then(function () { return image.animate({ scale: { x: 1, y: 1 } }); });
    };
    __decorate([
        core_1.Input('kid-option')
    ], KidButton.prototype, "KidOption", void 0);
    KidButton = __decorate([
        core_1.Component({
            selector: 'kid-button',
            template: "\n\t\t<StackLayout (tap)=\"buttonTapped\">\n\t\t\t<Label id=\"txtLabel-{{KidOption.name}}\" [text]=\"KidOption.name\"></Label>\n\t\t\t<Image id=\"imgButton-{{KidOption.name}}\" src=\"~/images/{{ KidOption != null ?  KidOption.image : 'person.jpg' }}\" (tap)=\"Tapped()\"></Image>\n\t\t</StackLayout>\n\t",
            styles: ["\n\t\tStackLayout{\n\t\t\twidth:25%;\n\t\t}\n\t\tImage{\n\t\t\tborder-radius:150;\n\t\t\tborder-width:2;\n\t\t\tborder-color:#ECEFF1;\n\t\t\twidth:80%;\n\t\t\tmargin:0 10% 50 10%;\n\t\t}\n\t\tLabel{\n\t\t\tfont-size:20;\n\t\t\thorizontal-align: center;\n\t\t\tcolor:#fff;\n\t\t\tmargin-top:10;\n\t\t}\n\t"],
            providers: [sound_service_1.SoundService]
        }),
        __param(0, core_1.Inject(sound_service_1.SoundService))
    ], KidButton);
    return KidButton;
}());
exports.KidButton = KidButton;
//# sourceMappingURL=kid-button.js.map