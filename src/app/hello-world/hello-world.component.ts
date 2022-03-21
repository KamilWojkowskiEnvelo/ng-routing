import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `<p>{{ 'hello-world works!' | upperCaseFirstLetter }}</p>`,
})
export class HelloWorldComponent {}
