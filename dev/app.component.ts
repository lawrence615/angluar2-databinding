import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>{{ onTest()}}</p>
        <input type="text" value="{{name}}">
    `,
})
export class AppComponent {
    name = 'Lawrence';
    onTest(){
        return 1===1;
    }
}
