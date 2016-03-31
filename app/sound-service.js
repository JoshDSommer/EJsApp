"use strict";
var core_1 = require('angular2/core');
var SoundService = (function () {
    function SoundService() {
        this.tts = require("nativescript-texttospeech");
    }
    SoundService.prototype.playTTS = function (text) {
        this.tts.speak(text, true, 1.0, 1.0, 1.0);
    };
    SoundService = __decorate([
        core_1.Injectable()
    ], SoundService);
    return SoundService;
}());
exports.SoundService = SoundService;
//# sourceMappingURL=sound-service.js.map