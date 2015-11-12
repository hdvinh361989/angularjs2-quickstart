var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by vinhhoang on 12/11/2015.
 */
var angular2_1 = require('angular2/angular2');
var exponential_strength_pipe_1 = require('./exponential-strength-pipe');
var PowerBooster = (function () {
    function PowerBooster() {
        this.power = 5;
        this.factor = 2;
    }
    PowerBooster = __decorate([
        angular2_1.Component({
            selector: 'power-booster',
            template: "\n    <h2>Power Booster</h2>\n    <div>\n        Normal power: <input [(ng-model)]=\"power\">\n    </div>\n    <div>\n        Boost factor: <input [(ng-model)]=\"factor\">\n    </div>\n    <p>\n        Super power boost: {{power | exponentialStrength: factor}}\n    </p>\n    <p>\n        {{test}}\n    </p>\n    ",
            pipes: [exponential_strength_pipe_1.ExponentialStrengthPipe],
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], PowerBooster);
    return PowerBooster;
})();
exports.PowerBooster = PowerBooster;
//# sourceMappingURL=power-booster.js.map