/**
 * Created by vinhhoang on 12/11/2015.
 */
import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2'
import {ExponentialStrengthPipe} from './exponential-strength-pipe';

@Component({
    selector: 'power-booster',
    template: `
    <h2>Power Booster</h2>
    <div>
        Normal power: <input [(ng-model)]="power">
    </div>
    <div>
        Boost factor: <input [(ng-model)]="factor">
    </div>
    <p>
        Super power boost: {{power | exponentialStrength: factor}}
    </p>
    `,
    pipes: [ExponentialStrengthPipe],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class PowerBooster{
    power = 5;
    factor = 2;
}