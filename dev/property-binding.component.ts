/**
 * Created by Lawrence on 3/14/16.
 */
import {Component, EventEmitter} from 'angular2/core'
import {Input} from "angular2/core";

@Component({
    selector: 'my-property-binding',
    template: `
            <h3>This is a child component</h3>
            <p>Hey {{name}}! and I'm {{age}} years old</p>
            <h4>My Hobbies are:</h4>
            <input type="text" (keyup)="onHobbiesChange(hobbies.value)" #hobbies>
    `,
    inputs: ['name:myName'],
    outputs: ['hobbiesChanged']
})
export class PropertyComponent {
    name = '';
    @Input('myAge') age = 20;
    hobbiesChanged = new EventEmitter<string>();

    onHobbiesChange(hobbies:string) {
        this.hobbiesChanged.emit(hobbies);
    }

}