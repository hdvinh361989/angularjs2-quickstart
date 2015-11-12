/**
 * Created by vinhhoang on 08/11/2015.
 */
import {Component, bootstrap} from 'angular2/angular2';
import {PowerBooster} from './power-booster';
import {HeroListComponent} from './display-fetched-data';

@Component({
    selector: 'my-app',
    template: `
    <power-booster></power-booster>

    <display-fetched-data></display-fetched-data>
    `,
    directives: [PowerBooster, HeroListComponent]
})
class AppComponent {
}

bootstrap(AppComponent);