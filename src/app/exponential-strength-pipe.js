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
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
 */
var ExponentialStrengthPipe = (function () {
    function ExponentialStrengthPipe() {
    }
    ExponentialStrengthPipe.prototype.transform = function (value, args) {
        return Math.pow(value, parseInt(args[0] || 1, 10));
    };
    ExponentialStrengthPipe = __decorate([
        angular2_1.Pipe({
            name: 'exponentialStrength'
        }), 
        __metadata('design:paramtypes', [])
    ], ExponentialStrengthPipe);
    return ExponentialStrengthPipe;
})();
exports.ExponentialStrengthPipe = ExponentialStrengthPipe;
//# sourceMappingURL=exponential-strength-pipe.js.map