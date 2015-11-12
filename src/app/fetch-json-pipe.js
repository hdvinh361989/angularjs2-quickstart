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
var FetchJsonPipe = (function () {
    function FetchJsonPipe() {
    }
    FetchJsonPipe.prototype.transform = function (value, args) {
        var _this = this;
        if (!this.fetchPromise) {
            this.fetchPromise = window.fetch(value)
                .then(function (result) { return result.json(); })
                .then(function (json) {
                _this.fetchedValue = json;
            });
        }
        return this.fetchedValue;
    };
    FetchJsonPipe = __decorate([
        angular2_1.Pipe({
            name: 'fetch',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], FetchJsonPipe);
    return FetchJsonPipe;
})();
exports.FetchJsonPipe = FetchJsonPipe;
//# sourceMappingURL=fetch-json-pipe.js.map