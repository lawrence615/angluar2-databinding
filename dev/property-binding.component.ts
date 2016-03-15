/**
 * Created by Lawrence on 3/14/16.
 */
import {Component} from 'angular2/core'
import {Input} from "angular2/core";

@Component({
    selector: 'my-property-binding',
    template: `
            <h3>This is a child component</h3>
            <p>Hey {{name}}! and I'm {{age}} years old</p>
    `,
    inputs: ['name:myName']
})
export class PropertyComponent {
    name = '';
    @Input('myAge') age = 20;
}