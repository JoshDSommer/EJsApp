"use strict";
var core_1 = require('angular2/core');
var sound_service_1 = require('./sound-service');
var KidButton = (function () {
    function KidButton(sound) {
        this.sound = sound;
    }
    KidButton.prototype.ngOnInit = function () {
    };
    KidButton.prototype.Tapped = function () {
        this.sound.playTTS(this.KidOption.value);
    };
    __decorate([
        core_1.Input('kid-option')
    ], KidButton.prototype, "KidOption", void 0);
    KidButton = __decorate([
        core_1.Component({
            selector: 'kid-button',
            template: "\n\t\t<StackLayout (tap)=\"buttonTapped\">\n\t\t\t<Label [text]=\"KidOption.name\"></Label>\n\t\t\t<Image src=\"~/images/{{ KidOption != null ?  KidOption.image : 'person.jpg' }}\" (tap)=\"Tapped()\"></Image>\n\t\t</StackLayout>\n\t",
            styles: ["\n\t\tStackLayout{\n\t\t\twidth:40%;\n\t\t\tmargin:0 5%;\n\t\t}\n\t\tImage{\n\t\t\tborder-radius:150;\n\t\t}\n\t\tLabel{\n\t\t\tfont-size:20;\n\t\t\thorizontal-align: center;\n\t\t}\n\t"],
            providers: [sound_service_1.SoundService]
        }),
        __param(0, core_1.Inject(sound_service_1.SoundService))
    ], KidButton);
    return KidButton;
}());
exports.KidButton = KidButton;
//# sourceMappingURL=kid-button.js.map