/**
 * Created by vinhhoang on 12/11/2015.
 */
/**
 * Created by vinhhoang on 12/11/2015.
 */
import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2'
import {FetchJsonPipe} from './fetch-json-pipe';

@Component({
    selector: 'display-fetched-data',
    template: `
    <h2>Display fetched data</h2>
    <div *ng-for="#hero of ('heroes.json' | fetch) ">
      {{hero.name}}
    </div>

    <p>Heroes as JSON:
    {{'heroes.json' | fetch | json}}
    </p>
    `,
    directives:[CORE_DIRECTIVES],
    pipes: [FetchJsonPipe]
})
export class HeroListComponent{

}