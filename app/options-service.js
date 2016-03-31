"use strict";
var core_1 = require('angular2/core');
var externalOptions = require('./options.json');
var OptionsService = (function () {
    function OptionsService() {
        this.options = externalOptions;
    }
    OptionsService = __decorate([
        core_1.Injectable()
    ], OptionsService);
    return OptionsService;
}());
exports.OptionsService = OptionsService;
//# sourceMappingURL=options-service.js.map