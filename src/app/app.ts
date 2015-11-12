/**
 * Created by vinhhoang on 08/11/2015.
 */
import {Component, bootstrap} from 'angular2/angular2';
import {HeroFormComponent} from './hero-form.component';

@Component({
    selector: 'my-app',
    template: `
    <hero-form></hero-form>
    `,
    directives: [HeroFormComponent]
})
class AppComponent {

}

bootstrap(AppComponent);